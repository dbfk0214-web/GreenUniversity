import React from "react";
import Tuition from "../../json/academicSupport/tuition.json";
import { recursiveRender } from "../../util/makeComponentUtil";

const TuitionComponent = () => {
  return (
    <div>
      TuitionComponent
      {Tuition && recursiveRender(Tuition)}
    </div>
  );
};

export default TuitionComponent;
