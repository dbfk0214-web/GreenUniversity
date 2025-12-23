// src/pages/professormanagement/ProfessorGradeManagementDashboard.jsx
import React, { useState } from "react";
import ProfessorGradeInputComponent from "../../components/professor/ProfessorGradeInputComponent";

/* =========================
   Modal Types (교수용)
========================= */
const modalTypes = {
  COURSE_SELECT: "COURSE_SELECT",

  GRADE_INPUT: "GRADE_INPUT",
  GRADE_EDIT: "GRADE_EDIT",

  EVALUATION_POLICY: "EVALUATION_POLICY",
  GRADE_CONFIRM: "GRADE_CONFIRM",

  GRADE_APPEAL: "GRADE_APPEAL",
};

/* =========================
   Main Dashboard
========================= */
export default function ProfessorGradeManagementDashboard() {
  const [activeModal, setActiveModal] = useState(null);
  const closeModal = () => setActiveModal(null);

  return (
    <div className="min-h-screen bg-slate-50 px-6 py-8">
      {/* ===== 대분류 헤더 ===== */}
      <header className="mb-8 flex flex-col gap-2">
        <h1 className="text-2xl font-semibold text-slate-900">
          성적 · 평가 관리
        </h1>
        <p className="text-sm text-slate-500">
          담당 강의의 성적을 입력하고 평가를 관리합니다.
        </p>
      </header>

      {/* ===== 중분류 카드 영역 ===== */}
      <div className="grid gap-6 lg:grid-cols-3">
        {/* ===============================
            중분류 1: 강의 선택
        =============================== */}
        <section className="rounded-2xl bg-white p-5 shadow-sm ring-1 ring-slate-100">
          <SectionHeader
            tag="Course"
            tagColor="teal"
            title="강의 선택"
            description="성적을 관리할 강의를 선택합니다."
            badge="Step 1"
            badgeColor="teal"
          />

          <div className="space-y-3">
            <DashboardButton
              label="강의 선택"
              description="담당 강의를 선택합니다."
              onClick={() => setActiveModal(modalTypes.COURSE_SELECT)}
            />
          </div>
        </section>

        {/* ===============================
            중분류 2: 성적 입력 · 수정
        =============================== */}
        <section className="rounded-2xl bg-white p-5 shadow-sm ring-1 ring-slate-100">
          <SectionHeader
            tag="Grades"
            tagColor="lime"
            title="성적 입력 · 수정"
            description="학생 성적을 입력하고 수정합니다."
            badge="Input"
            badgeColor="lime"
          />

          <div className="space-y-3">
            <DashboardButton
              label="성적 입력"
              description="학생별 성적을 입력합니다."
              onClick={() => setActiveModal(modalTypes.GRADE_INPUT)}
            />
            <DashboardButton
              label="성적 수정"
              description="기존 입력 성적을 수정합니다."
              onClick={() => setActiveModal(modalTypes.GRADE_EDIT)}
            />
          </div>
        </section>

        {/* ===============================
            중분류 3: 평가 · 확정
        =============================== */}
        <section className="rounded-2xl bg-white p-5 shadow-sm ring-1 ring-slate-100">
          <SectionHeader
            tag="Evaluation"
            tagColor="fuchsia"
            title="평가 · 확정"
            description="평가 기준 확인 및 성적 확정을 진행합니다."
            badge="Finalize"
            badgeColor="fuchsia"
          />

          <div className="space-y-3">
            <DashboardButton
              label="평가 기준"
              description="평가 항목 비율을 확인합니다."
              onClick={() => setActiveModal(modalTypes.EVALUATION_POLICY)}
            />
            <DashboardButton
              label="성적 확정"
              description="입력된 성적을 확정합니다."
              onClick={() => setActiveModal(modalTypes.GRADE_CONFIRM)}
            />
            <DashboardButton
              label="성적 이의 확인"
              description="학생 성적 이의 신청을 확인합니다."
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
    case modalTypes.COURSE_SELECT:
      return {
        title: "강의 선택",
        subtitle: "성적을 관리할 강의를 선택합니다.",
        hint: "학기별 강의 리스트 UI를 추천합니다.",
      };
    case modalTypes.GRADE_INPUT:
      return {
        title: "성적 입력",
        subtitle: "학생 성적을 입력합니다.",
        hint: "학생 리스트 + 점수 입력 테이블을 추천합니다.",
        content: <ProfessorGradeInputComponent mode="modal" />,
      };
    case modalTypes.GRADE_EDIT:
      return {
        title: "성적 수정",
        subtitle: "입력된 성적을 수정합니다.",
        hint: "변경 이력 표시를 고려하세요.",
      };
    case modalTypes.EVALUATION_POLICY:
      return {
        title: "평가 기준",
        subtitle: "평가 항목 비율을 확인합니다.",
        hint: "중간/기말/과제 비율 표시를 추천합니다.",
      };
    case modalTypes.GRADE_CONFIRM:
      return {
        title: "성적 확정",
        subtitle: "성적을 확정 처리합니다.",
        hint: "확정 전 검토 단계 UI를 추천합니다.",
      };
    case modalTypes.GRADE_APPEAL:
      return {
        title: "성적 이의 확인",
        subtitle: "학생 이의 신청을 확인합니다.",
        hint: "읽기 전용 + 코멘트 응답 UI를 추천합니다.",
      };
    default:
      return {
        title: "성적 관리",
        subtitle: "",
        hint: "",
      };
  }
}
