import React from 'react'
import nonDegreeProgram from "../../json/academicSupport/nonDegreeProgram.json";
import { jsonToDiv } from '../../util/makeComponentUtil';

const CertificatesIssuanceComponent = () => {
  return (
    <div>
      {nonDegreeProgram && jsonToDiv(nonDegreeProgram)}
    </div>
  )
}

export default CertificatesIssuanceComponent
