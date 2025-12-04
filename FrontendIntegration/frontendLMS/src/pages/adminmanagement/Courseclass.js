// src/pages/adminmanagement/CourseClassDashboard.jsx
import React, { useState } from "react";
import CourseopenForm from "./admin/CourseopenForm";

const modalTypes = {
  COURSE_OPEN: "COURSE_OPEN",
  COURSE_SYLLABUS: "COURSE_SYLLABUS",
  COURSE_INSTRUCTOR: "COURSE_INSTRUCTOR",
  SECTION_MANAGE: "SECTION_MANAGE",
  ENROLLMENT_QUOTA: "ENROLLMENT_QUOTA",
  ENROLLMENT_STATUS: "ENROLLMENT_STATUS",
  TIMETABLE_MANAGE: "TIMETABLE_MANAGE",
  ROOM_ASSIGN: "ROOM_ASSIGN",
  CONFLICT_CHECK: "CONFLICT_CHECK",
};

export default function CourseClassDashboard() {
  const [activeModal, setActiveModal] = useState(null);
  const closeModal = () => setActiveModal(null);

  return (
    <div className="min-h-screen bg-slate-50 px-6 py-8">
      {/* 상단 헤더 */}
      <header className="mb-8 flex flex-col gap-2">
        <h1 className="text-2xl font-semibold text-slate-900">
          Course & Class Management
        </h1>
        <p className="text-sm text-slate-500">
          강의 개설, 수강/분반, 시간표 및 강의실 배정을 한 곳에서 관리합니다.
        </p>
      </header>

      {/* 메인 그리드 */}
      <div className="grid gap-6 lg:grid-cols-3">
        {/* 강의 개설 및 강의계획 관리 */}
        <section className="rounded-2xl bg-white p-5 shadow-sm ring-1 ring-slate-100">
          <div className="mb-4 flex items-center justify-between">
            <div>
              <p className="text-xs font-semibold uppercase tracking-wide text-teal-500">
                Course Setup
              </p>
              <h2 className="mt-1 text-lg font-semibold text-slate-900">
                강의 개설 및 강의계획 관리
              </h2>
              <p className="mt-1 text-xs text-slate-500">
                학기별 강의 개설, 강의계획서, 담당 교원 배정을 관리합니다.
              </p>
            </div>
            <span className="rounded-full bg-teal-50 px-3 py-1 text-xs font-medium text-teal-600">
              Curriculum
            </span>
          </div>

          <div className="space-y-3">
            <DashboardButton
              label="강의 개설"
              description="학기, 과목, 이수구분, 학점, 개설 학과 등을 설정합니다."
              onClick={() => setActiveModal(modalTypes.COURSE_OPEN)}
            />
            <DashboardButton
              label="강의 계획서 관리"
              description="강의 개요, 주차별 계획, 평가 비율, 교재 정보를 등록·수정합니다."
              onClick={() => setActiveModal(modalTypes.COURSE_SYLLABUS)}
            />
            <DashboardButton
              label="담당 교원 배정"
              description="개설 강의에 담당 교수/조교를 배정하거나 변경합니다."
              onClick={() => setActiveModal(modalTypes.COURSE_INSTRUCTOR)}
            />
          </div>
        </section>

        {/* 수강/분반 및 정원 관리 */}
        <section className="rounded-2xl bg-white p-5 shadow-sm ring-1 ring-slate-100">
          <div className="mb-4 flex items-center justify-between">
            <div>
              <p className="text-xs font-semibold uppercase tracking-wide text-lime-500">
                Enrollment & Sections
              </p>
              <h2 className="mt-1 text-lg font-semibold text-slate-900">
                수강/분반 및 정원 관리
              </h2>
              <p className="mt-1 text-xs text-slate-500">
                분반, 정원, 수강 신청 현황을 실시간으로 관리합니다.
              </p>
            </div>
            <span className="rounded-full bg-lime-50 px-3 py-1 text-xs font-medium text-lime-600">
              Capacity
            </span>
          </div>

          <div className="space-y-3">
            <DashboardButton
              label="분반 / 반 관리"
              description="강의별 분반 생성, 병합, 반 편성을 관리합니다."
              onClick={() => setActiveModal(modalTypes.SECTION_MANAGE)}
            />
            <DashboardButton
              label="수강 인원 · 정원 관리"
              description="최대 정원, 대기 인원, 우선 수강 대상자를 설정합니다."
              onClick={() => setActiveModal(modalTypes.ENROLLMENT_QUOTA)}
            />
            <DashboardButton
              label="수강 신청 현황"
              description="학년/학과별 수강 신청 인원 및 여석 현황을 조회합니다."
              onClick={() => setActiveModal(modalTypes.ENROLLMENT_STATUS)}
            />

            <div className="mt-4 rounded-xl border border-dashed border-slate-200 p-3 text-xs text-slate-500">
              <p className="font-medium text-slate-600">운영 팁</p>
              <ul className="mt-1 list-disc space-y-1 pl-4">
                <li>수강 정원 변경은 로그를 남겨두면 나중에 분쟁 예방에 좋습니다.</li>
                <li>마감 임박 강의에 대한 알림 기능을 연동하는 것도 고려해보세요.</li>
              </ul>
            </div>
          </div>
        </section>

        {/* 시간표 및 강의실 배정 관리 */}
        <section className="rounded-2xl bg-white p-5 shadow-sm ring-1 ring-slate-100">
          <div className="mb-4 flex items-center justify-between">
            <div>
              <p className="text-xs font-semibold uppercase tracking-wide text-fuchsia-500">
                Timetable & Rooms
              </p>
              <h2 className="mt-1 text-lg font-semibold text-slate-900">
                시간표 및 강의실 배정 관리
              </h2>
              <p className="mt-1 text-xs text-slate-500">
                요일/교시 기준 시간표와 강의실 배정을 관리하고 충돌을 검사합니다.
              </p>
            </div>
            <span className="rounded-full bg-fuchsia-50 px-3 py-1 text-xs font-medium text-fuchsia-600">
              Scheduling
            </span>
          </div>

          <div className="space-y-3">
            <DashboardButton
              label="시간표 관리"
              description="요일, 교시, 분반 기준으로 강의 시간표를 설정합니다."
              onClick={() => setActiveModal(modalTypes.TIMETABLE_MANAGE)}
            />
            <DashboardButton
              label="강의실 배정"
              description="강의실 용량, 장비(빔, PC) 등을 고려해 강의실을 배정합니다."
              onClick={() => setActiveModal(modalTypes.ROOM_ASSIGN)}
            />
            <DashboardButton
              label="시간/강의실 충돌 검사"
              description="교수·강의실·분반 간 중복 배정 및 시간 충돌을 자동 검사합니다."
              onClick={() => setActiveModal(modalTypes.CONFLICT_CHECK)}
            />

            <div className="mt-4 rounded-xl bg-slate-50 p-3 text-xs text-slate-500">
              <p className="font-medium text-slate-600">권장 정책</p>
              <ul className="mt-1 list-disc space-y-1 pl-4">
                <li>강의실 별 최대 수용 인원과 장비 정보를 마스터로 관리하세요.</li>
                <li>시간표 확정 전, 반드시 충돌 검사를 실행하는 프로세스를 두면 좋습니다.</li>
              </ul>
            </div>
          </div>
        </section>
      </div>

      {/* 모달 */}
      <DashboardModal activeModal={activeModal} onClose={closeModal} />
    </div>
  );
}

/** 공통 버튼 */
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

/** 공통 모달 – 실제 폼/테이블은 여기 안에 붙이면 됨 */
function DashboardModal({ activeModal, onClose }) {
  if (!activeModal) return null;

  const { title, subtitle, hint, content } = renderModalContent(activeModal);

  return (
    <div className="fixed inset-0 z-40 flex items-center justify-center bg-black/25">
      <div className="w-full max-w-[80%] rounded-2xl bg-white p-6 shadow-xl ring-1 ring-slate-200">
        <div className="mb-4 flex items-start justify-between gap-4">
          <div>
            <h3 className="text-lg font-semibold text-slate-900">{title}</h3>
            {subtitle && (
              <p className="mt-1 text-xs text-slate-500">{subtitle}</p>
            )}
          </div>
          <button
            type="button"
            onClick={onClose}
            className="rounded-full p-1 text-slate-400 transition hover:bg-slate-100 hover:text-slate-600"
          >
            <span className="sr-only">Close</span>✕
          </button>
        </div>

        {/* 여기부터 실제 UI 붙이는 영역 */}
        <div className="rounded-xl border border-dashed border-slate-200 bg-slate-50 p-4 text-xs text-slate-500">
           {content ? (
            content
          ) : (
            <>
              {/* 기본 placeholder */}
               <p className="mb-2 font-medium text-slate-700">
                🔧 개발자용 placeholder 영역
              </p>
              <p className="leading-relaxed">
                이 영역에 실제 폼(Form), 테이블(Table), 검색 필터 등을 넣으면
                됩니다.
                <br />
                예: 강의 검색 필터, 강의계획 입력 폼, 분반/정원 테이블, 시간표
                매트릭스 등.
              </p>
            </>
          )}
          {hint && (
            <p className="mt-3 text-[11px] leading-relaxed text-slate-500">
              <span className="font-semibold text-slate-600">UI 힌트: </span>
              {hint}
            </p>
          )}
        </div>

        <div className="mt-5 flex justify-end gap-2">
          <button
            type="button"
            onClick={onClose}
            className="rounded-lg border border-slate-200 px-3 py-1.5 text-xs font-medium text-slate-600 hover:bg-slate-50"
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

function renderModalContent(activeModal) {
  switch (activeModal) {
    case modalTypes.COURSE_OPEN:
      return {
        title: "강의 개설",
        subtitle: "학기별 강의를 개설합니다.",
        hint: "과목 코드, 학기, 학점, 이수구분, 개설 학과, 표기명 필드를 포함하세요.",
        content:<CourseopenForm/>
      };
    case modalTypes.COURSE_SYLLABUS:
      return {
        title: "강의 계획서 관리",
        subtitle: "강의계획서를 등록 및 수정합니다.",
        hint: "주차별 계획, 평가 비율, 학습 목표, 교재 정보를 입력하는 폼을 추천합니다.",
      };
    case modalTypes.COURSE_INSTRUCTOR:
      return {
        title: "담당 교원 배정",
        subtitle: "강의에 담당 교수 및 조교를 배정합니다.",
        hint: "교원 검색 + 드롭다운/체크박스로 여러 명 배정 가능하게 구성해보세요.",
      };
    case modalTypes.SECTION_MANAGE:
      return {
        title: "분반 / 반 관리",
        subtitle: "강의 분반 및 반 편성을 관리합니다.",
        hint: "분반 코드, 수강 정원, 담당 교원, 강의실 등을 한 테이블에서 관리하면 좋습니다.",
      };
    case modalTypes.ENROLLMENT_QUOTA:
      return {
        title: "수강 인원 · 정원 관리",
        subtitle: "강의별 수강 정원과 대기 인원을 관리합니다.",
        hint: "정원 변경 시 변경 이력(변경자, 일시, 사유)을 기록하도록 설계하세요.",
      };
    case modalTypes.ENROLLMENT_STATUS:
      return {
        title: "수강 신청 현황",
        subtitle: "수강 신청 인원 및 여석을 조회합니다.",
        hint: "학과, 학년, 이수구분, 시간대 필터 + 통계 요약(총 수강생, 여석 수)을 추천합니다.",
      };
    case modalTypes.TIMETABLE_MANAGE:
      return {
        title: "시간표 관리",
        subtitle: "학기 시간표를 요일/교시 기준으로 관리합니다.",
        hint: "요일-교시 매트릭스 UI + 드래그 앤 드롭으로 강의를 배치하는 구조를 고려할 수 있습니다.",
      };
    case modalTypes.ROOM_ASSIGN:
      return {
        title: "강의실 배정",
        subtitle: "강의실을 배정 및 변경합니다.",
        hint: "강의실 용량, 장비, 건물 정보 등을 함께 표시해 배정 실수를 줄이세요.",
      };
    case modalTypes.CONFLICT_CHECK:
      return {
        title: "시간/강의실 충돌 검사",
        subtitle: "시간표와 강의실 배정의 충돌을 검사합니다.",
        hint: "교원·강의실·분반 기준으로 중복 배정 여부를 리스트업하는 리포트 형태를 추천합니다.",
      };
    default:
      return {
        title: "관리 기능",
        subtitle: "",
        hint: "",
      };
  }
}
