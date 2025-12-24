// src/pages/professormanagement/ProfessorAcademicDashboard.jsx
import React, { useState } from "react";

/* =========================
   Modal Types (교수용)
========================= */
const modalTypes = {
  MY_COURSES: "MY_COURSES",
  STUDENT_LIST: "STUDENT_LIST",
  COURSE_NOTICE: "COURSE_NOTICE",
};

/* =========================
   Main Dashboard
========================= */
export default function ProfessorAcademicDashboard() {
  const [activeModal, setActiveModal] = useState(null);
  const closeModal = () => setActiveModal(null);

  return (
    <div className="min-h-screen bg-slate-50 px-6 py-8">
      {/* ===== 대분류 헤더 ===== */}
      <header className="mb-8 flex flex-col gap-2">
        <h1 className="text-2xl font-semibold text-slate-900">
          수업 운영 관리
        </h1>
        <p className="text-sm text-slate-500">
          담당 강의 관리 및 강의 관련 공지를 운영합니다.
        </p>
      </header>

      {/* ===== 중분류 카드 ===== */}
      <div className="grid gap-6 lg:grid-cols-2">
        {/* ===============================
            중분류 1: 강의 관리
        =============================== */}
        <section className="rounded-2xl bg-white p-5 shadow-sm ring-1 ring-slate-100">
          <SectionHeader
            tag="Academic"
            tagColor="teal"
            title="담당 강의"
            description="이번 학기 담당 강의를 확인합니다."
            badge="Course"
            badgeColor="teal"
          />

          <div className="space-y-3">
            <DashboardButton
              label="담당 강의 조회"
              description="내가 강의 중인 과목 목록을 확인합니다."
              onClick={() => setActiveModal(modalTypes.MY_COURSES)}
            />
            <DashboardButton
              label="수강생 명단 조회"
              description="강의를 수강 중인 학생 명단을 확인합니다."
              onClick={() => setActiveModal(modalTypes.STUDENT_LIST)}
            />
          </div>
        </section>

        {/* ===============================
            중분류 2: 강의 공지
        =============================== */}
        <section className="rounded-2xl bg-white p-5 shadow-sm ring-1 ring-slate-100">
          <SectionHeader
            tag="Notice"
            tagColor="fuchsia"
            title="강의 공지 관리"
            description="강의 관련 공지를 등록합니다."
            badge="Manage"
            badgeColor="fuchsia"
          />

          <div className="space-y-3">
            <DashboardButton
              label="강의 공지 등록"
              description="휴강, 시험 일정 등의 공지를 등록합니다."
              onClick={() => setActiveModal(modalTypes.COURSE_NOTICE)}
            />
          </div>
        </section>
      </div>

      {/* ===== 공통 모달 ===== */}
      <DashboardModal activeModal={activeModal} onClose={closeModal} />
    </div>
  );
}

/* =========================
   Section Header
========================= */
function SectionHeader({ tag, tagColor, title, description, badge, badgeColor }) {
  const tagColorMap = {
    teal: "text-teal-500",
    fuchsia: "text-fuchsia-500",
  };

  const badgeColorMap = {
    teal: "text-teal-500 bg-teal-50",
    fuchsia: "text-fuchsia-500 bg-fuchsia-50",
  };

  return (
    <div className="mb-4 flex items-center justify-between">
      <div>
        <p className={`text-xs font-semibold uppercase ${tagColorMap[tagColor]}`}>
          {tag}
        </p>
        <h2 className="mt-1 text-lg font-semibold text-slate-900">{title}</h2>
        <p className="mt-1 text-xs text-slate-500">{description}</p>
      </div>
      <span
        className={`rounded-full px-3 py-1 text-xs ${badgeColorMap[badgeColor]}`}
      >
        {badge}
      </span>
    </div>
  );
}

/* =========================
   Dashboard Button
========================= */
function DashboardButton({ label, description, onClick }) {
  return (
    <button
      type="button"
      onClick={onClick}
      className="w-full rounded-xl border border-slate-200 bg-slate-50 px-4 py-3 text-left text-sm hover:bg-white hover:shadow-sm"
    >
      <div className="flex justify-between">
        <span className="font-medium text-slate-800">{label}</span>
        <span className="text-[10px] text-slate-400">Open</span>
      </div>
      <p className="mt-1 text-xs text-slate-500">{description}</p>
    </button>
  );
}

/* =========================
   Dashboard Modal
========================= */
function DashboardModal({ activeModal, onClose }) {
  if (!activeModal) return null;

  const { title, subtitle, hint } = renderModalContent(activeModal);

  return (
    <div className="fixed inset-0 z-40 flex items-center justify-center bg-black/25">
      <div className="w-full max-w-3xl rounded-2xl bg-white p-6 shadow-xl">
        <div className="mb-4 flex justify-between">
          <div>
            <h3 className="text-lg font-semibold">{title}</h3>
            <p className="text-xs text-slate-500">{subtitle}</p>
          </div>
          <button onClick={onClose}>✕</button>
        </div>

        <div className="rounded-xl border border-dashed p-4 text-xs text-slate-500">
          {hint}
        </div>
      </div>
    </div>
  );
}

/* =========================
   Modal Resolver
========================= */
function renderModalContent(activeModal) {
  switch (activeModal) {
    case modalTypes.MY_COURSES:
      return {
        title: "담당 강의 조회",
        subtitle: "CourseOffering",
        hint:
          "학기 기준 담당 강의 목록 + 강의 코드, 분반 표시를 추천합니다.",
      };

    case modalTypes.STUDENT_LIST:
      return {
        title: "수강생 명단 조회",
        subtitle: "Enrollment · User",
        hint:
          "학생 이름, 학번, 학과 정보 테이블 구성을 추천합니다.",
      };

    case modalTypes.COURSE_NOTICE:
      return {
        title: "강의 공지 등록",
        subtitle: "Notice",
        hint:
          "공지 제목, 내용 입력 + 파일 첨부 UI를 추천합니다.",
      };

    default:
      return {
        title: "수업 운영",
        subtitle: "",
        hint: "",
      };
  }
}
