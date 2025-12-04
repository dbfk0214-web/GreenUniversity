import React from "react";
import Careers from "../../json/information/careers.json";
import { recursiveRender } from "../../util/makeComponentUtil";

const CareersComponent = () => {
  return (
    <div>
      CareersComponent
      {Careers && recursiveRender(Careers)}
    </div>
  );
};

export default CareersComponent;
