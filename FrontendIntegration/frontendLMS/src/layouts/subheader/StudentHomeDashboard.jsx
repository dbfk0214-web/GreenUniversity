// src/pages/student/StudentHomeDashboard.jsx
import React from "react";
import StudentAcademicSummary from "../../components/student/StudentAcademicSummary";
import StudentUserSummary from "../../components/student/StudentUserSummary";
import StudentGradeSummary from "../../components/student/StudentGradeSummary";
import StudentCommunitySummary from "../../components/student/StudentCommunitySummary";
import StudentFinanceSummary from "../../components/student/StudentFinanceSummary";

export default function StudentHomeDashboard() {
  const Summary = ({ title, value, icon, gradient }) => (
    <div
      className={`bg-gradient-to-br ${gradient} border-2 border-white rounded-2xl p-6 shadow-lg hover:shadow-xl transition-all duration-300 transform hover:-translate-y-1`}
    >
      <div className="flex items-center justify-between">
        <div>
          <p className="text-sm font-semibold text-gray-700 mb-1">{title}</p>
          <p className="text-4xl font-bold text-gray-900">{value}</p>
        </div>
        <span className="text-5xl opacity-20">{icon}</span>
      </div>
    </div>
  );

  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-50 via-purple-50 to-pink-50 p-6 space-y-8">
      {/* 헤더 */}
      <header className="bg-white rounded-2xl shadow-lg border border-gray-200 p-6">
        <div className="flex items-center gap-3">
          <div className="w-12 h-12 bg-gradient-to-br from-purple-500 to-pink-600 rounded-xl flex items-center justify-center">
            <span className="text-2xl">🎓</span>
          </div>
          <div>
            <h1 className="text-3xl font-bold bg-gradient-to-r from-purple-600 to-pink-600 bg-clip-text text-transparent">
              학생 대시보드
            </h1>
            <p className="text-sm text-gray-500 mt-1">
              수강 과목, 성적, 출석, 공지사항을 한눈에 확인하세요
            </p>
          </div>
        </div>
      </header>

      {/* 요약 카드 - 상단 3개 */}
      <section className="grid grid-cols-1 md:grid-cols-3 gap-6">
        <Summary
          title="수강 과목"
          value="6"
          icon="📚"
          gradient="from-blue-100 to-blue-200"
        />
        <Summary
          title="평균 학점"
          value="3.8"
          icon="📊"
          gradient="from-green-100 to-green-200"
        />
        <Summary
          title="출석률"
          value="95%"
          icon="✅"
          gradient="from-purple-100 to-purple-200"
        />
      </section>

      {/* 5열 레이아웃 */}
      <section className="grid grid-cols-1 xl:grid-cols-5 gap-6">
        {/* 1열: 학사 (수강 과목) */}
        <StudentAcademicSummary />

        {/* 2열: 사용자 (할 일, 프로필) */}
        <StudentUserSummary />

        {/* 3열: 성적 */}
        <StudentGradeSummary />

        {/* 4열: 커뮤니티 (공지사항) */}
        <StudentCommunitySummary />

        {/* 5열: 재무 (등록금) */}
        <StudentFinanceSummary />
      </section>
    </div>
  );
}
