import React, { useState } from "react";

const PostWrite = () => {
  // ───────────────── 게시판 더미 ─────────────────
  const boards = [
    { value: "FREE", label: "자유 게시판" },
    { value: "QNA", label: "질문 게시판" },
    { value: "NOTICE", label: "공지사항" },
  ];

  // ───────────────── 상태 관리 ─────────────────
  const [board, setBoard] = useState("FREE");
  const [title, setTitle] = useState("");
  const [content, setContent] = useState("");
  const [submitted, setSubmitted] = useState(false);

  // ───────────────── 제출 ─────────────────
  const handleSubmit = () => {
    if (!title.trim() || !content.trim()) {
      alert("제목과 내용을 모두 입력해주세요.");
      return;
    }

    // 실제 서비스에서는 API 호출
    const postData = {
      board,
      title,
      content,
      createdAt: new Date().toISOString(),
    };

    console.log("작성된 게시글 (더미):", postData);

    setSubmitted(true);
  };

  // ───────────────── JSX ─────────────────
  return (
    <div className="space-y-4 text-[0.85rem]">
      {/* 헤더 */}
      <div className="rounded-md border border-slate-200 bg-slate-50 px-4 py-3">
        <h3 className="font-semibold text-slate-800">
          게시글 작성
        </h3>
        <p className="mt-1 text-[0.75rem] text-slate-500">
          게시판을 선택하고 게시글을 작성하세요.
        </p>
      </div>

      {/* 작성 폼 */}
      <div className="rounded-md border border-slate-200 bg-white px-4 py-4">
        {!submitted ? (
          <>
            {/* 게시판 선택 */}
            <div className="mb-3">
              <label className="block mb-1 text-[0.75rem] text-slate-600">
                게시판
              </label>
              <select
                value={board}
                onChange={(e) => setBoard(e.target.value)}
                className="w-full rounded-md border border-slate-300 px-3 py-1.5 text-sm focus:outline-none focus:ring-1 focus:ring-sky-400"
              >
                {boards.map((b) => (
                  <option key={b.value} value={b.value}>
                    {b.label}
                  </option>
                ))}
              </select>
            </div>

            {/* 제목 */}
            <div className="mb-3">
              <label className="block mb-1 text-[0.75rem] text-slate-600">
                제목
              </label>
              <input
                type="text"
                value={title}
                onChange={(e) => setTitle(e.target.value)}
                placeholder="제목을 입력하세요"
                className="w-full rounded-md border border-slate-300 px-3 py-1.5 text-sm focus:outline-none focus:ring-1 focus:ring-sky-400"
              />
            </div>

            {/* 내용 */}
            <div className="mb-3">
              <label className="block mb-1 text-[0.75rem] text-slate-600">
                내용
              </label>
              <textarea
                rows={6}
                value={content}
                onChange={(e) => setContent(e.target.value)}
                placeholder="내용을 입력하세요"
                className="w-full rounded-md border border-slate-300 px-3 py-2 text-sm focus:outline-none focus:ring-1 focus:ring-sky-400"
              />
            </div>

            {/* 버튼 */}
            <div className="flex justify-end gap-2">
              <button
                type="button"
                onClick={() => {
                  setTitle("");
                  setContent("");
                }}
                className="rounded-md border border-slate-300 bg-white px-3 py-1.5 text-[0.8rem] text-slate-700 hover:bg-slate-50"
              >
                초기화
              </button>
              <button
                type="button"
                onClick={handleSubmit}
                className="rounded-md bg-sky-500 px-4 py-1.5 text-[0.8rem] font-medium text-white hover:bg-sky-600"
              >
                등록
              </button>
            </div>
          </>
        ) : (
          <>
            <p className="font-medium text-emerald-600">
              ✅ 게시글이 등록되었습니다.
            </p>
            <p className="mt-2 text-[0.75rem] text-slate-500">
              선택한 게시판:{" "}
              {boards.find((b) => b.value === board)?.label}
            </p>
            <p className="mt-1 text-[0.75rem] text-slate-500">
              제목: {title}
            </p>
          </>
        )}
      </div>

      {/* 안내 */}
      <p className="text-[0.75rem] text-slate-400">
        ※ 실제 서비스에서는 게시판 권한, 첨부파일, 수정/삭제 기능이
        추가될 수 있습니다.
      </p>
    </div>
  );
};

export default PostWrite;
