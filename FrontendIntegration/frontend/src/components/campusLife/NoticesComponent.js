import { useState } from "react";
import Notice from "../../json/campusLife/notice.json";
import { makeCommonTitle } from "../../util/makeDivUtils/makeCommonText";
import {
  makeCommonInput,
  makeCommonSelectBox,
} from "../../util/makeDivUtils/makeCommonForm";
import { makeCommonTable } from "../../util/makeDivUtils/makeCommonTable";

const NoticesComponent = () => {
  const noticeColumns = ["id", "title", "date", "team", "attachment"];
  const tabs = ["전체보기", "학사", "장학", "모집", "일반"];

  const [activeTab, setActiveTab] = useState("전체보기");
  const [keyword, setKeyword] = useState("");

  const filteredNotices = Notice.공지사항.filter((item) => {
    const matchTab = activeTab === "전체보기" || item.category === activeTab;
    const matchKeyword = keyword === "" || item.title.includes(keyword);
    return matchTab && matchKeyword;
  });

  return (
    <div className="max-w-6xl mx-auto space-y-6">
      {/* 제목 */}
      <div>{makeCommonTitle("공지사항")}</div>
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

      <div className="flex gap-2 items-center">
        <div className="flex gap-2 items-center">
          {makeCommonSelectBox(
            [
              { label: "제목", value: "title" },
              { label: "부서", value: "team" },
            ],
            (e) => setKeyword(e.target.value)
          )}

          {makeCommonInput(
            "검색어를 입력하세요",
            (e) => setKeyword(e.target.value),
            "text",
            "keyword"
          )}
        </div>
      </div>
      {/* 테이블 */}
      <div className="bg-white rounded-lg shadow-sm">
        {makeCommonTable([], Notice.공지사항, noticeColumns)}
      </div>
    </div>
  );
};

export default NoticesComponent;
