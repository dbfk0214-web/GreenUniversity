import React from "react";
import CertificatesIssuance from "../../json/academicSupport/certificatesIssuance.json";
import { recursiveRender } from "../../util/makeComponentUtil";

const CertificatesIssuanceComponent = () => {
  return (
    <div>
      CertificatesIssuanceComponent
      {CertificatesIssuance && recursiveRender(CertificatesIssuance)}
    </div>
  );
};

export default CertificatesIssuanceComponent;
