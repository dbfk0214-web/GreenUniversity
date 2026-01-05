// src/pages/admin/dashboard/AdminHomeDashboard.jsx
import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import TermApi from "../../api/TermApi";
import CourseOfferingApi from "../../api/CourseOfferingApi";
import TimeTableApi from "../../api/TimeTableApi";
import AdminSummary from "../../components/admin/AdminSummary";
import AdminFinanceSummary from "../../components/admin/AdminFinanceSummary";

export default function AdminHomeDashboard() {
  const [terms, setTerms] = useState([]);
  const [courses, setCourses] = useState([]);
  const [timetables, setTimetables] = useState([]);

  useEffect(() => {
    TermApi.config.funcs.readAll().then(setTerms);
    CourseOfferingApi.config.funcs.readAll().then(setCourses);
    TimeTableApi.config.funcs.readAll().then(setTimetables);
  }, []);

  return (
    <div className="p-6 space-y-6">
      <header>
        <h1 className="text-2xl font-semibold">관리자 대시보드</h1>
        <p className="text-sm text-gray-500 mt-1">학사 운영 현황 요약</p>
      </header>

      {/* 요약 */}
      <section className="grid grid-cols-1 md:grid-cols-3 gap-4">
        <Summary title="학기" value={terms.length} />
        <Summary title="강의" value={courses.length} />
        <Summary title="시간표" value={timetables.length} />
      </section>

      {/* 4열 레이아웃 */}
      <section className="grid grid-cols-1 xl:grid-cols-4 gap-6">
        {/* 1열 : 세로 스택 */}
        <div className="space-y-6">
          <AdminSummary
            terms={terms}
            courses={courses}
            timetables={timetables}
          />
        </div>

        {/* 2열 : 등록금 요약 */}
        <AdminFinanceSummary />

        {/* 3열 */}
        <EmptyCol title="3열 영역" />

        {/* 4열 */}
        <EmptyCol title="4열 영역" />
      </section>
    </div>
  );
}

/* ---------- 공통 ---------- */
const Summary = ({ title, value }) => (
  <div className="bg-white border rounded-xl p-4">
    <p className="text-xs text-gray-500">{title}</p>
    <p className="text-2xl font-bold">{value}</p>
  </div>
);

/* ---------- 2열 : 등록금 요약 ---------- */
const EmptyCol = ({ title }) => (
  <div className="bg-gray-50 border-dashed border rounded-xl flex items-center justify-center text-sm text-gray-400">
    {title}
  </div>
);
