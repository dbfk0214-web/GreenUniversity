import React from "react";
import FormApplications from "../../json/academicSupport/formApplications.json";
import {
  makeDefaultTabA,
  makeDefaultTotal,
  makePaginationUI,
  makeSearchWindow,
  makeSectionTitle,
} from "../../util/makeDivUtils/makeCommon";
import { makeLostFoundTable } from "../../util/makeDivUtils/campusLife/makeCampusLostFound";

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
      <div>{makeSectionTitle("각종 신청서 양식 모음")}</div>
      <div>
        <div style={{ display: "flex" }}>
          {makeDefaultTotal(20)}
          {makeSearchWindow(["제목", "내용"])}
        </div>
      </div>
      <div>
        <div>{makeDefaultTabA(["전체보기", "분실", "습득"])}</div>
        <div>{makeLostFoundTable(FormApplications, columns)}</div>
      </div>
      <div>{makePaginationUI([1, 2, 3])}</div>
    </div>
  );
};

export default FormsApplicationsComponent;
