// src/pages/professormanagement/ProfessorAttendanceExamDashboard.jsx
import React, { useState } from "react";

/* =========================
   Modal Types (교수용)
========================= */
const modalTypes = {
  COURSE_SELECT: "COURSE_SELECT",

  ATTENDANCE_CHECK: "ATTENDANCE_CHECK",
  ATTENDANCE_STATUS: "ATTENDANCE_STATUS",

  EXAM_SCHEDULE: "EXAM_SCHEDULE",
  EXAM_NOTICE: "EXAM_NOTICE",
};

/* =========================
   Main Dashboard
========================= */
export default function ProfessorAttendanceExamDashboard() {
  const [activeModal, setActiveModal] = useState(null);
  const closeModal = () => setActiveModal(null);

  return (
    <div className="min-h-screen bg-slate-50 px-6 py-8">
      {/* ===== 대분류 헤더 ===== */}
      <header className="mb-8 flex flex-col gap-2">
        <h1 className="text-2xl font-semibold text-slate-900">
          출결 · 시험 관리
        </h1>
        <p className="text-sm text-slate-500">
          담당 강의의 출결 및 시험 일정을 관리합니다.
        </p>
      </header>

      {/* ===== 중분류 카드 영역 ===== */}
      <div className="grid gap-6 lg:grid-cols-3">
        {/* ===============================
            중분류 1: 강의 선택
        =============================== */}
        <section className="rounded-2xl bg-white p-5 shadow-sm ring-1 ring-slate-100">
          <SectionHeader
            tag="Course"
            tagColor="teal"
            title="강의 선택"
            description="출결을 관리할 강의를 선택합니다."
            badge="Step 1"
            badgeColor="teal"
          />

          <DashboardButton
            label="강의 선택"
            description="담당 강의를 선택합니다."
            onClick={() => setActiveModal(modalTypes.COURSE_SELECT)}
          />
        </section>

        {/* ===============================
            중분류 2: 출결 관리
        =============================== */}
        <section className="rounded-2xl bg-white p-5 shadow-sm ring-1 ring-slate-100">
          <SectionHeader
            tag="Attendance"
            tagColor="lime"
            title="출결 관리"
            description="학생 출결을 관리합니다."
            badge="Attendance"
            badgeColor="lime"
          />

          <div className="space-y-3">
            <DashboardButton
              label="출결 체크"
              description="출석 · 지각 · 결석을 체크합니다."
              onClick={() => setActiveModal(modalTypes.ATTENDANCE_CHECK)}
            />
            <DashboardButton
              label="출결 현황"
              description="출결 현황을 조회합니다."
              onClick={() => setActiveModal(modalTypes.ATTENDANCE_STATUS)}
            />
          </div>
        </section>

        {/* ===============================
            중분류 3: 시험 관리
        =============================== */}
        <section className="rounded-2xl bg-white p-5 shadow-sm ring-1 ring-slate-100">
          <SectionHeader
            tag="Exam"
            tagColor="fuchsia"
            title="시험 관리"
            description="시험 일정을 관리합니다."
            badge="Exam"
            badgeColor="fuchsia"
          />

          <div className="space-y-3">
            <DashboardButton
              label="시험 일정 등록"
              description="중간 · 기말 시험 일정을 등록합니다."
              onClick={() => setActiveModal(modalTypes.EXAM_SCHEDULE)}
            />
            <DashboardButton
              label="시험 공지"
              description="시험 관련 공지를 전달합니다."
              onClick={() => setActiveModal(modalTypes.EXAM_NOTICE)}
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
   공통 컴포넌트
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
      <p className="mt-1 text-xs leading-relaxed text-slate-500">
        {description}
      </p>
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
            ⏱ 교수 출결 · 시험 관리
          </p>
          <p className="leading-relaxed">
            출결 및 시험 정보는 학생에게 즉시 반영됩니다.
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
          <button
            type="button"
            className="rounded-lg bg-slate-900 px-3 py-1.5 text-xs font-medium text-white opacity-60"
            disabled
          >
            저장 (폼 연결 후 활성화)
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
    case modalTypes.COURSE_SELECT:
      return {
        title: "강의 선택",
        subtitle: "출결 및 시험을 관리할 강의를 선택합니다.",
        hint: "학기별 강의 리스트 UI를 추천합니다.",
      };
    case modalTypes.ATTENDANCE_CHECK:
      return {
        title: "출결 체크",
        subtitle: "학생 출결을 체크합니다.",
        hint: "출석 · 지각 · 결석 버튼 UI를 추천합니다.",
      };
    case modalTypes.ATTENDANCE_STATUS:
      return {
        title: "출결 현황",
        subtitle: "출결 현황을 조회합니다.",
        hint: "학생별 출결 통계 테이블을 추천합니다.",
      };
    case modalTypes.EXAM_SCHEDULE:
      return {
        title: "시험 일정 등록",
        subtitle: "시험 일정을 등록합니다.",
        hint: "날짜 · 시간 · 장소 입력 UI를 추천합니다.",
      };
    case modalTypes.EXAM_NOTICE:
      return {
        title: "시험 공지",
        subtitle: "시험 관련 공지를 전달합니다.",
        hint: "공지 예약 발행 기능을 고려하세요.",
      };
    default:
      return {
        title: "출결 · 시험 관리",
        subtitle: "",
        hint: "",
      };
  }
}
