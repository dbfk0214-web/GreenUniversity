import React from "react";
import Welfare from "../../json/campusLife/welfare.json";
import { recursiveRender } from "../../util/makeComponentUtil";

const ServiceGuideComponent = () => {
  return (
    <div>
      WelfareComponent
      {Welfare && recursiveRender(Welfare)}
    </div>
  );
};

export default ServiceGuideComponent;
