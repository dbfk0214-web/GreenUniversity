import React, { useEffect, useState } from "react";
import NoticeApi from "../../../api/NoticeApi";

// --- 수정 요청 ---
const handleUpdateNotice = (form, onSuccess, onClose) => {
  if (!form?.id) {
    alert("수정할 공지 ID가 없습니다.");
    return;
  }

  NoticeApi.config.funcs
    .updateOne(form)
    .then((res) => {
      alert("공지 내용이 수정되었습니다.");
      console.log("공지 수정 성공:", res);
      onSuccess && onSuccess();
      onClose && onClose();
    })
    .catch((err) => {
      console.error("공지 수정 실패:", err);
      alert("공지 수정 중 오류가 발생했습니다. 잠시 후 다시 시도해주세요.");
    });
};

// --- 삭제 요청 ---
const handleDeleteNotice = (id, onSuccess, onClose) => {
  if (!id) {
    alert("삭제할 공지 ID가 없습니다.");
    return;
  }

  if (!window.confirm("정말 이 공지를 삭제하시겠습니까?")) {
    return;
  }

  NoticeApi.config.funcs
    .deleteOne(id)
    .then(() => {
      alert("공지가 삭제되었습니다.");
      console.log("공지 삭제 성공");
      onSuccess && onSuccess();
      onClose && onClose();
    })
    .catch((err) => {
      console.error("공지 삭제 실패:", err);
      alert("공지 삭제 중 오류가 발생했습니다. 잠시 후 다시 시도해주세요.");
    });
};

function NoticeEditModalBody({ form, setForm, onClose, onSuccess }) {
  const [recentNotices, setRecentNotices] = useState([]);
  const [loadingList, setLoadingList] = useState(false);

  // form이 잠깐 비어 있어도 UI는 안전하게
  const safeForm = form || { id: "", title: "", content: "" };

  // 🔹 우측 리스트용: DB에서 자동으로 전체 조회 시도
  useEffect(() => {
    setLoadingList(true);

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
  fetchAll().then(res => {
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

        setRecentNotices(data);
      }).catch((err) => {
        console.error("최근 공지 불러오기 실패:", err);
        setRecentNotices([]);
      })
      .finally(() => setLoadingList(false));
    },[])

  //   Promise.resolve(fetchAll())
  //     .then((res) => {
  //       // res가 배열이거나, { data: [...] } 또는 { content: [...] } 형태일 가능성 고려
  //       let data;
  //       if (Array.isArray(res)) {
  //         data = res;
  //       } else if (Array.isArray(res?.data)) {
  //         data = res.data;
  //       } else if (Array.isArray(res?.content)) {
  //         data = res.content;
  //       } else {
  //         data = [];
  //       }

  //       setRecentNotices(data);
  //     })
  //     .catch((err) => {
  //       console.error("최근 공지 불러오기 실패:", err);
  //       setRecentNotices([]);
  //     })
  //     .finally(() => setLoadingList(false));
  // }, []);

  // 좌측 입력 변경
  const handleChange = (e) => {
    const { name, value } = e.target;
    setForm((prev) => ({
      ...prev,
      [name]: value,
    }));
  };

  // 우측 리스트에서 하나 선택 → 좌측 폼에 채우기
  const handleSelectNotice = (notice) => {
    setForm({
      id: notice.id,
      title: notice.title,
      content: notice.content,
    });
  };

  return (
    <div className="w-full max-w-5xl mx-auto px-6 py-6">
      {/* 전체 타이틀: 중앙 정렬 느낌 */}
      <div className="mb-5 text-center">
        <h2 className="text-xl font-semibold text-slate-800">
          공지사항 관리 (수정 / 삭제)
        </h2>
        <p className="mt-1 text-xs text-slate-400">
          좌측에서 공지를 수정/삭제하고, 우측에서 최근 공지를 선택해 불러올 수
          있습니다.
        </p>
      </div>

      {/* 2컬럼 레이아웃: 좌측 폼 / 우측 리스트 */}
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-6 items-start">
        {/* ───────── 좌측: 수정/삭제 폼 ───────── */}
        <div className="space-y-4 rounded-2xl border border-slate-200 bg-white px-4 py-4 shadow-sm">
          {/* 공지 ID (읽기 전용) */}
          <div className="space-y-1">
            <label className="text-[11px] font-medium text-slate-500">
              공지 ID
            </label>
            <input
              type="text"
              value={safeForm.id || ""}
              readOnly
              className="
                w-full text-sm
                px-3 py-2
                rounded-lg
                bg-slate-50
                border border-slate-200
                text-slate-500
                text-center
                cursor-not-allowed
              "
            />
          </div>

          {/* 제목 */}
          <div className="space-y-1">
            <label className="text-[11px] font-medium text-slate-600">
              제목
            </label>
            <input
              type="text"
              name="title"
              value={safeForm.title || ""}
              onChange={handleChange}
              placeholder="공지 제목을 입력하세요"
              className="
                w-full text-sm
                px-3 py-2
                rounded-lg
                border border-slate-200
                focus:outline-none
                focus:ring-2 focus:ring-sky-200 focus:border-sky-400
                text-center
              "
            />
          </div>

          {/* 내용 */}
          <div className="space-y-1">
            <label className="text-[11px] font-medium text-slate-600">
              내용
            </label>
            <textarea
              name="content"
              value={safeForm.content || ""}
              onChange={handleChange}
              placeholder="공지 내용을 입력하세요"
              rows={8}
              className="
                w-full text-sm
                px-3 py-2
                rounded-lg
                border border-slate-200
                focus:outline-none
                focus:ring-2 focus:ring-sky-200 focus:border-sky-400
                resize-none
                text-left
              "
            />
          </div>

          {/* 하단 버튼: 중앙 정렬 */}
          <div className="pt-3 flex flex-col items-center gap-3 border-t border-slate-200">
            {/* 삭제 버튼 */}
            <button
              type="button"
              onClick={() =>
                handleDeleteNotice(safeForm.id, onSuccess, onClose)
              }
              className="
                px-4 py-2
                rounded-lg
                text-xs font-semibold
                border border-rose-200
                text-rose-600
                hover:bg-rose-50
                transition-colors
                w-full
                max-w-[220px]
              "
            >
              공지 삭제
            </button>

            {/* 닫기 / 수정 버튼 */}
            <div className="flex items-center justify-center gap-2 w-full">
              <button
                type="button"
                onClick={onClose}
                className="
                  px-4 py-2
                  rounded-lg
                  text-xs font-medium
                  border border-slate-200
                  text-slate-600
                  hover:bg-slate-50
                  transition-colors
                  w-full
                  max-w-[120px]
                "
              >
                닫기
              </button>
              <button
                type="button"
                onClick={() => handleUpdateNotice(safeForm, onSuccess, onClose)}
                className="
                  px-4 py-2
                  rounded-lg
                  text-xs font-semibold
                  bg-sky-500
                  text-white
                  hover:bg-sky-600
                  shadow-sm
                  transition-colors
                  w-full
                  max-w-[150px]
                "
              >
                공지 수정 저장
              </button>
            </div>
          </div>
        </div>

        {/* ───────── 우측: 최근 공지 리스트 ───────── */}
        <div className="space-y-3 rounded-2xl border border-slate-200 bg-slate-50 px-4 py-4 shadow-sm">
          <div className="text-center">
            <h3 className="text-sm font-semibold text-slate-800">
              최근 등록된 공지사항
            </h3>
            <p className="mt-1 text-[11px] text-slate-400">
              공지를 클릭하면 좌측 폼에 내용이 자동으로 채워집니다.
            </p>
          </div>

          <div className="max-h-[420px] overflow-y-auto rounded-xl bg-white border border-slate-200 p-2">
            {loadingList ? (
              <p className="text-xs text-slate-400 text-center py-6">
                최근 공지를 불러오는 중입니다...
              </p>
            ) : recentNotices.length === 0 ? (
              <p className="text-xs text-slate-400 text-center py-6">
                최근 등록된 공지가 없습니다.
              </p>
            ) : (
              <ul className="space-y-1.5">
                {recentNotices.map((notice) => (
                  <li
                    key={notice.id}
                    onClick={() => handleSelectNotice(notice)}
                    className="
                      px-3 py-2
                      rounded-lg
                      bg-slate-50
                      hover:bg-sky-50
                      border border-slate-200
                      hover:border-sky-300
                      cursor-pointer
                      transition-colors
                      text-xs
                    "
                  >
                    <div className="flex items-center justify-between gap-2">
                      <span className="font-semibold text-slate-800 truncate">
                        {notice.title}
                      </span>
                      <span className="text-[10px] text-slate-400">
                        {(notice.createdAt || notice.regDate || "").slice(
                          0,
                          10
                        )}
                      </span>
                    </div>
                    <p className="mt-1 text-[11px] text-slate-500 line-clamp-2">
                      {notice.content}
                    </p>
                  </li>
                ))}
              </ul>
            )}
          </div>
        </div>
      </div>
    </div>
  );
}

export default NoticeEditModalBody;
