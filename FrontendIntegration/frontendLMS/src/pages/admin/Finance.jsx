// src/pages/adminmanagement/AdminFinanceDashboard.jsx
import React, { useState } from "react";
import TuitionManage from "../../components/features/finance/TuitionManage";
import { DashboardModal } from "../../components/common/DashboardModal";

/* =========================
   Modal Types (관리자용)
========================= */
const modalTypes = {
  TUITION_MANAGE: "TUITION_MANAGE",

  SCHOLARSHIP_TYPE: "SCHOLARSHIP_TYPE",
  SCHOLARSHIP_ASSIGN: "SCHOLARSHIP_ASSIGN",
};

/* =========================
   Main Dashboard
========================= */
export default function AdminFinanceDashboard() {
  const [activeModal, setActiveModal] = useState(null);
  const closeModal = () => setActiveModal(null);

  return (
    <div className="min-h-screen bg-slate-50 px-6 py-8">
      {/* ===== 대분류 헤더 ===== */}
      <header className="mb-8 flex flex-col gap-2">
        <h1 className="text-2xl font-semibold text-slate-900">재무 관리</h1>
        <p className="text-sm text-slate-500">등록금 지급을 관리합니다.</p>
      </header>

      {/* ===== 중분류 카드 ===== */}
      <div className="grid gap-6">
        {/* ===============================
            중분류 1: 등록금 관리
        =============================== */}
        <section className="rounded-2xl bg-white p-5 shadow-sm ring-1 ring-slate-100">
          <SectionHeader
            tag="Tuition"
            tagColor="teal"
            title="등록금 관리"
            description="학생별 등록금을 책정하고 고지합니다."
            badge="Finance"
            badgeColor="teal"
          />

          <DashboardButton
            label="등록금 책정 및 고지"
            description="학생/학기별 등록금을 고지합니다."
            onClick={() => setActiveModal(modalTypes.TUITION_MANAGE)}
          />
        </section>
      </div>

      {/* ===== 공통 모달 ===== */}
      {/* <DashboardModal activeModal={activeModal} onClose={closeModal} /> */}
      <DashboardModal
        activeModal={activeModal}
        onClose={closeModal}
        renderModalContent={renderModalContent}
      />
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
    fuchsia: "text-fuchsia-500",
  };

  const badgeColorMap = {
    teal: "text-teal-500 bg-teal-50",
    fuchsia: "text-fuchsia-500 bg-fuchsia-50",
  };

  return (
    <div className="mb-4 flex items-center justify-between">
      <div>
        <p
          className={`text-xs font-semibold uppercase ${tagColorMap[tagColor]}`}
        >
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
// function DashboardModal({ activeModal, onClose }) {
//   if (!activeModal) return null;

//   // ✅ 기존 로직 그대로 사용
//   const { title, subtitle, content } = renderModalContent(activeModal);

//   return (
//     <div className="fixed inset-0 z-40 flex items-center justify-center bg-black/25">
//       {/* 모달 컨테이너 (높이 제한) */}
//       <div className="w-full max-w-3xl max-h-[80vh] rounded-2xl bg-white p-6 shadow-xl overflow-hidden">
//         {/* 헤더 영역 (고정) */}
//         <div className="mb-4 flex items-start justify-between">
//           <div>
//             <h3 className="text-lg font-semibold">{title}</h3>
//             <p className="text-xs text-slate-500">{subtitle}</p>
//           </div>
//           <button
//             onClick={onClose}
//             className="p-2 text-slate-400 hover:text-slate-600"
//           >
//             ✕
//           </button>
//         </div>

//         {/* 콘텐츠 영역 (스크롤) */}
//         <div className="max-h-[60vh] overflow-y-auto rounded-xl border border-dashed p-4 text-xs text-slate-500">
//           {content}
//         </div>
//       </div>
//     </div>
//   );
// }

/* =========================
   Modal Resolver
========================= */
function renderModalContent(activeModal) {
  switch (activeModal) {
    case modalTypes.TUITION_MANAGE:
      return {
        title: "등록금 책정 및 고지",
        subtitle: "TuitionPayment",
        // hint: "학생/학기 선택 → 등록금 금액 입력 → 납부 상태(PAID/UNPAID) 관리 UI를 추천합니다.",
        content: <TuitionManage />,
      };
    default:
      return {
        title: "재무 관리",
        subtitle: "",
        hint: "",
      };
  }
}
