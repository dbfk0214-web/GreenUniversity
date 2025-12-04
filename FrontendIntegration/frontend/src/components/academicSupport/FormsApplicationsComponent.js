import React from "react";
import FormApplications from "../../json/academicSupport/formApplications.json";
import { recursiveRender } from "../../util/makeComponentUtil";

const FormsApplicationsComponent = () => {
  return (
    <div>
      FormApplicationsComponent
      {FormApplications && recursiveRender(FormApplications)}
    </div>
  );
};

export default FormsApplicationsComponent;
