import React from "react";
import AcademicInformation from "../../json/academicSupport/academicInformation.json";
// import {
//   makeEventMonthSection,
//   makeLeftRightButton,
// } from "../../util/makeDivUtils/academicSupport/makeAcademicInformation";

const AcademicInformationComponent = () => {
  const columns = ["date", "title"];

  return (
    <div>
  
    </div>
  );
};

export default AcademicInformationComponent;


    // {/* 학사 일정 */}
    //   {/* 예시로 2025년 1학기를 넣었습니다. */}
    //   <h1>학사 일정</h1>
    //   <div>{makeLeftRightButton("2025년 1학기")}</div>

    //   {/* 학사일정표 */}
    //   <div
    //     style={{
    //       display: "grid",
    //       gridTemplateColumns: "repeat(auto-fit, minmax(800px, 1fr))",
    //     }}
    //   >
    //     {AcademicInformation &&
    //       AcademicInformation.map((information) => (
    //         <div style={{ border: "1px solid #ccc", display: "flex" }}>
    //           {makeEventMonthSection(
    //             information.month,
    //             information.monthEng,
    //             information.events,
    //             columns
    //           )}
    //         </div>
    //       ))}
    //   </div>