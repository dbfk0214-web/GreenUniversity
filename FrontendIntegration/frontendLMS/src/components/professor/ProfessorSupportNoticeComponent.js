// src/components/professor/ProfessorSupportNoticeComponent.jsx
import React from "react";

export default function ProfessorSupportNoticeComponent() {
  return (
    <div className="space-y-6">
      {/* ===== 공지 리스트 ===== */}
      <div className="space-y-3">
        <SupportNoticeItem
          type="IT"
          title="📌 LMS 시스템 점검 안내"
          date="2025-04-15"
          department="정보전산팀"
          important
        />

        <SupportNoticeItem
          type="시설"
          title="공학관 냉·난방 공사 일정 안내"
          date="2025-04-12"
          department="시설관리팀"
        />

        <SupportNoticeItem
          type="행정"
          title="지원 요청 처리 절차 변경 안내"
          date="2025-04-05"
          department="학사팀"
        />
      </div>

      {/* ===== 안내 ===== */}
      <div className="rounded-lg bg-slate-50 p-4 text-xs text-slate-500">
        <p className="font-medium text-slate-600">
          💡 지원 공지 안내
        </p>
        <ul className="mt-1 list-disc space-y-1 pl-4">
          <li>중요 공지는 상단에 고정되어 표시됩니다.</li>
          <li>지원 관련 변경 사항은 반드시 확인 바랍니다.</li>
          <li>문의 사항은 담당 부서로 연락하세요.</li>
        </ul>
      </div>
    </div>
  );
}

/* =========================
   지원 공지 아이템
========================= */
function SupportNoticeItem({
  type,
  title,
  date,
  department,
  important,
}) {
  const typeColorMap = {
    IT: "bg-blue-100 text-blue-700",
    시설: "bg-green-100 text-green-700",
    행정: "bg-purple-100 text-purple-700",
  };

  return (
    <div
      className={`rounded-xl border p-4 ${
        important
          ? "border-red-200 bg-red-50"
          : "border-slate-200 bg-white"
      }`}
    >
      <div className="flex items-start justify-between">
        <div>
          <div className="flex items-center gap-2">
            <span
              className={`rounded-full px-2 py-0.5 text-[10px] font-medium ${
                typeColorMap[type]
              }`}
            >
              {type}
            </span>
            <p className="text-sm font-semibold text-slate-800">
              {title}
            </p>
          </div>

          <p className="mt-1 text-xs text-slate-500">
            공지일: {date}
          </p>
          <p className="mt-1 text-xs text-slate-500">
            담당 부서: {department}
          </p>
        </div>

        {important && (
          <span className="rounded-full bg-red-100 px-2 py-1 text-[10px] font-medium text-red-700">
            중요
          </span>
        )}
      </div>
    </div>
  );
}
