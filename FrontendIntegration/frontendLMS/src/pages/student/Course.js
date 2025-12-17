// src/pages/studentmanagement/CourseEnrollmentManagementDashboard.jsx
import React, { useState } from "react";

/* =========================
   Modal Types (소분류)
========================= */
const modalTypes = {
  COURSE_LIST: "COURSE_LIST",
  TIMETABLE: "TIMETABLE",
  ATTENDANCE: "ATTENDANCE",
  COURSE_EVALUATION: "COURSE_EVALUATION",
  COURSE_NOTICE: "COURSE_NOTICE",
};

/* =========================
   Main Dashboard
========================= */
export default function CourseEnrollmentManagementDashboard() {
  const [activeModal, setActiveModal] = useState(null);
  const closeModal = () => setActiveModal(null);

  return (
    <div className="min-h-screen bg-slate-50 px-6 py-8">
      {/* ===== 대분류 헤더 ===== */}
      <header className="mb-8 flex flex-col gap-2">
        <h1 className="text-2xl font-semibold text-slate-900">
          강의 · 수업 관리
        </h1>
        <p className="text-sm text-slate-500">
          수강 중인 강의, 시간표, 출결 및 강의 평가를 관리합니다.
        </p>
      </header>

      {/* ===== 중분류 카드 영역 ===== */}
      <div className="grid gap-6 lg:grid-cols-3">
        {/* ===============================
            중분류 1: 수강 강의
        =============================== */}
        <section className="rounded-2xl bg-white p-5 shadow-sm ring-1 ring-slate-100">
          <SectionHeader
            tag="My Courses"
            tagColor="teal"
            title="수강 강의 관리"
            description="현재 수강 중인 강의를 관리합니다."
            badge="Courses"
            badgeColor="teal"
          />

          <div className="space-y-3">
            <DashboardButton
              label="수강 강의 목록"
              description="현재 수강 중인 강의를 조회합니다."
              onClick={() => setActiveModal(modalTypes.COURSE_LIST)}
            />
            <DashboardButton
              label="강의 공지 확인"
              description="강의별 공지 사항을 확인합니다."
              onClick={() => setActiveModal(modalTypes.COURSE_NOTICE)}
            />
          </div>
        </section>

        {/* ===============================
            중분류 2: 시간표 · 출결
        =============================== */}
        <section className="rounded-2xl bg-white p-5 shadow-sm ring-1 ring-slate-100">
          <SectionHeader
            tag="Schedule"
            tagColor="lime"
            title="시간표 · 출결"
            description="시간표와 출결 상태를 확인합니다."
            badge="Attendance"
            badgeColor="lime"
          />

          <div className="space-y-3">
            <DashboardButton
              label="시간표 조회"
              description="학기별 시간표를 확인합니다."
              onClick={() => setActiveModal(modalTypes.TIMETABLE)}
            />
            <DashboardButton
              label="출결 조회"
              description="강의별 출결 상태를 확인합니다."
              onClick={() => setActiveModal(modalTypes.ATTENDANCE)}
            />
          </div>
        </section>

        {/* ===============================
            중분류 3: 강의 평가
        =============================== */}
        <section className="rounded-2xl bg-white p-5 shadow-sm ring-1 ring-slate-100">
          <SectionHeader
            tag="Evaluation"
            tagColor="fuchsia"
            title="강의 평가"
            description="강의 평가 및 만족도를 관리합니다."
            badge="Feedback"
            badgeColor="fuchsia"
          />

          <div className="space-y-3">
            <DashboardButton
              label="강의 평가 참여"
              description="수강한 강의에 대한 평가를 진행합니다."
              onClick={() => setActiveModal(modalTypes.COURSE_EVALUATION)}
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
function SectionHeader({
  tag,
  tagColor,
  title,
  description,
  badge,
  badgeColor,
}) {
  const tagColorMap = {
    teal: "text-teal-500",
    lime: "text-lime-500",
    fuchsia: "text-fuchsia-500",
  };

  const badgeColorMap = {
    teal: "text-teal-500 bg-teal-50",
    lime: "text-lime-500 bg-lime-50",
    fuchsia: "text-fuchsia-500 bg-fuchsia-50",
  };

  return (
    <div className="mb-4 flex items-center justify-between">
      <div>
        <p
          className={`text-xs font-semibold uppercase tracking-wide ${tagColorMap[tagColor]}`}
        >
          {tag}
        </p>
        <h2 className="mt-1 text-lg font-semibold text-slate-900">{title}</h2>
        <p className="mt-1 text-xs text-slate-500">{description}</p>
      </div>
      <span
        className={`rounded-full px-3 py-1 text-xs font-medium ${badgeColorMap[badgeColor]}`}
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
      className="w-full rounded-xl border border-slate-200 bg-slate-50 px-4 py-3 text-left text-sm transition hover:border-slate-300 hover:bg-white hover:shadow-sm"
    >
      <div className="flex items-center justify-between">
        <span className="font-medium text-slate-800">{label}</span>
        <span className="text-[10px] uppercase tracking-wide text-slate-400">
          Open
        </span>
      </div>
      {description && (
        <p className="mt-1 text-xs leading-relaxed text-slate-500">
          {description}
        </p>
      )}
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
      <div className="w-full max-w-[80%] rounded-2xl bg-white p-6 shadow-xl ring-1 ring-slate-200">
        <div className="mb-4 flex items-start justify-between">
          <div>
            <h3 className="text-lg font-semibold text-slate-900">{title}</h3>
            {subtitle && (
              <p className="mt-1 text-xs text-slate-500">{subtitle}</p>
            )}
          </div>
          <button
            type="button"
            onClick={onClose}
            className="rounded-full p-1 text-slate-400 hover:bg-slate-100"
          >
            ✕
          </button>
        </div>

        <div className="rounded-xl border border-dashed border-slate-200 bg-slate-50 p-4 text-xs text-slate-500">
          <p className="mb-2 font-medium text-slate-700">
            🔧 개발자용 placeholder 영역
          </p>
          <p className="leading-relaxed">
            실제 테이블, 출결 현황, 평가 폼 등을 이 영역에 배치하면 됩니다.
          </p>

          {hint && (
            <p className="mt-3 text-[11px]">
              <span className="font-semibold">UI 힌트: </span>
              {hint}
            </p>
          )}
        </div>

        <div className="mt-5 flex justify-end">
          <button
            type="button"
            onClick={onClose}
            className="rounded-lg border border-slate-200 px-3 py-1.5 text-xs"
          >
            닫기
          </button>
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
    case modalTypes.COURSE_LIST:
      return {
        title: "수강 강의 목록",
        subtitle: "현재 수강 중인 강의를 조회합니다.",
        hint: "강의명, 교수명, 학점, 수강 상태 컬럼 구성을 추천합니다.",
      };
    case modalTypes.COURSE_NOTICE:
      return {
        title: "강의 공지",
        subtitle: "강의별 공지 사항을 확인합니다.",
        hint: "공지 목록 + 중요 공지 강조 UI를 추천합니다.",
      };
    case modalTypes.TIMETABLE:
      return {
        title: "시간표 조회",
        subtitle: "학기별 시간표를 확인합니다.",
        hint: "요일/교시 기준 시간표 매트릭스를 추천합니다.",
      };
    case modalTypes.ATTENDANCE:
      return {
        title: "출결 조회",
        subtitle: "강의별 출결 상태를 확인합니다.",
        hint: "출석/지각/결석 누적 현황 표시를 추천합니다.",
      };
    case modalTypes.COURSE_EVALUATION:
      return {
        title: "강의 평가",
        subtitle: "강의 평가를 진행합니다.",
        hint: "별점 + 서술형 평가 UI 구성을 추천합니다.",
      };
    default:
      return {
        title: "강의 · 수업 관리",
        subtitle: "",
        hint: "",
      };
  }
}
