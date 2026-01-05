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

  const Card = ({ icon, title, children }) => (
    <div className="bg-white rounded-2xl border border-gray-200 p-5 hover:shadow-lg transition-shadow duration-300">
      <div className="flex items-center gap-2 mb-4">
        <span className="text-2xl">{icon}</span>
        <h2 className="font-bold text-gray-800">{title}</h2>
      </div>
      {children}
    </div>
  );

  const Row = ({ label, value }) => (
    <div className="flex justify-between items-center bg-gradient-to-r from-gray-50 to-gray-100 rounded-lg px-4 py-3 border border-gray-200">
      <span className="text-sm font-medium text-gray-700">{label}</span>
      <span className="font-bold text-gray-800">{value}</span>
    </div>
  );

  return (
    <div className="space-y-6">
      {/* 사용자 현황 */}
      <Card icon="👥" title="사용자 현황">
        <div className="space-y-3">
          <Row label="활성 계정" value={`${activeUsers.length}명`} />
          <Row label="비활성 계정" value={`${deletedUsers.length}명`} />

          <div className="border-t border-gray-200 pt-3 mt-3 space-y-2">
            <Row label="학생" value={`${roleCount.STUDENT}명`} />
            <Row label="교수" value={`${roleCount.PROFESSOR}명`} />
            <Row label="관리자" value={`${roleCount.ADMIN}명`} />
          </div>
        </div>
      </Card>

      {/* 학적 변동 승인 */}
      <Card icon="📋" title="학적 변동 승인">
        <div className="space-y-3">
          <Row label="승인 대기" value={`${pendingRequests.length}건`} />

          {pendingRequests.length > 0 && (
            <div className="space-y-2">
              {pendingRequests.slice(0, 3).map((req) => (
                <div
                  key={req.statusHistoryId}
                  className="text-xs text-gray-700 bg-gradient-to-r from-gray-50 to-gray-100 p-3 rounded-lg border border-gray-200"
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
      </Card>

      {/* 최근 가입자 */}
      <Card icon="🆕" title="최근 가입자">
        <div className="space-y-2">
          {activeUsers
            .slice(-3)
            .reverse()
            .map((u) => (
              <div
                key={u.userId}
                className="text-xs text-gray-700 bg-gradient-to-r from-gray-50 to-gray-100 p-3 rounded-lg border border-gray-200"
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
      </Card>
    </div>
  );
};

export default AdminUserSummary;
