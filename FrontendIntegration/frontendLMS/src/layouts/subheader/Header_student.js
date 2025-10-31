import React from "react";

const Header_admin = () => {
  return (
    <div>
      <div id="login_button">
        <input type="button" value="로그인" />
      </div>
      <nav id="nav">
        <ul>
          <li>
            <a href="#">강의/수업관리</a>
          </li>
          <li>
            <a href="#">비교과 프로그램</a>
          </li>
          <li>
            <a href="#">성적.학사</a>
          </li>
          <li>
            <a href="#">지원</a>
          </li>
          <li>
            <a href="#">커뮤니티게시판</a>
          </li>
          <li>
            <a href="#">인증/계정보안</a>
          </li>
          <li>
            <a href="#">알림센터</a>
          </li>
        </ul>
      </nav>
    </div>
  );
};

export default Header_admin;
