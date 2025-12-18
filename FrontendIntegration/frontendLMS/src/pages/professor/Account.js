// src/pages/professormanagement/ProfessorAccountSecurityDashboard.jsx
import React, { useState } from "react";

/* =========================
   Modal Types (교수용)
========================= */
const modalTypes = {
  MY_PROFILE: "MY_PROFILE",
  PASSWORD_CHANGE: "PASSWORD_CHANGE",

  LOGIN_HISTORY: "LOGIN_HISTORY",
  DEVICE_MANAGE: "DEVICE_MANAGE",

  NOTIFICATION_SETTING: "NOTIFICATION_SETTING",
  ACCOUNT_DEACTIVATE: "ACCOUNT_DEACTIVATE",
};

/* =========================
   Main Dashboard
========================= */
export default function ProfessorAccountSecurityDashboard() {
  const [activeModal, setActiveModal] = useState(null);
  const closeModal = () => setActiveModal(null);

  return (
    <div className="min-h-screen bg-slate-50 px-6 py-8">
      {/* ===== Header ===== */}
      <header className="mb-8 flex flex-col gap-2">
        <h1 className="text-2xl font-semibold text-slate-900">
          인증 · 계정 보안
        </h1>
        <p className="text-sm text-slate-500">
          교수 계정 정보 및 보안 설정을 관리합니다.
        </p>
      </header>

      <div className="grid gap-6 lg:grid-cols-3">
        {/* ===============================
            1. 계정 정보
        =============================== */}
        <section className="rounded-2xl bg-white p-5 shadow-sm ring-1 ring-slate-100">
          <SectionHeader
            tag="Account"
            tagColor="teal"
            title="계정 정보"
            description="내 기본 계정 정보를 확인합니다."
            badge="Profile"
            badgeColor="teal"
          />
          <div className="space-y-3">
            <DashboardButton
              label="내 정보 조회"
              description="이름, 교번, 소속 정보를 확인합니다."
              onClick={() => setActiveModal(modalTypes.MY_PROFILE)}
            />
            <DashboardButton
              label="비밀번호 변경"
              description="계정 비밀번호를 변경합니다."
              onClick={() => setActiveModal(modalTypes.PASSWORD_CHANGE)}
            />
          </div>
        </section>

        {/* ===============================
            2. 보안 설정
        =============================== */}
        <section className="rounded-2xl bg-white p-5 shadow-sm ring-1 ring-slate-100">
          <SectionHeader
            tag="Security"
            tagColor="lime"
            title="보안 설정"
            description="로그인 및 접속 보안을 관리합니다."
            badge="Security"
            badgeColor="lime"
          />
          <div className="space-y-3">
            <DashboardButton
              label="로그인 기록"
              description="최근 로그인 기록을 확인합니다."
              onClick={() => setActiveModal(modalTypes.LOGIN_HISTORY)}
            />
            <DashboardButton
              label="접속 기기 관리"
              description="로그인된 기기를 관리합니다."
              onClick={() => setActiveModal(modalTypes.DEVICE_MANAGE)}
            />
          </div>
        </section>

        {/* ===============================
            3. 알림 · 계정
        =============================== */}
        <section className="rounded-2xl bg-white p-5 shadow-sm ring-1 ring-slate-100">
          <SectionHeader
            tag="Settings"
            tagColor="fuchsia"
            title="알림 · 계정"
            description="알림 설정 및 계정 상태를 관리합니다."
            badge="Setting"
            badgeColor="fuchsia"
          />
          <div className="space-y-3">
            <DashboardButton
              label="알림 설정"
              description="학사·강의 관련 알림을 설정합니다."
              onClick={() => setActiveModal(modalTypes.NOTIFICATION_SETTING)}
            />
            <DashboardButton
              label="계정 비활성화"
              description="계정을 일시적으로 비활성화합니다."
              onClick={() => setActiveModal(modalTypes.ACCOUNT_DEACTIVATE)}
            />
          </div>
        </section>
      </div>

      {/* ===== Common Modal ===== */}
      <DashboardModal activeModal={activeModal} onClose={closeModal} />
    </div>
  );
}

/* =========================
   Common Components
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
            🔐 교수 계정 보안 영역
          </p>
          <p className="leading-relaxed">
            본인 계정 정보만 변경할 수 있습니다.
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
    case modalTypes.MY_PROFILE:
      return {
        title: "내 정보 조회",
        subtitle: "교수 계정 기본 정보를 확인합니다.",
        hint: "교번·소속은 수정 불가 처리하세요.",
      };
    case modalTypes.PASSWORD_CHANGE:
      return {
        title: "비밀번호 변경",
        subtitle: "계정 비밀번호를 변경합니다.",
        hint: "현재 비밀번호 검증 필수",
      };
    case modalTypes.LOGIN_HISTORY:
      return {
        title: "로그인 기록",
        subtitle: "최근 로그인 기록입니다.",
        hint: "IP / 접속 환경 표시를 추천합니다.",
      };
    case modalTypes.DEVICE_MANAGE:
      return {
        title: "접속 기기 관리",
        subtitle: "로그인된 기기를 관리합니다.",
        hint: "원격 로그아웃 기능을 고려하세요.",
      };
    case modalTypes.NOTIFICATION_SETTING:
      return {
        title: "알림 설정",
        subtitle: "강의 및 학사 알림을 설정합니다.",
        hint: "이메일 / 시스템 알림 토글 UI 추천",
      };
    case modalTypes.ACCOUNT_DEACTIVATE:
      return {
        title: "계정 비활성화",
        subtitle: "계정을 일시적으로 비활성화합니다.",
        hint: "비활성화 시 영향 안내 문구 필요",
      };
    default:
      return {
        title: "계정 보안",
        subtitle: "",
        hint: "",
      };
  }
}
