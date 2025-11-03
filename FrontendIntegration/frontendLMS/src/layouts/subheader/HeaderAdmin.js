import React from "react";

const HeaderAdmin = () => {
  return (
    <div>
      <div>
        <button className="px-3 py-1 mb-3 rounded bg-blue-500 text-white text-sm">
          로그인
        </button>
      </div>
      <nav>
        <ul className="space-y-2 text-sm text-gray-800 list-disc list-inside">
          <li>강의/수업관리(관리자)</li>
          <li>비교과 프로그램</li>
          <li>성적/학사</li>
          <li>지원</li>
          <li>커뮤니티게시판</li>
          <li>인증/계정보안</li>
          <li>알림센터</li>
          <li>시스템운영</li>
        </ul>
      </nav>
    </div>
  );
};

export default HeaderAdmin;
