import React from "react";
import FAQ from "../../json/information/faq.json";
import { makeAcodignTable } from "../../util/makeDivUtils/information/makeFAQ";
import { makeSectionTitle } from "../../util/makeDivUtils/makeCommonLayout";
import { makePaginationUI } from "../../util/makeDivUtils/makeCommonInteraction";
import { makeSearchWindow } from "../../util/makeDivUtils/makeCommonForm";
import { makeDefaultTotal } from "../../util/makeDivUtils/makeCommonMedia";

const FAQComponent = () => {
  const columns = ["id", "title", "category", "commentCount"];

  return (
    <div>
      <div>{makeSectionTitle("학사 FAQ")}</div>
      <div>
        <div style={{ display: "flex" }}>
          {makeDefaultTotal(20)}
          {makeSearchWindow(["제목", "내용"])}
        </div>
      </div>
      <div>{makeAcodignTable(FAQ.tabs, FAQ.datas, columns)}</div>
      <div>{makePaginationUI([1, 2, 3])}</div>
    </div>
  );
};

export default FAQComponent;
