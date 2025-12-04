import React from "react";
import UndergraduateCurriculum from "../../json/academicSupport/undergraduateCurriculum.json";
import { recursiveRender } from "../../util/makeComponentUtil";

const UndergraduateCurriculumComponent = () => {
  return (
    <div>
      UndergraduateCurriculumComponent
      {UndergraduateCurriculum && recursiveRender(UndergraduateCurriculum)}
    </div>
  );
};

export default UndergraduateCurriculumComponent;
