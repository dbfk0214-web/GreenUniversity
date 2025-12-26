import React, { useEffect, useState, useMemo } from "react";
import TimeTableApi from "../../../api/TimeTableApi";

// --- 요일 변환 및 정렬 헬퍼 ---
const DAY_MAP = {
  MONDAY: "월",
  TUESDAY: "화",
  WEDNESDAY: "수",
  THURSDAY: "목",
  FRIDAY: "금",
  SATURDAY: "토",
  SUNDAY: "일",
};

const DAY_ORDER = {
  MONDAY: 1,
  TUESDAY: 2,
  WEDNESDAY: 3,
  THURSDAY: 4,
  FRIDAY: 5,
  SATURDAY: 6,
  SUNDAY: 7,
};

// --- 시간 → 교시 변환 (09:00 → 0교시, 10:00 → 1교시) ---
const timeToIndex = (time) => {
  if (!time) return -1;
  const hour = parseInt(time.substring(0, 2));
  return hour - 9; // 09:00부터 시작 (0교시 = 09:00)
};

// --- 전공별 배경색 ---
const getBgClassByMajor = (major) => {
  const majorColors = {
    컴퓨터공학: "bg-blue-100",
    소프트웨어: "bg-green-100",
    정보통신: "bg-purple-100",
    교양: "bg-yellow-100",
    종합설계: "bg-pink-100",
    자율학습: "bg-gray-100",
  };
  return majorColors[major] || "bg-sky-100";
};

export default function TimetableView({ onClose, role = "student" }) {
  const [timeTables, setTimeTables] = useState([]);
  const [loading, setLoading] = useState(true);
  const [selectedLecture, setSelectedLecture] = useState(null);
  const [viewMode, setViewMode] = useState("grid"); // 'grid' | 'list'

  // TODO: 실제 로그인한 유저 이메일로 변경
  const userEmail = "student@aaa.com";

  useEffect(() => {
    fetchMyTimeTables();
  }, []);

  // ✅ API 호출
  const fetchMyTimeTables = async () => {
    setLoading(true);
    try {
      const data = await TimeTableApi.config.funcs.findByKeyword(
        "my",
        userEmail
      );
      const sortedData = (Array.isArray(data) ? data : []).sort((a, b) => {
        const dayDiff =
          (DAY_ORDER[a.dayOfWeek] || 99) - (DAY_ORDER[b.dayOfWeek] || 99);
        if (dayDiff !== 0) return dayDiff;
        return (a.startTime || "").localeCompare(b.startTime || "");
      });
      setTimeTables(sortedData);
    } catch (error) {
      console.error("시간표 조회 실패:", error);
      setTimeTables([]);
    } finally {
      setLoading(false);
    }
  };

  // ✅ 그리드 변환 (API 데이터 → 요일×교시 매트릭스)
  const lectureGrid = useMemo(() => {
    const days = ["월", "화", "수", "목", "금"];
    const periods = 10; // 09:00 ~ 18:00 (10교시)

    // 초기화
    const grid = {};
    days.forEach((day) => {
      grid[day] = Array(periods).fill(null);
    });

    // 데이터 매핑
    timeTables.forEach((t) => {
      const day = DAY_MAP[t.dayOfWeek];
      const startIdx = timeToIndex(t.startTime);
      const endIdx = timeToIndex(t.endTime);

      if (day && startIdx >= 0 && startIdx < periods) {
        // 연강 처리 (startTime ~ endTime)
        const duration = endIdx - startIdx || 1;
        for (let i = 0; i < duration; i++) {
          if (startIdx + i < periods) {
            grid[day][startIdx + i] = {
              name: t.courseName,
              major: t.sectionName || "일반",
              professor: t.professorName || "미정",
              classroom: t.classroomName || "미정",
              startTime: t.startTime,
              endTime: t.endTime,
              isFirst: i === 0, // 첫 시간인지 (연강 표시용)
            };
          }
        }
      }
    });

    return grid;
  }, [timeTables]);

  // ✅ 통계
  const stats = useMemo(() => {
    const uniqueCourses = new Set(timeTables.map((t) => t.courseName)).size;
    return {
      totalClasses: timeTables.length,
      uniqueCourses,
    };
  }, [timeTables]);

  // ✅ 교시 라벨
  const periods = [
    "1교시 (09:00~10:00)",
    "2교시 (10:00~11:00)",
    "3교시 (11:00~12:00)",
    "4교시 (13:00~14:00)",
    "5교시 (14:00~15:00)",
    "6교시 (15:00~16:00)",
    "7교시 (16:00~17:00)",
    "8교시 (17:00~18:00)",
    "9교시 (18:00~19:00)",
    "10교시 (19:00~20:00)",
  ];

  const days = ["월", "화", "수", "목", "금"];

  return (
    <div className="relative w-full bg-slate-50 p-6 font-sans text-slate-800">
      {/* 🔴 모달 닫기 버튼 */}
      {onClose && (
        <button
          onClick={onClose}
          className="absolute right-4 top-4 rounded-full p-2 text-slate-400 hover:bg-slate-200 hover:text-slate-600 transition-colors z-10"
        >
          <svg
            className="h-6 w-6"
            fill="none"
            stroke="currentColor"
            viewBox="0 0 24 24"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth="2"
              d="M6 18L18 6M6 6l12 12"
            />
          </svg>
        </button>
      )}

      {/* 헤더 */}
      <header className="mb-6 flex flex-col gap-2">
        <h1 className="text-2xl font-bold text-slate-900">📚 내 시간표</h1>
        <p className="text-sm text-slate-500">
          수강 신청된 과목의 강의 시간과 강의실을 확인합니다.
        </p>
      </header>

      {/* 요약 카드 */}
      <div className="mb-6 grid grid-cols-1 gap-4 sm:grid-cols-2">
        <div className="rounded-xl bg-white p-5 shadow-sm ring-1 ring-slate-900/5">
          <div className="text-sm text-slate-500">수강 과목 수</div>
          <div className="mt-1 text-2xl font-bold text-slate-900">
            {stats.uniqueCourses}개
          </div>
        </div>
        <div className="rounded-xl bg-white p-5 shadow-sm ring-1 ring-slate-900/5">
          <div className="text-sm text-slate-500">주간 수업 횟수</div>
          <div className="mt-1 text-2xl font-bold text-slate-900">
            {stats.totalClasses}회
          </div>
        </div>
      </div>

      {/* 보기 모드 전환 */}
      <div className="mb-4 flex justify-end gap-2">
        <button
          onClick={() => setViewMode("grid")}
          className={`px-4 py-2 rounded-lg text-sm font-medium ${
            viewMode === "grid"
              ? "bg-slate-900 text-white"
              : "bg-white text-slate-700 border"
          }`}
        >
          그리드 보기
        </button>
        <button
          onClick={() => setViewMode("list")}
          className={`px-4 py-2 rounded-lg text-sm font-medium ${
            viewMode === "list"
              ? "bg-slate-900 text-white"
              : "bg-white text-slate-700 border"
          }`}
        >
          목록 보기
        </button>
      </div>

      {loading ? (
        <div className="py-20 text-center text-slate-400">로딩 중...</div>
      ) : viewMode === "grid" ? (
        /* ========== 그리드 뷰 ========== */
        <div className="overflow-x-auto">
          <table className="min-w-[600px] w-full border-collapse border border-slate-300 text-center text-sm bg-white rounded-xl shadow-sm">
            <thead>
              <tr>
                <th className="border border-slate-300 px-3 py-3 bg-slate-100 font-semibold">
                  교시
                </th>
                {days.map((day) => (
                  <th
                    key={day}
                    className="border border-slate-300 px-3 py-3 bg-slate-100 font-semibold"
                  >
                    {day}
                  </th>
                ))}
              </tr>
            </thead>
            <tbody>
              {periods.map((period, idx) => (
                <tr key={idx}>
                  <td className="border px-3 py-3 bg-slate-50 font-medium text-xs whitespace-nowrap">
                    {period}
                  </td>
                  {days.map((day) => {
                    const lec = lectureGrid[day][idx];

                    if (!lec) {
                      return (
                        <td
                          key={day}
                          className="border px-3 py-3 cursor-pointer transition hover:bg-slate-100"
                        >
                          -
                        </td>
                      );
                    }

                    // 연강 표시 (첫 시간만 표시, 나머지는 빈 칸 or 화살표)
                    if (!lec.isFirst) {
                      return (
                        <td
                          key={day}
                          className={`border px-3 py-3 ${getBgClassByMajor(
                            lec.major
                          )} opacity-50`}
                        >
                          <div className="text-xs text-slate-500">▼</div>
                        </td>
                      );
                    }

                    const bgClass = getBgClassByMajor(lec.major);

                    return (
                      <td
                        key={day}
                        className={`border px-3 py-3 cursor-pointer transition ${bgClass} hover:brightness-95`}
                        onClick={() => setSelectedLecture(lec)}
                      >
                        <div className="font-semibold text-sm">{lec.name}</div>
                        <div className="text-xs text-slate-700">
                          {lec.major}
                        </div>
                      </td>
                    );
                  })}
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      ) : (
        /* ========== 목록 뷰 ========== */
        <div className="overflow-hidden rounded-xl border border-slate-200 bg-white shadow-sm">
          <table className="w-full text-left text-sm">
            <thead className="bg-slate-50 text-slate-500">
              <tr>
                <th className="px-6 py-3 font-medium">요일</th>
                <th className="px-6 py-3 font-medium">시간</th>
                <th className="px-6 py-3 font-medium">교과목명</th>
                <th className="px-6 py-3 font-medium">분반</th>
                <th className="px-6 py-3 font-medium">강의실</th>
              </tr>
            </thead>
            <tbody className="divide-y divide-slate-100">
              {timeTables.length > 0 ? (
                timeTables.map((t, idx) => (
                  <tr key={t.timetableId || idx} className="hover:bg-slate-50">
                    <td className="px-6 py-4">
                      <span className="inline-flex rounded-md px-2 py-1 text-xs font-bold bg-slate-100">
                        {DAY_MAP[t.dayOfWeek] || t.dayOfWeek}
                      </span>
                    </td>
                    <td className="px-6 py-4 font-medium text-slate-700">
                      {t.startTime?.substring(0, 5)} ~{" "}
                      {t.endTime?.substring(0, 5)}
                    </td>
                    <td className="px-6 py-4 font-medium text-slate-900">
                      {t.courseName}
                    </td>
                    <td className="px-6 py-4 text-slate-600">
                      {t.sectionName}
                    </td>
                    <td className="px-6 py-4 text-slate-600">
                      {t.classroomName || "미정"}
                    </td>
                  </tr>
                ))
              ) : (
                <tr>
                  <td colSpan="5" className="py-10 text-center text-slate-400">
                    시간표가 없습니다.
                  </td>
                </tr>
              )}
            </tbody>
          </table>
        </div>
      )}

      {/* 강의 상세 모달 */}
      {selectedLecture && (
        <div className="fixed inset-0 bg-black/50 flex items-center justify-center z-50">
          <div className="bg-white rounded-xl p-6 w-96 shadow-xl">
            <h2 className="text-xl font-bold mb-3">{selectedLecture.name}</h2>
            <div className="text-sm text-slate-700 space-y-2 mb-5">
              <p>
                <b>분반:</b> {selectedLecture.major}
              </p>
              <p>
                <b>교수:</b> {selectedLecture.professor}
              </p>
              <p>
                <b>강의실:</b> {selectedLecture.classroom}
              </p>
              <p>
                <b>시간:</b> {selectedLecture.startTime?.substring(0, 5)} ~{" "}
                {selectedLecture.endTime?.substring(0, 5)}
              </p>
            </div>
            <button
              onClick={() => setSelectedLecture(null)}
              className="w-full py-2 bg-slate-900 text-white rounded-lg hover:bg-slate-800 transition"
            >
              닫기
            </button>
          </div>
        </div>
      )}

      {/* 🔴 하단 닫기 버튼 */}
      {onClose && (
        <div className="mt-6 flex justify-end border-t border-slate-200 pt-4">
          <button
            onClick={onClose}
            className="rounded-lg bg-slate-800 px-6 py-2.5 text-sm font-semibold text-white hover:bg-slate-700 transition-all"
          >
            닫기
          </button>
        </div>
      )}
    </div>
  );
}
