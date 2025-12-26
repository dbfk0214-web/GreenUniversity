import React, { useState } from "react";

const StudentStatusApproval = () => {
  /** 학적 변경 신청 목록 (더미) */
  const [requests, setRequests] = useState([
    {
      id: 1,
      studentId: "20250001",
      name: "김학생",
      type: "휴학",
      semester: "2025-2학기",
      reason: "개인 사정으로 인한 휴학",
      status: "대기",
    },
    {
      id: 2,
      studentId: "20240023",
      name: "이예제",
      type: "복학",
      semester: "2025-1학기",
      reason: "군 복무 종료",
      status: "대기",
    },
    {
      id: 3,
      studentId: "20230011",
      name: "박테스트",
      type: "휴학",
      semester: "2024-2학기",
      reason: "건강 문제",
      status: "승인",
    },
  ]);

  /** 승인 / 반려 처리 */
  const handleDecision = (id, decision) => {
    setRequests((prev) =>
      prev.map((r) =>
        r.id === id ? { ...r, status: decision } : r
      )
    );
  };

  /** 상태 뱃지 */
  const statusBadge = (status) => {
    if (status === "승인")
      return "bg-emerald-100 text-emerald-700";
    if (status === "반려")
      return "bg-red-100 text-red-600";
    return "bg-amber-100 text-amber-700";
  };

  return (
    <div className="p-6">
      <h1 className="mb-2 text-2xl font-bold">학적 변경 승인</h1>
      <p className="mb-4 text-sm text-slate-500">
        휴학 및 복학 신청을 검토하고 승인 또는 반려합니다.
      </p>

      <div className="overflow-x-auto rounded-lg border bg-white">
        <table className="min-w-full text-sm">
          <thead className="bg-slate-50 text-slate-600">
            <tr>
              <th className="px-4 py-2 text-left">학번</th>
              <th className="px-4 py-2 text-left">이름</th>
              <th className="px-4 py-2 text-left">유형</th>
              <th className="px-4 py-2 text-left">대상 학기</th>
              <th className="px-4 py-2 text-left">사유</th>
              <th className="px-4 py-2 text-center">상태</th>
              <th className="px-4 py-2 text-center">처리</th>
            </tr>
          </thead>
          <tbody>
            {requests.map((r) => (
              <tr
                key={r.id}
                className="border-t hover:bg-slate-50"
              >
                <td className="px-4 py-2">{r.studentId}</td>
                <td className="px-4 py-2 font-medium">{r.name}</td>
                <td className="px-4 py-2">{r.type}</td>
                <td className="px-4 py-2">{r.semester}</td>
                <td className="px-4 py-2 text-slate-700">
                  {r.reason}
                </td>
                <td className="px-4 py-2 text-center">
                  <span
                    className={`rounded-full px-2 py-0.5 text-xs font-semibold ${statusBadge(
                      r.status
                    )}`}
                  >
                    {r.status}
                  </span>
                </td>
                <td className="px-4 py-2 text-center space-x-2">
                  {r.status === "대기" ? (
                    <>
                      <button
                        onClick={() =>
                          handleDecision(r.id, "승인")
                        }
                        className="rounded bg-emerald-600 px-2 py-1 text-xs font-semibold text-white hover:bg-emerald-700"
                      >
                        승인
                      </button>
                      <button
                        onClick={() =>
                          handleDecision(r.id, "반려")
                        }
                        className="rounded bg-red-500 px-2 py-1 text-xs font-semibold text-white hover:bg-red-600"
                      >
                        반려
                      </button>
                    </>
                  ) : (
                    <span className="text-xs text-slate-400">
                      처리 완료
                    </span>
                  )}
                </td>
              </tr>
            ))}

            {requests.length === 0 && (
              <tr>
                <td
                  colSpan={7}
                  className="px-4 py-6 text-center text-slate-400"
                >
                  처리할 학적 변경 신청이 없습니다.
                </td>
              </tr>
            )}
          </tbody>
        </table>
      </div>

      <p className="mt-4 text-[0.75rem] text-slate-400">
        ※ 실제 서비스에서는 승인 시 학생의 학적 상태가 즉시
        변경됩니다.
      </p>
    </div>
  );
};

export default StudentStatusApproval;

