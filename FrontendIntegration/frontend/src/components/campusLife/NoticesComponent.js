import React from "react";
import Notice from "../../json/campusLife/notice.json";
import { makeSimpleTableA } from "../../util/makeDivUtils/campusLife/makeNotice";
import {
  makeDefaultTabA,
  makeSectionTitle,
} from "../../util/makeDivUtils/makeCommonLayout";
import { makeSearchWindow } from "../../util/makeDivUtils/makeCommonForm";
import { makeDefaultTotal } from "../../util/makeDivUtils/makeCommonMedia";

const NoticesComponent = () => {
  const noticeColumns = ["id", "title", "date", "team", "attachment"];

  return (
    <div>
      {/* 제목 */}
      <div>{makeSectionTitle("공지사항")}</div>

      {/* 탭 메뉴 */}
      <div style={{ display: "flex", border: "1px solid #ccc" }}>
        {makeDefaultTabA(["전체보기", "학사", "장학", "모집", "일반"])}
      </div>

      {/* 총 게시물 수 */}
      <div style={{ display: "flex" }}>
        <div>{makeDefaultTotal(Notice.공지사항.length)}</div>

        {/* 검색 영역 */}
        <div style={{ display: "flex" }}>{makeSearchWindow(["제목"])}</div>
      </div>

      {Notice && makeSimpleTableA(Notice.공지사항, noticeColumns)}
    </div>
  );
};

export default NoticesComponent;
