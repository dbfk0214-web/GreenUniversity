// HeaderStudent.jsx
import React from "react";
import { Link } from "react-router-dom";

export default function HeaderStudent({ onLogin }) {
  return (
    <div className="text-left">
      <button
        type="button"
        onClick={onLogin}
        className="px-3 py-1 mb-3 rounded bg-blue-500 text-white text-sm"
      >
        로그인
      </button>

      <nav>
        <ul className="space-y-2 text-sm text-gray-800 list-disc list-inside">
          <li>
            <Link to="/courses">강의/수업관리(학생)</Link>
          </li>
          <li>
            <Link to="/programs">비교과 프로그램</Link>
          </li>
          <li>
            <Link to="/grades">성적·학사</Link>
          </li>
          <li>
            <Link to="/support">지원</Link>
          </li>
          <li>
            <Link to="/community">커뮤니티게시판</Link>
          </li>
          <li>
            <Link to="/security">인증/계정보안</Link>
          </li>
          <li>
            <Link to="/alerts">알림센터</Link>
          </li>
        </ul>
      </nav>
    </div>
  );
}
