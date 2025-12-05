import React from "react";
import ScholarshipIntro from "../../json/academicSupport/scholarship/scholarship_intro.json";
import ScholarshipTable from "../../json/academicSupport/scholarship/scholarship_table.json";
import LoanTable from "../../json/academicSupport/scholarship/loan_table.json";
import DoubleSupport from "../../json/academicSupport/scholarship/double_support.json";
import { recursiveRender } from "../../util/makeComponentUtil";

const ScholarshipsComponent = () => {
  return (
    <div>
      ScholarshipsComponent
      {ScholarshipIntro && recursiveRender(ScholarshipIntro)}
      {ScholarshipTable && recursiveRender(ScholarshipTable)}
      {LoanTable && recursiveRender(LoanTable)}
      {DoubleSupport && recursiveRender(DoubleSupport)}
    </div>
  );
};

export default ScholarshipsComponent;
