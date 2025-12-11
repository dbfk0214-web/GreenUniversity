import React from "react";
import Careers from "../../json/information/careers.json";
import { recursiveRender } from "../../util/makeComponentUtil";
import {
  makeDefaultTabA,
  makeDefaultTableBody,
  makeDefaultTotal,
  makePaginationUI,
  makeSearchWindow,
  makeSectionTitle,
} from "../../util/makeDivUtils/makeCommon";

const CareersComponent = () => {
  const columns = [
    "id",
    "title",
    "category",
    "period",
    "attachment",
    "views",
    "status",
  ];

  return (
    <div>
      <div>{makeSectionTitle("채용안내")}</div>
      <div>
        <div style={{ display: "flex" }}>
          {makeDefaultTotal(20)}
          {makeSearchWindow(["제목", "내용"])}
        </div>
      </div>
      <div>{makeDefaultTabA(Careers.tabs)}</div>
      <div>{makeDefaultTableBody(Careers.datas, columns)}</div>
      <div>{makePaginationUI([1, 2, 3])}</div>
    </div>
  );
};

export default CareersComponent;
