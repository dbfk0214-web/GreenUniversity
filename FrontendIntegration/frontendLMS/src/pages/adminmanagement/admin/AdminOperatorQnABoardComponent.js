// src/components/admin/AdminOperatorQnABoardComponent.jsx
import React from "react";

export default function AdminOperatorQnABoardComponent() {
  return (
    <div className="space-y-6">
      {/* ===== 필터 ===== */}
      <div className="flex flex-wrap gap-3">
        <FilterSelect
          label="처리 상태"
          options={["전체", "미답변", "답변 완료"]}
        />
        <FilterSelect
          label="문의 유형"
          options={[
            "전체",
            "학사",
            "시스템",
            "등록금",
            "기타",
          ]}
        />
      </div>

      {/* ===== Q&A 목록 ===== */}
      <div className="overflow-hidden rounded-xl border border-slate-200">
        <table className="w-full text-sm">
          <thead className="bg-slate-100 text-slate-600">
            <tr>
              <th className="px-4 py-3 text-left font-medium">제목</th>
              <th className="px-4 py-3 text-left font-medium">작성자</th>
              <th className="px-4 py-3 text-center font-medium">유형</th>
              <th className="px-4 py-3 text-center font-medium">상태</th>
              <th className="px-4 py-3 text-left font-medium">작성일</th>
              <th className="px-4 py-3 text-center font-medium">관리</th>
            </tr>
          </thead>

          <tbody className="divide-y bg-white">
            <QnaRow
              title="등록금 분할 납부 가능한가요?"
              author="20231234"
              type="등록금"
              status="WAIT"
              date="2025-03-18"
            />
            <QnaRow
              title="LMS 접속 오류 문의"
              author="20224567"
              type="시스템"
              status="DONE"
              date="2025-03-16"
            />
          </tbody>
        </table>
      </div>

      {/* ===== 안내 ===== */}
      <div className="rounded-lg bg-slate-50 p-4 text-xs text-slate-500">
        <p className="font-medium text-slate-600">
          💡 운영자 Q&A 관리 안내
        </p>
        <ul className="mt-1 list-disc space-y-1 pl-4">
          <li>미답변 문의는 우선 처리 대상입니다.</li>
          <li>답변 등록 시 자동으로 처리 완료 상태로 변경됩니다.</li>
          <li>운영자 답변은 수정 이력이 관리됩니다.</li>
        </ul>
      </div>
    </div>
  );
}

/* =========================
   Q&A Row
========================= */
function QnaRow({ title, author, type, status, date }) {
  const statusMap = {
    WAIT: {
      label: "미답변",
      badge: "bg-red-100 text-red-700",
    },
    DONE: {
      label: "답변 완료",
      badge: "bg-green-100 text-green-700",
    },
  };

  return (
    <tr>
      <td className="px-4 py-3 font-medium text-slate-800">
        {title}
      </td>
      <td className="px-4 py-3">{author}</td>
      <td className="px-4 py-3 text-center">{type}</td>
      <td className="px-4 py-3 text-center">
        <span
          className={`rounded-full px-2 py-1 text-xs font-medium ${statusMap[status].badge}`}
        >
          {statusMap[status].label}
        </span>
      </td>
      <td className="px-4 py-3">{date}</td>
      <td className="px-4 py-3 text-center">
        <button className="text-xs text-blue-600 hover:underline">
          상세 / 답변
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
