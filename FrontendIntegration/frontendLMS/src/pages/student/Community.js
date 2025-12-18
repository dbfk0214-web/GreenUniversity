// src/pages/studentmanagement/StudentCommunityDashboard.jsx
import React, { useState } from "react";
import FreePageComponent from "../../components/student/FreePageComponent";

/* =========================
   Modal Types (학생용)
========================= */
const modalTypes = {
  NOTICE_LIST: "NOTICE_LIST",
  NOTICE_DETAIL: "NOTICE_DETAIL",

  FREE_BOARD: "FREE_BOARD",
  QNA_BOARD: "QNA_BOARD",

  DATA_BOARD: "DATA_BOARD",
  MY_POSTS: "MY_POSTS",
};

/* =========================
   Main Dashboard
========================= */
export default function StudentCommunityDashboard() {
  const [activeModal, setActiveModal] = useState(null);
  const closeModal = () => setActiveModal(null);

  return (
    <div className="min-h-screen bg-slate-50 px-6 py-8">
      {/* ===== 대분류 헤더 ===== */}
      <header className="mb-8 flex flex-col gap-2">
        <h1 className="text-2xl font-semibold text-slate-900">커뮤니티</h1>
        <p className="text-sm text-slate-500">
          공지사항 확인 및 학생 커뮤니티 활동을 할 수 있습니다.
        </p>
      </header>

      {/* ===== 중분류 카드 영역 ===== */}
      <div className="grid gap-6 lg:grid-cols-3">
        {/* ===============================
            중분류 1: 공지사항
        =============================== */}
        <section className="rounded-2xl bg-white p-5 shadow-sm ring-1 ring-slate-100">
          <SectionHeader
            tag="Notice"
            tagColor="teal"
            title="공지사항"
            description="학교 및 학과 공지사항을 확인합니다."
            badge="Official"
            badgeColor="teal"
          />

          <div className="space-y-3">
            <DashboardButton
              label="공지사항 목록"
              description="전체 공지사항을 확인합니다."
              onClick={() => setActiveModal(modalTypes.NOTICE_LIST)}
            />
            <DashboardButton
              label="공지 상세 보기"
              description="공지 내용을 상세히 확인합니다."
              onClick={() => setActiveModal(modalTypes.NOTICE_DETAIL)}
            />
          </div>
        </section>

        {/* ===============================
            중분류 2: 학생 게시판
        =============================== */}
        <section className="rounded-2xl bg-white p-5 shadow-sm ring-1 ring-slate-100">
          <SectionHeader
            tag="Boards"
            tagColor="lime"
            title="학생 게시판"
            description="학생 간 자유로운 소통 공간입니다."
            badge="Community"
            badgeColor="lime"
          />

          <div className="space-y-3">
            <DashboardButton
              label="자유 게시판"
              description="자유롭게 글을 작성하고 소통합니다."
              onClick={() => setActiveModal(modalTypes.FREE_BOARD)}
            />
            <DashboardButton
              label="질문 · 답변(Q&A)"
              description="학업 및 학교생활 관련 질문을 합니다."
              onClick={() => setActiveModal(modalTypes.QNA_BOARD)}
            />
          </div>
        </section>

        {/* ===============================
            중분류 3: 자료 · 내 활동
        =============================== */}
        <section className="rounded-2xl bg-white p-5 shadow-sm ring-1 ring-slate-100">
          <SectionHeader
            tag="Resources"
            tagColor="fuchsia"
            title="자료 · 내 활동"
            description="자료 공유 및 내 활동을 확인합니다."
            badge="My Page"
            badgeColor="fuchsia"
          />

          <div className="space-y-3">
            <DashboardButton
              label="자료실"
              description="강의 자료 및 공유 자료를 확인합니다."
              onClick={() => setActiveModal(modalTypes.DATA_BOARD)}
            />
            <DashboardButton
              label="내가 쓴 글"
              description="내가 작성한 게시글을 확인합니다."
              onClick={() => setActiveModal(modalTypes.MY_POSTS)}
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
    case modalTypes.NOTICE_LIST:
      return {
        title: "공지사항 목록",
        subtitle: "학교 공지사항을 확인합니다.",
        hint: "중요 공지 상단 고정 표시를 추천합니다.",
      };
    case modalTypes.NOTICE_DETAIL:
      return {
        title: "공지 상세 보기",
        subtitle: "공지 내용을 확인합니다.",
        hint: "첨부파일 다운로드 UI를 추천합니다.",
      };
    case modalTypes.FREE_BOARD:
      return {
        title: "자유 게시판",
        subtitle: "학생 자유 게시판입니다.",
        hint: "좋아요 · 댓글 · 검색 기능을 추천합니다.",
        content: <FreePageComponent mode="modal" />,
      };
    case modalTypes.QNA_BOARD:
      return {
        title: "질문 · 답변(Q&A)",
        subtitle: "질문과 답변을 확인합니다.",
        hint: "답변 채택 기능을 고려하세요.",
      };
    case modalTypes.DATA_BOARD:
      return {
        title: "자료실",
        subtitle: "공유 자료를 확인합니다.",
        hint: "파일 유형별 필터를 추천합니다.",
      };
    case modalTypes.MY_POSTS:
      return {
        title: "내가 쓴 글",
        subtitle: "내가 작성한 게시글입니다.",
        hint: "작성일 및 상태 필터를 추천합니다.",
      };
    default:
      return {
        title: "커뮤니티",
        subtitle: "",
        hint: "",
      };
  }
}
