import React from "react";
import FAQ from "../../json/information/faq.json";
import { recursiveRender } from "../../util/makeComponentUtil";

const FAQComponent = () => {
  return (
    <div>
      FAQComponent
      {FAQ && recursiveRender(FAQ)}
    </div>
  );
};

export default FAQComponent;
