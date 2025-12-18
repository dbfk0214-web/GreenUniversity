// src/pages/studentmanagement/StudentSupportDashboard.jsx
import React, { useState } from "react";

/* =========================
   Modal Types (학생용)
========================= */
const modalTypes = {
  TUITION_STATUS: "TUITION_STATUS",
  TUITION_PAYMENT: "TUITION_PAYMENT",

  SCHOLARSHIP_LIST: "SCHOLARSHIP_LIST",
  SCHOLARSHIP_APPLY: "SCHOLARSHIP_APPLY",

  FINANCIAL_AID: "FINANCIAL_AID",
  SUPPORT_HISTORY: "SUPPORT_HISTORY",
};

/* =========================
   Main Dashboard
========================= */
export default function StudentSupportDashboard() {
  const [activeModal, setActiveModal] = useState(null);
  const closeModal = () => setActiveModal(null);

  return (
    <div className="min-h-screen bg-slate-50 px-6 py-8">
      {/* ===== 대분류 헤더 ===== */}
      <header className="mb-8 flex flex-col gap-2">
        <h1 className="text-2xl font-semibold text-slate-900">
          학생 지원 서비스
        </h1>
        <p className="text-sm text-slate-500">
          등록금, 장학금 및 각종 학생 지원 내역을 확인하고 신청합니다.
        </p>
      </header>

      {/* ===== 중분류 카드 영역 ===== */}
      <div className="grid gap-6 lg:grid-cols-3">
        {/* ===============================
            중분류 1: 등록금
        =============================== */}
        <section className="rounded-2xl bg-white p-5 shadow-sm ring-1 ring-slate-100">
          <SectionHeader
            tag="Tuition"
            tagColor="teal"
            title="등록금"
            description="등록금 고지 및 납부 내역을 확인합니다."
            badge="Payment"
            badgeColor="teal"
          />

          <div className="space-y-3">
            <DashboardButton
              label="등록금 고지서"
              description="학기별 등록금 고지 내역을 확인합니다."
              onClick={() => setActiveModal(modalTypes.TUITION_STATUS)}
            />
            <DashboardButton
              label="등록금 납부 현황"
              description="납부 여부 및 납부 내역을 확인합니다."
              onClick={() => setActiveModal(modalTypes.TUITION_PAYMENT)}
            />
          </div>
        </section>

        {/* ===============================
            중분류 2: 장학금
        =============================== */}
        <section className="rounded-2xl bg-white p-5 shadow-sm ring-1 ring-slate-100">
          <SectionHeader
            tag="Scholarship"
            tagColor="lime"
            title="장학금"
            description="장학금 정보 조회 및 신청을 진행합니다."
            badge="Aid"
            badgeColor="lime"
          />

          <div className="space-y-3">
            <DashboardButton
              label="장학금 안내"
              description="신청 가능한 장학금을 확인합니다."
              onClick={() => setActiveModal(modalTypes.SCHOLARSHIP_LIST)}
            />
            <DashboardButton
              label="장학금 신청"
              description="장학금을 신청합니다."
              onClick={() => setActiveModal(modalTypes.SCHOLARSHIP_APPLY)}
            />
          </div>
        </section>

        {/* ===============================
            중분류 3: 기타 지원
        =============================== */}
        <section className="rounded-2xl bg-white p-5 shadow-sm ring-1 ring-slate-100">
          <SectionHeader
            tag="Support"
            tagColor="fuchsia"
            title="기타 지원"
            description="기타 학생 지원 서비스를 확인합니다."
            badge="Service"
            badgeColor="fuchsia"
          />

          <div className="space-y-3">
            <DashboardButton
              label="학비 지원 · 감면"
              description="학비 지원 및 감면 제도를 확인합니다."
              onClick={() => setActiveModal(modalTypes.FINANCIAL_AID)}
            />
            <DashboardButton
              label="지원 내역 조회"
              description="신청한 지원 내역을 확인합니다."
              onClick={() => setActiveModal(modalTypes.SUPPORT_HISTORY)}
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
          View
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
            🎓 학생용 서비스 영역
          </p>
          <p className="leading-relaxed">
            본인 신청 및 조회만 가능하며 처리 권한은 없습니다.
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
    case modalTypes.TUITION_STATUS:
      return {
        title: "등록금 고지서",
        subtitle: "학기별 등록금 고지를 확인합니다.",
        hint: "PDF 고지서 다운로드 기능을 추천합니다.",
      };
    case modalTypes.TUITION_PAYMENT:
      return {
        title: "등록금 납부 현황",
        subtitle: "납부 내역을 확인합니다.",
        hint: "납부 완료/미납 상태 표시를 추천합니다.",
      };
    case modalTypes.SCHOLARSHIP_LIST:
      return {
        title: "장학금 안내",
        subtitle: "신청 가능한 장학금 목록입니다.",
        hint: "신청 가능 여부 필터를 추천합니다.",
      };
    case modalTypes.SCHOLARSHIP_APPLY:
      return {
        title: "장학금 신청",
        subtitle: "장학금을 신청합니다.",
        hint: "신청서 + 증빙 서류 첨부 UI를 추천합니다.",
      };
    case modalTypes.FINANCIAL_AID:
      return {
        title: "학비 지원 · 감면",
        subtitle: "학비 지원 제도를 확인합니다.",
        hint: "지원 조건 요약 카드 UI를 추천합니다.",
      };
    case modalTypes.SUPPORT_HISTORY:
      return {
        title: "지원 내역 조회",
        subtitle: "신청한 지원 내역을 확인합니다.",
        hint: "처리 상태 타임라인 UI를 추천합니다.",
      };
    default:
      return {
        title: "학생 지원",
        subtitle: "",
        hint: "",
      };
  }
}
