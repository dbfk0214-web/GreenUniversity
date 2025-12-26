import React, { useState } from "react";

const CourseEnroll = () => {
  // ───────────────── 수강 가능 강의 더미 ─────────────────
  const [courses, setCourses] = useState([
    {
      id: 1,
      code: "CS301",
      name: "웹 프로그래밍",
      professor: "김교수",
      credit: 3,
      dayTime: "월 · 수 09:00 ~ 10:15",
      room: "IT관 301호",
      capacity: 45,
      enrolled: 42,
      status: "OPEN", // OPEN | FULL | ENROLLED
    },
    {
      id: 2,
      code: "CS205",
      name: "자료구조",
      professor: "이교수",
      credit: 3,
      dayTime: "화 · 목 13:00 ~ 14:15",
      room: "공학관 204호",
      capacity: 40,
      enrolled: 40,
      status: "FULL",
    },
    {
      id: 3,
      code: "CS410",
      name: "React 심화",
      professor: "박교수",
      credit: 3,
      dayTime: "금 10:00 ~ 12:50",
      room: "IT관 402호",
      capacity: 30,
      enrolled: 30,
      status: "ENROLLED",
    },
  ]);

  // ───────────────── 수강신청 / 취소 ─────────────────
  const handleEnroll = (id) => {
    setCourses((prev) =>
      prev.map((c) =>
        c.id === id
          ? { ...c, status: "ENROLLED", enrolled: c.enrolled + 1 }
          : c
      )
    );
    alert("수강 신청이 완료되었습니다. (더미)");
  };

  const handleCancel = (id) => {
    setCourses((prev) =>
      prev.map((c) =>
        c.id === id
          ? { ...c, status: "OPEN", enrolled: c.enrolled - 1 }
          : c
      )
    );
    alert("수강 신청이 취소되었습니다. (더미)");
  };

  // ───────────────── JSX ─────────────────
  return (
    <div className="space-y-4 text-[0.85rem]">
      {/* 안내 */}
      <div className="rounded-md border border-slate-200 bg-slate-50 px-3 py-2 text-slate-600">
        ※ 수강 가능 강의 목록입니다. 정원 초과 시 신청이 제한됩니다.
      </div>

      {/* 강의 목록 */}
      <div className="overflow-x-auto">
        <table className="min-w-full border-collapse">
          <thead>
            <tr className="border-b border-slate-200 bg-slate-50 text-left text-slate-600">
              <th className="px-2 py-2">과목</th>
              <th className="px-2 py-2">담당교수</th>
              <th className="px-2 py-2">학점</th>
              <th className="px-2 py-2">시간</th>
              <th className="px-2 py-2">정원</th>
              <th className="px-2 py-2 text-center">신청</th>
            </tr>
          </thead>
          <tbody>
            {courses.map((c, idx) => (
              <tr
                key={c.id}
                className={`border-b border-slate-100 ${
                  idx % 2 === 0 ? "bg-white" : "bg-slate-50/60"
                }`}
              >
                <td className="px-2 py-2 align-middle">
                  <p className="font-medium text-slate-800">{c.name}</p>
                  <p className="text-[0.7rem] text-slate-500">
                    {c.code} · {c.room}
                  </p>
                </td>
                <td className="px-2 py-2 align-middle text-slate-700">
                  {c.professor}
                </td>
                <td className="px-2 py-2 align-middle text-slate-700">
                  {c.credit}
                </td>
                <td className="px-2 py-2 align-middle text-slate-700">
                  {c.dayTime}
                </td>
                <td className="px-2 py-2 align-middle text-slate-700">
                  {c.enrolled} / {c.capacity}
                </td>
                <td className="px-2 py-2 text-center align-middle">
                  {c.status === "OPEN" && (
                    <button
                      onClick={() => handleEnroll(c.id)}
                      className="rounded-md bg-emerald-500 px-3 py-1 text-[0.75rem] font-medium text-white hover:bg-emerald-600"
                    >
                      신청
                    </button>
                  )}
                  {c.status === "FULL" && (
                    <span className="rounded-md bg-slate-200 px-3 py-1 text-[0.7rem] text-slate-500">
                      정원 마감
                    </span>
                  )}
                  {c.status === "ENROLLED" && (
                    <button
                      onClick={() => handleCancel(c.id)}
                      className="rounded-md bg-rose-500 px-3 py-1 text-[0.75rem] font-medium text-white hover:bg-rose-600"
                    >
                      취소
                    </button>
                  )}
                </td>
              </tr>
            ))}
            {courses.length === 0 && (
              <tr>
                <td
                  colSpan={6}
                  className="px-2 py-4 text-center text-slate-400"
                >
                  수강 가능한 강의가 없습니다.
                </td>
              </tr>
            )}
          </tbody>
        </table>
      </div>

      {/* 하단 요약 */}
      <p className="text-[0.75rem] text-slate-400">
        ※ 실제 서비스에서는 시간표 중복, 최대 학점 제한, 수강신청 기간 체크
        로직이 서버에서 검증됩니다.
      </p>
    </div>
  );
};

export default CourseEnroll;
