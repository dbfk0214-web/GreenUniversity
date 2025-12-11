import React from "react";
import LegalNotice from "../../json/information/legalNotice.json";
import { makeSectionTitle } from "../../util/makeDivUtils/makeCommon";
import { makeAcademicTitleLI } from "../../util/makeDivUtils/academicSupport/makeAcademicCommon";

const LegalNoticeComponent = () => {
  return (
    <div>
      <div>{makeSectionTitle("법적고지")}</div>
      <div>
        {LegalNotice.map((legalNotice) => (
          <div>
            {makeAcademicTitleLI(legalNotice.title, legalNotice.contents)}
          </div>
        ))}
      </div>
    </div>
  );
};

export default LegalNoticeComponent;
