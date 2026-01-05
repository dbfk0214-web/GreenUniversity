import React from "react";

const AdminFinanceSummary = () => {
  const summary = [
    { label: "미납", value: 3 },
    { label: "납부 완료", value: 12 },
    { label: "이번 학기 총액", value: "₩48,000,000" },
  ];

  return (
    <div className="bg-white border rounded-2xl p-5 space-y-3">
      <h2 className="font-semibold">💰 등록금</h2>
      <div className="space-y-2 text-sm">
        {summary.map((s, i) => (
          <div
            key={i}
            className="flex justify-between bg-slate-50 rounded px-3 py-2"
          >
            <span className="text-slate-600">{s.label}</span>
            <span className="font-medium">{s.value}</span>
          </div>
        ))}
      </div>
    </div>
  );
};

export default AdminFinanceSummary;
