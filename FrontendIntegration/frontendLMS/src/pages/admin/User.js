// src/pages/adminmanagement/AdminUserBaseDashboard.jsx
import React, { useState } from "react";
import DepartmentManage from "../../components/features/user/DepartmentManage";
import UserManage from "../../components/features/user/UserManage";
import UserCreate from "../../components/features/user/UserCreate";
import PasswordManage from "../../components/features/user/PasswordManage";
import StudentStatusApproval from "../../components/features/user/StudentStatusApproval";

/* =========================
   Modal Types (관리자용)
========================= */
const modalTypes = {
  DEPARTMENT_MANAGE: "DEPARTMENT_MANAGE",

  USER_CREATE: "USER_CREATE",
  USER_MANAGE: "USER_MANAGE",
  PASSWORD_RESET: "PASSWORD_RESET",

  STATUS_APPROVAL: "STATUS_APPROVAL",
};

/* =========================
   Main Dashboard
========================= */
export default function AdminUserBaseDashboard() {
  const [activeModal, setActiveModal] = useState(null);
  const closeModal = () => setActiveModal(null);

  return (
    <div className="min-h-screen bg-slate-50 px-6 py-8">
      {/* ===== 대분류 헤더 ===== */}
      <header className="mb-8 flex flex-col gap-2">
        <h1 className="text-2xl font-semibold text-slate-900">
          기초 정보 및 사용자 관리
        </h1>
        <p className="text-sm text-slate-500">
          학과, 사용자 계정 및 학적 변동을 관리합니다.
        </p>
      </header>

      {/* ===== 중분류 카드 ===== */}
      <div className="grid gap-6 lg:grid-cols-3">
        {/* ===============================
            중분류 1: 학과 관리
        =============================== */}
        <section className="rounded-2xl bg-white p-5 shadow-sm ring-1 ring-slate-100">
          <SectionHeader
            tag="Department"
            tagColor="teal"
            title="학과 관리"
            description="학과 정보를 생성 및 수정합니다."
            badge="Base"
            badgeColor="teal"
          />

          <DashboardButton
            label="학과 관리"
            description="학과 생성 및 정보 수정을 진행합니다."
            onClick={() => setActiveModal(modalTypes.DEPARTMENT_MANAGE)}
          />
        </section>

        {/* ===============================
            중분류 2: 사용자 관리
        =============================== */}
        <section className="rounded-2xl bg-white p-5 shadow-sm ring-1 ring-slate-100">
          <SectionHeader
            tag="User"
            tagColor="fuchsia"
            title="사용자 관리"
            description="교수 및 학생 계정을 관리합니다."
            badge="Account"
            badgeColor="fuchsia"
          />

          <div className="space-y-3">
            <DashboardButton
              label="계정 생성"
              description="교수/학생 계정을 생성합니다."
              onClick={() => setActiveModal(modalTypes.USER_CREATE)}
            />
            <DashboardButton
              label="계정 정보 관리"
              description="사용자 정보를 수정합니다."
              onClick={() => setActiveModal(modalTypes.USER_MANAGE)}
            />
            <DashboardButton
              label="비밀번호 초기화"
              description="사용자 비밀번호를 초기화합니다."
              onClick={() => setActiveModal(modalTypes.PASSWORD_RESET)}
            />
          </div>
        </section>

        {/* ===============================
            중분류 3: 학적 변동 승인
        =============================== */}
        <section className="rounded-2xl bg-white p-5 shadow-sm ring-1 ring-slate-100">
          <SectionHeader
            tag="Academic Status"
            tagColor="amber"
            title="학적 변동 승인"
            description="휴학 및 복학 신청을 승인 처리합니다."
            badge="Approve"
            badgeColor="amber"
          />

          <DashboardButton
            label="학적 변동 승인"
            description="학생 휴학/복학 신청을 승인 또는 반려합니다."
            onClick={() => setActiveModal(modalTypes.STATUS_APPROVAL)}
          />
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
    fuchsia: "text-fuchsia-500",
    amber: "text-amber-500",
  };

  const badgeColorMap = {
    teal: "text-teal-500 bg-teal-50",
    fuchsia: "text-fuchsia-500 bg-fuchsia-50",
    amber: "text-amber-500 bg-amber-50",
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
    case modalTypes.DEPARTMENT_MANAGE:
      return {
        title: "학과 관리",
        subtitle: "Department",
        // hint: "학과 코드, 학과명, 소속 단과대 입력 UI를 추천합니다.",
        hint: <DepartmentManage />,
      };

    case modalTypes.USER_CREATE:
      return {
        title: "계정 생성",
        subtitle: "User",
        // hint: "역할(교수/학생) 선택 + 기본 정보 입력 UI를 추천합니다.",
        hint: <UserCreate />,
      };

    case modalTypes.USER_MANAGE:
      return {
        title: "계정 정보 관리",
        subtitle: "User",
        // hint: "계정 활성/비활성 및 정보 수정 UI를 추천합니다.",
        hint: <UserManage />,
      };

    case modalTypes.PASSWORD_RESET:
      return {
        title: "비밀번호 초기화",
        subtitle: "User",
        // hint: "임시 비밀번호 발급 및 안내 처리 UI를 추천합니다.",
        hint: <PasswordManage />,
      };

    case modalTypes.STATUS_APPROVAL:
      return {
        title: "학적 변동 승인",
        subtitle: "StudentStatusHistory",
        // hint: "휴학/복학 신청 승인·반려 및 처리 상태 관리 UI를 추천합니다.",
        hint: <StudentStatusApproval />,
      };

    default:
      return {
        title: "기초 정보 및 사용자 관리",
        subtitle: "",
        hint: "",
      };
  }
}
