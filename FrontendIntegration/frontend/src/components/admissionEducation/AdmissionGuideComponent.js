import React from 'react'
import SupportAdmission from "../../json/academicSupport/support_admission.json";
import { recursiveRender } from '../../util/makeComponentUtil';

const AdmissionGuideComponent = () => {
  return (
    <div>
      AdmissionGuideComponent
      {SupportAdmission && recursiveRender(SupportAdmission)}
    </div>
  )
}

export default AdmissionGuideComponent
