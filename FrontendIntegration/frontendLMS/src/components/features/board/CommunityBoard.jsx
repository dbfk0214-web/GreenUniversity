import React, { useState, useEffect } from "react";
import { getPostsByBoard } from "../../../api/BoardApi";
import CommentApi from "../../../api/CommentApi";
import { useSelector } from "react-redux";


const pick = (obj, keys, fallback = "") => {
  for (const k of keys) {
    if (obj && obj[k] !== undefined && obj[k] !== null && obj[k] !== "")
      return obj[k];
  }
  return fallback;
};

export default function CommunityBoard() {
  const [active, setActive] = useState("FREE");
  const [selectedPost, setSelectedPost] = useState(null);
  const [comments, setComments] = useState({});
  const [commentInput, setCommentInput] = useState("");
  const [posts, setPosts] = useState([]);
  const [loading, setLoading] = useState(false);
const loginState = useSelector((state) => state.loginSlice);
  const BOARDS = [
    {
      key: "FREE",
      title: "자유게시판",
      desc: "자유롭게 이야기하고 소통하세요",
    },
    { key: "QNA", title: "질문 게시판", desc: "질문하고 답변을 받아보세요" },
    { key: "NOTICE", title: "공지사항", desc: "중요한 학교 공지 안내" },
  ];

  // ✅ 탭(active) 바뀔 때마다 해당 boardType으로 다시 조회
  useEffect(() => {
    setLoading(true);

    getPostsByBoard(active) // ← "FREE" / "QNA" / "NOTICE"
      .then((res) => {
        const { data } = res;
        setPosts(Array.isArray(data) ? data : []);
      })
      .catch((err) => {
        console.error(err);
        alert("게시글 불러오기 실패");
        setPosts([]);
      })
      .finally(() => setLoading(false));
  }, [active]);

  // 댓글 추가

const addComment = async () => {
  if (!commentInput.trim() || !selectedPost) return;

  const postId = selectedPost.postId ?? selectedPost.id;
  if (!postId) return;

  try {
    await CommentApi.config.funcs.create({
      postId,
      content: commentInput,
      userId: loginState?.userId ?? null,
    });

    // 🔄 댓글 재조회 (정석)
    const res = await CommentApi.config.funcs.listByPost(postId);
    const list = res?.data ?? [];

    setComments((prev) => ({
      ...prev,
      [postId]: list,
    }));

    setCommentInput("");
  } catch (e) {
    console.error("댓글 등록 실패:", e);
  }
};


  const selectedBoardType = pick(
    selectedPost,
    ["boardType", "board", "type"],
    ""
  );

  return (
    <div className="w-full max-h-[80vh] overflow-y-auto bg-gradient-to-b from-sky-50 to-white px-4 py-6">
      <div className="mx-auto max-w-5xl">
        {/* Header */}
        <h1 className="text-3xl font-extrabold text-sky-900 mb-1">커뮤니티</h1>
        <p className="text-sky-700 mb-5 text-sm">
          자유게시판 · 질문 게시판 · 공지사항
        </p>

        {/* Tabs */}
        <div className="flex gap-2 mb-6">
          {BOARDS.map((b) => (
            <button
              key={b.key}
              onClick={() => setActive(b.key)}
              className={`rounded-xl px-4 py-2 text-sm font-semibold
                ${
                  active === b.key
                    ? "bg-sky-600 text-white"
                    : "bg-white border border-sky-200 text-sky-700"
                }`}
            >
              {b.title}
            </button>
          ))}
        </div>

        <section className="rounded-2xl border border-sky-100 bg-white p-5 shadow-sm">
          {loading ? (
            <div className="text-sm text-sky-400 text-center py-6">
              불러오는 중...
            </div>
          ) : (
            <ul className="space-y-3">
              {Array.isArray(posts) && posts.length > 0 ? (
                posts.map((Post) => (
                  <li
                    key={Post.postId}
                    onClick={() => setSelectedPost(Post)}
                    className="cursor-pointer rounded-lg border border-sky-100 p-3 hover:bg-sky-50"
                  >
                    <div className="text-sm font-medium text-sky-900">
                      {pick(Post, ["title"], "(제목 없음)")}
                    </div>
                    <div className="text-xs text-sky-600 mt-0.5">
                      {pick(Post, ["createdAt"], "-")}
                    </div>
                  </li>
                ))
              ) : (
                <li className="text-sm text-sky-400 text-center py-6">
                  게시글이 없습니다.
                </li>
              )}
            </ul>
          )}
        </section>
      </div>

      {selectedPost && (
        <div className="fixed inset-0 z-50 flex items-center justify-center bg-black/40">
          <div className="w-full max-w-2xl max-h-[80vh] overflow-y-auto rounded-2xl bg-white p-6 shadow-lg">
            {/* Header */}
            <div className="flex justify-between items-start mb-4">
              <h2 className="text-xl font-bold text-sky-900">
                {pick(selectedPost, ["title"], "(제목 없음)")}
              </h2>
              <button
                onClick={() => setSelectedPost(null)}
                className="text-sky-500 hover:text-sky-700"
              >
                ✕
              </button>
            </div>

            {/* Content */}
            <p className="text-sky-800 mb-4 whitespace-pre-line">
              {pick(selectedPost, ["content"], "(내용 없음)")}
            </p>

            <div className="text-xs text-sky-500 mb-6">
              {pick(selectedPost, ["nickname", "author", "writer"], "익명")} ·{" "}
              {pick(selectedPost, ["createdAt", "date"], "-")}
            </div>

            {/* Comments / Answers */}
            {selectedBoardType !== "NOTICE" ? (
              <>
                <h3 className="text-sm font-semibold text-sky-900 mb-2">
                  {selectedBoardType === "QNA" ? "답변" : "댓글"}
                </h3>

                <ul className="space-y-2 mb-4">
                  {(comments[selectedPost.postId] || []).map((c, i) => (
                    <li
                      key={i}
                      className="rounded-lg bg-sky-50 px-3 py-2 text-sm"
                    >
                      {c.text}
                      <div className="text-xs text-sky-500 mt-1">{c.date}</div>
                    </li>
                  ))}
                </ul>

                {/* Input */}
                <div className="flex gap-2">
                  <input
                    value={commentInput}
                    onChange={(e) => setCommentInput(e.target.value)}
                    className="flex-1 rounded-lg border border-sky-200 px-3 py-2 text-sm"
                    placeholder={
                      selectedBoardType === "QNA"
                        ? "답변을 입력하세요"
                        : "댓글을 입력하세요"
                    }
                  />
                  <button
                    onClick={addComment}
                    className="rounded-lg bg-sky-600 px-3 py-2 text-sm font-semibold text-white hover:bg-sky-700"
                  >
                    등록
                  </button>
                </div>
              </>
            ) : (
              <div className="text-sm text-sky-500">
                공지사항은 댓글을 작성할 수 없습니다.
              </div>
            )}
          </div>
        </div>
      )}
    </div>
  );
}
