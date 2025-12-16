import React, { useState } from "react";
import LostFoundBoard from "../../json/campusLife/lost_found_board.json";
import { makeCommonTitle } from "../../util/makeDivUtils/makeCommonText";
import { makeCommonTable } from "../../util/makeDivUtils/makeCommonTable";

const LostFoundBoardComponent = () => {
  const [activeTab, setActiveTab] = useState("전체보기");
  const tabs = ["전체보기", "분실", "습득"];

  const headers = ["번호", "제목", "날짜", "댓글", "장소"];
  const columns = ["id", "title", "date", "commentCount", "location"];

  const filteredRows =
    activeTab === "전체보기"
      ? LostFoundBoard
      : LostFoundBoard.filter((item) => item.category === activeTab);

  return (
    <div className="font-sans text-[#444]">
      <div className="mb-8">{makeCommonTitle("분실물 게시판")}</div>

      {/* 탭 */}
      <div className="mb-6">
        <ul className="flex flex-wrap border-b border-[#002c62]">
          {tabs.map((tab, idx) => {
            const isActive = activeTab === tab;
            return (
              <li key={idx}>
                <button
                  onClick={() => setActiveTab(tab)}
                  className={`px-5 py-3 text-[15px] font-medium border-t border-l border-r rounded-t-sm mb-[-1px] ${
                    isActive
                      ? "bg-[#002c62] text-white border-[#002c62]"
                      : "bg-[#f5f5f5] text-[#666] border-[#ddd]"
                  }`}
                >
                  {tab}
                </button>
              </li>
            );
          })}
        </ul>
      </div>

      {/* 테이블 */}
      {makeCommonTable(headers, filteredRows, columns)}
    </div>
  );
};

export default LostFoundBoardComponent;
