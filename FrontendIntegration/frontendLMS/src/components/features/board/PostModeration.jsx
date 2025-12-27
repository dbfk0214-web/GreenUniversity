import React, { useState } from "react";

const PostModeration = () => {
  // ───────────────── 게시글 더미 ─────────────────
  const initialPosts = [
    {
      id: 1,
      title: "웹프로그래밍 수강 후기",
      author: "김학생",
      reportedCount: 0,
      status: "ACTIVE", // ACTIVE | HIDDEN | DELETED
      createdAt: "2025-09-08",
    },
    {
      id: 2,
      title: "이 강의 솔직히 별로임",
      author: "이예제",
      reportedCount: 3,
      status: "HIDDEN",
      createdAt: "2025-09-09",
    },
    {
      id: 3,
      title: "과제 너무 많은 거 아님?",
      author: "박테스트",
      reportedCount: 5,
      status: "ACTIVE",
      createdAt: "2025-09-10",
    },
  ];

  const [posts, setPosts] = useState(initialPosts);

  // ───────────────── 상태 라벨 ─────────────────
  const statusLabel = (status) => {
    if (status === "ACTIVE") return "노출";
    if (status === "HIDDEN") return "숨김";
    return "삭제";
  };

  const statusStyle = (status) => {
    if (status === "ACTIVE")
      return "bg-emerald-50 text-emerald-700";
    if (status === "HIDDEN")
      return "bg-slate-200 text-slate-600";
    return "bg-rose-50 text-rose-700";
  };

  // ───────────────── 숨김 / 복구 ─────────────────
  const toggleHidden = (id) => {
    setPosts((prev) =>
      prev.map((p) => {
        if (p.id !== id) return p;
        if (p.status === "DELETED") return p;

        return {
          ...p,
          status: p.status === "HIDDEN" ? "ACTIVE" : "HIDDEN",
        };
      })
    );
  };

  // ───────────────── 삭제 (논리 삭제) ─────────────────
  const deletePost = (id) => {
    const ok = window.confirm("이 게시글을 삭제하시겠습니까?");
    if (!ok) return;

    setPosts((prev) =>
      prev.map((p) =>
        p.id === id ? { ...p, status: "DELETED" } : p
      )
    );
  };

  // ───────────────── JSX ─────────────────
  return (
    <div className="space-y-4 text-[0.85rem]">
      {/* 안내 */}
      <div className="rounded-md border border-slate-200 bg-slate-50 px-3 py-2 text-slate-600">
        ※ 신고된 게시글을 검토하고 숨김 또는 삭제 처리할 수 있습니다.
      </div>

      {/* 게시글 테이블 */}
      <div className="overflow-x-auto">
        <table className="min-w-full border-collapse">
          <thead>
            <tr className="border-b border-slate-200 bg-slate-50 text-left text-slate-600">
              <th className="px-2 py-2">제목</th>
              <th className="px-2 py-2">작성자</th>
              <th className="px-2 py-2 text-center">신고 수</th>
              <th className="px-2 py-2 text-center">상태</th>
              <th className="px-2 py-2 text-center">관리</th>
            </tr>
          </thead>
          <tbody>
            {posts.map((p, idx) => (
              <tr
                key={p.id}
                className={`border-b border-slate-100 ${
                  idx % 2 === 0 ? "bg-white" : "bg-slate-50/60"
                }`}
              >
                <td className="px-2 py-2">
                  {p.status === "DELETED" ? (
                    <span className="italic text-slate-400">
                      (삭제된 게시글)
                    </span>
                  ) : (
                    <span className="text-slate-800">
                      {p.title}
                    </span>
                  )}
                </td>
                <td className="px-2 py-2 text-slate-700">
                  {p.author}
                </td>
                <td className="px-2 py-2 text-center text-slate-700">
                  {p.reportedCount}
                </td>
                <td className="px-2 py-2 text-center">
                  <span
                    className={`rounded-full px-2 py-0.5 text-[0.7rem] ${statusStyle(
                      p.status
                    )}`}
                  >
                    {statusLabel(p.status)}
                  </span>
                </td>
                <td className="px-2 py-2 text-center space-x-1">
                  {p.status !== "DELETED" && (
                    <button
                      onClick={() => toggleHidden(p.id)}
                      className="rounded-md border border-slate-300 bg-white px-2 py-1 text-[0.7rem] hover:bg-slate-50"
                    >
                      {p.status === "HIDDEN" ? "복구" : "숨김"}
                    </button>
                  )}
                  {p.status !== "DELETED" && (
                    <button
                      onClick={() => deletePost(p.id)}
                      className="rounded-md border border-rose-300 bg-white px-2 py-1 text-[0.7rem] text-rose-600 hover:bg-rose-50"
                    >
                      삭제
                    </button>
                  )}
                </td>
              </tr>
            ))}
            {posts.length === 0 && (
              <tr>
                <td
                  colSpan={5}
                  className="px-2 py-4 text-center text-slate-400"
                >
                  게시글이 없습니다.
                </td>
              </tr>
            )}
          </tbody>
        </table>
      </div>

      {/* 안내 */}
      <p className="text-[0.75rem] text-slate-400">
        ※ 삭제는 실제 DB 삭제가 아닌 상태 변경(논리 삭제)으로
        처리되는 구조를 가정합니다.
      </p>
    </div>
  );
};

export default PostModeration;
