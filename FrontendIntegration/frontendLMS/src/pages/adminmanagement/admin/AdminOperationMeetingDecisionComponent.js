// src/components/admin/AdminOperationMeetingDecisionComponent.jsx
import React from "react";

export default function AdminOperationMeetingDecisionComponent() {
  return (
    <div className="space-y-6">
      {/* ===== 상단 제어 ===== */}
      <div className="flex flex-col gap-3 md:flex-row md:items-center md:justify-between">
        <div className="flex gap-3">
          <FilterSelect
            label="회의 유형"
            options={[
              "전체",
              "정기 운영 회의",
              "장애 대응 회의",
              "정책 회의",
            ]}
          />
          <FilterSelect
            label="결정 상태"
            options={[
              "전체",
              "진행 중",
              "적용 완료",
              "보류",
            ]}
          />
        </div>

        <button
          type="button"
          className="rounded-lg bg-slate-900 px-4 py-2 text-xs font-medium text-white hover:bg-slate-800"
        >
          + 회의록 / 결정 사항 등록
        </button>
      </div>

      {/* ===== 결정 사항 목록 ===== */}
      <div className="overflow-hidden rounded-xl border border-slate-200">
        <table className="w-full text-sm">
          <thead className="bg-slate-100 text-slate-600">
            <tr>
              <th className="px-4 py-3 text-left font-medium">회의명</th>
              <th className="px-4 py-3 text-left font-medium">결정 사항</th>
              <th className="px-4 py-3 text-center font-medium">상태</th>
              <th className="px-4 py-3 text-left font-medium">담당자</th>
              <th className="px-4 py-3 text-left font-medium">적용 시점</th>
              <th className="px-4 py-3 text-center font-medium">관리</th>
            </tr>
          </thead>

          <tbody className="divide-y bg-white">
            <DecisionRow
              meeting="2025-03 정기 운영 회의"
              decision="수강신청 서버 증설"
              status="IN_PROGRESS"
              owner="시스템팀"
              applyDate="2025-04-01"
            />
            <DecisionRow
              meeting="장애 대응 회의 (LMS 로그인)"
              decision="인증 모듈 롤백"
              status="DONE"
              owner="개발팀"
              applyDate="즉시"
            />
            <DecisionRow
              meeting="운영 정책 회의"
              decision="파일 업로드 용량 상향"
              status="HOLD"
              owner="운영팀"
              applyDate="미정"
            />
          </tbody>
        </table>
      </div>

      {/* ===== 안내 ===== */}
      <div className="rounded-lg bg-slate-50 p-4 text-xs text-slate-500">
        <p className="font-medium text-slate-600">
          💡 회의록 · 결정 사항 관리 안내
        </p>
        <ul className="mt-1 list-disc space-y-1 pl-4">
          <li>모든 결정 사항에는 담당자를 반드시 지정하세요.</li>
          <li>적용 완료 후 상태를 업데이트해야 합니다.</li>
          <li>운영 가이드 및 체크리스트와 연계 가능합니다.</li>
        </ul>
      </div>
    </div>
  );
}

/* =========================
   Row
========================= */
function DecisionRow({
  meeting,
  decision,
  status,
  owner,
  applyDate,
}) {
  const statusMap = {
    IN_PROGRESS: {
      label: "진행 중",
      badge: "bg-blue-100 text-blue-700",
    },
    DONE: {
      label: "적용 완료",
      badge: "bg-green-100 text-green-700",
    },
    HOLD: {
      label: "보류",
      badge: "bg-slate-200 text-slate-600",
    },
  };

  return (
    <tr>
      <td className="px-4 py-3 font-medium text-slate-800">
        {meeting}
      </td>
      <td className="px-4 py-3">{decision}</td>
      <td className="px-4 py-3 text-center">
        <span
          className={`rounded-full px-2 py-1 text-xs font-medium ${statusMap[status].badge}`}
        >
          {statusMap[status].label}
        </span>
      </td>
      <td className="px-4 py-3">{owner}</td>
      <td className="px-4 py-3">{applyDate}</td>
      <td className="px-4 py-3 text-center">
        <button className="text-xs text-blue-600 hover:underline">
          상세
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
