// src/pages/adminmanagement/InquiryComplaintDashboard.jsx
import React, { useState } from "react";

const modalTypes = {
  INQUIRY_CREATE: "INQUIRY_CREATE",
  INQUIRY_CATEGORY: "INQUIRY_CATEGORY",
  INQUIRY_SLA: "INQUIRY_SLA",
  TICKET_ASSIGN: "TICKET_ASSIGN",
  TICKET_PROCESS: "TICKET_PROCESS",
  TICKET_TEMPLATE: "TICKET_TEMPLATE",
  STATS_DASHBOARD: "STATS_DASHBOARD",
  SATISFACTION_SURVEY: "SATISFACTION_SURVEY",
  FAQ_MANAGE: "FAQ_MANAGE",
};

export default function InquiryComplaintDashboard() {
  const [activeModal, setActiveModal] = useState(null);
  const closeModal = () => setActiveModal(null);

  return (
    <div className="min-h-screen bg-slate-50 px-6 py-8">
      {/* 상단 헤더 */}
      <header className="mb-8 flex flex-col gap-2">
        <h1 className="text-2xl font-semibold text-slate-900">
          Inquiry & Complaint Management
        </h1>
        <p className="text-sm text-slate-500">
          학생·교수·외부 문의와 민원을 접수·배정·처리하고 통계를 관리합니다.
        </p>
      </header>

      {/* 메인 그리드 */}
      <div className="grid gap-6 lg:grid-cols-3">
        {/* 문의/민원 접수 및 분류 */}
        <section className="rounded-2xl bg-white p-5 shadow-sm ring-1 ring-slate-100">
          <div className="mb-4 flex items-center justify-between">
            <div>
              <p className="text-xs font-semibold uppercase tracking-wide text-sky-500">
                Intake & Classification
              </p>
              <h2 className="mt-1 text-lg font-semibold text-slate-900">
                문의/민원 접수 및 분류
              </h2>
              <p className="mt-1 text-xs text-slate-500">
                온라인 문의, 전화/방문 접수 건을 시스템에 등록하고 분류합니다.
              </p>
            </div>
            <span className="rounded-full bg-sky-50 px-3 py-1 text-xs font-medium text-sky-600">
              Intake
            </span>
          </div>

          <div className="space-y-3">
            <DashboardButton
              label="문의/민원 등록"
              description="학생·교수·외부인으로부터 접수된 문의/민원을 등록합니다."
              onClick={() => setActiveModal(modalTypes.INQUIRY_CREATE)}
            />
            <DashboardButton
              label="유형 · 카테고리 관리"
              description="등록된 문의를 학사, 수업, 장학, 시설, 시스템 등으로 분류합니다."
              onClick={() => setActiveModal(modalTypes.INQUIRY_CATEGORY)}
            />
            <DashboardButton
              label="처리 기한(SLA) 설정"
              description="문의 유형별 목표 처리 기한과 우선순위를 설정합니다."
              onClick={() => setActiveModal(modalTypes.INQUIRY_SLA)}
            />
          </div>
        </section>

        {/* 담당자 배정 및 처리 관리 */}
        <section className="rounded-2xl bg-white p-5 shadow-sm ring-1 ring-slate-100">
          <div className="mb-4 flex items-center justify-between">
            <div>
              <p className="text-xs font-semibold uppercase tracking-wide text-amber-500">
                Assignment & Processing
              </p>
              <h2 className="mt-1 text-lg font-semibold text-slate-900">
                담당자 배정 및 처리 관리
              </h2>
              <p className="mt-1 text-xs text-slate-500">
                담당자를 배정하고 처리 상태를 관리하며, 응답 템플릿을 운영합니다.
              </p>
            </div>
            <span className="rounded-full bg-amber-50 px-3 py-1 text-xs font-medium text-amber-600">
              Workflow
            </span>
          </div>

          <div className="space-y-3">
            <DashboardButton
              label="담당자 배정"
              description="문의/민원을 담당자 또는 부서별로 배정하고 재배정합니다."
              onClick={() => setActiveModal(modalTypes.TICKET_ASSIGN)}
            />
            <DashboardButton
              label="처리 상태 관리"
              description="접수, 진행 중, 보류, 완료 등 처리 단계를 관리합니다."
              onClick={() => setActiveModal(modalTypes.TICKET_PROCESS)}
            />
            <DashboardButton
              label="응답 템플릿 관리"
              description="자주 사용하는 답변 문구를 템플릿으로 등록·수정합니다."
              onClick={() => setActiveModal(modalTypes.TICKET_TEMPLATE)}
            />

            <div className="mt-4 rounded-xl border border-dashed border-slate-200 p-3 text-xs text-slate-500">
              <p className="font-medium text-slate-600">운영 팁</p>
              <ul className="mt-1 list-disc space-y-1 pl-4">
                <li>민감한 민원은 처리 이력과 담당자 변경 이력을 반드시 남겨두세요.</li>
                <li>자주 반복되는 문의는 템플릿 + FAQ로 동시에 관리하면 효율적입니다.</li>
              </ul>
            </div>
          </div>
        </section>

        {/* 통계, 만족도, FAQ 관리 */}
        <section className="rounded-2xl bg-white p-5 shadow-sm ring-1 ring-slate-100">
          <div className="mb-4 flex items-center justify-between">
            <div>
              <p className="text-xs font-semibold uppercase tracking-wide text-rose-500">
                Analytics & Quality
              </p>
              <h2 className="mt-1 text-lg font-semibold text-slate-900">
                통계 · 만족도 · FAQ 관리
              </h2>
              <p className="mt-1 text-xs text-slate-500">
                처리 현황, 만족도, 자주 묻는 질문을 분석·관리합니다.
              </p>
            </div>
            <span className="rounded-full bg-rose-50 px-3 py-1 text-xs font-medium text-rose-600">
              Insights
            </span>
          </div>

          <div className="space-y-3">
            <DashboardButton
              label="문의/민원 통계 대시보드"
              description="기간, 유형, 부서별 처리 건수와 SLA 준수율 등을 조회합니다."
              onClick={() => setActiveModal(modalTypes.STATS_DASHBOARD)}
            />
            <DashboardButton
              label="만족도 설문 관리"
              description="처리 완료 후 만족도 설문 발송 및 결과를 관리합니다."
              onClick={() => setActiveModal(modalTypes.SATISFACTION_SURVEY)}
            />
            <DashboardButton
              label="FAQ 관리"
              description="자주 묻는 질문과 답변을 등록하고 노출 순서를 관리합니다."
              onClick={() => setActiveModal(modalTypes.FAQ_MANAGE)}
            />

            <div className="mt-4 rounded-xl bg-slate-50 p-3 text-xs text-slate-500">
              <p className="font-medium text-slate-600">권장 정책</p>
              <ul className="mt-1 list-disc space-y-1 pl-4">
                <li>처리 시간이 긴 유형은 별도 프로세스 개선 대상으로 태깅해두세요.</li>
                <li>FAQ 조회수와 문의 발생 건수를 함께 보면 개선 포인트를 찾기 좋습니다.</li>
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

/** 공통 모달 – 여기 안에 실제 UI 붙이면 됨 */
function DashboardModal({ activeModal, onClose }) {
  if (!activeModal) return null;

  const { title, subtitle, hint, content } = renderModalContent(activeModal);

  return (
    <div className="fixed inset-0 z-40 flex items-center justify-center bg-black/25 px-4">
      <div className="w-full max-w-2xl rounded-2xl bg-white p-6 shadow-xl ring-1 ring-slate-200">
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
    case modalTypes.INQUIRY_CREATE:
      return {
        title: "문의/민원 등록",
        subtitle: "새로운 문의 또는 민원을 등록합니다.",
        hint: "신청자 정보, 채널(온라인/전화/방문), 유형, 요약, 상세 내용 필드를 포함하세요.",
      };
    case modalTypes.INQUIRY_CATEGORY:
      return {
        title: "유형 · 카테고리 관리",
        subtitle: "문의 유형과 카테고리를 관리합니다.",
        hint: "대분류(학사/수업/장학/시설/시스템)와 소분류를 트리 구조로 관리하는 것을 추천합니다.",
      };
    case modalTypes.INQUIRY_SLA:
      return {
        title: "처리 기한(SLA) 설정",
        subtitle: "문의 유형별 목표 처리 기한을 설정합니다.",
        hint: "초기 응답 시간, 최종 처리 기한, 우선순위(High/Normal/Low) 등을 설정할 수 있습니다.",
      };
    case modalTypes.TICKET_ASSIGN:
      return {
        title: "담당자 배정",
        subtitle: "문의/민원에 담당자를 배정합니다.",
        hint: "부서 기준 필터 + 담당자 선택, 자동 배정 규칙(유형/부서 기준)을 고려해보세요.",
      };
    case modalTypes.TICKET_PROCESS:
      return {
        title: "처리 상태 관리",
        subtitle: "문의/민원의 처리 상태를 관리합니다.",
        hint: "상태 변경 이력(변경자, 일시, 사유)을 로그로 남기면 추적이 용이합니다.",
      };
    case modalTypes.TICKET_TEMPLATE:
      return {
        title: "응답 템플릿 관리",
        subtitle: "자주 사용하는 답변 템플릿을 관리합니다.",
        hint: "유형별 기본 답변, 변수(이름/날짜 등) 치환 기능을 제공하면 좋아요.",
      };
    case modalTypes.STATS_DASHBOARD:
      return {
        title: "문의/민원 통계 대시보드",
        subtitle: "문의 처리 현황 및 SLA 준수율을 분석합니다.",
        hint: "기간/유형/부서별 그래프, 평균 처리 시간, 미처리 건 수 등을 시각화해보세요.",
      };
    case modalTypes.SATISFACTION_SURVEY:
      return {
        title: "만족도 설문 관리",
        subtitle: "처리 후 만족도 조사를 관리합니다.",
        hint: "별점, 단답형 의견, 재문의 의향 등을 수집하고 통계와 연계할 수 있습니다.",
      };
    case modalTypes.FAQ_MANAGE:
      return {
        title: "FAQ 관리",
        subtitle: "자주 묻는 질문을 관리합니다.",
        hint: "조회수, 최근 업데이트 일자를 함께 관리하면서 인기 FAQ를 상단에 노출하세요.",
      };
    default:
      return {
        title: "관리 기능",
        subtitle: "",
        hint: "",
      };
  }
}
