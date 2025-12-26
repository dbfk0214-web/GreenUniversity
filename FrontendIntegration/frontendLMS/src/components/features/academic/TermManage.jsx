import React, { useState } from "react";

const TermManage = () => {
  const [terms, setTerms] = useState([]);
  const [form, setForm] = useState({
    name: "",
    startDate: "",
    endDate: "",
    isCurrent: false,
  });

  const handleChange = (e) => {
    const { name, value, type, checked } = e.target;
    setForm({
      ...form,
      [name]: type === "checkbox" ? checked : value,
    });
  };

  const handleAdd = () => {
    if (!form.name) return;
    setTerms([...terms, { ...form, id: Date.now() }]);
    setForm({ name: "", startDate: "", endDate: "", isCurrent: false });
  };

  return (
    <div className="space-y-6">
      {/* 입력 영역 */}
      <div className="rounded-xl border p-4 space-y-3">
        <h4 className="font-semibold">학기 생성</h4>

        <input
          name="name"
          value={form.name}
          onChange={handleChange}
          placeholder="예) 2025-1학기"
          className="w-full border px-3 py-2 rounded"
        />

        <div className="flex gap-2">
          <input
            type="date"
            name="startDate"
            value={form.startDate}
            onChange={handleChange}
            className="border px-2 py-1 rounded w-full"
          />
          <input
            type="date"
            name="endDate"
            value={form.endDate}
            onChange={handleChange}
            className="border px-2 py-1 rounded w-full"
          />
        </div>

        <label className="flex items-center gap-2 text-sm">
          <input
            type="checkbox"
            name="isCurrent"
            checked={form.isCurrent}
            onChange={handleChange}
          />
          현재 학기로 설정
        </label>

        <button
          onClick={handleAdd}
          className="rounded bg-slate-800 px-4 py-2 text-white text-sm"
        >
          추가
        </button>
      </div>

      {/* 목록 영역 */}
      <div className="rounded-xl border p-4">
        <h4 className="mb-2 font-semibold">학기 목록</h4>

        {terms.length === 0 ? (
          <p className="text-sm text-slate-400">등록된 학기가 없습니다.</p>
        ) : (
          <ul className="space-y-2">
            {terms.map((t) => (
              <li
                key={t.id}
                className="flex justify-between rounded bg-slate-50 px-3 py-2 text-sm"
              >
                <span>
                  {t.name}
                  {t.isCurrent && (
                    <span className="ml-2 text-xs text-teal-600">
                      (현재 학기)
                    </span>
                  )}
                </span>
                <span className="text-xs text-slate-500">
                  {t.startDate} ~ {t.endDate}
                </span>
              </li>
            ))}
          </ul>
        )}
      </div>
    </div>
  );
};

export default TermManage;
