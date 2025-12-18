// src/pages/professormanagement/ProfessorExtracurricularDashboard.jsx
import React, { useState } from "react";

/* =========================
   Modal Types (교수용)
========================= */
const modalTypes = {
  MY_PROGRAMS: "MY_PROGRAMS",
  PROGRAM_INFO: "PROGRAM_INFO",

  PARTICIPANTS: "PARTICIPANTS",
  PARTICIPATION_CHECK: "PARTICIPATION_CHECK",

  PROGRAM_EVALUATION: "PROGRAM_EVALUATION",
  PROGRAM_NOTICE: "PROGRAM_NOTICE",
};

/* =========================
   Main Dashboard
========================= */
export default function ProfessorExtracurricularDashboard() {
  const [activeModal, setActiveModal] = useState(null);
  const closeModal = () => setActiveModal(null);

  return (
    <div className="min-h-screen bg-slate-50 px-6 py-8">
      {/* ===== 대분류 헤더 ===== */}
      <header className="mb-8 flex flex-col gap-2">
        <h1 className="text-2xl font-semibold text-slate-900">
          비교과 프로그램 운영
        </h1>
        <p className="text-sm text-slate-500">
          담당 비교과 프로그램의 운영 및 참여 학생을 관리합니다.
        </p>
      </header>

      {/* ===== 중분류 카드 영역 ===== */}
      <div className="grid gap-6 lg:grid-cols-3">
        {/* ===============================
            중분류 1: 프로그램 조회
        =============================== */}
        <section className="rounded-2xl bg-white p-5 shadow-sm ring-1 ring-slate-100">
          <SectionHeader
            tag="Programs"
            tagColor="teal"
            title="프로그램 조회"
            description="담당 중인 비교과 프로그램을 확인합니다."
            badge="My Programs"
            badgeColor="teal"
          />

          <div className="space-y-3">
            <DashboardButton
              label="내 프로그램 목록"
              description="담당 비교과 프로그램을 조회합니다."
              onClick={() => setActiveModal(modalTypes.MY_PROGRAMS)}
            />
            <DashboardButton
              label="프로그램 정보"
              description="프로그램 상세 정보를 확인합니다."
              onClick={() => setActiveModal(modalTypes.PROGRAM_INFO)}
            />
          </div>
        </section>

        {/* ===============================
            중분류 2: 참여 관리
        =============================== */}
        <section className="rounded-2xl bg-white p-5 shadow-sm ring-1 ring-slate-100">
          <SectionHeader
            tag="Participants"
            tagColor="lime"
            title="참여 관리"
            description="참여 학생을 관리합니다."
            badge="Students"
            badgeColor="lime"
          />

          <div className="space-y-3">
            <DashboardButton
              label="참여 학생 명단"
              description="프로그램 참여 학생을 확인합니다."
              onClick={() => setActiveModal(modalTypes.PARTICIPANTS)}
            />
            <DashboardButton
              label="참여 · 이수 체크"
              description="출석 및 이수 여부를 관리합니다."
              onClick={() => setActiveModal(modalTypes.PARTICIPATION_CHECK)}
            />
          </div>
        </section>

        {/* ===============================
            중분류 3: 평가 · 공지
        =============================== */}
        <section className="rounded-2xl bg-white p-5 shadow-sm ring-1 ring-slate-100">
          <SectionHeader
            tag="Evaluation"
            tagColor="fuchsia"
            title="평가 · 공지"
            description="프로그램 평가 및 공지를 관리합니다."
            badge="Operate"
            badgeColor="fuchsia"
          />

          <div className="space-y-3">
            <DashboardButton
              label="참여 평가"
              description="참여 학생 평가를 진행합니다."
              onClick={() => setActiveModal(modalTypes.PROGRAM_EVALUATION)}
            />
            <DashboardButton
              label="프로그램 공지"
              description="참여 학생에게 공지를 전달합니다."
              onClick={() => setActiveModal(modalTypes.PROGRAM_NOTICE)}
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
            🎯 교수용 비교과 운영 영역
          </p>
          <p className="leading-relaxed">
            행정 처리는 불가하며 운영 및 평가만 가능합니다.
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
    case modalTypes.MY_PROGRAMS:
      return {
        title: "내 프로그램 목록",
        subtitle: "담당 비교과 프로그램을 확인합니다.",
        hint: "학기별 / 상태별 필터를 추천합니다.",
      };
    case modalTypes.PROGRAM_INFO:
      return {
        title: "프로그램 정보",
        subtitle: "프로그램 상세 정보입니다.",
        hint: "기간 · 장소 · 운영 목표를 표시하세요.",
      };
    case modalTypes.PARTICIPANTS:
      return {
        title: "참여 학생 명단",
        subtitle: "프로그램 참여 학생입니다.",
        hint: "이름 · 학번 · 참여 상태 표시를 추천합니다.",
      };
    case modalTypes.PARTICIPATION_CHECK:
      return {
        title: "참여 · 이수 체크",
        subtitle: "출석 및 이수 여부를 관리합니다.",
        hint: "Pass / Fail 또는 출석률 기준을 추천합니다.",
      };
    case modalTypes.PROGRAM_EVALUATION:
      return {
        title: "참여 평가",
        subtitle: "학생 참여 평가를 진행합니다.",
        hint: "점수 또는 코멘트 기반 평가를 추천합니다.",
      };
    case modalTypes.PROGRAM_NOTICE:
      return {
        title: "프로그램 공지",
        subtitle: "참여 학생에게 공지를 전달합니다.",
        hint: "공지 예약 발행 기능을 고려하세요.",
      };
    default:
      return {
        title: "비교과 프로그램",
        subtitle: "",
        hint: "",
      };
  }
}
