// src/pages/adminmanagement/SystemResourceDashboard.jsx
import React, { useState } from "react";

const modalTypes = {
  SYSTEM_SETTINGS: "SYSTEM_SETTINGS",
  MASTER_CODE: "MASTER_CODE",
  MENU_STRUCTURE: "MENU_STRUCTURE",
  FILE_STORAGE: "FILE_STORAGE",
  BATCH_JOBS: "BATCH_JOBS",
  INTEGRATION: "INTEGRATION",
  SYSTEM_MONITORING: "SYSTEM_MONITORING",
  AUDIT_LOGS: "AUDIT_LOGS",
  BACKUP_RESTORE: "BACKUP_RESTORE",
};

export default function SystemResourceDashboard() {
  const [activeModal, setActiveModal] = useState(null);
  const closeModal = () => setActiveModal(null);

  return (
    <div className="min-h-screen bg-slate-50 px-6 py-8">
      {/* 상단 헤더 */}
      <header className="mb-8 flex flex-col gap-2">
        <h1 className="text-2xl font-semibold text-slate-900">
          Resource & System Administration
        </h1>
        <p className="text-sm text-slate-500">
          시스템 기본 설정, 공통 코드, 스토리지, 모니터링, 백업/복구를 관리합니다.
        </p>
      </header>

      {/* 메인 그리드 */}
      <div className="grid gap-6 lg:grid-cols-3">
        {/* 시스템 설정 & 마스터 데이터 */}
        <section className="rounded-2xl bg-white p-5 shadow-sm ring-1 ring-slate-100">
          <div className="mb-4 flex items-center justify-between">
            <div>
              <p className="text-xs font-semibold uppercase tracking-wide text-indigo-500">
                System Settings
              </p>
              <h2 className="mt-1 text-lg font-semibold text-slate-900">
                시스템 설정 & 마스터 데이터
              </h2>
              <p className="mt-1 text-xs text-slate-500">
                포털 기본 정보, 학사년도, 공통 코드, 메뉴 구조를 관리합니다.
              </p>
            </div>
            <span className="rounded-full bg-indigo-50 px-3 py-1 text-xs font-medium text-indigo-600">
              Core Config
            </span>
          </div>

          <div className="space-y-3">
            <DashboardButton
              label="시스템 기본 설정"
              description="포털명, 로고, 학사년도·학기, 언어/타임존 등 기본 설정을 관리합니다."
              onClick={() => setActiveModal(modalTypes.SYSTEM_SETTINGS)}
            />
            <DashboardButton
              label="공통 코드 / 마스터 데이터 관리"
              description="공통 코드, 학과/전공 코드, 상태 코드 등 시스템 전반에서 사용하는 마스터 데이터를 관리합니다."
              onClick={() => setActiveModal(modalTypes.MASTER_CODE)}
            />
            <DashboardButton
              label="메뉴 구조 관리"
              description="상단/사이드 메뉴 구조, 정렬 순서, 표시 여부를 관리합니다."
              onClick={() => setActiveModal(modalTypes.MENU_STRUCTURE)}
            />
          </div>
        </section>

        {/* 자원 / 인프라 / 연동 관리 */}
        <section className="rounded-2xl bg-white p-5 shadow-sm ring-1 ring-slate-100">
          <div className="mb-4 flex items-center justify-between">
            <div>
              <p className="text-xs font-semibold uppercase tracking-wide text-emerald-500">
                Resources & Integration
              </p>
              <h2 className="mt-1 text-lg font-semibold text-slate-900">
                자원 / 인프라 / 연동 관리
              </h2>
              <p className="mt-1 text-xs text-slate-500">
                파일 스토리지, 배치 작업, 외부 시스템 연동을 관리합니다.
              </p>
            </div>
            <span className="rounded-full bg-emerald-50 px-3 py-1 text-xs font-medium text-emerald-600">
              Infrastructure
            </span>
          </div>

          <div className="space-y-3">
            <DashboardButton
              label="파일 스토리지 / 첨부 관리"
              description="업로드 경로, 최대 용량, 허용 확장자, 정리(아카이브) 정책을 관리합니다."
              onClick={() => setActiveModal(modalTypes.FILE_STORAGE)}
            />
            <DashboardButton
              label="배치 · 스케줄 작업 관리"
              description="정기 리포트, 데이터 동기화, 정리 작업 등 배치 스케줄을 관리합니다."
              onClick={() => setActiveModal(modalTypes.BATCH_JOBS)}
            />
            <DashboardButton
              label="외부 연동 / 통합 관리"
              description="SSO, LDAP, 외부 학사/인사 시스템, 공지/메일/SMS 연동 설정을 관리합니다."
              onClick={() => setActiveModal(modalTypes.INTEGRATION)}
            />

            <div className="mt-4 rounded-xl border border-dashed border-slate-200 p-3 text-xs text-slate-500">
              <p className="font-medium text-slate-600">운영 팁</p>
              <ul className="mt-1 list-disc space-y-1 pl-4">
                <li>배치 작업은 실행 이력(성공/실패, 소요 시간)을 꼭 로그로 남기세요.</li>
                <li>외부 연동 설정은 별도의 &quot;테스트 모드&quot;를 두면 장애를 줄일 수 있습니다.</li>
              </ul>
            </div>
          </div>
        </section>

        {/* 모니터링 / 로그 / 백업 관리 */}
        <section className="rounded-2xl bg-white p-5 shadow-sm ring-1 ring-slate-100">
          <div className="mb-4 flex items-center justify-between">
            <div>
              <p className="text-xs font-semibold uppercase tracking-wide text-rose-500">
                Monitoring & Safety
              </p>
              <h2 className="mt-1 text-lg font-semibold text-slate-900">
                모니터링 / 로그 / 백업 관리
              </h2>
              <p className="mt-1 text-xs text-slate-500">
                시스템 상태, 에러/감사 로그, 백업·복구 정책을 관리합니다.
              </p>
            </div>
            <span className="rounded-full bg-rose-50 px-3 py-1 text-xs font-medium text-rose-600">
              Reliability
            </span>
          </div>

          <div className="space-y-3">
            <DashboardButton
              label="시스템 모니터링"
              description="서비스 상태, 응답 시간, 에러 발생 현황을 모니터링합니다."
              onClick={() => setActiveModal(modalTypes.SYSTEM_MONITORING)}
            />
            <DashboardButton
              label="운영 로그 · 감사 로그 관리"
              description="관리자 작업 이력, 권한 변경, 설정 변경에 대한 로그를 조회합니다."
              onClick={() => setActiveModal(modalTypes.AUDIT_LOGS)}
            />
            <DashboardButton
              label="백업 · 복구 관리"
              description="DB/파일 백업 스케줄, 백업 파일 관리, 복구 이력을 관리합니다."
              onClick={() => setActiveModal(modalTypes.BACKUP_RESTORE)}
            />

            <div className="mt-4 rounded-xl bg-slate-50 p-3 text-xs text-slate-500">
              <p className="font-medium text-slate-600">권장 정책</p>
              <ul className="mt-1 list-disc space-y-1 pl-4">
                <li>백업은 최소 하루 1회 자동 실행 + 월 1회 장기 보관 백업을 추천합니다.</li>
                <li>중요 설정 변경은 반드시 감사 로그에 남기고 보관 기간을 명확히 정의하세요.</li>
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

/** 공통 모달 – 이 안에 실제 UI(Form/Table/Chart) 붙이면 됨 */
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
    case modalTypes.SYSTEM_SETTINGS:
      return {
        title: "시스템 기본 설정",
        subtitle: "포털의 전역 기본 설정을 관리합니다.",
        hint: "포털명, 로고, 학사년도/학기, 기본 언어/시간대, 유지보수 모드 설정 등을 포함하세요.",
      };
    case modalTypes.MASTER_CODE:
      return {
        title: "공통 코드 / 마스터 데이터 관리",
        subtitle: "시스템 전반에서 사용하는 마스터 데이터를 관리합니다.",
        hint: "코드 그룹, 코드 값, 정렬 순서, 사용 여부, 설명 필드를 둔 테이블 UI를 추천합니다.",
      };
    case modalTypes.MENU_STRUCTURE:
      return {
        title: "메뉴 구조 관리",
        subtitle: "포털의 메뉴 구조와 노출 여부를 관리합니다.",
        hint: "드래그 앤 드롭으로 메뉴 순서를 변경하고, 권한별 노출 여부를 설정할 수 있도록 설계하세요.",
      };
    case modalTypes.FILE_STORAGE:
      return {
        title: "파일 스토리지 / 첨부 관리",
        subtitle: "첨부 파일과 스토리지 정책을 관리합니다.",
        hint: "저장 경로, 최대 용량, 보관 기간, 허용 확장자, 자동 정리 정책 등의 설정을 포함하세요.",
      };
    case modalTypes.BATCH_JOBS:
      return {
        title: "배치 · 스케줄 작업 관리",
        subtitle: "정기적으로 실행되는 배치 작업을 관리합니다.",
        hint: "작업 이름, 실행 주기(CRON), 마지막 실행일, 상태, 수동 실행 버튼을 제공하면 편리합니다.",
      };
    case modalTypes.INTEGRATION:
      return {
        title: "외부 연동 / 통합 관리",
        subtitle: "외부 시스템과의 연동 설정을 관리합니다.",
        hint: "SSO, LDAP, 학사/인사 시스템, 메일·SMS·푸시 연동에 대한 엔드포인트와 인증 정보를 관리하세요.",
      };
    case modalTypes.SYSTEM_MONITORING:
      return {
        title: "시스템 모니터링",
        subtitle: "시스템 상태와 에러 현황을 모니터링합니다.",
        hint: "서비스 상태(Up/Down), 응답 시간, 최근 에러 카운트, 트래픽 요약 그래프를 제공해보세요.",
      };
    case modalTypes.AUDIT_LOGS:
      return {
        title: "운영 로그 · 감사 로그 관리",
        subtitle: "중요 작업 이력을 감사 목적으로 관리합니다.",
        hint: "시간, 사용자, 작업 유형, 대상, 결과, IP 등을 포함한 필터 가능한 로그 테이블을 추천합니다.",
      };
    case modalTypes.BACKUP_RESTORE:
      return {
        title: "백업 · 복구 관리",
        subtitle: "DB 및 파일 백업/복구 정책을 관리합니다.",
        hint: "백업 파일 목록, 생성 일시, 유형(전체/증분), 용량, 복구 실행 버튼을 제공하면 좋습니다.",
      };
    default:
      return {
        title: "관리 기능",
        subtitle: "",
        hint: "",
      };
  }
}
