import React from "react";
import Notice from "../../json/campusLife/notice.json";
import { makeSimpleTableA } from "../../util/makeDivUtils/campusLife/makeCampusLife";

const NoticesComponent = () => {
  const noticeColumns = ["id", "title", "date", "team", "attachment"];

  return (
    <div>
      {/* 제목 */}
      <h1 style={{ border: "1px solid #ccc" }}>공지사항</h1>

      {/* 탭 메뉴 */}
      <div style={{ display: "flex", border: "1px solid #ccc" }}>
        <button style={{ border: "1px solid #ccc" }}>전체보기</button>
        <button style={{ border: "1px solid #ccc" }}>학사</button>
        <button style={{ border: "1px solid #ccc" }}>장학</button>
        <button style={{ border: "1px solid #ccc" }}>모집</button>
        <button style={{ border: "1px solid #ccc" }}>일반</button>
      </div>

      <div>
        {/* 총 게시물 수 */}
        <div style={{ border: "1px solid #ccc" }}>
          총 {Notice.공지사항.length}개의 게시물
        </div>

        {/* 검색 영역 */}
        <div style={{ display: "flex" }}>
          <select>
            <option>제목</option>
          </select>

          <input
            placeholder="검색어를 입력해 주세요."
            style={{ marginLeft: "8px" }}
          />
        </div>
      </div>

      {Notice && makeSimpleTableA(Notice.공지사항, noticeColumns)}
    </div>
  );
};

export default NoticesComponent;
