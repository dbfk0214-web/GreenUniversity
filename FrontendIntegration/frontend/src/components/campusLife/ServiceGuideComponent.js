import React from "react";
import Welfare from "../../json/campusLife/welfare.json";
import { makeSectionTitle } from "../../util/makeDivUtils/makeCommon";
import { makeOrganCard } from "../../util/makeDivUtils/campusLife/makeCampusCommon";

const ServiceGuideComponent = () => {
  return (
    <div>
      <div>{makeSectionTitle("신촌 복지/체육시설")}</div>
      <div style={{ display: "grid", gridTemplateColumns: "1fr 1fr 1fr" }}>
        {Welfare.map((welfare) => (
          <div>
            {makeOrganCard(
              welfare.title,
              welfare.location,
              welfare.phone,
              welfare.items
            )}
          </div>
        ))}
      </div>
    </div>
  );
};

export default ServiceGuideComponent;
