// src/components/admin/AdminSystemCommunitySummary.jsx
import React, { useEffect, useState } from "react";
import NoticeApi from "../../api/NoticeApi";
import PostApi from "../../api/PostApi";
import CommentApi from "../../api/CommentApi";

const AdminSystemCommunitySummary = () => {
  const [notices, setNotices] = useState([]);
  const [posts, setPosts] = useState([]);
  const [comments, setComments] = useState([]);

  useEffect(() => {
    NoticeApi.config?.funcs?.readAll?.().then((res) => {
      const data = res?.data ?? res;
      setNotices(Array.isArray(data) ? data : data?.content ?? []);
    });

    PostApi.config?.funcs?.readAll?.().then((res) => {
      const data = res?.data ?? res;
      setPosts(Array.isArray(data) ? data : data?.content ?? []);
    });

    CommentApi.config?.funcs?.all?.().then((res) => {
      const data = res?.data ?? res;
      setComments(Array.isArray(data) ? data : data?.content ?? []);
    });
  }, []);

  const reportedComments = comments.filter((c) => c.reported).length;

  const todayPosts = posts.filter((p) => {
    const created = new Date(p.createAt || p.createdAt);
    const today = new Date();
    return created.toDateString() === today.toDateString();
  }).length;

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
      {/* 공지사항 */}
      <Card icon="📢" title="공지사항">
        <div className="space-y-2">
          {notices.slice(0, 3).map((n) => (
            <div
              key={n.noticeId || n.id}
              className="text-xs text-gray-700 bg-gradient-to-r from-gray-50 to-gray-100 p-3 rounded-lg border border-gray-200"
            >
              <span className="font-medium">• {n.title}</span>
            </div>
          ))}
          {notices.length === 0 && (
            <p className="text-xs text-gray-400 text-center py-4">
              등록된 공지가 없습니다
            </p>
          )}
        </div>
      </Card>

      {/* 게시글 현황 */}
      <Card icon="📝" title="게시글 현황">
        <div className="space-y-3">
          <Row label="전체 게시글" value={`${posts.length}개`} />
          <Row label="오늘 작성" value={`${todayPosts}개`} />
        </div>
      </Card>

      {/* 댓글 관리 */}
      <Card icon="💬" title="댓글 관리">
        <div className="space-y-3">
          <Row label="전체 댓글" value={`${comments.length}개`} />
          <Row label="신고된 댓글" value={`${reportedComments}개`} />
        </div>
      </Card>
    </div>
  );
};

export default AdminSystemCommunitySummary;
