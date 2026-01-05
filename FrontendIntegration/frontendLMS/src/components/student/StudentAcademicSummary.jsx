// src/components/student/StudentAcademicSummary.jsx
import React, { useEffect, useState } from "react";
import { useSelector } from "react-redux";
import EnrollmentApi from "../../api/EnrollmentApi";

const StudentAcademicSummary = () => {
  const user = useSelector((state) => state.loginSlice);
  const [enrollments, setEnrollments] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    if (user?.email) {
      EnrollmentApi.config?.funcs
        ?.findByKeywordHttp("myenroll", null, user.email, "get")
        .then((res) => {
          setEnrollments(Array.isArray(res) ? res : []);
        })
        .catch(console.error)
        .finally(() => setLoading(false));
    }
  }, [user?.email]);

  const totalCredits = enrollments.reduce((sum, e) => {
    return sum + (e.classSection?.courseOffering?.course?.credits || 0);
  }, 0);

  return (
    <div className="space-y-6">
      {/* 수강 현황 */}
      <div className="bg-white border border-gray-200 rounded-2xl p-5 hover:shadow-lg transition-shadow duration-300">
        <div className="flex items-center gap-2 mb-4">
          <span className="text-2xl">📚</span>
          <h2 className="font-bold text-gray-800">수강 현황</h2>
        </div>
        <div className="space-y-3">
          <div className="flex justify-between items-center bg-gradient-to-r from-blue-50 to-indigo-50 rounded-xl px-4 py-3 border border-blue-200">
            <span className="text-sm font-medium text-gray-700">수강 과목</span>
            <span className="font-bold text-lg text-blue-600">
              {enrollments.length}개
            </span>
          </div>
          <div className="flex justify-between items-center bg-gradient-to-r from-green-50 to-emerald-50 rounded-xl px-4 py-3 border border-green-200">
            <span className="text-sm font-medium text-gray-700">총 학점</span>
            <span className="font-bold text-lg text-green-600">
              {totalCredits}학점
            </span>
          </div>
        </div>
      </div>

      {/* 수강 과목 리스트 */}
      <div className="bg-white border border-gray-200 rounded-2xl p-5 hover:shadow-lg transition-shadow duration-300">
        <div className="flex items-center gap-2 mb-4">
          <span className="text-2xl">📖</span>
          <h2 className="font-bold text-gray-800">내 강의</h2>
        </div>
        <div className="space-y-2">
          {loading ? (
            <p className="text-xs text-gray-400 text-center py-4">
              불러오는 중...
            </p>
          ) : enrollments.length === 0 ? (
            <p className="text-xs text-gray-400 text-center py-4">
              수강 중인 강의가 없습니다
            </p>
          ) : (
            enrollments.slice(0, 4).map((e) => {
              const courseName =
                e.classSection?.courseOffering?.courseName ||
                e.classSection?.courseOffering?.course?.courseName ||
                "과목명 없음";
              const professorName =
                e.classSection?.courseOffering?.professor?.nickname ||
                "교수 미정";

              return (
                <div
                  key={e.enrollmentId}
                  className="text-xs text-gray-700 bg-gradient-to-r from-purple-50 to-pink-50 p-3 rounded-lg border border-purple-200"
                >
                  <div className="font-semibold">• {courseName}</div>
                  <div className="text-gray-500 mt-1">{professorName}</div>
                </div>
              );
            })
          )}
        </div>
      </div>

      {/* 이번 주 수업 */}
      <div className="bg-white border border-gray-200 rounded-2xl p-5 hover:shadow-lg transition-shadow duration-300">
        <div className="flex items-center gap-2 mb-4">
          <span className="text-2xl">📅</span>
          <h2 className="font-bold text-gray-800">이번 주 수업</h2>
        </div>
        <div className="space-y-2">
          {enrollments.slice(0, 3).map((e) => {
            const timetables = e.classSection?.timeTables || [];
            const today = new Date().getDay();
            const dayMap = {
              0: "SUNDAY",
              1: "MONDAY",
              2: "TUESDAY",
              3: "WEDNESDAY",
              4: "THURSDAY",
              5: "FRIDAY",
              6: "SATURDAY",
            };
            const todayClasses = timetables.filter(
              (t) => t.dayOfWeek === dayMap[today]
            );

            if (todayClasses.length === 0) return null;

            return todayClasses.map((tt, idx) => (
              <div
                key={`${e.enrollmentId}-${idx}`}
                className="text-xs text-gray-700 bg-gradient-to-r from-orange-50 to-yellow-50 p-3 rounded-lg border border-orange-200"
              >
                <div className="font-semibold">
                  •{" "}
                  {e.classSection?.courseOffering?.courseName || "과목명 없음"}
                </div>
                <div className="text-gray-500 mt-1">
                  {tt.startTime?.substring(0, 5)} ~{" "}
                  {tt.endTime?.substring(0, 5)}
                </div>
              </div>
            ));
          })}
          {enrollments.length === 0 && (
            <p className="text-xs text-gray-400 text-center py-4">
              오늘 수업이 없습니다
            </p>
          )}
        </div>
      </div>
    </div>
  );
};

export default StudentAcademicSummary;
