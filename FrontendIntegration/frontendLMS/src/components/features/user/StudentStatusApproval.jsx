import React, { useState, useEffect } from "react";
import { useSelector } from "react-redux";
import SSHistoryApi from "../../../api/SSHistoryApi";

const StudentStatusSystem = () => {
  const user = useSelector((state) => state.loginSlice);
  const isAdmin = user?.role === "ADMIN";

  const [data, setData] = useState([]);
  const [form, setForm] = useState({
    changeType: "LEAVE",
    changeDate: "",
    reason: "",
  });

  // 초기 데이터 로드
  const fetchData = () => {
    SSHistoryApi.config.funcs
      .readAll(user?.email)
      .then(setData)
      .catch(console.error);
  };

  useEffect(() => {
    fetchData();
  }, [user?.email]);

  // 일반 사용자의 신청
  const submit = () => {
    if (!form.changeDate || !form.reason.trim())
      return alert("모든 필드를 입력하세요");

    SSHistoryApi.config.funcs
      .writeOne(form, user?.email)
      .then(() => {
        alert("제출 완료");
        setForm({ changeType: "LEAVE", changeDate: "", reason: "" });
        fetchData();
      })
      .catch(() => alert("제출 실패"));
  };

  // 관리자 승인
  const handleApprove = (statusHistoryId) => {
    const dto = { statusHistoryId: statusHistoryId };
    SSHistoryApi.config.funcs
      .findByKeywordHttp("approved", null, user.email, "post", dto)
      .then((result) => {
        console.log(result);
        fetchData();
      })
      .catch(console.error);
  };

  // 관리자 거절
  const handleReject = (statusHistoryId) => {
    const dto = { statusHistoryId: statusHistoryId };
    SSHistoryApi.config.funcs
      .findByKeywordHttp("rejected", null, user.email, "post", dto)
      .then((result) => {
        console.log(result);
        fetchData();
      })
      .catch(console.error);
  };

  return (
    <div className="max-w-4xl mx-auto p-6 space-y-6">
      <h1 className="text-2xl font-bold">학적 관리</h1>

      {/* 일반 사용자 신청 폼 */}
      {!isAdmin && (
        <div className="bg-white border rounded p-4 space-y-3">
          <div className="grid grid-cols-3 gap-3">
            <select
              value={form.changeType}
              onChange={(e) => setForm({ ...form, changeType: e.target.value })}
              className="border rounded px-3 py-2"
            >
              <option value="LEAVE">휴학</option>
              <option value="RETURN">복학</option>
              <option value="ENROLLED">재학</option>
              <option value="GRADUATED">졸업</option>
            </select>
            <input
              type="date"
              value={form.changeDate}
              onChange={(e) => setForm({ ...form, changeDate: e.target.value })}
              className="border rounded px-3 py-2"
            />
            <input
              placeholder="사유"
              value={form.reason}
              onChange={(e) => setForm({ ...form, reason: e.target.value })}
              className="border rounded px-3 py-2"
            />
          </div>
          <button
            onClick={submit}
            className="px-4 py-2 bg-blue-600 text-white rounded"
          >
            신청
          </button>
        </div>
      )}

      {/* 신청 내역 테이블 */}
      <div className="bg-white border rounded overflow-hidden">
        <table className="w-full">
          <thead className="bg-gray-50">
            <tr>
              <th className="px-4 py-3 text-left text-sm">유형</th>
              <th className="px-4 py-3 text-left text-sm">날짜</th>
              <th className="px-4 py-3 text-left text-sm">사유</th>
              {isAdmin && <th className="px-4 py-3 text-left text-sm">관리</th>}
            </tr>
          </thead>
          <tbody>
            {data.length === 0 ? (
              <tr>
                <td
                  colSpan={isAdmin ? 4 : 3}
                  className="px-4 py-8 text-center text-gray-400"
                >
                  내역이 없습니다
                </td>
              </tr>
            ) : (
              data.map((item) => (
                <tr key={item.statusHistoryId} className="border-t">
                  <td className="px-4 py-3">{item.changeType}</td>
                  <td className="px-4 py-3">{item.changeDate}</td>
                  <td className="px-4 py-3">{item.reason}</td>
                  {isAdmin && (
                    <td className="px-4 py-3 space-x-2">
                      <button
                        onClick={() => handleApprove(item.statusHistoryId)}
                        className="px-2 py-1 bg-green-500 text-white rounded"
                      >
                        승인
                      </button>
                      <button
                        onClick={() => handleReject(item.statusHistoryId)}
                        className="px-2 py-1 bg-red-500 text-white rounded"
                      >
                        거절
                      </button>
                    </td>
                  )}
                </tr>
              ))
            )}
          </tbody>
        </table>
      </div>
    </div>
  );
};

export default StudentStatusSystem;
