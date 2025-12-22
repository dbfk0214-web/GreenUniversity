// src/components/admin/AdminMaterialCategoryManagementComponent.jsx
import React from "react";

export default function AdminMaterialCategoryManagementComponent() {
  return (
    <div className="space-y-6">
      {/* ===== 상단 버튼 ===== */}
      <div className="flex justify-end">
        <button
          type="button"
          className="rounded-lg bg-slate-900 px-4 py-2 text-xs font-medium text-white hover:bg-slate-800"
        >
          + 카테고리 추가
        </button>
      </div>

      {/* ===== 카테고리 목록 ===== */}
      <div className="overflow-hidden rounded-xl border border-slate-200">
        <table className="w-full text-sm">
          <thead className="bg-slate-100 text-slate-600">
            <tr>
              <th className="px-4 py-3 text-left font-medium">
                카테고리명
              </th>
              <th className="px-4 py-3 text-left font-medium">
                설명
              </th>
              <th className="px-4 py-3 text-center font-medium">
                노출 여부
              </th>
              <th className="px-4 py-3 text-center font-medium">
                정렬 순서
              </th>
              <th className="px-4 py-3 text-center font-medium">
                관리
              </th>
            </tr>
          </thead>

          <tbody className="divide-y bg-white">
            <CategoryRow
              name="강의 자료"
              description="주차별 강의 자료"
              visible
              order={1}
            />
            <CategoryRow
              name="과제 자료"
              description="과제 설명 및 참고 자료"
              visible
              order={2}
            />
            <CategoryRow
              name="시험 자료"
              description="중간·기말 시험 관련 자료"
              visible={false}
              order={3}
            />
          </tbody>
        </table>
      </div>

      {/* ===== 안내 ===== */}
      <div className="rounded-lg bg-slate-50 p-4 text-xs text-slate-500">
        <p className="font-medium text-slate-600">
          💡 자료실 카테고리 관리 안내
        </p>
        <ul className="mt-1 list-disc space-y-1 pl-4">
          <li>노출 비활성화된 카테고리는 교수·학생 화면에 표시되지 않습니다.</li>
          <li>정렬 순서는 자료실 목록 표시 순서에 영향을 줍니다.</li>
          <li>이미 사용 중인 카테고리는 삭제가 제한될 수 있습니다.</li>
        </ul>
      </div>
    </div>
  );
}

/* =========================
   카테고리 Row
========================= */
function CategoryRow({
  name,
  description,
  visible,
  order,
}) {
  return (
    <tr>
      <td className="px-4 py-3 font-medium text-slate-800">
        {name}
      </td>
      <td className="px-4 py-3 text-slate-600">
        {description}
      </td>
      <td className="px-4 py-3 text-center">
        <span
          className={`rounded-full px-2 py-1 text-xs font-medium ${
            visible
              ? "bg-green-100 text-green-700"
              : "bg-slate-200 text-slate-600"
          }`}
        >
          {visible ? "노출" : "비노출"}
        </span>
      </td>
      <td className="px-4 py-3 text-center">
        {order}
      </td>
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
