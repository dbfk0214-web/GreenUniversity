import React, { useState } from "react";

const PasswordManage = () => {
  const [form, setForm] = useState({
    currentPassword: "",
    newPassword: "",
    confirmPassword: "",
  });

  const [error, setError] = useState("");

  const handleChange = (e) => {
    const { name, value } = e.target;
    setForm((prev) => ({ ...prev, [name]: value }));
    setError("");
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    const { currentPassword, newPassword, confirmPassword } = form;

    if (!currentPassword || !newPassword || !confirmPassword) {
      setError("모든 항목을 입력해주세요.");
      return;
    }

    if (newPassword.length < 8) {
      setError("새 비밀번호는 최소 8자 이상이어야 합니다.");
      return;
    }

    if (newPassword !== confirmPassword) {
      setError("새 비밀번호가 일치하지 않습니다.");
      return;
    }

    // 실제로는 서버로 현재 비밀번호 검증 + 변경 요청
    console.log("비밀번호 변경 요청", form);

    alert("비밀번호가 성공적으로 변경되었습니다. (더미)");

    setForm({
      currentPassword: "",
      newPassword: "",
      confirmPassword: "",
    });
  };

  return (
    <div className="p-6 max-w-md">
      <h1 className="mb-2 text-2xl font-bold">비밀번호 변경</h1>
      <p className="mb-4 text-sm text-slate-500">
        계정 보안을 위해 주기적으로 비밀번호를 변경해주세요.
      </p>

      <form
        onSubmit={handleSubmit}
        className="space-y-4 rounded-lg border bg-white p-4"
      >
        {/* 현재 비밀번호 */}
        <div>
          <label className="mb-1 block text-sm font-semibold">
            현재 비밀번호
          </label>
          <input
            type="password"
            name="currentPassword"
            value={form.currentPassword}
            onChange={handleChange}
            className="w-full rounded border px-3 py-2 text-sm"
            placeholder="현재 비밀번호 입력"
          />
        </div>

        {/* 새 비밀번호 */}
        <div>
          <label className="mb-1 block text-sm font-semibold">
            새 비밀번호
          </label>
          <input
            type="password"
            name="newPassword"
            value={form.newPassword}
            onChange={handleChange}
            className="w-full rounded border px-3 py-2 text-sm"
            placeholder="8자 이상"
          />
        </div>

        {/* 새 비밀번호 확인 */}
        <div>
          <label className="mb-1 block text-sm font-semibold">
            새 비밀번호 확인
          </label>
          <input
            type="password"
            name="confirmPassword"
            value={form.confirmPassword}
            onChange={handleChange}
            className="w-full rounded border px-3 py-2 text-sm"
            placeholder="다시 한 번 입력"
          />
        </div>

        {/* 에러 메시지 */}
        {error && (
          <p className="text-sm font-medium text-red-500">{error}</p>
        )}

        {/* 버튼 */}
        <div className="pt-2 text-right">
          <button
            type="submit"
            className="rounded bg-slate-800 px-4 py-2 text-sm font-semibold text-white hover:bg-slate-900"
          >
            비밀번호 변경
          </button>
        </div>
      </form>

      <p className="mt-3 text-[0.75rem] text-slate-400">
        ※ 실제 서비스에서는 기존 비밀번호 검증 및 암호화 처리 후 변경됩니다.
      </p>
    </div>
  );
};

export default PasswordManage;
