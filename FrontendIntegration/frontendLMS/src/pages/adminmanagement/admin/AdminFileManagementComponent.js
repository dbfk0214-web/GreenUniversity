// src/components/admin/AdminFileManagementComponent.jsx
import React from "react";

export default function AdminFileManagementComponent() {
  return (
    <div className="space-y-6">
      {/* ===== 필터 영역 ===== */}
      <div className="flex flex-col gap-3 md:flex-row md:items-end md:justify-between">
        <div className="flex flex-wrap gap-3">
          <FilterSelect
            label="파일 유형"
            options={["전체", "PDF", "PPT", "ZIP", "이미지", "기타"]}
          />
          <FilterSelect
            label="출처"
            options={[
              "전체",
              "강의 자료",
              "과제 제출",
              "공지 / 뉴스",
            ]}
          />
          <FilterSelect
            label="상태"
            options={["전체", "활성", "비활성"]}
          />
        </div>
      </div>

      {/* ===== 파일 목록 ===== */}
      <div className="overflow-hidden rounded-xl border border-slate-200">
        <table className="w-full text-sm">
          <thead className="bg-slate-100 text-slate-600">
            <tr>
              <th className="px-4 py-3 text-left font-medium">파일명</th>
              <th className="px-4 py-3 text-left font-medium">유형</th>
              <th className="px-4 py-3 text-left font-medium">출처</th>
              <th className="px-4 py-3 text-right font-medium">용량</th>
              <th className="px-4 py-3 text-center font-medium">다운로드</th>
              <th className="px-4 py-3 text-center font-medium">상태</th>
              <th className="px-4 py-3 text-center font-medium">관리</th>
            </tr>
          </thead>

          <tbody className="divide-y bg-white">
            <FileRow
              name="week3-css-layout.pdf"
              type="PDF"
              source="강의 자료"
              size="4.2MB"
              downloads={128}
              active
            />
            <FileRow
              name="assignment1.zip"
              type="ZIP"
              source="과제 제출"
              size="32MB"
              downloads={24}
              active
            />
            <FileRow
              name="lab-guide.docx"
              type="DOC"
              source="공지 / 뉴스"
              size="1.1MB"
              downloads={0}
              active={false}
            />
          </tbody>
        </table>
      </div>

      {/* ===== 안내 ===== */}
      <div className="rounded-lg bg-slate-50 p-4 text-xs text-slate-500">
        <p className="font-medium text-slate-600">
          💡 파일 관리 안내
        </p>
        <ul className="mt-1 list-disc space-y-1 pl-4">
          <li>비활성 파일은 다운로드가 즉시 차단됩니다.</li>
          <li>삭제된 파일은 복구할 수 없습니다.</li>
          <li>대용량 파일은 서버 자원 사용에 유의하세요.</li>
        </ul>
      </div>
    </div>
  );
}

/* =========================
   파일 Row
========================= */
function FileRow({
  name,
  type,
  source,
  size,
  downloads,
  active,
}) {
  return (
    <tr>
      <td className="px-4 py-3 font-medium text-slate-800">
        {name}
      </td>
      <td className="px-4 py-3">{type}</td>
      <td className="px-4 py-3">{source}</td>
      <td className="px-4 py-3 text-right">{size}</td>
      <td className="px-4 py-3 text-center">{downloads}</td>
      <td className="px-4 py-3 text-center">
        <span
          className={`rounded-full px-2 py-1 text-xs font-medium ${
            active
              ? "bg-green-100 text-green-700"
              : "bg-slate-200 text-slate-600"
          }`}
        >
          {active ? "활성" : "비활성"}
        </span>
      </td>
      <td className="px-4 py-3 text-center space-x-2">
        <button className="text-xs text-blue-600 hover:underline">
          비활성화
        </button>
        <button className="text-xs text-red-500 hover:underline">
          삭제
        </button>
      </td>
    </tr>
  );
}

/* =========================
   필터 셀렉트
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
