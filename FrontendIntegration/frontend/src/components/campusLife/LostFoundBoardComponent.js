import React, { useState } from "react";
import LostFoundBoard from "../../json/campusLife/lost_found_board.json";
import { makeCommonTitle } from "../../util/makeDivUtils/makeCommonText";
import { makeCommonTabItems } from "../../util/makeDivUtils/makeCommonLayout";
import { makeCommonTable } from "../../util/makeDivUtils/makeCommonTable";

const LostFoundBoardComponent = () => {
  const columns = ["id", "title", "date", "commentCount", "location"];
  const tabs = ["전체보기", "분실", "습득"];
  const [activeTab, setActiveTab] = useState("전체보기");

  const filteredRows =
    activeTab === "전체보기"
      ? LostFoundBoard
      : LostFoundBoard.filter((item) => item.category === activeTab);

  return (
    <div className="max-w-6xl mx-auto space-y-6">
      {/* 제목 */}
      {makeCommonTitle("분실물 게시판")}

      {/* 탭 */}
      <div className="flex gap-2 border-b">
        {tabs.map((tab) => (
          <button
            key={tab}
            onClick={() => setActiveTab(tab)}
            className={`px-4 py-2 text-sm ${
              activeTab === tab
                ? "border-b-2 border-blue-600 text-blue-600 font-semibold"
                : "text-gray-500 hover:text-blue-600"
            }`}
          >
            {tab}
          </button>
        ))}
      </div>

      {/* 테이블 */}
      <div className="bg-white rounded-lg shadow-sm">
        {makeCommonTable([], filteredRows, columns)}
      </div>
    </div>
  );
};

export default LostFoundBoardComponent;
