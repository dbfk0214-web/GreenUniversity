import React, { useState } from "react";

const UserCreate = () => {
  /** 입력 폼 상태 */
  const [form, setForm] = useState({
    name: "",
    email: "",
    userId: "",
    role: "STUDENT",
    department: "",
  });

  const [error, setError] = useState("");

  /** 더미 학과 목록 */
  const departments = [
    { code: "CS", name: "컴퓨터공학과" },
    { code: "EE", name: "전자공학과" },
    { code: "ME", name: "기계공학과" },
  ];

  /** 입력 변경 */
  const handleChange = (e) => {
    const { name, value } = e.target;
    setForm((prev) => ({ ...prev, [name]: value }));
    setError("");
  };

  /** 사용자 생성 */
  const handleSubmit = (e) => {
    e.preventDefault();

    const { name, email, userId, role, department } = form;

    if (!name || !email || !userId || !role) {
      setError("필수 항목을 모두 입력해주세요.");
      return;
    }

    if ((role === "STUDENT" || role === "PROFESSOR") && !department) {
      setError("학생/교수는 소속 학과를 선택해야 합니다.");
      return;
    }

    // 실제로는 서버에 POST 요청
    console.log("사용자 생성 요청", form);

    alert("사용자가 생성되었습니다. (초기 비밀번호: 1234)");

    setForm({
      name: "",
      email: "",
      userId: "",
      role: "STUDENT",
      department: "",
    });
  };

  return (
    <div className="p-6 max-w-lg">
      <h1 className="mb-2 text-2xl font-bold">사용자 등록</h1>
      <p className="mb-4 text-sm text-slate-500">
        학생, 교수, 관리자 계정을 생성합니다.
      </p>

      <form
        onSubmit={handleSubmit}
        className="space-y-4 rounded-lg border bg-white p-5"
      >
        {/* 이름 */}
        <div>
          <label className="mb-1 block text-sm font-semibold">이름</label>
          <input
            name="name"
            value={form.name}
            onChange={handleChange}
            className="w-full rounded border px-3 py-2 text-sm"
            placeholder="이름 입력"
          />
        </div>

        {/* 이메일 */}
        <div>
          <label className="mb-1 block text-sm font-semibold">이메일</label>
          <input
            name="email"
            type="email"
            value={form.email}
            onChange={handleChange}
            className="w-full rounded border px-3 py-2 text-sm"
            placeholder="example@university.ac.kr"
          />
        </div>

        {/* 학번 / 사번 */}
        <div>
          <label className="mb-1 block text-sm font-semibold">
            학번 / 사번
          </label>
          <input
            name="userId"
            value={form.userId}
            onChange={handleChange}
            className="w-full rounded border px-3 py-2 text-sm"
            placeholder={
              form.role === "STUDENT"
                ? "20250001"
                : form.role === "PROFESSOR"
                ? "P10023"
                : "ADMIN01"
            }
          />
        </div>

        {/* 역할 */}
        <div>
          <label className="mb-1 block text-sm font-semibold">역할</label>
          <select
            name="role"
            value={form.role}
            onChange={(e) => {
              handleChange(e);
              setForm((prev) => ({ ...prev, department: "" }));
            }}
            className="w-full rounded border px-3 py-2 text-sm"
          >
            <option value="STUDENT">학생</option>
            <option value="PROFESSOR">교수</option>
            <option value="ADMIN">관리자</option>
          </select>
        </div>

        {/* 학과 (학생/교수만) */}
        {(form.role === "STUDENT" || form.role === "PROFESSOR") && (
          <div>
            <label className="mb-1 block text-sm font-semibold">
              소속 학과
            </label>
            <select
              name="department"
              value={form.department}
              onChange={handleChange}
              className="w-full rounded border px-3 py-2 text-sm"
            >
              <option value="">학과 선택</option>
              {departments.map((d) => (
                <option key={d.code} value={d.code}>
                  {d.name}
                </option>
              ))}
            </select>
          </div>
        )}

        {/* 에러 메시지 */}
        {error && (
          <p className="text-sm font-medium text-red-500">{error}</p>
        )}

        {/* 버튼 */}
        <div className="pt-2 text-right">
          <button
            type="submit"
            className="rounded bg-sky-600 px-4 py-2 text-sm font-semibold text-white hover:bg-sky-700"
          >
            사용자 생성
          </button>
        </div>
      </form>

      <p className="mt-3 text-[0.75rem] text-slate-400">
        ※ 초기 비밀번호는 생성 후 반드시 변경하도록 안내됩니다.
      </p>
    </div>
  );
};

export default UserCreate;
