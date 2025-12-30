import React, { useEffect, useState } from "react";
import PostApi from "../../../api/PostApi";

const PostWrite = ({ post, onPostCreated }) => {
  /* ================= 상태 ================= */
  const [board, setBoard] = useState("FREE");
  const [title, setTitle] = useState("");
  const [content, setContent] = useState("");

  const [loading, setLoading] = useState(false);
  const [submitted, setSubmitted] = useState(false);
  const [reloadTick, setReloadTick] = useState(0);

  const isEditMode = !!post;

  /* ================= 수정 모드 값 세팅 ================= */
  useEffect(() => {
    if (post) {
      setBoard(post.board);
      setTitle(post.title);
      setContent(post.content);
    } else {
      setBoard("FREE");
      setTitle("");
      setContent("");
      setSubmitted(false);
    }
  }, [post]);

  /* ================= (참고용) 게시글 목록 재조회 패턴 ================= */
  useEffect(() => {
    // ⚠️ PostWrite 자체에서는 목록 상태를 직접 쓰지 않지만
    // Notice 패턴 참고용 + 확장 대비 구조
    const funcs = PostApi.config?.funcs || {};
    const fetchAll =
      funcs.all || funcs.readAll || funcs.getAll || funcs.list || funcs.readPage;

    if (!fetchAll) {
      console.error(
        "PostApi.config.funcs 안에 전체조회 함수가 없습니다.",
        funcs
      );
      return;
    }

    // 👉 실제 목록 state는 부모에서 관리하므로
    // 여기서는 onPostCreated로 위임
    fetchAll().catch((err) =>
      console.error("게시글 목록 조회 실패:", err)
    );
  }, [reloadTick]);

  /* ================= 저장 ================= */
  const handleSubmit = async () => {
    if (!title.trim() || !content.trim()) {
      alert("제목과 내용을 모두 입력해주세요.");
      return;
    }

    try {
      setLoading(true);

      if (isEditMode) {
        // UPDATE
        await PostApi.config.funcs.update(post.postId, {
          board,
          title,
          content,
        });
      } else {
        // CREATE
        await PostApi.config.funcs.create({
          board,
          title,
          content,
        });
      }

      setSubmitted(true);
      setReloadTick((v) => v + 1); // 🔁 Notice 패턴과 동일
      onPostCreated?.();

      // 작성 모드일 때만 초기화
      if (!isEditMode) {
        setTimeout(() => {
          setBoard("FREE");
          setTitle("");
          setContent("");
          setSubmitted(false);
        }, 1200);
      }
    } catch (err) {
      console.error(
        `게시글 ${isEditMode ? "수정" : "작성"} 실패:`,
        err
      );
      alert(`게시글 ${isEditMode ? "수정" : "작성"}에 실패했습니다.`);
    } finally {
      setLoading(false);
    }
  };

  /* ================= JSX ================= */
  return (
    <div className="space-y-3">
      <select
        value={board}
        onChange={(e) => setBoard(e.target.value)}
        className="rounded border px-2 py-1"
      >
        <option value="FREE">자유게시판</option>
        <option value="NOTICE">공지사항</option>
      </select>

      <input
        value={title}
        onChange={(e) => setTitle(e.target.value)}
        placeholder="제목"
        className="w-full rounded border px-3 py-2"
      />

      <textarea
        value={content}
        onChange={(e) => setContent(e.target.value)}
        placeholder="내용"
        rows={6}
        className="w-full rounded border px-3 py-2"
      />

      <button
        onClick={handleSubmit}
        disabled={loading}
        className="rounded bg-sky-600 px-4 py-2 text-white"
      >
        {loading
          ? "저장 중..."
          : isEditMode
          ? "게시글 수정"
          : "게시글 작성"}
      </button>

      {submitted && (
        <p className="text-sm text-green-600">
          게시글이 성공적으로 {isEditMode ? "수정" : "작성"}되었습니다.
        </p>
      )}
    </div>
  );
};

export default PostWrite;
