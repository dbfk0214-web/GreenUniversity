import React from "react";
import Scholarship from "../../json/academicSupport/scholarship.json";
import {
  makeDefaultButton,
  makeDefaultComment,
  makeDefaultInfoBox,
  makeDefaultKoreaList,
  makeDefaultLI,
  makeH2Text,
  makeSectionTitle,
} from "../../util/makeDivUtils/makeCommon";
import { makeCampusTableA } from "../../util/makeDivUtils/aboutGreen/makeGreenOverview";

const ScholarshipsComponent = () => {
  return (
    <div>
      <div>{makeSectionTitle("장학금 안내")}</div>
      <div>
        <div>
          {makeDefaultInfoBox([Scholarship.scholarship_intro.information])}
        </div>
        <div>{makeDefaultComment(Scholarship.scholarship_intro.details)}</div>
        <div>{makeDefaultButton("장학금 안내 게시판 바로가기")}</div>
      </div>
      <div>
        <div>
          {makeCampusTableA(
            Scholarship.scholarship_table.headers,
            Scholarship.scholarship_table.data,
            Scholarship.scholarship_table.columns
          )}
          {makeDefaultComment(Scholarship.scholarship_table.comment)}
        </div>
      </div>
      <div>
        <div>{makeH2Text("학자금 대출 안내")}</div>
        <div>
          {makeCampusTableA(
            Scholarship.loan_table.headers,
            Scholarship.loan_table.data,
            Scholarship.loan_table.columns
          )}
          {makeDefaultComment(Scholarship.loan_table.comment)}
        </div>
      </div>
      <div>
        <div>{makeH2Text(Scholarship.national_scholarship_apply.title)}</div>
        <div>
          {makeDefaultKoreaList(
            Scholarship.national_scholarship_apply.information
          )}
        </div>
      </div>
      <div>
        <div>{makeH2Text(Scholarship.double_support.title)}</div>
        <div>{makeDefaultLI(Scholarship.double_support.rules)}</div>
      </div>
    </div>
  );
};

export default ScholarshipsComponent;
