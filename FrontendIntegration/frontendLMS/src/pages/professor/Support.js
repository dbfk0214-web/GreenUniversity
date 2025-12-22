// src/pages/professormanagement/ProfessorSupportDashboard.jsx
import React, { useState } from "react";
import { DashboardButton, SectionHeader } from "../../components/what";

/* =========================
   Modal Types (교수용)
========================= */
const modalTypes = {
  SUPPORT_REQUEST: "SUPPORT_REQUEST",
  REQUEST_STATUS: "REQUEST_STATUS",

  IT_SUPPORT: "IT_SUPPORT",
  FACILITY_SUPPORT: "FACILITY_SUPPORT",

  SUPPORT_NOTICE: "SUPPORT_NOTICE",
};

/* =========================
   Main Dashboard
========================= */
export default function ProfessorSupportDashboard() {
  const [activeModal, setActiveModal] = useState(null);
  const closeModal = () => setActiveModal(null);

  return (
    <div className="min-h-screen bg-slate-50 px-6 py-8">
      {/* ===== Header ===== */}
      <header className="mb-8 flex flex-col gap-2">
        <h1 className="text-2xl font-semibold text-slate-900">교수 지원</h1>
        <p className="text-sm text-slate-500">
          학사·행정·시스템 관련 지원을 요청하고 처리 현황을 확인합니다.
        </p>
      </header>

      <div className="grid gap-6 lg:grid-cols-3">
        {/* ===============================
            1. 지원 요청
        =============================== */}
        <section className="rounded-2xl bg-white p-5 shadow-sm ring-1 ring-slate-100">
          <SectionHeader
            tag="Request"
            tagColor="teal"
            title="지원 요청"
            description="필요한 지원을 요청합니다."
            badge="Request"
            badgeColor="teal"
          />

          <div className="space-y-3">
            <DashboardButton
              label="일반 지원 요청"
              description="학사·행정 관련 지원을 요청합니다."
              onClick={() => setActiveModal(modalTypes.SUPPORT_REQUEST)}
            />
            <DashboardButton
              label="IT 지원 요청"
              description="시스템 및 계정 관련 문의입니다."
              onClick={() => setActiveModal(modalTypes.IT_SUPPORT)}
            />
          </div>
        </section>

        {/* ===============================
            2. 시설 · 환경
        =============================== */}
        <section className="rounded-2xl bg-white p-5 shadow-sm ring-1 ring-slate-100">
          <SectionHeader
            tag="Facility"
            tagColor="lime"
            title="시설 · 환경"
            description="강의 환경 관련 지원을 요청합니다."
            badge="Facility"
            badgeColor="lime"
          />

          <div className="space-y-3">
            <DashboardButton
              label="시설 지원 요청"
              description="강의실·장비 관련 요청입니다."
              onClick={() => setActiveModal(modalTypes.FACILITY_SUPPORT)}
            />
            <DashboardButton
              label="요청 처리 현황"
              description="요청 처리 상태를 확인합니다."
              onClick={() => setActiveModal(modalTypes.REQUEST_STATUS)}
            />
          </div>
        </section>

        {/* ===============================
            3. 지원 공지
        =============================== */}
        <section className="rounded-2xl bg-white p-5 shadow-sm ring-1 ring-slate-100">
          <SectionHeader
            tag="Notice"
            tagColor="fuchsia"
            title="지원 공지"
            description="행정 및 시스템 공지를 확인합니다."
            badge="Notice"
            badgeColor="fuchsia"
          />

          <DashboardButton
            label="지원 공지"
            description="지원 관련 공지를 확인합니다."
            onClick={() => setActiveModal(modalTypes.SUPPORT_NOTICE)}
          />
        </section>
      </div>

      {/* ===== Common Modal ===== */}
      <DashboardModal activeModal={activeModal} onClose={closeModal} />
    </div>
  );
}

/* =========================
   Dashboard Modal
========================= */
function DashboardModal({ activeModal, onClose }) {
  if (!activeModal) return null;

  const { title, subtitle, hint, content } = renderModalContent(activeModal);

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

        <div className="rounded-xl border border-dashed border-slate-200 bg-slate-50 p-4">
          {content ? (
            content
          ) : (
            <>
              <p className="mb-2 text-xs font-medium text-slate-700">
                💬 학생 커뮤니티 영역
              </p>
              <p className="text-xs leading-relaxed text-slate-500">
                게시글 작성, 조회, 댓글 기능을 사용할 수 있습니다.
              </p>

              {hint && (
                <p className="mt-3 text-[11px] text-slate-500">
                  <span className="font-semibold">UI 힌트: </span>
                  {hint}
                </p>
              )}
            </>
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
   Modal Resolver (힌트 포함)
========================= */
function renderModalContent(activeModal) {
  switch (activeModal) {
    case modalTypes.SUPPORT_REQUEST:
      return {
        title: "일반 지원 요청",
        subtitle: "학사 및 행정 관련 지원 요청입니다.",
        hint: "요청 유형 선택 + 상세 사유 입력 폼 권장",
        content: "",
      };
    case modalTypes.IT_SUPPORT:
      return {
        title: "IT 지원 요청",
        subtitle: "시스템 및 계정 관련 문의입니다.",
        hint: "오류 유형 선택 + 스크린샷 첨부 UI 권장",
        content: "",
      };
    case modalTypes.FACILITY_SUPPORT:
      return {
        title: "시설 지원 요청",
        subtitle: "강의 환경 관련 요청입니다.",
        hint: "강의실 선택 + 장비 항목 체크 UI 권장",
        content: "",
      };
    case modalTypes.REQUEST_STATUS:
      return {
        title: "요청 처리 현황",
        subtitle: "지원 요청 처리 상태입니다.",
        hint: "대기 / 처리중 / 완료 상태 뱃지 테이블 권장",
        content: "",
      };
    case modalTypes.SUPPORT_NOTICE:
      return {
        title: "지원 공지",
        subtitle: "지원 관련 공지사항입니다.",
        hint: "중요 공지 상단 고정 + 카테고리 필터 권장",
        content: "",
      };
    default:
      return {
        title: "교수 지원",
        subtitle: "",
        hint: "",
        content: "",
      };
  }
}
