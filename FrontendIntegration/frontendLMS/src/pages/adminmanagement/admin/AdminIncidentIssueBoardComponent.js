// src/components/admin/AdminIncidentIssueBoardComponent.jsx
import React from "react";

export default function AdminIncidentIssueBoardComponent() {
  return (
    <div className="space-y-6">
      {/* ===== 필터 ===== */}
      <div className="flex flex-wrap gap-3">
        <FilterSelect
          label="상태"
          options={["전체", "발생", "조치 중", "복구 완료"]}
        />
        <FilterSelect
          label="영향 범위"
          options={["전체", "전체 시스템", "학습(LMS)", "결제", "파일"]}
        />
        <FilterSelect
          label="공개 범위"
          options={["전체", "내부", "부분 공개"]}
        />
      </div>

      {/* ===== 장애 이슈 목록 ===== */}
      <div className="overflow-hidden rounded-xl border border-slate-200">
        <table className="w-full text-sm">
          <thead className="bg-slate-100 text-slate-600">
            <tr>
              <th className="px-4 py-3 text-left font-medium">제목</th>
              <th className="px-4 py-3 text-center font-medium">상태</th>
              <th className="px-4 py-3 text-center font-medium">영향 범위</th>
              <th className="px-4 py-3 text-left font-medium">발생 시각</th>
              <th className="px-4 py-3 text-left font-medium">최근 업데이트</th>
              <th className="px-4 py-3 text-center font-medium">관리</th>
            </tr>
          </thead>

          <tbody className="divide-y bg-white">
            <IncidentRow
              title="LMS 로그인 불가 현상"
              status="ONGOING"
              scope="학습(LMS)"
              start="2025-03-22 09:15"
              updated="2025-03-22 10:05"
            />
            <IncidentRow
              title="파일 업로드 지연"
              status="FIXING"
              scope="파일"
              start="2025-03-21 14:30"
              updated="2025-03-21 15:10"
            />
            <IncidentRow
              title="등록금 결제 오류"
              status="RESOLVED"
              scope="결제"
              start="2025-03-20 11:00"
              updated="2025-03-20 12:40"
            />
          </tbody>
        </table>
      </div>

      {/* ===== 안내 ===== */}
      <div className="rounded-lg bg-slate-50 p-4 text-xs text-slate-500">
        <p className="font-medium text-slate-600">
          💡 장애 이슈 공유 안내
        </p>
        <ul className="mt-1 list-disc space-y-1 pl-4">
          <li>장애 발생 시 즉시 등록하여 공유하세요.</li>
          <li>상태 변경 시 이력 업데이트를 권장합니다.</li>
          <li>복구 완료 후 원인 분석을 남기면 운영 품질이 향상됩니다.</li>
        </ul>
      </div>
    </div>
  );
}

/* =========================
   Row
========================= */
function IncidentRow({ title, status, scope, start, updated }) {
  const statusMap = {
    ONGOING: {
      label: "발생",
      badge: "bg-red-100 text-red-700",
    },
    FIXING: {
      label: "조치 중",
      badge: "bg-yellow-100 text-yellow-700",
    },
    RESOLVED: {
      label: "복구 완료",
      badge: "bg-green-100 text-green-700",
    },
  };

  return (
    <tr>
      <td className="px-4 py-3 font-medium text-slate-800">
        {title}
      </td>
      <td className="px-4 py-3 text-center">
        <span
          className={`rounded-full px-2 py-1 text-xs font-medium ${statusMap[status].badge}`}
        >
          {statusMap[status].label}
        </span>
      </td>
      <td className="px-4 py-3 text-center">{scope}</td>
      <td className="px-4 py-3">{start}</td>
      <td className="px-4 py-3">{updated}</td>
      <td className="px-4 py-3 text-center">
        <button className="text-xs text-blue-600 hover:underline">
          상세 / 업데이트
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
