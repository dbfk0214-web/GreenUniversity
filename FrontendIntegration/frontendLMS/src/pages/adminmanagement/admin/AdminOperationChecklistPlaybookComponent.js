// src/components/admin/AdminOperationChecklistPlaybookComponent.jsx
import React from "react";

export default function AdminOperationChecklistPlaybookComponent() {
  return (
    <div className="space-y-6">
      {/* ===== 상단 제어 ===== */}
      <div className="flex flex-col gap-3 md:flex-row md:items-center md:justify-between">
        <div className="flex gap-3">
          <FilterSelect
            label="유형"
            options={[
              "전체",
              "정기 체크리스트",
              "이벤트 체크리스트",
              "운영 플레이북",
            ]}
          />
          <FilterSelect
            label="적용 시점"
            options={[
              "전체",
              "학기 시작",
              "수강신청",
              "시험 기간",
              "장애 대응",
            ]}
          />
        </div>

        <button
          type="button"
          className="rounded-lg bg-slate-900 px-4 py-2 text-xs font-medium text-white hover:bg-slate-800"
        >
          + 체크리스트 / 플레이북 등록
        </button>
      </div>

      {/* ===== 목록 ===== */}
      <div className="overflow-hidden rounded-xl border border-slate-200">
        <table className="w-full text-sm">
          <thead className="bg-slate-100 text-slate-600">
            <tr>
              <th className="px-4 py-3 text-left font-medium">제목</th>
              <th className="px-4 py-3 text-center font-medium">유형</th>
              <th className="px-4 py-3 text-center font-medium">적용 시점</th>
              <th className="px-4 py-3 text-center font-medium">필수</th>
              <th className="px-4 py-3 text-left font-medium">최종 수정일</th>
              <th className="px-4 py-3 text-center font-medium">관리</th>
            </tr>
          </thead>

          <tbody className="divide-y bg-white">
            <ChecklistRow
              title="학기 시작 전 필수 점검"
              type="정기 체크리스트"
              timing="학기 시작"
              required
              date="2025-03-18"
            />
            <ChecklistRow
              title="수강신청 기간 운영 절차"
              type="운영 플레이북"
              timing="수강신청"
              required
              date="2025-03-15"
            />
            <ChecklistRow
              title="시험 기간 서버 부하 대응"
              type="운영 플레이북"
              timing="시험 기간"
              date="2025-03-10"
            />
          </tbody>
        </table>
      </div>

      {/* ===== 안내 ===== */}
      <div className="rounded-lg bg-slate-50 p-4 text-xs text-slate-500">
        <p className="font-medium text-slate-600">
          💡 체크리스트 / 운영 플레이북 안내
        </p>
        <ul className="mt-1 list-disc space-y-1 pl-4">
          <li>필수 체크리스트는 생략할 수 없습니다.</li>
          <li>플레이북은 상황별 대응 기준으로 사용됩니다.</li>
          <li>정기적으로 최신 상태를 유지하세요.</li>
        </ul>
      </div>
    </div>
  );
}

/* =========================
   Row
========================= */
function ChecklistRow({
  title,
  type,
  timing,
  required,
  date,
}) {
  return (
    <tr>
      <td className="px-4 py-3 font-medium text-slate-800">
        {title}
      </td>
      <td className="px-4 py-3 text-center">{type}</td>
      <td className="px-4 py-3 text-center">{timing}</td>
      <td className="px-4 py-3 text-center">
        {required ? "✔" : "-"}
      </td>
      <td className="px-4 py-3">{date}</td>
      <td className="px-4 py-3 text-center space-x-2">
        <button className="text-xs text-blue-600 hover:underline">
          실행
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
