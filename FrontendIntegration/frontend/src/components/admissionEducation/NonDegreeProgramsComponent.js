import React from 'react';
import { recursiveRender } from '../../util/makeComponentUtil';
import SupportNonDegreeProgram from "../../json/academicSupport/support_nonDegreeProgram.json";

const NonDegreeProgramsComponent = () => {
  return (
    <div>
      NonDegreeProgramsComponent
      {SupportNonDegreeProgram && recursiveRender(SupportNonDegreeProgram)}
    </div>
  )
}

export default NonDegreeProgramsComponent
