import React, { useState } from "react";
import GreenHistory from "../../json/aboutGreen/green_history.json";
// 2. makeForced 유틸리티 임포트
import {
  makeMainSection,
  makeTimeLine,
} from "../../util/makeDivUtils/makeForced";
// 3. makeCommonText 유틸리티 임포트
import { makeCommonTitle } from "../../util/makeDivUtils/makeCommonText";

const HistoryOfGreenComponent = () => {
  // JSON 데이터의 mainSection을 state로 관리 (필요에 따라 직접 사용 가능)
  const [mainSection] = useState(GreenHistory.mainSection);

  return (
    <div className="space-y-16 font-sans">
      {/* 1. 페이지 타이틀 */}
      <div>{makeCommonTitle(GreenHistory.pageTitle)}</div>

      {/* 2. 메인 섹션 (Hero 이미지 + 설명) */}
      {mainSection &&
        makeMainSection(
          [mainSection.subTitle, mainSection.title], // makeMainSection의 title은 배열 형태를 기대함 (makeForced.js 참조)
          mainSection.description,
          mainSection.imageUrl
        )}

      {/* 3. 타임라인 섹션 */}
      {/* makeTimeLine은 좌측 열 데이터와 우측 열 데이터를 인자로 받음 */}
      {makeTimeLine(
        GreenHistory.timeline.leftColumn,
        GreenHistory.timeline.rightColumn
      )}
    </div>
  );
};

export default HistoryOfGreenComponent;
