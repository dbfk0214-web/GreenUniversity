import React from "react";
import FormApplications from "../../json/academicSupport/formApplications.json";
// import { makeLostFoundTable } from "../../util/makeDivUtils/campusLife/makeCampusLostFound";
// import { makeSearchWindow } from "../../util/makeDivUtils/makeCommonForm";
// import { makePaginationUI } from "../../util/makeDivUtils/makeCommonInteraction";
// import {
//   makeDefaultTabA,
//   makeSectionTitle,
// } from "../../util/makeDivUtils/makeCommonLayout";
// import { makeDefaultTotal } from "../../util/makeDivUtils/makeCommonMedia";

const FormsApplicationsComponent = () => {
  const columns = [
    "id",
    "title",
    "category",
    "commentCount",
    "date",
    "location",
    "attachment",
  ];

  return (
    <div>
      
    </div>
  );
};

export default FormsApplicationsComponent;


// <div>{makeSectionTitle("각종 신청서 양식 모음")}</div>
//       <div>
//         <div style={{ display: "flex" }}>
//           {makeDefaultTotal(20)}
//           {makeSearchWindow(["제목", "내용"])}
//         </div>
//       </div>
//       <div>
//         <div>{makeDefaultTabA(["전체보기", "분실", "습득"])}</div>
//         <div>{makeLostFoundTable(FormApplications, columns)}</div>
//       </div>
//       <div>{makePaginationUI([1, 2, 3])}</div>