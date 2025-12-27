import React, { useState } from "react";

const UserManage = () => {
  /** 사용자 목록 (더미) */
  const [users, setUsers] = useState([
    {
      id: 1,
      name: "김학생",
      userId: "20250001",
      email: "student1@univ.ac.kr",
      role: "STUDENT",
      department: "컴퓨터공학과",
      active: true,
    },
    {
      id: 2,
      name: "이교수",
      userId: "P10023",
      email: "prof@univ.ac.kr",
      role: "PROFESSOR",
      department: "전자공학과",
      active: true,
    },
    {
      id: 3,
      name: "관리자",
      userId: "ADMIN01",
      email: "admin@univ.ac.kr",
      role: "ADMIN",
      department: "-",
      active: true,
    },
    {
      id: 4,
      name: "박학생",
      userId: "20240012",
      email: "student2@univ.ac.kr",
      role: "STUDENT",
      department: "기계공학과",
      active: false,
    },
  ]);

  /** 검색어 */
  const [keyword, setKeyword] = useState("");

  /** 수정 모달 */
  const [editing, setEditing] = useState(null);
  const [form, setForm] = useState({
    name: "",
    role: "",
    department: "",
  });

  /** 검색 필터 */
  const filteredUsers = users.filter(
    (u) =>
      u.name.includes(keyword) ||
      u.userId.includes(keyword)
  );

  /** 활성/비활성 토글 */
  const toggleActive = (id) => {
    setUsers((prev) =>
      prev.map((u) =>
        u.id === id ? { ...u, active: !u.active } : u
      )
    );
  };

  /** 수정 열기 */
  const openEdit = (user) => {
    setEditing(user);
    setForm({
      name: user.name,
      role: user.role,
      department: user.department,
    });
  };

  /** 수정 저장 */
  const handleSave = (e) => {
    e.preventDefault();

    setUsers((prev) =>
      prev.map((u) =>
        u.id === editing.id
          ? { ...u, ...form }
          : u
      )
    );

    setEditing(null);
  };

  return (
    <div className="p-6">
      <h1 className="mb-2 text-2xl font-bold">사용자 관리</h1>
      <p className="mb-4 text-sm text-slate-500">
        등록된 사용자 계정을 관리합니다.
      </p>

      {/* 검색 */}
      <div className="mb-3 max-w-xs">
        <input
          value={keyword}
          onChange={(e) => setKeyword(e.target.value)}
          placeholder="이름 또는 학번 검색"
          className="w-full rounded border px-3 py-2 text-sm"
        />
      </div>

      {/* 사용자 테이블 */}
      <div className="overflow-x-auto rounded-lg border bg-white">
        <table className="min-w-full text-sm">
          <thead className="bg-slate-50 text-slate-600">
            <tr>
              <th className="px-4 py-2 text-left">이름</th>
              <th className="px-4 py-2 text-left">학번/사번</th>
              <th className="px-4 py-2 text-left">이메일</th>
              <th className="px-4 py-2 text-left">역할</th>
              <th className="px-4 py-2 text-left">학과</th>
              <th className="px-4 py-2 text-center">상태</th>
              <th className="px-4 py-2 text-center">관리</th>
            </tr>
          </thead>
          <tbody>
            {filteredUsers.map((u) => (
              <tr
                key={u.id}
                className="border-t hover:bg-slate-50"
              >
                <td className="px-4 py-2 font-medium">
                  {u.name}
                </td>
                <td className="px-4 py-2">{u.userId}</td>
                <td className="px-4 py-2">{u.email}</td>
                <td className="px-4 py-2">{u.role}</td>
                <td className="px-4 py-2">{u.department}</td>
                <td className="px-4 py-2 text-center">
                  <span
                    className={`rounded-full px-2 py-0.5 text-xs font-semibold
                    ${
                      u.active
                        ? "bg-emerald-100 text-emerald-700"
                        : "bg-gray-200 text-gray-600"
                    }`}
                  >
                    {u.active ? "활성" : "비활성"}
                  </span>
                </td>
                <td className="px-4 py-2 text-center space-x-2">
                  <button
                    onClick={() => openEdit(u)}
                    className="text-xs text-blue-600 hover:underline"
                  >
                    수정
                  </button>
                  <button
                    onClick={() => toggleActive(u.id)}
                    className="text-xs text-red-500 hover:underline"
                  >
                    {u.active ? "비활성화" : "활성화"}
                  </button>
                </td>
              </tr>
            ))}

            {filteredUsers.length === 0 && (
              <tr>
                <td
                  colSpan={7}
                  className="px-4 py-6 text-center text-slate-400"
                >
                  검색 결과가 없습니다.
                </td>
              </tr>
            )}
          </tbody>
        </table>
      </div>

      {/* 수정 모달 */}
      {editing && (
        <div className="fixed inset-0 z-50 flex items-center justify-center bg-black/40">
          <div className="w-full max-w-md rounded-lg bg-white p-6 shadow-lg">
            <h2 className="mb-4 text-lg font-bold">
              사용자 정보 수정
            </h2>

            <form onSubmit={handleSave} className="space-y-4">
              <div>
                <label className="block text-sm font-semibold">
                  이름
                </label>
                <input
                  value={form.name}
                  onChange={(e) =>
                    setForm((prev) => ({
                      ...prev,
                      name: e.target.value,
                    }))
                  }
                  className="w-full rounded border px-3 py-2 text-sm"
                />
              </div>

              <div>
                <label className="block text-sm font-semibold">
                  역할
                </label>
                <select
                  value={form.role}
                  onChange={(e) =>
                    setForm((prev) => ({
                      ...prev,
                      role: e.target.value,
                    }))
                  }
                  className="w-full rounded border px-3 py-2 text-sm"
                >
                  <option value="STUDENT">학생</option>
                  <option value="PROFESSOR">교수</option>
                  <option value="ADMIN">관리자</option>
                </select>
              </div>

              {(form.role === "STUDENT" ||
                form.role === "PROFESSOR") && (
                <div>
                  <label className="block text-sm font-semibold">
                    학과
                  </label>
                  <input
                    value={form.department}
                    onChange={(e) =>
                      setForm((prev) => ({
                        ...prev,
                        department: e.target.value,
                      }))
                    }
                    className="w-full rounded border px-3 py-2 text-sm"
                  />
                </div>
              )}

              <div className="flex justify-end space-x-2 pt-2">
                <button
                  type="button"
                  onClick={() => setEditing(null)}
                  className="rounded border px-4 py-2 text-sm"
                >
                  취소
                </button>
                <button
                  type="submit"
                  className="rounded bg-sky-600 px-4 py-2 text-sm font-semibold text-white hover:bg-sky-700"
                >
                  저장
                </button>
              </div>
            </form>
          </div>
        </div>
      )}
    </div>
  );
};

export default UserManage;
