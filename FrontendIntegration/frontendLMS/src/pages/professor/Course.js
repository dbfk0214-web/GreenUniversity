// src/pages/professormanagement/ProfessorCourseManagementDashboard.jsx
import React, { useState } from "react";
import CourseNoticeManagementComponent from "../../components/professor/CourseNoticeManagementComponent";
import ProfessorCourseMaterialManagementComponent from "../../components/professor/ProfessorCourseMaterialManagementComponent";

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
      {/* ===== Header ===== */}
      <header className="mb-8 flex flex-col gap-2">
        <h1 className="text-2xl font-semibold text-slate-900">강의 관리</h1>
        <p className="text-sm text-slate-500">
          담당 강의를 조회하고 강의 정보를 관리합니다.
        </p>
      </header>

      {/* ===== Cards ===== */}
      <div className="grid gap-6 lg:grid-cols-3">
        {/* 1. 강의 기본 */}
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

        {/* 2. 수강생 · 자료 */}
        <section className="rounded-2xl bg-white p-5 shadow-sm ring-1 ring-slate-100">
          <SectionHeader
            tag="Class"
            tagColor="lime"
            title="수강생 · 자료"
            description="수강생 및 강의 자료를 관리합니다."
            badge="Students"
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
              description="강의 자료를 업로드하고 관리합니다."
              onClick={() => setActiveModal(modalTypes.COURSE_MATERIALS)}
            />
          </div>
        </section>

        {/* 3. 강의 공지 */}
        <section className="rounded-2xl bg-white p-5 shadow-sm ring-1 ring-slate-100">
          <SectionHeader
            tag="Notice"
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

      {/* ===== Modal ===== */}
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
      <p className="mt-1 text-xs text-slate-500">{description}</p>
    </button>
  );
}

/* =========================
   Dashboard Modal (정상 구조)
========================= */
function DashboardModal({ activeModal, onClose }) {
  if (!activeModal) return null;

  const { title, subtitle, hint, content } =
    renderModalContent(activeModal);

  return (
    <div className="fixed inset-0 z-40 flex items-center justify-center bg-black/25">
      <div className="w-full max-w-[80%] rounded-2xl bg-white p-6 shadow-xl ring-1 ring-slate-200">
        {/* Header */}
        <div className="mb-4 flex items-start justify-between">
          <div>
            <h3 className="text-lg font-semibold text-slate-900">
              {title}
            </h3>
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

        {/* Content */}
        <div className="rounded-xl border border-dashed border-slate-200 bg-slate-50 p-4">
          {content ? (
            content
          ) : (
            <>
              <p className="mb-2 text-xs font-medium text-slate-700">
                📘 강의 관리 영역
              </p>
              <p className="text-xs leading-relaxed text-slate-500">
                선택한 강의에 대한 관리 기능이 이 영역에 표시됩니다.
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

        {/* Footer */}
        <div className="mt-5 flex justify-end gap-2">
          <button
            type="button"
            onClick={onClose}
            className="rounded-lg border border-slate-200 px-3 py-1.5 text-xs"
          >
            닫기
          </button>
          <button
            type="button"
            disabled
            className="rounded-lg bg-slate-900 px-3 py-1.5 text-xs font-medium text-white opacity-60"
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
    case modalTypes.MY_COURSES:
      return {
        title: "내 강의 목록",
        subtitle: "담당 중인 강의를 확인합니다.",
        hint: "학기별 강의 리스트 UI를 추천합니다.",
      };
    case modalTypes.COURSE_INFO:
      return {
        title: "강의 정보",
        subtitle: "강의 기본 정보를 확인합니다.",
        hint: "강의 개요 · 시간표 · 강의실 정보를 표시하세요.",
      };
    case modalTypes.COURSE_STUDENTS:
      return {
        title: "수강생 명단",
        subtitle: "강의 수강생 목록입니다.",
        hint: "이름 · 학번 · 출결/성적 이동 버튼 추천",
      };
    case modalTypes.COURSE_MATERIALS:
      return {
        title: "강의 자료 관리",
        subtitle: "강의 자료를 관리합니다.",
        hint: "자료 업로드 + 주차별 정렬 UI 추천",
        content:<ProfessorCourseMaterialManagementComponent/>
      };
    case modalTypes.COURSE_NOTICE:
      return {
        title: "강의 공지",
        subtitle: "강의별 공지를 작성합니다.",
        hint: "공지 예약 발행 기능 고려",
        content:<CourseNoticeManagementComponent/>
      };
    default:
      return { title: "강의 관리", subtitle: "", hint: "" };
  }
}
