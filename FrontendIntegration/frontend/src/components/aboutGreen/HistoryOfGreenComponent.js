import React, { useEffect, useState } from "react";
import GreenHistory from "../../json/aboutGreen/green_history.json";
import {
  makeMainSection,
  makeTimeLine,
} from "../../util/makeDivUtils/aboutGreen/makeGreenHistory";
import { makeCommonLabel } from "../../util/makeDivUtils/makeCommonMedia";
import { makeCommonCard } from "../../util/makeDivUtils/makeCommonCard";
import {
  makeCommonHeading,
  makeCommonTitle,
} from "../../util/makeDivUtils/makeCommonText";

const HistoryOfGreenComponent = () => {
  const [mainSection, setMainSection] = useState(GreenHistory.mainSection);

  const columns = ["date", "description", "imageUrl"];

  return (
    <div>
      {/* 타이틀 */}
      <div>{makeCommonTitle(GreenHistory.pageTitle)}</div>
      {/* MainSection */}
      <div className="relative rounded-2xl overflow-hidden bg-[#0b2a3d]">
        <img
          src={mainSection.imageUrl}
          alt=""
          className="w-full h-[260px] object-contain"
        />

        {/* 텍스트 */}
        <div className="absolute top-0 left-0 p-8 text-white">
          {makeCommonHeading(mainSection.title[0], 2, "bg-blue-600 px-3 py-1")}
          {makeCommonHeading(mainSection.title[1], 3, "text-yellow-300 mt-2")}
        </div>
      </div>
      {/* 설명 */}
      <div>{makeCommonLabel(mainSection.description)}</div>

      {/* 도표 */}
      <div></div>
    </div>
  );
};

export default HistoryOfGreenComponent;

// <div>
//       {mainSection &&
//         makeMainSection(
//           mainSection.title,
//           mainSection.description,
//           mainSection.imageUrl
//         )}
//     </div>

//     {/* 도표 */}
//     <div>
//       {mainSection &&
//         makeTimeLine(
//           GreenHistory.timeline.leftColumn,
//           GreenHistory.timeline.rightColumn
//         )}
//     </div>
