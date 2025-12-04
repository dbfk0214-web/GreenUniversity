import React from "react";
import AcademicInformation from "../../json/academicSupport/academicInformation.json";
import { recursiveRender } from "../../util/makeComponentUtil";

const AcademicInformationComponent = () => {
  return (
    <div>
      AcademicInformationComponent
      {AcademicInformation && recursiveRender(AcademicInformation)}
    </div>
  );
};

export default AcademicInformationComponent;
