import React from "react";
import Tuition from "../../json/academicSupport/tuition.json";
// import {
//   makeEventMonthSection,
//   makeLeftRightButton,
// } from "../../util/makeDivUtils/academicSupport/makeAcademicInformation";
// import { makeSectionTitle } from "../../util/makeDivUtils/makeCommonLayout";

const TuitionComponent = () => {
  const columns = ["date", "title"];

  return (
    <div>
     
    </div>
  );
};

export default TuitionComponent;

//  <div>{makeSectionTitle("등록일정")}</div>
//       <div>{makeLeftRightButton("2025년 1학기")}</div>
//       <div
//         style={{
//           display: "grid",
//           gridTemplateColumns: "repeat(auto-fit, minmax(800px, 1fr))",
//         }}
//       >
//         {Tuition &&
//           Tuition.months.map((tuition) => (
//             <div style={{ border: "1px solid #ccc", display: "flex" }}>
//               {makeEventMonthSection(
//                 tuition.month,
//                 tuition.monthEng,
//                 tuition.events,
//                 columns
//               )}
//             </div>
//           ))}
//       </div>