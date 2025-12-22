// src/components/admin/AdminKnowHowCaseBoardComponent.jsx
import React from "react";

export default function AdminKnowHowCaseBoardComponent() {
  return (
    <div className="space-y-6">
      {/* ===== 상단 제어 ===== */}
      <div className="flex flex-col gap-3 md:flex-row md:items-center md:justify-between">
        <div className="flex gap-3">
          <FilterSelect
            label="카테고리"
            options={[
              "전체",
              "학사 운영",
              "시스템 운영",
              "장애 대응",
              "민원 처리",
            ]}
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
          + 노하우 / 사례 등록
        </button>
      </div>

      {/* ===== 게시판 목록 ===== */}
      <div className="overflow-hidden rounded-xl border border-slate-200">
        <table className="w-full text-sm">
          <thead className="bg-slate-100 text-slate-600">
            <tr>
              <th className="px-4 py-3 text-left font-medium">제목</th>
              <th className="px-4 py-3 text-center font-medium">카테고리</th>
              <th className="px-4 py-3 text-center font-medium">중요</th>
              <th className="px-4 py-3 text-left font-medium">작성자</th>
              <th className="px-4 py-3 text-left font-medium">작성일</th>
              <th className="px-4 py-3 text-center font-medium">관리</th>
            </tr>
          </thead>

          <tbody className="divide-y bg-white">
            <KnowHowRow
              title="수강신청 폭주 시 대응 절차 정리"
              category="학사 운영"
              important
              author="운영자A"
              date="2025-03-18"
            />
            <KnowHowRow
              title="파일 업로드 오류 빈번 발생 원인"
              category="시스템 운영"
              author="관리자"
              date="2025-03-15"
            />
            <KnowHowRow
              title="결제 오류 민원 대응 사례"
              category="민원 처리"
              author="운영자B"
              date="2025-03-10"
            />
          </tbody>
        </table>
      </div>

      {/* ===== 안내 ===== */}
      <div className="rounded-lg bg-slate-50 p-4 text-xs text-slate-500">
        <p className="font-medium text-slate-600">
          💡 노하우 / 사례 공유 안내
        </p>
        <ul className="mt-1 list-disc space-y-1 pl-4">
          <li>반복되는 이슈는 반드시 사례로 정리하세요.</li>
          <li>중요 사례는 신규 운영자 교육 자료로 활용됩니다.</li>
          <li>개인 정보는 반드시 제거 후 등록해야 합니다.</li>
        </ul>
      </div>
    </div>
  );
}

/* =========================
   Row
========================= */
function KnowHowRow({
  title,
  category,
  important,
  author,
  date,
}) {
  return (
    <tr>
      <td className="px-4 py-3 font-medium text-slate-800">
        {title}
      </td>
      <td className="px-4 py-3 text-center">{category}</td>
      <td className="px-4 py-3 text-center">
        {important ? "✔" : "-"}
      </td>
      <td className="px-4 py-3">{author}</td>
      <td className="px-4 py-3">{date}</td>
      <td className="px-4 py-3 text-center">
        <button className="text-xs text-blue-600 hover:underline">
          상세 보기
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
