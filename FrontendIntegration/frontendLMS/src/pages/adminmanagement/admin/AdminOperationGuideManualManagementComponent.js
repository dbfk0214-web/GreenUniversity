// src/components/admin/AdminOperationGuideManualManagementComponent.jsx
import React from "react";

export default function AdminOperationGuideManualManagementComponent() {
  return (
    <div className="space-y-6">
      {/* ===== 상단 제어 ===== */}
      <div className="flex flex-col gap-3 md:flex-row md:items-center md:justify-between">
        <div className="flex gap-3">
          <FilterSelect
            label="문서 유형"
            options={[
              "전체",
              "시스템 매뉴얼",
              "운영 가이드",
              "장애 대응",
              "정책 / 규정",
            ]}
          />
          <FilterSelect
            label="공개 범위"
            options={["전체", "운영자", "관리자 전용"]}
          />
        </div>

        <button
          type="button"
          className="rounded-lg bg-slate-900 px-4 py-2 text-xs font-medium text-white hover:bg-slate-800"
        >
          + 가이드 / 매뉴얼 등록
        </button>
      </div>

      {/* ===== 문서 목록 ===== */}
      <div className="overflow-hidden rounded-xl border border-slate-200">
        <table className="w-full text-sm">
          <thead className="bg-slate-100 text-slate-600">
            <tr>
              <th className="px-4 py-3 text-left font-medium">제목</th>
              <th className="px-4 py-3 text-center font-medium">유형</th>
              <th className="px-4 py-3 text-center font-medium">버전</th>
              <th className="px-4 py-3 text-center font-medium">공개 범위</th>
              <th className="px-4 py-3 text-left font-medium">최종 수정일</th>
              <th className="px-4 py-3 text-center font-medium">관리</th>
            </tr>
          </thead>

          <tbody className="divide-y bg-white">
            <GuideRow
              title="LMS 기본 운영 매뉴얼"
              type="시스템 매뉴얼"
              version="v2.1"
              scope="운영자"
              date="2025-03-18"
            />
            <GuideRow
              title="장애 발생 시 대응 절차"
              type="장애 대응"
              version="v1.4"
              scope="관리자 전용"
              date="2025-03-12"
            />
            <GuideRow
              title="개인정보 처리 운영 가이드"
              type="정책 / 규정"
              version="v3.0"
              scope="운영자"
              date="2025-03-01"
            />
          </tbody>
        </table>
      </div>

      {/* ===== 안내 ===== */}
      <div className="rounded-lg bg-slate-50 p-4 text-xs text-slate-500">
        <p className="font-medium text-slate-600">
          💡 운영 가이드 · 매뉴얼 관리 안내
        </p>
        <ul className="mt-1 list-disc space-y-1 pl-4">
          <li>모든 매뉴얼은 버전 관리를 권장합니다.</li>
          <li>정책/규정 문서는 변경 이력을 반드시 남기세요.</li>
          <li>운영 기준 문서는 사례 게시판과 분리해 관리합니다.</li>
        </ul>
      </div>
    </div>
  );
}

/* =========================
   Row
========================= */
function GuideRow({ title, type, version, scope, date }) {
  const scopeMap = {
    운영자: "bg-green-100 text-green-700",
    "관리자 전용": "bg-slate-200 text-slate-600",
  };

  return (
    <tr>
      <td className="px-4 py-3 font-medium text-slate-800">
        {title}
      </td>
      <td className="px-4 py-3 text-center">{type}</td>
      <td className="px-4 py-3 text-center">{version}</td>
      <td className="px-4 py-3 text-center">
        <span
          className={`rounded-full px-2 py-1 text-xs font-medium ${scopeMap[scope]}`}
        >
          {scope}
        </span>
      </td>
      <td className="px-4 py-3">{date}</td>
      <td className="px-4 py-3 text-center space-x-2">
        <button className="text-xs text-blue-600 hover:underline">
          보기
        </button>
        <button className="text-xs text-blue-600 hover:underline">
          수정
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
