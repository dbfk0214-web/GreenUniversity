import React from "react";
import { recursiveRender } from "../../util/makeComponentUtil";
import SuppportColleges from "../../json/admissionEducation/support_colleges.json";

const CollegesComponent = () => {
  return (
    <div>
      CollegesComponent
      {SuppportColleges && recursiveRender(SuppportColleges)}
    </div>
  );
};

export default CollegesComponent;
