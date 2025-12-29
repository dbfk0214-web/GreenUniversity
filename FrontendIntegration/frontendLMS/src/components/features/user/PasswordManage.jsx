import React, { useState } from "react";

const PasswordManage = () => {
  const [form, setForm] = useState({
    current: "",
    newPass: "",
    confirm: "",
  });
  const [error, setError] = useState("");

  const handleSubmit = () => {
    if (!form.current || !form.newPass || !form.confirm) {
      setError("모든 항목을 입력해주세요.");
      return;
    }
    if (form.newPass.length < 8) {
      setError("새 비밀번호는 최소 8자 이상이어야 합니다.");
      return;
    }
    if (form.newPass !== form.confirm) {
      setError("새 비밀번호가 일치하지 않습니다.");
      return;
    }

    alert("비밀번호가 변경되었습니다.");
    setForm({ current: "", newPass: "", confirm: "" });
    setError("");
  };

  return (
    <div className="max-w-md mx-auto p-6">
      <h1 className="text-2xl font-bold mb-6">비밀번호 변경</h1>

      <div className="space-y-4 rounded-lg border bg-white p-4">
        <div>
          <label className="block text-sm font-medium mb-1">
            현재 비밀번호
          </label>
          <input
            type="password"
            value={form.current}
            onChange={(e) => {
              setForm((prev) => ({ ...prev, current: e.target.value }));
              setError("");
            }}
            className="w-full rounded border px-3 py-2"
            placeholder="현재 비밀번호 입력"
          />
        </div>

        <div>
          <label className="block text-sm font-medium mb-1">새 비밀번호</label>
          <input
            type="password"
            value={form.newPass}
            onChange={(e) => {
              setForm((prev) => ({ ...prev, newPass: e.target.value }));
              setError("");
            }}
            className="w-full rounded border px-3 py-2"
            placeholder="8자 이상"
          />
        </div>

        <div>
          <label className="block text-sm font-medium mb-1">
            새 비밀번호 확인
          </label>
          <input
            type="password"
            value={form.confirm}
            onChange={(e) => {
              setForm((prev) => ({ ...prev, confirm: e.target.value }));
              setError("");
            }}
            className="w-full rounded border px-3 py-2"
            placeholder="다시 한 번 입력"
          />
        </div>

        {error && <p className="text-sm text-red-500">{error}</p>}

        <button
          onClick={handleSubmit}
          className="w-full rounded bg-blue-600 px-4 py-2 text-white hover:bg-blue-700"
        >
          비밀번호 변경
        </button>
      </div>
    </div>
  );
};

export default PasswordManage;
