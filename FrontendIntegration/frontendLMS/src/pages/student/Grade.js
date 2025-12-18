// src/pages/studentmanagement/StudentGradesAcademicDashboard.jsx
import React, { useState } from "react";

/* =========================
   Modal Types (학생용)
========================= */
const modalTypes = {
  MY_GRADES: "MY_GRADES",
  COURSE_GRADES: "COURSE_GRADES",
  GPA_OVERVIEW: "GPA_OVERVIEW",

  ATTENDANCE_STATUS: "ATTENDANCE_STATUS",
  EXAM_SCHEDULE: "EXAM_SCHEDULE",

  ACADEMIC_WARNING: "ACADEMIC_WARNING",
  GRADE_APPEAL: "GRADE_APPEAL",
};

/* =========================
   Main Dashboard
========================= */
export default function StudentGradesAcademicDashboard() {
  const [activeModal, setActiveModal] = useState(null);
  const closeModal = () => setActiveModal(null);

  return (
    <div className="min-h-screen bg-slate-50 px-6 py-8">
      {/* ===== 대분류 헤더 ===== */}
      <header className="mb-8 flex flex-col gap-2">
        <h1 className="text-2xl font-semibold text-slate-900">
          성적 · 학사 조회
        </h1>
        <p className="text-sm text-slate-500">
          나의 성적, 출결, 시험 일정 및 학사 상태를 확인합니다.
        </p>
      </header>

      {/* ===== 중분류 카드 영역 ===== */}
      <div className="grid gap-6 lg:grid-cols-3">
        {/* ===============================
            중분류 1: 성적 조회
        =============================== */}
        <section className="rounded-2xl bg-white p-5 shadow-sm ring-1 ring-slate-100">
          <SectionHeader
            tag="Grades"
            tagColor="teal"
            title="성적 조회"
            description="나의 성적 및 평균 평점을 확인합니다."
            badge="My Grade"
            badgeColor="teal"
          />

          <div className="space-y-3">
            <DashboardButton
              label="전체 성적 조회"
              description="학기별 전체 성적을 확인합니다."
              onClick={() => setActiveModal(modalTypes.MY_GRADES)}
            />
            <DashboardButton
              label="과목별 성적"
              description="수강 과목별 성적을 확인합니다."
              onClick={() => setActiveModal(modalTypes.COURSE_GRADES)}
            />
            <DashboardButton
              label="평균 평점(GPA)"
              description="누적 및 학기별 GPA를 확인합니다."
              onClick={() => setActiveModal(modalTypes.GPA_OVERVIEW)}
            />
          </div>
        </section>

        {/* ===============================
            중분류 2: 출결 · 시험
        =============================== */}
        <section className="rounded-2xl bg-white p-5 shadow-sm ring-1 ring-slate-100">
          <SectionHeader
            tag="Attendance & Exam"
            tagColor="lime"
            title="출결 · 시험"
            description="출결 현황과 시험 일정을 확인합니다."
            badge="Schedule"
            badgeColor="lime"
          />

          <div className="space-y-3">
            <DashboardButton
              label="출결 현황"
              description="과목별 출결 상태를 확인합니다."
              onClick={() => setActiveModal(modalTypes.ATTENDANCE_STATUS)}
            />
            <DashboardButton
              label="시험 일정 조회"
              description="중간·기말 시험 일정을 확인합니다."
              onClick={() => setActiveModal(modalTypes.EXAM_SCHEDULE)}
            />
          </div>
        </section>

        {/* ===============================
            중분류 3: 학사 상태
        =============================== */}
        <section className="rounded-2xl bg-white p-5 shadow-sm ring-1 ring-slate-100">
          <SectionHeader
            tag="Academic Status"
            tagColor="fuchsia"
            title="학사 상태"
            description="학사 경고 및 이의 신청을 확인합니다."
            badge="Status"
            badgeColor="fuchsia"
          />

          <div className="space-y-3">
            <DashboardButton
              label="학사 경고 내역"
              description="학사 경고 여부 및 이력을 확인합니다."
              onClick={() => setActiveModal(modalTypes.ACADEMIC_WARNING)}
            />
            <DashboardButton
              label="성적 이의 신청"
              description="성적 이의 신청을 제출합니다."
              onClick={() => setActiveModal(modalTypes.GRADE_APPEAL)}
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
   Modal Resolver
========================= */
function renderModalContent(activeModal) {
  switch (activeModal) {
    case modalTypes.MY_GRADES:
      return {
        title: "전체 성적 조회",
        subtitle: "학기별 성적을 확인합니다.",
        hint: "학기 선택 + 성적 테이블 구성을 추천합니다.",
      };
    case modalTypes.COURSE_GRADES:
      return {
        title: "과목별 성적",
        subtitle: "수강 과목 성적을 확인합니다.",
        hint: "과목별 점수 및 등급 표시를 추천합니다.",
      };
    case modalTypes.GPA_OVERVIEW:
      return {
        title: "평균 평점(GPA)",
        subtitle: "누적 GPA 현황입니다.",
        hint: "그래프 + 기준선 표시를 추천합니다.",
      };
    case modalTypes.ATTENDANCE_STATUS:
      return {
        title: "출결 현황",
        subtitle: "출결 상태를 확인합니다.",
        hint: "출석/지각/결석 색상 구분을 추천합니다.",
      };
    case modalTypes.EXAM_SCHEDULE:
      return {
        title: "시험 일정 조회",
        subtitle: "시험 일정을 확인합니다.",
        hint: "캘린더 또는 리스트 UI를 추천합니다.",
      };
    case modalTypes.ACADEMIC_WARNING:
      return {
        title: "학사 경고 내역",
        subtitle: "학사 경고 여부를 확인합니다.",
        hint: "경고 사유 및 기준 표시를 추천합니다.",
      };
    case modalTypes.GRADE_APPEAL:
      return {
        title: "성적 이의 신청",
        subtitle: "성적 이의 신청을 제출합니다.",
        hint: "사유 입력 + 증빙 첨부 UI를 추천합니다.",
      };
    default:
      return {
        title: "성적 · 학사",
        subtitle: "",
        hint: "",
      };
  }
}
