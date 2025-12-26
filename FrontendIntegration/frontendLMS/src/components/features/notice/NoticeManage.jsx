import React, { useEffect, useMemo, useState } from "react";
import NoticeApi from "../../../api/NoticeApi";

const NoticeManage = () => {
  const [notices, setNotices] = useState([]);
  const [query, setQuery] = useState("");
  const [page, setPage] = useState(1);
  const [pageSize] = useState(6);
  const [remove, setRemove] = useState(0);
  const [modalOpen, setModalOpen] = useState(false);
  const [editing, setEditing] = useState(null);
  const [form, setForm] = useState(EMPTY_FORM);
  const [loadingList, setLoadingList] = useState([]);
  const [recentNotices, setRecentNotices] = useState([]);
  const [openEdit, setOpenEdit] = useState([]);

  // 🔹 우측 리스트용: DB에서 자동으로 전체 조회 시도
  useEffect(() => {
    setLoadingList(true);
    const safeForm = form || { id: "", title: "", content: "" };

    const funcs = NoticeApi.config?.funcs || {};

    // 흔히 쓰는 목록 함수 이름들 중에서 하나 골라 쓰기
    const fetchAll =
      funcs.all ||
      funcs.readAll ||
      funcs.getAll ||
      funcs.list ||
      funcs.readPage;

    if (!fetchAll) {
      console.error(
        "NoticeApi.config.funcs 안에 전체 조회용 함수(all/readAll/getAll/list/readPage)가 없습니다.",
        funcs
      );
      setLoadingList(false);
      return;
    }
    fetchAll()
      .then((res) => {
        // res가 배열이거나, { data: [...] } 또는 { content: [...] } 형태일 가능성 고려
        let data;
        if (Array.isArray(res)) {
          data = res;
        } else if (Array.isArray(res?.data)) {
          data = res.data;
        } else if (Array.isArray(res?.content)) {
          data = res.content;
        } else {
          data = [];
        }

        setNotices(data);
      })
      .catch((err) => {
        console.error("최근 공지 불러오기 실패:", err);
        setRecentNotices([]);
      })
      .finally(() => setLoadingList(false));
  }, []);

  /** 검색 + 정렬 (항상 pinned 우선) */
  const filteredSorted = useMemo(() => {
    const q = query.trim().toLowerCase();

    return notices
      .filter(
        (n) =>
          !q ||
          n.title.toLowerCase().includes(q) ||
          n.content.toLowerCase().includes(q) ||
          n.author.toLowerCase().includes(q)
      )
      .sort((a, b) => {
        if (a.pinned && !b.pinned) return -1;
        if (!a.pinned && b.pinned) return 1;
        return new Date(b.createdAt) - new Date(a.createdAt);
      });
  }, [notices, query]);

  /** 페이징 */
  const totalPages = Math.max(1, Math.ceil(filteredSorted.length / pageSize));
  const pageData = filteredSorted.slice((page - 1) * pageSize, page * pageSize);

  const setField = (k, v) => setForm((p) => ({ ...p, [k]: v }));

  /** 새 공지 */
  const openCreate = () => {
    setEditing(null);
    setForm(EMPTY_FORM);
    setModalOpen(true);
  };

  /** 고정 토글 */
  const togglePin = (id) => {
    setNotices((prev) =>
      prev.map((n) => (n.id === id ? { ...n, pinned: !n.pinned } : n))
    );
  };

  return (
    <div className="w-full max-w-[80%] max-h-[80vh] overflow-y-auto rounded-2xl bg-white p-6 shadow-xl ring-1 ring-slate-200">
      {/* 헤더 */}
      <div className="flex flex-col gap-4 sm:flex-row sm:items-center sm:justify-between border-b pb-4">
        <h1 className="text-3xl font-extrabold text-sky-800">공지사항</h1>

        <div className="flex gap-2">
          <input
            value={query}
            onChange={(e) => {
              setQuery(e.target.value);
              setPage(1);
            }}
            placeholder="공지 검색…"
            className="rounded-xl border border-sky-200 px-3 py-2"
          />
          <button
            onClick={openCreate}
            className="rounded-xl bg-sky-600 px-4 py-2 text-white font-semibold"
          >
            공지 등록
          </button>
        </div>
      </div>

      {/* 리스트 */}
      <ul className="mt-6 grid gap-4 md:grid-cols-2">
        {pageData.map((n) => (
          <li
            key={n.id}
            className="rounded-2xl border border-sky-100 p-5 shadow-sm"
          >
            <header className="flex justify-between items-start">
              <h2 className="text-lg font-bold text-sky-800">{n.title}</h2>
              {n.pinned && (
                <span className="rounded-full bg-amber-100 px-2 py-0.5 text-xs font-semibold text-amber-700">
                  고정
                </span>
              )}
            </header>

            <p className="mt-2 text-sm text-sky-600">
              {n.author} · {fmt(n.createdAt)}
            </p>

            <p className="mt-3 text-sky-900">
              {n.content.length > 120
                ? n.content.slice(0, 120) + "…"
                : n.content}
            </p>

            <div className="mt-4 flex justify-between items-center">
              <span
                className={`text-xs font-semibold ${
                  n.importance === "HIGH" ? "text-red-600" : "text-sky-600"
                }`}
              >
                중요도: {n.importance}
              </span>

              <div className="flex gap-2">
                <button
                  onClick={() => openEdit(n)}
                  className="rounded-xl bg-sky-600 px-3 py-1.5 text-sm text-white"
                >
                  수정
                </button>
                <button
                  onClick={() => remove(n.id)}
                  className="rounded-xl bg-sky-100 px-3 py-1.5 text-sm text-sky-700"
                >
                  삭제
                </button>
                <button
                  onClick={() => togglePin(n.id)}
                  className="rounded-xl border px-3 py-1.5 text-sm"
                >
                  {n.pinned ? "고정 해제" : "고정"}
                </button>
              </div>
            </div>
          </li>
        ))}
      </ul>

      {/* 페이지 */}
      <div className="mt-8 flex justify-center gap-3">
        <button disabled={page === 1} onClick={() => setPage((p) => p - 1)}>
          이전
        </button>
        <span>
          {page} / {totalPages}
        </span>
        <button
          disabled={page === totalPages}
          onClick={() => setPage((p) => p + 1)}
        >
          다음
        </button>
      </div>
    </div>
  );
};

export default NoticeManage;

const EMPTY_FORM = {
  title: "",
  author: "",
  content: "",
  importance: "NORMAL",
  startDate: "",
  endDate: "",
  content: "",
};

/** 날짜 포맷 */
const fmt = (iso) =>
  new Date(iso).toLocaleString("ko-KR", {
    dateStyle: "medium",
    timeStyle: "short",
  });
