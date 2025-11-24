import React from 'react'
import { recursiveRender } from '../../util/makeComponentUtil';
import SupportGraduate from "../../json/academicSupport/support_graduateSchool.json";

const GraduateSchoolComponent = () => {
  return (
    <div>
      GraduateSchoolComponent
      {SupportGraduate && recursiveRender(SupportGraduate)}
    </div>
  )
}

export default GraduateSchoolComponent
