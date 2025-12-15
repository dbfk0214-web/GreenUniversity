import React, { useEffect, useState } from "react";
import GreenHistory from "../../json/aboutGreen/green_history.json";
// import {
//   makeMainSection,
//   makeTimeLine,
// } from "../../util/makeDivUtils/aboutGreen/makeGreenHistory";

const HistoryOfGreenComponent = () => {
  const [mainSection, setMainSection] = useState(GreenHistory.mainSection);

  const columns = ["date", "description", "imageUrl"];

  return (
    <div>
      {/* 타이틀 */}
      <div>{GreenHistory.pageTitle}</div>

      {/* MainSection */}
    
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