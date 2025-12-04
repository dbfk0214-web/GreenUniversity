import React from "react";
import Organ from "../../json/campusLife/organ.json";
import { recursiveRender } from "../../util/makeComponentUtil";

const AdministrativeOfficesInstitutesComponent = () => {
  return (
    <div>
      OrganComponent
      {Organ && recursiveRender(Organ)}
    </div>
  );
};

export default AdministrativeOfficesInstitutesComponent;
