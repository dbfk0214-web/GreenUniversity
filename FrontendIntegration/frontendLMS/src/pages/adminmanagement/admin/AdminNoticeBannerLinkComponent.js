// src/components/admin/AdminNoticeBannerLinkComponent.jsx
import React, { useState } from "react";

export default function AdminNoticeBannerLinkComponent() {
  const [linked, setLinked] = useState(false);

  return (
    <div className="space-y-6">
      {/* ===== 공지 선택 ===== */}
      <section className="space-y-4">
        <FormSelect
          label="연동할 공지 선택"
          options={[
            "2025학년도 수강신청 일정 안내",
            "LMS 시스템 점검 공지",
            "공학관 시설 공사 안내",
          ]}
        />
      </section>

      {/* ===== 배너 연동 여부 ===== */}
      <section className="space-y-2">
        <p className="text-xs font-medium text-slate-600">
          메인 배너 노출
        </p>
        <div className="flex gap-4 text-sm">
          <label className="flex items-center gap-2">
            <input
              type="radio"
              name="banner"
              checked={linked}
              onChange={() => setLinked(true)}
            />
            사용
          </label>
          <label className="flex items-center gap-2">
            <input
              type="radio"
              name="banner"
              checked={!linked}
              onChange={() => setLinked(false)}
            />
            미사용
          </label>
        </div>
      </section>

      {/* ===== 배너 상세 설정 ===== */}
      {linked && (
        <>
          <section className="space-y-4">
            <FormInput
              label="배너 제목"
              placeholder="예: 수강신청 일정 안내"
            />
            <FormTextarea
              label="배너 문구"
              placeholder="메인 화면에 표시될 간단한 안내 문구를 입력하세요."
              rows={2}
            />
          </section>

          {/* ===== 배너 이미지 ===== */}
          <section>
            <label className="text-xs font-medium text-slate-600">
              배너 이미지 (선택)
            </label>
            <div className="mt-2 flex flex-col items-center justify-center rounded-xl border-2 border-dashed border-slate-300 bg-slate-50 px-4 py-6 text-center">
              <p className="text-sm text-slate-600">
                공지 대표 이미지를 배너로 사용합니다.
              </p>
              <button
                type="button"
                className="mt-2 rounded-md bg-white px-3 py-1.5 text-xs font-medium text-slate-700 shadow-sm hover:bg-slate-100"
              >
                이미지 선택
              </button>
              <p className="mt-2 text-[11px] text-slate-400">
                권장 비율 16:9 · JPG/PNG
              </p>
            </div>
          </section>
        </>
      )}

      {/* ===== 연동 요약 ===== */}
      <section className="rounded-xl border border-slate-200 bg-slate-50 p-4">
        <p className="text-xs font-medium text-slate-600 mb-2">
          연동 요약
        </p>
        <ul className="text-xs text-slate-500 space-y-1">
          <li>• 공지 게시 기간과 배너 노출 기간은 자동 연동됩니다.</li>
          <li>• 공지가 비노출되면 배너도 자동 해제됩니다.</li>
          <li>• 배너 클릭 시 해당 공지로 이동합니다.</li>
        </ul>
      </section>

      {/* ===== 버튼 ===== */}
      <div className="flex justify-end gap-2 pt-4">
        <button
          type="button"
          className="rounded-lg border border-slate-200 px-4 py-2 text-xs"
        >
          취소
        </button>
        <button
          type="button"
          disabled
          className="rounded-lg bg-slate-900 px-4 py-2 text-xs font-medium text-white opacity-60"
        >
          연동 저장 (연결 후 활성화)
        </button>
      </div>

      {/* ===== 안내 ===== */}
      <div className="rounded-lg bg-slate-50 p-4 text-xs text-slate-500">
        <p className="font-medium text-slate-600">
          💡 공지–배너 연동 안내
        </p>
        <ul className="mt-1 list-disc space-y-1 pl-4">
          <li>중요 공지만 배너 연동을 권장합니다.</li>
          <li>동시에 노출되는 배너 수는 제한될 수 있습니다.</li>
          <li>배너는 메인 페이지에 우선 노출됩니다.</li>
        </ul>
      </div>
    </div>
  );
}

/* =========================
   공통 컴포넌트
========================= */
function FormInput({ label, ...props }) {
  return (
    <div>
      <label className="text-xs font-medium text-slate-600">
        {label}
      </label>
      <input
        {...props}
        className="mt-1 w-full rounded-lg border border-slate-200 px-3 py-2 text-sm
                   focus:outline-none focus:ring-2 focus:ring-blue-400"
      />
    </div>
  );
}

function FormTextarea({ label, rows = 2, ...props }) {
  return (
    <div>
      <label className="text-xs font-medium text-slate-600">
        {label}
      </label>
      <textarea
        rows={rows}
        {...props}
        className="mt-1 w-full rounded-lg border border-slate-200 px-3 py-2 text-sm
                   focus:outline-none focus:ring-2 focus:ring-blue-400"
      />
    </div>
  );
}

function FormSelect({ label, options }) {
  return (
    <div>
      <label className="text-xs font-medium text-slate-600">
        {label}
      </label>
      <select className="mt-1 w-full rounded-lg border border-slate-200 bg-white px-3 py-2 text-sm">
        {options.map((opt) => (
          <option key={opt}>{opt}</option>
        ))}
      </select>
    </div>
  );
}
