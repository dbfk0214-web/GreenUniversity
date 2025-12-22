// src/components/admin/AdminReleaseNoteManagementComponent.jsx
import React from "react";

export default function AdminReleaseNoteManagementComponent() {
  return (
    <div className="space-y-6">
      {/* ===== 상단 제어 ===== */}
      <div className="flex items-center justify-between">
        <div className="flex gap-3">
          <FilterSelect
            label="공개 범위"
            options={["전체", "전체 공개", "내부 전용"]}
          />
          <FilterSelect
            label="중요도"
            options={["전체", "일반", "중요"]}
          />
        </div>

        <button
          type="button"
          className="rounded-lg bg-slate-900 px-4 py-2 text-xs font-medium text-white hover:bg-slate-800"
        >
          + 릴리즈 노트 등록
        </button>
      </div>

      {/* ===== 릴리즈 노트 목록 ===== */}
      <div className="overflow-hidden rounded-xl border border-slate-200">
        <table className="w-full text-sm">
          <thead className="bg-slate-100 text-slate-600">
            <tr>
              <th className="px-4 py-3 text-left font-medium">버전</th>
              <th className="px-4 py-3 text-left font-medium">제목</th>
              <th className="px-4 py-3 text-center font-medium">중요</th>
              <th className="px-4 py-3 text-center font-medium">공개 범위</th>
              <th className="px-4 py-3 text-left font-medium">배포일</th>
              <th className="px-4 py-3 text-center font-medium">관리</th>
            </tr>
          </thead>

          <tbody className="divide-y bg-white">
            <ReleaseRow
              version="v1.4.0"
              title="과제 피드백 기능 추가"
              important
              scope="PUBLIC"
              date="2025-03-20"
            />
            <ReleaseRow
              version="v1.3.5"
              title="파일 업로드 안정성 개선"
              scope="PUBLIC"
              date="2025-03-12"
            />
            <ReleaseRow
              version="v1.3.0"
              title="관리자 권한 구조 개편"
              scope="INTERNAL"
              date="2025-03-01"
            />
          </tbody>
        </table>
      </div>

      {/* ===== 안내 ===== */}
      <div className="rounded-lg bg-slate-50 p-4 text-xs text-slate-500">
        <p className="font-medium text-slate-600">
          💡 릴리즈 노트 관리 안내
        </p>
        <ul className="mt-1 list-disc space-y-1 pl-4">
          <li>중요 릴리즈는 상단에 강조 표시됩니다.</li>
          <li>내부 전용 릴리즈는 관리자만 열람 가능합니다.</li>
          <li>릴리즈 노트는 삭제보다 수정 이력을 권장합니다.</li>
        </ul>
      </div>
    </div>
  );
}

/* =========================
   Row
========================= */
function ReleaseRow({ version, title, important, scope, date }) {
  const scopeMap = {
    PUBLIC: {
      label: "전체 공개",
      badge: "bg-green-100 text-green-700",
    },
    INTERNAL: {
      label: "내부 전용",
      badge: "bg-slate-200 text-slate-600",
    },
  };

  return (
    <tr>
      <td className="px-4 py-3 font-medium text-slate-800">
        {version}
      </td>
      <td className="px-4 py-3">{title}</td>
      <td className="px-4 py-3 text-center">
        {important ? "✔" : "-"}
      </td>
      <td className="px-4 py-3 text-center">
        <span
          className={`rounded-full px-2 py-1 text-xs font-medium ${scopeMap[scope].badge}`}
        >
          {scopeMap[scope].label}
        </span>
      </td>
      <td className="px-4 py-3">{date}</td>
      <td className="px-4 py-3 text-center space-x-2">
        <button className="text-xs text-blue-600 hover:underline">
          수정
        </button>
        <button className="text-xs text-red-500 hover:underline">
          삭제
        </button>
      </td>
    </tr>
  );
}

/* =========================
   필터
========================= */
function FilterSelect({ label, options }) {
  return (
    <div>
      <label className="block text-xs font-medium text-slate-600">
        {label}
      </label>
      <select className="mt-1 rounded-lg border border-slate-200 bg-white px-3 py-2 text-sm">
        {options.map((opt) => (
          <option key={opt}>{opt}</option>
        ))}
      </select>
    </div>
  );
}
