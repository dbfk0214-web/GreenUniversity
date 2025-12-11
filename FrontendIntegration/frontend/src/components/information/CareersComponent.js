import React from "react";
import Careers from "../../json/information/careers.json";
import {
  makeDefaultTabA,
  makeSectionTitle,
} from "../../util/makeDivUtils/makeCommonLayout";
import { makeSearchWindow } from "../../util/makeDivUtils/makeCommonForm";
import { makeDefaultTableBody } from "../../util/makeDivUtils/makeCommonTable";
import { makePaginationUI } from "../../util/makeDivUtils/makeCommonInteraction";
import { makeDefaultTotal } from "../../util/makeDivUtils/makeCommonMedia";

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
