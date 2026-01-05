// src/components/admin/AdminFinanceSummary.jsx
import React from "react";

const AdminFinanceSummary = () => {
  const summary = [
    { label: "미납", value: 3, color: "text-red-600", bg: "bg-red-50" },
    {
      label: "납부 완료",
      value: 12,
      color: "text-green-600",
      bg: "bg-green-50",
    },
    {
      label: "총액",
      value: "₩48,000,000",
      color: "text-blue-600",
      bg: "bg-blue-50",
    },
  ];

  return (
    <div className="bg-white border border-gray-200 rounded-2xl p-5 hover:shadow-lg transition-shadow duration-300">
      <div className="flex items-center gap-2 mb-4">
        <span className="text-2xl">💰</span>
        <h2 className="font-bold text-gray-800">등록금 현황</h2>
      </div>
      <div className="space-y-3">
        {summary.map((s, i) => (
          <div
            key={i}
            className={`flex justify-between items-center ${s.bg} rounded-xl px-4 py-3 border border-gray-200`}
          >
            <span className="text-sm font-medium text-gray-700">{s.label}</span>
            <span className={`font-bold text-lg ${s.color}`}>{s.value}</span>
          </div>
        ))}
      </div>
    </div>
  );
};

export default AdminFinanceSummary;
