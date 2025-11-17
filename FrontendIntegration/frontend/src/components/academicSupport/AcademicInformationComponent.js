import React from 'react';
import graduateSchool from "../../json/academicSupport/graduateSchool.json";
import { recursiveRender } from '../../util/makeComponentUtil';

const AcademicInformationComponent = () => {
  return (
    <div>
      {graduateSchool && recursiveRender(graduateSchool)}
    </div>
  )
}

export default AcademicInformationComponent
