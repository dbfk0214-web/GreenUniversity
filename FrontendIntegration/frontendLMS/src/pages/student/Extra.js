// src/pages/studentmanagement/ExtracurricularProgramsDashboard.jsx
import React, { useState } from "react";

/* =========================
   Modal Types (소분류)
========================= */
const modalTypes = {
  PROGRAM_MANAGE: "PROGRAM_MANAGE",
  APPLICATION_MANAGE: "APPLICATION_MANAGE",
  PARTICIPATION_STATUS: "PARTICIPATION_STATUS",

  PROGRAM_RESULT: "PROGRAM_RESULT",
  CERTIFICATE_ISSUE: "CERTIFICATE_ISSUE",

  POINT_MANAGE: "POINT_MANAGE",
  CATEGORY_MANAGE: "CATEGORY_MANAGE",
};

/* =========================
   Main Dashboard
========================= */
export default function ExtracurricularProgramsDashboard() {
  const [activeModal, setActiveModal] = useState(null);
  const closeModal = () => setActiveModal(null);

  return (
    <div className="min-h-screen bg-slate-50 px-6 py-8">
      {/* ===== 대분류 헤더 ===== */}
      <header className="mb-8 flex flex-col gap-2">
        <h1 className="text-2xl font-semibold text-slate-900">
          비교과 프로그램 관리
        </h1>
        <p className="text-sm text-slate-500">
          학생 비교과 프로그램 개설, 신청, 참여 및 성과를 관리합니다.
        </p>
      </header>

      {/* ===== 중분류 카드 영역 ===== */}
      <div className="grid gap-6 lg:grid-cols-3">
        {/* ===============================
            중분류 1: 프로그램 운영
        =============================== */}
        <section className="rounded-2xl bg-white p-5 shadow-sm ring-1 ring-slate-100">
          <SectionHeader
            tag="Programs"
            tagColor="teal"
            title="프로그램 운영"
            description="비교과 프로그램을 개설하고 관리합니다."
            badge="Program"
            badgeColor="teal"
          />

          <div className="space-y-3">
            <DashboardButton
              label="프로그램 관리"
              description="비교과 프로그램을 등록·수정·삭제합니다."
              onClick={() => setActiveModal(modalTypes.PROGRAM_MANAGE)}
            />
            <DashboardButton
              label="신청 관리"
              description="학생들의 프로그램 신청을 관리합니다."
              onClick={() => setActiveModal(modalTypes.APPLICATION_MANAGE)}
            />
            <DashboardButton
              label="참여 현황 관리"
              description="프로그램 참여 현황을 확인합니다."
              onClick={() => setActiveModal(modalTypes.PARTICIPATION_STATUS)}
            />
          </div>
        </section>

        {/* ===============================
            중분류 2: 성과 · 증빙
        =============================== */}
        <section className="rounded-2xl bg-white p-5 shadow-sm ring-1 ring-slate-100">
          <SectionHeader
            tag="Results"
            tagColor="lime"
            title="성과 · 증빙 관리"
            description="프로그램 성과 및 이수 증빙을 관리합니다."
            badge="Result"
            badgeColor="lime"
          />

          <div className="space-y-3">
            <DashboardButton
              label="프로그램 성과 관리"
              description="프로그램 참여 결과 및 평가를 관리합니다."
              onClick={() => setActiveModal(modalTypes.PROGRAM_RESULT)}
            />
            <DashboardButton
              label="이수증 발급"
              description="프로그램 이수증을 발급합니다."
              onClick={() => setActiveModal(modalTypes.CERTIFICATE_ISSUE)}
            />
          </div>
        </section>

        {/* ===============================
            중분류 3: 포인트 · 분류
        =============================== */}
        <section className="rounded-2xl bg-white p-5 shadow-sm ring-1 ring-slate-100">
          <SectionHeader
            tag="Points & Category"
            tagColor="fuchsia"
            title="포인트 · 분류 관리"
            description="비교과 포인트 및 프로그램 분류를 관리합니다."
            badge="Policy"
            badgeColor="fuchsia"
          />

          <div className="space-y-3">
            <DashboardButton
              label="비교과 포인트 관리"
              description="프로그램별 포인트를 관리합니다."
              onClick={() => setActiveModal(modalTypes.POINT_MANAGE)}
            />
            <DashboardButton
              label="프로그램 분류 관리"
              description="비교과 프로그램 분류 체계를 관리합니다."
              onClick={() => setActiveModal(modalTypes.CATEGORY_MANAGE)}
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
            실제 폼, 테이블, 검색 UI를 이 영역에 배치하면 됩니다.
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
    case modalTypes.PROGRAM_MANAGE:
      return {
        title: "프로그램 관리",
        subtitle: "비교과 프로그램을 관리합니다.",
        hint: "프로그램 기간, 정원, 담당 부서를 함께 표시하세요.",
      };
    case modalTypes.APPLICATION_MANAGE:
      return {
        title: "신청 관리",
        subtitle: "학생 신청 내역을 관리합니다.",
        hint: "신청 상태 필터(대기/승인/반려)를 추천합니다.",
      };
    case modalTypes.PARTICIPATION_STATUS:
      return {
        title: "참여 현황 관리",
        subtitle: "프로그램 참여 현황을 확인합니다.",
        hint: "출석률 및 완료 여부 표시를 추천합니다.",
      };
    case modalTypes.PROGRAM_RESULT:
      return {
        title: "프로그램 성과 관리",
        subtitle: "참여 결과 및 평가를 관리합니다.",
        hint: "성과 점수 및 피드백 입력 UI를 고려하세요.",
      };
    case modalTypes.CERTIFICATE_ISSUE:
      return {
        title: "이수증 발급",
        subtitle: "프로그램 이수증을 발급합니다.",
        hint: "PDF 다운로드 및 발급 이력 테이블을 추천합니다.",
      };
    case modalTypes.POINT_MANAGE:
      return {
        title: "비교과 포인트 관리",
        subtitle: "프로그램 포인트를 관리합니다.",
        hint: "자동 누적 및 수동 조정 기능을 고려하세요.",
      };
    case modalTypes.CATEGORY_MANAGE:
      return {
        title: "프로그램 분류 관리",
        subtitle: "비교과 분류 체계를 관리합니다.",
        hint: "대분류/중분류 트리 구조 UI를 추천합니다.",
      };
    default:
      return {
        title: "비교과 프로그램",
        subtitle: "",
        hint: "",
      };
  }
}
