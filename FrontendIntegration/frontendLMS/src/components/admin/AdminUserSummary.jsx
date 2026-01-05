// src/components/admin/AdminUserSummary.jsx
import React, { useEffect, useState } from "react";
import UserApi from "../../api/UserApi";
import SSHistoryApi from "../../api/SSHistoryApi";
import { useSelector } from "react-redux";

const AdminUserSummary = () => {
  const user = useSelector((state) => state.loginSlice);
  const [users, setUsers] = useState([]);
  const [statusRequests, setStatusRequests] = useState([]);

  useEffect(() => {
    UserApi.config?.funcs?.readAll?.(user?.email).then((res) => {
      setUsers(Array.isArray(res) ? res : []);
    });

    SSHistoryApi.config?.funcs?.readAll?.(user?.email).then((res) => {
      setStatusRequests(Array.isArray(res) ? res : []);
    });
  }, [user?.email]);

  const activeUsers = users.filter((u) => !u.delete);
  const deletedUsers = users.filter((u) => u.delete);
  const pendingRequests = statusRequests.filter(
    (r) => r.approveType === "대기"
  );

  const roleCount = {
    STUDENT: activeUsers.filter((u) => u.role === "STUDENT").length,
    PROFESSOR: activeUsers.filter((u) => u.role === "PROFESSOR").length,
    ADMIN: activeUsers.filter((u) => u.role === "ADMIN").length,
  };

  return (
    <div className="space-y-6">
      {/* 사용자 통계 */}
      <div className="bg-white rounded-2xl shadow-sm border border-gray-200 p-5 hover:shadow-lg transition-shadow duration-300">
        <div className="flex items-center gap-2 mb-4">
          <span className="text-2xl">👥</span>
          <h2 className="font-bold text-gray-800">사용자 현황</h2>
        </div>
        <div className="space-y-3">
          <div className="flex justify-between items-center bg-gradient-to-r from-green-50 to-emerald-50 rounded-xl px-4 py-3 border border-green-200">
            <span className="text-sm font-medium text-gray-700">활성 계정</span>
            <span className="font-bold text-lg text-green-600">
              {activeUsers.length}명
            </span>
          </div>
          <div className="flex justify-between items-center bg-gradient-to-r from-red-50 to-rose-50 rounded-xl px-4 py-3 border border-red-200">
            <span className="text-sm font-medium text-gray-700">
              비활성 계정
            </span>
            <span className="font-bold text-lg text-red-600">
              {deletedUsers.length}명
            </span>
          </div>
          <div className="border-t border-gray-200 pt-3 mt-3 space-y-2">
            <div className="flex justify-between items-center text-xs text-gray-600 bg-blue-50 px-3 py-2 rounded-lg">
              <span>학생</span>
              <span className="font-bold text-blue-600">
                {roleCount.STUDENT}명
              </span>
            </div>
            <div className="flex justify-between items-center text-xs text-gray-600 bg-purple-50 px-3 py-2 rounded-lg">
              <span>교수</span>
              <span className="font-bold text-purple-600">
                {roleCount.PROFESSOR}명
              </span>
            </div>
            <div className="flex justify-between items-center text-xs text-gray-600 bg-orange-50 px-3 py-2 rounded-lg">
              <span>관리자</span>
              <span className="font-bold text-orange-600">
                {roleCount.ADMIN}명
              </span>
            </div>
          </div>
        </div>
      </div>

      {/* 학적 변동 승인 대기 */}
      <div className="bg-white rounded-2xl shadow-sm border border-gray-200 p-5 hover:shadow-lg transition-shadow duration-300">
        <div className="flex items-center gap-2 mb-4">
          <span className="text-2xl">📋</span>
          <h2 className="font-bold text-gray-800">학적 변동 승인</h2>
        </div>
        <div className="space-y-3">
          <div className="flex justify-between items-center bg-gradient-to-r from-orange-50 to-amber-50 rounded-xl px-4 py-3 border border-orange-200">
            <span className="text-sm font-medium text-gray-700">승인 대기</span>
            <span
              className={`font-bold text-lg ${
                pendingRequests.length > 0 ? "text-orange-600" : "text-gray-400"
              }`}
            >
              {pendingRequests.length}건
            </span>
          </div>
          {pendingRequests.length > 0 && (
            <div className="space-y-2">
              {pendingRequests.slice(0, 3).map((req) => (
                <div
                  key={req.statusHistoryId}
                  className="text-xs text-gray-700 bg-gradient-to-r from-orange-50 to-yellow-50 p-3 rounded-lg border border-orange-200"
                >
                  <span className="font-medium">
                    • {req.changeType} - {req.reason?.slice(0, 20)}
                    {req.reason?.length > 20 && "..."}
                  </span>
                </div>
              ))}
            </div>
          )}
        </div>
      </div>

      {/* 최근 가입 */}
      <div className="bg-white rounded-2xl shadow-sm border border-gray-200 p-5 hover:shadow-lg transition-shadow duration-300">
        <div className="flex items-center gap-2 mb-4">
          <span className="text-2xl">🆕</span>
          <h2 className="font-bold text-gray-800">최근 가입자</h2>
        </div>
        <div className="space-y-2">
          {activeUsers
            .slice(-3)
            .reverse()
            .map((u) => (
              <div
                key={u.userId}
                className="text-xs text-gray-700 bg-gradient-to-r from-indigo-50 to-blue-50 p-3 rounded-lg border border-indigo-200"
              >
                <span className="font-medium">
                  • {u.nickname} ({u.role})
                </span>
                <br />
                <span className="text-gray-500">{u.email}</span>
              </div>
            ))}
          {activeUsers.length === 0 && (
            <p className="text-xs text-gray-400 text-center py-4">
              가입자가 없습니다
            </p>
          )}
        </div>
      </div>
    </div>
  );
};

export default AdminUserSummary;
