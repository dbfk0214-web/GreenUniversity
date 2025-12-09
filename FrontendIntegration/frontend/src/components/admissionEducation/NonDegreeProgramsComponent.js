import React from "react";
import SupportNonDegreeProgram from "../../json/admissionEducation/support_nonDegreeProgram.json";
import { makeSectionTitle } from "../../util/makeDivUtils/makeCommon";
import { makeNonDegreeProgram } from "../../util/makeDivUtils/admissionEducation/makeAdmissionNonDegree";

const NonDegreeProgramsComponent = () => {
  return (
    <div>
      {/* 타이틀 */}
      <div>{makeSectionTitle("비학위과정")}</div>

      {/* 카드들 */}
      <div>{makeNonDegreeProgram(SupportNonDegreeProgram.data)}</div>
    </div>
  );
};

export default NonDegreeProgramsComponent;
