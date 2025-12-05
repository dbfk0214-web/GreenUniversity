// src/pages/adminmanagement/InternalAdminCommunityDashboard.jsx
import React, { useState } from "react";

const modalTypes = {
  OPS_ANNOUNCEMENT: "OPS_ANNOUNCEMENT",
  RELEASE_NOTES: "RELEASE_NOTES",
  CHANGE_LOG: "CHANGE_LOG",
  OPS_QNA: "OPS_QNA",
  BEST_PRACTICES: "BEST_PRACTICES",
  ISSUE_BOARD: "ISSUE_BOARD",
  GUIDES: "GUIDES",
  CHECKLISTS: "CHECKLISTS",
  MEETING_MINUTES: "MEETING_MINUTES",
};

export default function InternalAdminCommunityDashboard() {
  const [activeModal, setActiveModal] = useState(null);
  const closeModal = () => setActiveModal(null);

  return (
    <div className="min-h-screen bg-slate-50 px-6 py-8">
      {/* 상단 헤더 */}
      <header className="mb-8 flex flex-col gap-2">
        <h1 className="text-2xl font-semibold text-slate-900">
          Internal Admin Community
        </h1>
        <p className="text-sm text-slate-500">
          관리자 전용 공지, 릴리즈 노트, Q&A, 운영 가이드를 한 곳에서 공유합니다.
        </p>
      </header>

      {/* 메인 그리드 */}
      <div className="grid gap-6 lg:grid-cols-3">
        {/* 운영 공지 & 릴리즈 노트 */}
        <section className="rounded-2xl bg-white p-5 shadow-sm ring-1 ring-slate-100">
          <div className="mb-4 flex items-center justify-between">
            <div>
              <p className="text-xs font-semibold uppercase tracking-wide text-blue-500">
                Ops Announcements
              </p>
              <h2 className="mt-1 text-lg font-semibold text-slate-900">
                운영 공지 & 릴리즈 노트
              </h2>
              <p className="mt-1 text-xs text-slate-500">
                관리자 대상 시스템 공지, 기능 변경 사항, 릴리즈 노트를 공유합니다.
              </p>
            </div>
            <span className="rounded-full bg-blue-50 px-3 py-1 text-xs font-medium text-blue-600">
              Updates
            </span>
          </div>

          <div className="space-y-3">
            <DashboardButton
              label="운영 공지 관리"
              description="관리자 전용 공지를 등록하고 중요도/노출 기간을 설정합니다."
              onClick={() => setActiveModal(modalTypes.OPS_ANNOUNCEMENT)}
            />
            <DashboardButton
              label="릴리즈 노트 관리"
              description="버전별 변경 사항, 신규 기능, 개선/버그 수정 내용을 정리합니다."
              onClick={() => setActiveModal(modalTypes.RELEASE_NOTES)}
            />
            <DashboardButton
              label="변경 이력(Changelog) 관리"
              description="설정/정책 변경 등 운영 상의 주요 변경 이력을 기록합니다."
              onClick={() => setActiveModal(modalTypes.CHANGE_LOG)}
            />
          </div>
        </section>

        {/* 운영자 Q&A & 노하우 공유 */}
        <section className="rounded-2xl bg-white p-5 shadow-sm ring-1 ring-slate-100">
          <div className="mb-4 flex items-center justify-between">
            <div>
              <p className="text-xs font-semibold uppercase tracking-wide text-violet-500">
                Q&A & Knowledge Sharing
              </p>
              <h2 className="mt-1 text-lg font-semibold text-slate-900">
                운영자 Q&A & 노하우 공유
              </h2>
              <p className="mt-1 text-xs text-slate-500">
                관리자끼리 질문/답변을 주고받고, 운영 노하우와 사례를 공유합니다.
              </p>
            </div>
            <span className="rounded-full bg-violet-50 px-3 py-1 text-xs font-medium text-violet-600">
              Community
            </span>
          </div>

          <div className="space-y-3">
            <DashboardButton
              label="운영자 Q&A 게시판"
              description="관리자가 궁금한 점을 올리고, 다른 운영자가 답변할 수 있는 공간입니다."
              onClick={() => setActiveModal(modalTypes.OPS_QNA)}
            />
            <DashboardButton
              label="노하우 / 사례 공유"
              description="업무 팁, 문제 해결 사례, 모범 운영 방법을 공유합니다."
              onClick={() => setActiveModal(modalTypes.BEST_PRACTICES)}
            />
            <DashboardButton
              label="장애 · 이슈 공유 게시판"
              description="최근 장애, 이슈, 대응 내역을 공유하고 재발 방지 아이디어를 논의합니다."
              onClick={() => setActiveModal(modalTypes.ISSUE_BOARD)}
            />

            <div className="mt-4 rounded-xl border border-dashed border-slate-200 p-3 text-xs text-slate-500">
              <p className="font-medium text-slate-600">운영 팁</p>
              <ul className="mt-1 list-disc space-y-1 pl-4">
                <li>좋은 답변이나 사례는 &quot;베스트&quot; 표시로 상단 고정해두면 좋아요.</li>
                <li>장애/이슈 게시판은 향후 회고 미팅 때 참고 자료로도 활용할 수 있습니다.</li>
              </ul>
            </div>
          </div>
        </section>

        {/* 가이드 · 매뉴얼 · 회의록 센터 */}
        <section className="rounded-2xl bg-white p-5 shadow-sm ring-1 ring-slate-100">
          <div className="mb-4 flex items-center justify-between">
            <div>
              <p className="text-xs font-semibold uppercase tracking-wide text-emerald-500">
                Docs & Playbooks
              </p>
              <h2 className="mt-1 text-lg font-semibold text-slate-900">
                가이드 · 매뉴얼 · 회의록 센터
              </h2>
              <p className="mt-1 text-xs text-slate-500">
                운영 가이드, 체크리스트, 회의록, 온보딩 문서를 한 곳에서 관리합니다.
              </p>
            </div>
            <span className="rounded-full bg-emerald-50 px-3 py-1 text-xs font-medium text-emerald-600">
              Knowledge Base
            </span>
          </div>

          <div className="space-y-3">
            <DashboardButton
              label="운영 가이드 · 매뉴얼 관리"
              description="운영 프로세스, 매뉴얼, 온보딩 문서를 등록·관리합니다."
              onClick={() => setActiveModal(modalTypes.GUIDES)}
            />
            <DashboardButton
              label="체크리스트 / 운영 플레이버(Playbook)"
              description="정기 작업, 점검 항목 등을 체크리스트 형태로 관리합니다."
              onClick={() => setActiveModal(modalTypes.CHECKLISTS)}
            />
            <DashboardButton
              label="운영 회의록 · 결정 사항 관리"
              description="운영 회의록, 결정 사항, 액션 아이템을 기록합니다."
              onClick={() => setActiveModal(modalTypes.MEETING_MINUTES)}
            />

            <div className="mt-4 rounded-xl bg-slate-50 p-3 text-xs text-slate-500">
              <p className="font-medium text-slate-600">권장 정책</p>
              <ul className="mt-1 list-disc space-y-1 pl-4">
                <li>모든 중요한 결정 사항은 회의록 + 체크리스트에 함께 남겨두세요.</li>
                <li>새 관리자 온보딩 시, 이 영역을 &quot;첫 출발점&quot;으로 안내하면 좋습니다.</li>
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

/** 공통 모달 – 실제 게시판/문서/에디터 UI는 여기 안에 붙이면 됨 */
function DashboardModal({ activeModal, onClose }) {
  if (!activeModal) return null;

  const { title, subtitle, hint, content } = renderModalContent(activeModal);

  return (
    <div className="fixed inset-0 z-40 flex items-center justify-center bg-black/25 px-4">
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

        {/* placeholder 영역 */}
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
    case modalTypes.OPS_ANNOUNCEMENT:
      return {
        title: "운영 공지 관리",
        subtitle: "관리자용 운영 공지를 등록·관리합니다.",
        hint: "중요도, 노출 기간, 관련 메뉴/기능 태그 등을 함께 설정하면 좋습니다.",
      };
    case modalTypes.RELEASE_NOTES:
      return {
        title: "릴리즈 노트 관리",
        subtitle: "버전별 릴리즈 노트를 관리합니다.",
        hint: "버전, 배포 일자, 변경 요약, 상세 내용(마크다운)을 입력하는 구조를 추천합니다.",
      };
    case modalTypes.CHANGE_LOG:
      return {
        title: "변경 이력(Changelog) 관리",
        subtitle: "운영 상 주요 변경 이력을 기록합니다.",
        hint: "설정 변경, 정책 변경, 메뉴 구조 변경 등을 일자/작성자 기준으로 남겨두세요.",
      };
    case modalTypes.OPS_QNA:
      return {
        title: "운영자 Q&A 게시판",
        subtitle: "관리자 간 질문/답변을 공유합니다.",
        hint: "질문 유형, 상태(답변 대기/완료), 태그(도메인별)를 두면 검색이 편해집니다.",
      };
    case modalTypes.BEST_PRACTICES:
      return {
        title: "노하우 / 사례 공유",
        subtitle: "운영 노하우와 사례를 공유합니다.",
        hint: "좋은 글에는 &quot;베스트&quot; 플래그를 주고 상단 고정 기능을 제공해보세요.",
      };
    case modalTypes.ISSUE_BOARD:
      return {
        title: "장애 · 이슈 공유 게시판",
        subtitle: "장애 및 이슈를 기록하고 공유합니다.",
        hint: "심각도, 영향 범위, 원인, 조치, 재발 방지 대책 필드를 포함한 템플릿을 추천합니다.",
      };
    case modalTypes.GUIDES:
      return {
        title: "운영 가이드 · 매뉴얼 관리",
        subtitle: "운영 관련 문서를 관리합니다.",
        hint: "카테고리(도메인, 업무 단계)와 버전, 마지막 수정자 정보를 함께 관리하세요.",
      };
    case modalTypes.CHECKLISTS:
      return {
        title: "체크리스트 / 운영 플레이버(Playbook)",
        subtitle: "정기 작업과 프로세스 체크리스트를 관리합니다.",
        hint: "항목별 담당자, 주기, 완료 여부, 마지막 수행 일자를 기록할 수 있으면 좋습니다.",
      };
    case modalTypes.MEETING_MINUTES:
      return {
        title: "운영 회의록 · 결정 사항 관리",
        subtitle: "운영 회의와 결정 사항을 정리합니다.",
        hint: "회의 일자, 참석자, 안건, 결정 사항, 액션 아이템, 담당자 필드를 포함하세요.",
      };
    default:
      return {
        title: "관리 기능",
        subtitle: "",
        hint: "",
      };
  }
}
