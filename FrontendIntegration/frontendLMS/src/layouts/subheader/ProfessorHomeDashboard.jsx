// src/pages/professor/ProfessorHomeDashboard.jsx
import React from "react";
import ProfessorAcademicSummary from "../../components/professor/ProfessorAcademicSummary";
import ProfessorCourseClassSummary from "../../components/professor/ProfessorCourseClassSummary";
import ProfessorGradeLmsSummary from "../../components/professor/ProfessorGradeLmsSummary";
import ProfessorReviewSummary from "../../components/professor/ProfessorReviewSummary";

export default function ProfessorHomeDashboard() {
  return (
    <div className="p-6 space-y-6">
      <header>
        <h1 className="text-2xl font-semibold">교수 대시보드</h1>
        <p className="text-sm text-gray-500 mt-1">
          담당 강의 / 강의계획서 / 일정 요약
        </p>
      </header>

      <section className="grid grid-cols-1 md:grid-cols-3 gap-4">
        <ProfessorAcademicSummary />
        <ProfessorCourseClassSummary />
        <ProfessorGradeLmsSummary />
        <ProfessorReviewSummary />
      </section>
    </div>
  );
}
