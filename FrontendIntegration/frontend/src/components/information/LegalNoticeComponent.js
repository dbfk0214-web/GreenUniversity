import React from "react";
import LegalNotice from "../../json/information/legalNotice.json";
import { recursiveRender } from "../../util/makeComponentUtil";

const LegalNoticeComponent = () => {
  return (
    <div>
      LegalNoticeComponent
      {LegalNotice && recursiveRender(LegalNotice)}
    </div>
  );
};

export default LegalNoticeComponent;
