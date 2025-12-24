// src/components/admin/AdminNoticePeriodSettingComponent.jsx
import React, { useState } from "react";

export default function AdminNoticePeriodSettingComponent() {
  const [form, setForm] = useState({
    startDate: "",
    endDate: "",
    pinned: false,
  });

  const handleChange = (e) => {
    const { name, value, type, checked } = e.target;

    setForm((prev) => {
      const updated = {
        ...prev,
        [name]: type === "checkbox" ? checked : value,
      };

      // 🔒 날짜 유효성 보정
      if (name === "startDate" && prev.endDate && value > prev.endDate) {
        updated.endDate = "";
      }
      if (name === "endDate" && prev.startDate && value < prev.startDate) {
        updated.startDate = "";
      }

      return updated;
    });
  };

  return (
    <div className="space-y-6">
      {/* ===== 게시 기간 ===== */}
      <section className="space-y-4">
        <p className="text-sm font-semibold text-slate-800">
          게시 기간 설정
        </p>

        <div className="grid grid-cols-1 gap-4 md:grid-cols-2">
          <FormInput
            label="게시 시작일"
            type="date"
            name="startDate"
            value={form.startDate}
            onChange={handleChange}
          />
          <FormInput
            label="게시 종료일"
            type="date"
            name="endDate"
            value={form.endDate}
            onChange={handleChange}
          />
        </div>
      </section>

      {/* ===== 상단 고정 ===== */}
      <section className="flex items-center gap-3">
        <input
          type="checkbox"
          name="pinned"
          checked={form.pinned}
          onChange={handleChange}
        />
        <label className="text-sm text-slate-700">
          게시 기간 동안 상단 고정
        </label>
      </section>

      {/* ===== 현재 상태 ===== */}
      <section className="rounded-xl border border-slate-200 bg-slate-50 p-4">
        <p className="text-xs font-medium text-slate-600 mb-2">
          현재 게시 상태
        </p>

        <div className="flex items-center gap-3 text-sm">
          <StatusBadge
            startDate={form.startDate}
            endDate={form.endDate}
          />
          <span className="text-slate-500">
            기간에 따라 자동으로 게시 상태가 변경됩니다.
          </span>
        </div>
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
          기간 저장 (연결 후 활성화)
        </button>
      </div>

      {/* ===== 안내 ===== */}
      <div className="rounded-lg bg-slate-50 p-4 text-xs text-slate-500">
        <p className="font-medium text-slate-600">
          💡 게시 기간 설정 안내
        </p>
        <ul className="mt-1 list-disc space-y-1 pl-4">
          <li>게시 종료일 이후에는 자동으로 비노출 처리됩니다.</li>
          <li>상단 고정은 게시 기간 동안만 유지됩니다.</li>
          <li>기간 미설정 시 수동 노출 관리가 필요합니다.</li>
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

function StatusBadge({ startDate, endDate }) {
  const today = new Date().toISOString().slice(0, 10);

  if (!startDate || !endDate) {
    return (
      <span className="rounded-full bg-slate-200 px-2 py-1 text-xs text-slate-600">
        기간 미설정
      </span>
    );
  }

  if (today < startDate) {
    return (
      <span className="rounded-full bg-blue-100 px-2 py-1 text-xs text-blue-700">
        게시 예정
      </span>
    );
  }

  if (today > endDate) {
    return (
      <span className="rounded-full bg-red-100 px-2 py-1 text-xs text-red-700">
        게시 종료
      </span>
    );
  }

  return (
    <span className="rounded-full bg-green-100 px-2 py-1 text-xs text-green-700">
      게시 중
    </span>
  );
}
