import React from "react";
import PrivateThirdparty from "../../json/information/private/private_thirdparty.json";
import PrivacyOutsourcing from "../../json/information/private/privacy_outsourcing.json";
import PrivacyOverseas from "../../json/information/private/privacy_overseas.json";
import PrivacySecurity from "../../json/information/private/privacy_security.json";
import PrivateOverview from "../../json/information/private/private_overview.json";
import PrivatePolicy from "../../json/information/private/private_policy.json";
import { recursiveRender } from "../../util/makeComponentUtil";

const PrivacyPolicyComponent = () => {
  return (
    <div>
      PrivacyPolicyComponent
      {PrivateThirdparty && recursiveRender(PrivateThirdparty)}
      {PrivacyOutsourcing && recursiveRender(PrivacyOutsourcing)}
      {PrivacyOverseas && recursiveRender(PrivacyOverseas)}
      {PrivacySecurity && recursiveRender(PrivacySecurity)}
      {PrivateOverview && recursiveRender(PrivateOverview)}
      {PrivatePolicy && recursiveRender(PrivatePolicy)}
    </div>
  );
};

export default PrivacyPolicyComponent;
