import React, { useState } from "react";
import GreenGuide from "../../json/aboutGreen/green_guide.json";
// import {
//   makeDefaultImageSection,
//   makeDefaultSentence,
//   makeSentenceImageSectionA,
//   makeSentenceImageSectionB,
// } from "../../util/makeDivUtils/aboutGreen/makeGreenCommon";
// import { makeSectionTitle } from "../../util/makeDivUtils/makeCommonLayout";

const CampusGuideComponent = () => {
  const [mainContent, setMainContent] = useState(GreenGuide.mainContent);

  return (
    <div>
   
    </div>
  );
};

export default CampusGuideComponent;

  //  {/* section 1 */}
  //     <div>
  //       {/* heroImage */}
  //       <div>
  //         {makeDefaultImageSection(
  //           mainContent.heroImage,
  //           "Yonsei University :",
  //           ["Sinchon Campus"]
  //         )}
  //       </div>
  //       {/* 소개 */}
  //       <div>{makeDefaultSentence(mainContent.introduction)}</div>
  //     </div>

  //     {/* section 2 */}
  //     <div>
  //       <div>{makeSectionTitle("지리적 배경")}</div>
  //       <div>
  //         {makeSentenceImageSectionA(
  //           mainContent.sections[0].image,
  //           mainContent.sections[0].locationInfo.title,
  //           mainContent.sections[0].locationInfo.paragraphs
  //         )}
  //       </div>
  //     </div>
  //     {/* section 3 */}
  //     <div>
  //       <div>{makeSectionTitle("지리적 배경")}</div>
  //       <div style={{ display: "flex", flexWrap: "wrap", gap: "16px" }}>
  //         {mainContent.sections[1].historicalSites.map((history, idx) => (
  //           <div key={idx} style={{ width: "48%", marginBottom: "12px" }}>
  //             {makeSentenceImageSectionB(
  //               history.image,
  //               history.name,
  //               history.description
  //             )}
  //           </div>
  //         ))}
  //       </div>
  //     </div>