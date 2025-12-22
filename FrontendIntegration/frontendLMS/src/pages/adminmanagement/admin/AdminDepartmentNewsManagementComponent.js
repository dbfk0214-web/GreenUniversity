// src/components/admin/AdminDepartmentNewsManagementComponent.jsx
import React from "react";

export default function AdminDepartmentNewsManagementComponent() {
  return (
    <div className="space-y-6">
      {/* ===== 상단 제어 ===== */}
      <div className="flex flex-col gap-3 md:flex-row md:items-center md:justify-between">
        <div className="flex gap-3">
          <FilterSelect
            label="게시 상태"
            options={["전체", "게시 중", "게시 예정", "종료"]}
          />
          <FilterSelect
            label="학과"
            options={["전체", "컴퓨터공학과", "전자공학과", "기계공학과"]}
          />
        </div>

        <button
          type="button"
          className="rounded-lg bg-slate-900 px-4 py-2 text-xs font-medium text-white hover:bg-slate-800"
        >
          + 학과 소식 등록
        </button>
      </div>

      {/* ===== 뉴스 리스트 ===== */}
      <div className="overflow-hidden rounded-xl border border-slate-200">
        <table className="w-full text-sm">
          <thead className="bg-slate-100 text-slate-600">
            <tr>
              <th className="px-4 py-3 text-left font-medium">제목</th>
              <th className="px-4 py-3 text-left font-medium">학과</th>
              <th className="px-4 py-3 text-center font-medium">게시 상태</th>
              <th className="px-4 py-3 text-center font-medium">상단 고정</th>
              <th className="px-4 py-3 text-left font-medium">게시 기간</th>
              <th className="px-4 py-3 text-center font-medium">관리</th>
            </tr>
          </thead>

          <tbody className="divide-y bg-white">
            <NewsRow
              title="2025학년도 졸업 작품 전시회 개최"
              department="컴퓨터공학과"
              status="POSTING"
              pinned
              period="2025-04-01 ~ 2025-04-30"
            />
            <NewsRow
              title="신입생 오리엔테이션 안내"
              department="전자공학과"
              status="SCHEDULED"
              period="2025-05-01 ~ 2025-05-10"
            />
            <NewsRow
              title="학과 세미나 종료 안내"
              department="기계공학과"
              status="ENDED"
              period="2025-03-01 ~ 2025-03-15"
            />
          </tbody>
        </table>
      </div>

      {/* ===== 안내 ===== */}
      <div className="rounded-lg bg-slate-50 p-4 text-xs text-slate-500">
        <p className="font-medium text-slate-600">
          💡 학과 소식 / 뉴스 관리 안내
        </p>
        <ul className="mt-1 list-disc space-y-1 pl-4">
          <li>게시 기간에 따라 자동으로 노출 상태가 변경됩니다.</li>
          <li>상단 고정은 동일 학과 기준으로 적용됩니다.</li>
          <li>외부 공개 콘텐츠는 내용 검수 후 게시하세요.</li>
        </ul>
      </div>
    </div>
  );
}

/* =========================
   뉴스 Row
========================= */
function NewsRow({
  title,
  department,
  status,
  pinned,
  period,
}) {
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
      <td className="px-4 py-3">{department}</td>
      <td className="px-4 py-3 text-center">
        <span
          className={`rounded-full px-2 py-1 text-xs font-medium ${statusMap[status].badge}`}
        >
          {statusMap[status].label}
        </span>
      </td>
      <td className="px-4 py-3 text-center">
        {pinned ? "✔" : "-"}
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
