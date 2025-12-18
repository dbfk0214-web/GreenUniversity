// src/pages/professormanagement/ProfessorCourseManagementDashboard.jsx
import React, { useState } from "react";

/* =========================
   Modal Types (교수용)
========================= */
const modalTypes = {
  MY_COURSES: "MY_COURSES",
  COURSE_INFO: "COURSE_INFO",

  COURSE_STUDENTS: "COURSE_STUDENTS",
  COURSE_MATERIALS: "COURSE_MATERIALS",

  COURSE_NOTICE: "COURSE_NOTICE",
};

/* =========================
   Main Dashboard
========================= */
export default function ProfessorCourseManagementDashboard() {
  const [activeModal, setActiveModal] = useState(null);
  const closeModal = () => setActiveModal(null);

  return (
    <div className="min-h-screen bg-slate-50 px-6 py-8">
      {/* ===== 대분류 헤더 ===== */}
      <header className="mb-8 flex flex-col gap-2">
        <h1 className="text-2xl font-semibold text-slate-900">강의 관리</h1>
        <p className="text-sm text-slate-500">
          담당 강의를 조회하고 강의 정보를 관리합니다.
        </p>
      </header>

      {/* ===== 중분류 카드 영역 ===== */}
      <div className="grid gap-6 lg:grid-cols-3">
        {/* ===============================
            중분류 1: 강의 기본
        =============================== */}
        <section className="rounded-2xl bg-white p-5 shadow-sm ring-1 ring-slate-100">
          <SectionHeader
            tag="Courses"
            tagColor="teal"
            title="강의 기본"
            description="담당 강의를 확인합니다."
            badge="My Courses"
            badgeColor="teal"
          />

          <div className="space-y-3">
            <DashboardButton
              label="내 강의 목록"
              description="현재 담당 중인 강의를 확인합니다."
              onClick={() => setActiveModal(modalTypes.MY_COURSES)}
            />
            <DashboardButton
              label="강의 정보 조회"
              description="강의 기본 정보를 확인합니다."
              onClick={() => setActiveModal(modalTypes.COURSE_INFO)}
            />
          </div>
        </section>

        {/* ===============================
            중분류 2: 수강생 · 자료
        =============================== */}
        <section className="rounded-2xl bg-white p-5 shadow-sm ring-1 ring-slate-100">
          <SectionHeader
            tag="Students & Materials"
            tagColor="lime"
            title="수강생 · 자료"
            description="수강생 및 강의 자료를 관리합니다."
            badge="Class"
            badgeColor="lime"
          />

          <div className="space-y-3">
            <DashboardButton
              label="수강생 명단"
              description="강의 수강생을 확인합니다."
              onClick={() => setActiveModal(modalTypes.COURSE_STUDENTS)}
            />
            <DashboardButton
              label="강의 자료 관리"
              description="강의 자료를 업로드합니다."
              onClick={() => setActiveModal(modalTypes.COURSE_MATERIALS)}
            />
          </div>
        </section>

        {/* ===============================
            중분류 3: 공지
        =============================== */}
        <section className="rounded-2xl bg-white p-5 shadow-sm ring-1 ring-slate-100">
          <SectionHeader
            tag="Communication"
            tagColor="fuchsia"
            title="강의 공지"
            description="강의별 공지를 관리합니다."
            badge="Notice"
            badgeColor="fuchsia"
          />

          <div className="space-y-3">
            <DashboardButton
              label="강의 공지 관리"
              description="수강생에게 공지를 전달합니다."
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
   공통 컴포넌트들
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

function DashboardButton({ label, description, onClick }) {
  return (
    <button
      onClick={onClick}
      className="w-full rounded-xl border border-slate-200 bg-slate-50 px-4 py-3 text-left text-sm hover:bg-white hover:shadow-sm"
    >
      <div className="flex justify-between">
        <span className="font-medium">{label}</span>
        <span className="text-[10px] text-slate-400">Open</span>
      </div>
      <p className="mt-1 text-xs text-slate-500">{description}</p>
    </button>
  );
}

function DashboardModal({ activeModal, onClose }) {
  if (!activeModal) return null;
  const { title, hint } = renderModalContent(activeModal);

  return (
    <div className="fixed inset-0 z-40 flex items-center justify-center bg-black/25">
      <div className="w-full max-w-[80%] rounded-2xl bg-white p-6">
        <div className="mb-3 flex justify-between">
          <h3 className="text-lg font-semibold">{title}</h3>
          <button onClick={onClose}>✕</button>
        </div>
        <div className="rounded-xl border border-dashed p-4 text-xs text-slate-500">
          {hint}
        </div>
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
  );
}

/* =========================
   Modal Resolver
========================= */
function renderModalContent(activeModal) {
  switch (activeModal) {
    case modalTypes.MY_COURSES:
      return {
        title: "내 강의 목록",
        hint: "학기별 강의 리스트를 표시하세요.",
      };
    case modalTypes.COURSE_INFO:
      return {
        title: "강의 정보",
        hint: "강의 개요 및 시간표 정보를 표시하세요.",
      };
    case modalTypes.COURSE_STUDENTS:
      return {
        title: "수강생 명단",
        hint: "이름 / 학번 / 출결 링크 제공 추천",
      };
    case modalTypes.COURSE_MATERIALS:
      return { title: "강의 자료 관리", hint: "자료 업로드 및 파일 리스트" };
    case modalTypes.COURSE_NOTICE:
      return { title: "강의 공지", hint: "강의별 공지 작성 UI" };
    default:
      return { title: "강의 관리", hint: "" };
  }

  function renderModalContent(activeModal) {
    switch (activeModal) {
      case modalTypes.MY_COURSES:
        return {
          title: "내 강의 목록",
          subtitle: "담당 중인 강의를 확인합니다.",
          hint: "학기별 / 강의 상태 필터를 추천합니다.",
        };
      case modalTypes.COURSE_INFO:
        return {
          title: "강의 정보",
          subtitle: "강의 기본 정보를 확인합니다.",
          hint: "강의 개요, 강의 시간, 강의실 정보를 표시하세요.",
        };
      case modalTypes.COURSE_STUDENTS:
        return {
          title: "수강생 명단",
          subtitle: "강의 수강생 목록입니다.",
          hint: "이름 · 학번 · 출결/성적 이동 버튼을 추천합니다.",
        };
      case modalTypes.COURSE_MATERIALS:
        return {
          title: "강의 자료 관리",
          subtitle: "강의 자료를 관리합니다.",
          hint: "자료 업로드 + 주차별 정렬 UI를 추천합니다.",
        };
      case modalTypes.COURSE_NOTICE:
        return {
          title: "강의 공지",
          subtitle: "강의별 공지를 작성합니다.",
          hint: "공지 예약 발행 기능을 고려하세요.",
        };
      default:
        return {
          title: "강의 관리",
          subtitle: "",
          hint: "",
        };
    }
  }
}
