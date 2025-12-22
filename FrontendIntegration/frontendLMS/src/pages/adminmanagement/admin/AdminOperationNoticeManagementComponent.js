// src/components/admin/AdminOperationNoticeManagementComponent.jsx
import React from "react";

export default function AdminOperationNoticeManagementComponent() {
  return (
    <div className="space-y-6">
      {/* ===== 상단 제어 ===== */}
      <div className="flex items-center justify-between">
        <div className="flex gap-3">
          <FilterSelect
            label="상태"
            options={["전체", "게시 중", "게시 예정", "종료"]}
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
          + 운영 공지 등록
        </button>
      </div>

      {/* ===== 운영 공지 목록 ===== */}
      <div className="overflow-hidden rounded-xl border border-slate-200">
        <table className="w-full text-sm">
          <thead className="bg-slate-100 text-slate-600">
            <tr>
              <th className="px-4 py-3 text-left font-medium">제목</th>
              <th className="px-4 py-3 text-center font-medium">중요</th>
              <th className="px-4 py-3 text-center font-medium">상태</th>
              <th className="px-4 py-3 text-left font-medium">게시 기간</th>
              <th className="px-4 py-3 text-center font-medium">관리</th>
            </tr>
          </thead>

          <tbody className="divide-y bg-white">
            <OperationNoticeRow
              title="LMS 서버 점검 안내"
              important
              status="POSTING"
              period="2025-03-20 ~ 2025-03-20"
            />
            <OperationNoticeRow
              title="신규 운영 정책 적용 안내"
              status="SCHEDULED"
              period="2025-03-25 ~ 2025-04-01"
            />
            <OperationNoticeRow
              title="이전 점검 공지"
              status="ENDED"
              period="2025-02-01 ~ 2025-02-01"
            />
          </tbody>
        </table>
      </div>

      {/* ===== 안내 ===== */}
      <div className="rounded-lg bg-slate-50 p-4 text-xs text-slate-500">
        <p className="font-medium text-slate-600">
          💡 운영 공지 관리 안내
        </p>
        <ul className="mt-1 list-disc space-y-1 pl-4">
          <li>운영 공지는 관리자 및 운영자에게만 노출됩니다.</li>
          <li>중요 공지는 목록 상단에 우선 표시됩니다.</li>
          <li>게시 기간 종료 시 자동으로 비노출 처리됩니다.</li>
        </ul>
      </div>
    </div>
  );
}

/* =========================
   Row
========================= */
function OperationNoticeRow({ title, important, status, period }) {
  const statusMap = {
    POSTING: {
      label: "게시 중",
      badge: "bg-green-100 text-green-700",
    },
    SCHEDULED: {
      label: "게시 예정",
      badge: "bg-blue-100 text-blue-700",
    },
    ENDED: {
      label: "종료",
      badge: "bg-slate-200 text-slate-600",
    },
  };

  return (
    <tr>
      <td className="px-4 py-3 font-medium text-slate-800">
        {title}
      </td>
      <td className="px-4 py-3 text-center">
        {important ? "✔" : "-"}
      </td>
      <td className="px-4 py-3 text-center">
        <span
          className={`rounded-full px-2 py-1 text-xs font-medium ${statusMap[status].badge}`}
        >
          {statusMap[status].label}
        </span>
      </td>
      <td className="px-4 py-3">{period}</td>
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
