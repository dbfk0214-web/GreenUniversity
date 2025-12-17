// src/pages/professormanagement/ProfessorAssignmentMaterialDashboard.jsx
import React, { useState } from "react";
import { DashboardButton, SectionHeader } from "../../components/what";


/* =========================
   Modal Types (교수용)
========================= */
const modalTypes = {
  COURSE_SELECT: "COURSE_SELECT",

  ASSIGNMENT_CREATE: "ASSIGNMENT_CREATE",
  ASSIGNMENT_STATUS: "ASSIGNMENT_STATUS",
  ASSIGNMENT_FEEDBACK: "ASSIGNMENT_FEEDBACK",

  MATERIAL_UPLOAD: "MATERIAL_UPLOAD",
  MATERIAL_MANAGE: "MATERIAL_MANAGE",
};

/* =========================
   Main Dashboard
========================= */
export default function ProfessorAssignmentMaterialDashboard() {
  const [activeModal, setActiveModal] = useState(null);
  const closeModal = () => setActiveModal(null);
  return (
   <> 
   <div className="min-h-screen bg-slate-50 px-6 py-8">
      {/* ===== Header ===== */}
      <header className="mb-8 flex flex-col gap-2">
        <h1 className="text-2xl font-semibold text-slate-900">
          과제 · 학습 자료 관리
        </h1>
        <p className="text-sm text-slate-500">
          담당 강의의 과제와 학습 자료를 관리합니다.
        </p>
      </header>

      <div className="grid gap-6 lg:grid-cols-3">
        {/* ===============================
            1. 강의 선택
        =============================== */}
        <section className="rounded-2xl bg-white p-5 shadow-sm ring-1 ring-slate-100">
          <SectionHeader
            tag="Course"
            tagColor="teal"
            title="강의 선택"
            description="관리할 강의를 선택합니다."
            badge="Step 1"
            badgeColor="teal"
          />
          <DashboardButton
            label="강의 선택"
            description="담당 강의를 선택합니다."
            onClick={() => setActiveModal(modalTypes.COURSE_SELECT)}
          />
        </section>

        {/* ===============================
            2. 과제 관리
        =============================== */}
        <section className="rounded-2xl bg-white p-5 shadow-sm ring-1 ring-slate-100">
          <SectionHeader
            tag="Assignment"
            tagColor="lime"
            title="과제 관리"
            description="과제를 등록하고 관리합니다."
            badge="Assignment"
            badgeColor="lime"
          />

          <div className="space-y-3">
            <DashboardButton
              label="과제 등록"
              description="새 과제를 등록합니다."
              onClick={() =>
                setActiveModal(modalTypes.ASSIGNMENT_CREATE)
              }
            />
            <DashboardButton
              label="제출 현황"
              description="과제 제출 현황을 확인합니다."
              onClick={() =>
                setActiveModal(modalTypes.ASSIGNMENT_STATUS)
              }
            />
            <DashboardButton
              label="과제 피드백"
              description="학생 과제에 피드백을 남깁니다."
              onClick={() =>
                setActiveModal(modalTypes.ASSIGNMENT_FEEDBACK)
              }
            />
          </div>
        </section>

        {/* ===============================
            3. 학습 자료 관리
        =============================== */}
        <section className="rounded-2xl bg-white p-5 shadow-sm ring-1 ring-slate-100">
          <SectionHeader
            tag="Materials"
            tagColor="fuchsia"
            title="학습 자료 관리"
            description="강의 자료를 관리합니다."
            badge="Materials"
            badgeColor="fuchsia"
          />

          <div className="space-y-3">
            <DashboardButton
              label="자료 업로드"
              description="강의 자료를 업로드합니다."
              onClick={() =>
                setActiveModal(modalTypes.MATERIAL_UPLOAD)
              }
            />
            <DashboardButton
              label="자료 관리"
              description="업로드된 자료를 관리합니다."
              onClick={() =>
                setActiveModal(modalTypes.MATERIAL_MANAGE)
              }
            />
          </div>
        </section>
      </div>

      {/* ===== 공통 모달 ===== */}
      <DashboardModal activeModal={activeModal} onClose={closeModal} />
    </div>
    </>
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
            <h3 className="text-lg font-semibold text-slate-900">
              {title}
            </h3>
            {subtitle && (
              <p className="mt-1 text-xs text-slate-500">
                {subtitle}
              </p>
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
            📌 개발자용 콘텐츠 영역
          </p>
          <p>실제 기능 UI가 이 영역에 들어갑니다.</p>

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
        </div>
      </div>
    </div>
  );
}
/* =========================
   Modal Resolver (힌트 핵심)
========================= */
function renderModalContent(activeModal) {
  switch (activeModal) {
    case modalTypes.COURSE_SELECT:
      return {
        title: "강의 선택",
        subtitle: "과제 및 자료를 관리할 강의를 선택합니다.",
        hint: "학기별 담당 강의 목록 + 단일 선택 UI 권장",
      };
    case modalTypes.ASSIGNMENT_CREATE:
      return {
        title: "과제 등록",
        subtitle: "새 과제를 등록합니다.",
        hint: "마감일, 제출 방식, 재제출 허용 여부 입력 UI 권장",
      };
    case modalTypes.ASSIGNMENT_STATUS:
      return {
        title: "제출 현황",
        subtitle: "학생 과제 제출 현황입니다.",
        hint: "제출/미제출 상태 필터 + 제출 시간 컬럼 권장",
      };
    case modalTypes.ASSIGNMENT_FEEDBACK:
      return {
        title: "과제 피드백",
        subtitle: "학생 과제에 피드백을 제공합니다.",
        hint: "텍스트 코멘트 + 파일 첨부 UI 권장",
      };
    case modalTypes.MATERIAL_UPLOAD:
      return {
        title: "자료 업로드",
        subtitle: "강의 자료를 업로드합니다.",
        hint: "드래그앤드롭 + 파일 유형 제한 UI 권장",
      };
    case modalTypes.MATERIAL_MANAGE:
      return {
        title: "자료 관리",
        subtitle: "업로드된 자료를 관리합니다.",
        hint: "주차별 정렬 + 공개/비공개 토글 권장",
      };
    default:
      return {
        title: "과제 · 자료 관리",
        subtitle: "",
        hint: "",
      };
  }
}
