import React, { useEffect, useState } from 'react'
import { getListComment } from '../../api/commentApi'

const CommunityCommentListComponent = () => {
  console.log("CommunityCommentListComponent")
  const [data, setData] = useState([])

  useEffect(() => {
    getListComment().then(d=>{
      const { data: data1 } = d
      console.log(d)
      setData(Array.isArray(data1) ? data1 : [])
    })
  }, [])

  // 페이지네이션 설정
  const [page, setPage] = useState(1)
  const pageSize = 20
  const totalPage = Math.max(1, Math.ceil(data.length / pageSize))
  const start = (page - 1) * pageSize
  const currentPageData = data.slice(start, start + pageSize)

  // 버튼 클릭 시 로그만 찍기 (나중에 API 붙이기)
  const handleEdit = (item) => console.log("수정:", item)
  const handleDelete = (id) => console.log("삭제:", id)

  return (
    <div className="mx-auto max-w-3xl p-4">
      <h2 className="mb-4 text-xl font-bold text-gray-900 text-center">댓글 목록</h2>

      {currentPageData.length === 0 ? (
        <div className="rounded-xl border border-dashed border-gray-300 p-8 text-center text-gray-500">
          아직 댓글이 없어요.
        </div>
      ) : (
        <ul className="space-y-3">
          {currentPageData.map((item) => {
            const writer = item.writerName || "(익명)"
            const content = item.content || "(내용 없음)"
            const initial = writer.replace(/[()]/g, "").slice(0, 1)

            return (
              <li key={item.commentId}>
                <article
                  className="group flex items-start justify-between gap-4 rounded-2xl border border-gray-100
                             bg-white p-4 shadow-sm transition hover:-translate-y-0.5 hover:shadow-lg"
                >
                  {/* 왼쪽: 아바타 + 본문 */}
                  <div className="flex min-w-0 flex-1 items-start gap-3">
                    <div className="flex h-9 w-9 shrink-0 select-none items-center justify-center
                                    rounded-full bg-emerald-100 text-emerald-700 text-sm font-semibold">
                      {initial || "?"}
                    </div>
                    <div className="min-w-0">
                      <div className="text-sm font-medium text-gray-900">{writer}</div>
                      <p className="mt-0.5 break-words text-[15px] leading-6 text-gray-700">
                        {content}
                      </p>
                    </div>
                  </div>

                  {/* 오른쪽: 수정 / 삭제 버튼 */}
                  <div className="flex shrink-0 items-center gap-2">
                    <button
                      onClick={() => handleEdit(item)}
                      className="rounded-lg border border-emerald-200 bg-emerald-50 px-3 py-1.5 text-sm
                                 font-medium text-emerald-700 hover:bg-emerald-100 active:scale-[0.98]"
                    >
                      수정
                    </button>
                    <button
                      onClick={() => handleDelete(item.commentId)}
                      className="rounded-lg border border-red-200 bg-red-50 px-3 py-1.5 text-sm
                                 font-medium text-red-700 hover:bg-red-100 active:scale-[0.98]"
                    >
                      삭제
                    </button>
                  </div>
                </article>
              </li>
            )
          })}
        </ul>
      )}

      {/* 페이지네이션 */}
      <div className="mt-6 flex items-center justify-center gap-2">
        <button
          onClick={() => setPage(p => Math.max(1, p - 1))}
          disabled={page === 1}
          className="rounded-lg border border-gray-200 bg-white px-3 py-1.5 text-sm text-gray-700
                     disabled:opacity-40 hover:bg-gray-50"
        >
          이전
        </button>

        <span className="select-none rounded-lg bg-gray-100 px-3 py-1.5 text-sm text-gray-700">
          {page} / {totalPage}
        </span>

        <button
          onClick={() => setPage(p => Math.min(totalPage, p + 1))}
          disabled={page === totalPage}
          className="rounded-lg border border-gray-200 bg-white px-3 py-1.5 text-sm text-gray-700
                     disabled:opacity-40 hover:bg-gray-50"
        >
          다음
        </button>
      </div>
    </div>
  )
}

export default CommunityCommentListComponent
