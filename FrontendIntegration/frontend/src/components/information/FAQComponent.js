import React, { useState } from "react";
// 1. JSON 데이터 임포트
import FAQ from "../../json/information/faq.json";
// 2. 유틸리티 임포트
import { makeCommonTitle } from "../../util/makeDivUtils/makeCommonText";

const FAQComponent = () => {
  // 상태 관리
  const [activeTab, setActiveTab] = useState("전체보기"); // 현재 선택된 탭
  const [openId, setOpenId] = useState(null); // 현재 열려있는 질문 ID (아코디언)
  const [searchType, setSearchType] = useState("sj"); // 검색 조건 (제목/내용)
  const [searchText, setSearchText] = useState(""); // 검색어

  // 아코디언 토글 함수
  const toggleAccordion = (id) => {
    setOpenId(openId === id ? null : id);
  };

  // 탭 변경 함수
  const handleTabClick = (tab) => {
    setActiveTab(tab);
    setOpenId(null); // 탭 변경 시 아코디언 닫기
    setSearchText(""); // 탭 변경 시 검색어 초기화 (선택사항)
  };

  // 데이터 필터링 로직
  const filteredData = FAQ.datas.filter((item) => {
    // 1. 탭 필터
    const isTabMatch = activeTab === "전체보기" || item.category === activeTab;

    // 2. 검색어 필터
    let isSearchMatch = true;
    if (searchText) {
      if (searchType === "sj") {
        // 제목 검색
        isSearchMatch = item.title.includes(searchText);
      } else {
        // 내용(작성자) 검색 - JSON 구조상 내용은 comments 배열임
        isSearchMatch = item.comments.some((c) => c.includes(searchText));
      }
    }

    return isTabMatch && isSearchMatch;
  });

  return (
    <div className="font-sans text-[#444]">
      {/* 1. 페이지 타이틀 */}
      <div className="mb-8">{makeCommonTitle("학사 FAQ", "학사안내")}</div>

      {/* 2. 상단 안내 박스 (온라인도우미) */}
      <div className="border border-[#dcdcdc] bg-[#f9f9f9] p-6 mb-8 flex flex-col md:flex-row justify-between items-center gap-4 rounded-sm">
        <div className="flex-1">
          <strong className="block text-[#222] text-lg mb-2 font-bold">
            온라인도우미/건의함
          </strong>
          <p className="text-[#666] text-sm leading-relaxed">
            학교생활과 관련된 각종 질문 및 불편사항은 온라인도우미/건의함을 통해
            질문하세요. 해당부서 담당자가 직접 답변해드립니다.
          </p>
        </div>
        <a
          href="#none"
          className="bg-[#002c62] text-white px-5 py-3 text-sm font-bold rounded-sm hover:bg-[#003975] transition-colors shrink-0"
        >
          온라인도우미/건의함 바로가기
        </a>
      </div>

      {/* 3. 검색 및 카테고리 탭 영역 */}
      <div className="mb-4">
        {/* 3-1. 카테고리 탭 (모바일 대응 wrap) */}
        <ul className="flex flex-wrap gap-1 mb-6 border-b border-[#ccc] px-2">
          {FAQ.tabs.map((tab, idx) => {
            const isActive = activeTab === tab;
            return (
              <li key={idx} className="mb-[-1px]">
                <button
                  onClick={() => handleTabClick(tab)}
                  className={`px-5 py-3 text-[15px] font-medium border-t border-l border-r rounded-t-md transition-colors ${
                    isActive
                      ? "bg-white border-[#ccc] border-b-white text-[#002c62] font-bold z-10 relative"
                      : "bg-[#f5f5f5] border-[#ddd] text-[#666] hover:text-[#333]"
                  }`}
                >
                  {tab}
                </button>
              </li>
            );
          })}
        </ul>

        {/* 3-2. 검색창 (우측 정렬 느낌) */}
        <div className="bg-[#f8f9fa] border border-[#e5e5e5] p-4 flex justify-end items-center mb-8 rounded-sm">
          <div className="flex gap-1">
            <select
              className="border border-[#ccc] h-9 px-2 text-sm text-[#444] focus:outline-none focus:border-[#002c62]"
              value={searchType}
              onChange={(e) => setSearchType(e.target.value)}
            >
              <option value="sj">제목</option>
              <option value="userNm">내용</option>
            </select>
            <input
              type="text"
              className="border border-[#ccc] h-9 px-3 text-sm text-[#444] w-48 md:w-64 focus:outline-none focus:border-[#002c62]"
              placeholder="검색어를 입력해 주세요."
              value={searchText}
              onChange={(e) => setSearchText(e.target.value)}
              onKeyDown={(e) =>
                e.key === "Enter" && setSearchText(e.target.value)
              }
            />
            <button
              className="bg-[#444] text-white h-9 px-4 text-sm font-medium hover:bg-[#222] transition-colors"
              onClick={() => {}} // 검색 로직은 이미 상태 기반으로 작동
            >
              검색
            </button>
          </div>
        </div>
      </div>

      {/* 4. FAQ 리스트 (아코디언) */}
      <div className="border-t-2 border-[#333] mb-10">
        <ul className="divide-y divide-[#e5e5e5]">
          {filteredData.length > 0 ? (
            filteredData.map((item) => {
              const isOpen = openId === item.id;

              return (
                <li key={item.id}>
                  {/* 질문 영역 */}
                  <button
                    onClick={() => toggleAccordion(item.id)}
                    className={`w-full text-left p-5 flex items-start gap-3 hover:bg-[#f9f9f9] transition-colors focus:outline-none group ${
                      isOpen ? "bg-[#fcfcfc]" : ""
                    }`}
                    title={isOpen ? "답변 닫기" : "답변 열기"}
                  >
                    <span className="text-[#002c62] text-[13px] font-bold border border-[#002c62] px-2 py-0.5 rounded-sm shrink-0 mt-0.5">
                      {item.category}
                    </span>
                    <strong className="text-[16px] text-[#333] group-hover:text-[#002c62] transition-colors font-medium leading-normal">
                      {item.title}
                    </strong>
                  </button>

                  {/* 답변 영역 */}
                  {isOpen && (
                    <div className="bg-[#f7f7f7] px-6 py-6 border-t border-[#f0f0f0] border-b border-[#e5e5e5]">
                      <div className="text-[15px] leading-7 text-[#555]">
                        {/* HTML 태그가 포함될 수 있는 경우 dangerouslySetInnerHTML을 쓰거나, 
                            현재 JSON 처럼 문자열 배열인 경우 map으로 처리 */}
                        {item.comments.map((comment, cIdx) => (
                          <p key={cIdx} className="mb-2 last:mb-0 break-keep">
                            {comment}
                          </p>
                        ))}
                      </div>
                    </div>
                  )}
                </li>
              );
            })
          ) : (
            <li className="p-10 text-center text-[#666] border-b border-[#e5e5e5]">
              검색된 결과가 없습니다.
            </li>
          )}
        </ul>
      </div>
    </div>
  );
};

export default FAQComponent;
