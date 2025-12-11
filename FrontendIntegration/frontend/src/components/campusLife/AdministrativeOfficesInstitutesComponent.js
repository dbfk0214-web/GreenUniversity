import React from "react";
import Organ from "../../json/campusLife/organ.json";
import { makeOrganCard } from "../../util/makeDivUtils/campusLife/makeCampusCommon";
import { makeSectionTitle } from "../../util/makeDivUtils/makeCommonLayout";

const AdministrativeOfficesInstitutesComponent = () => {
  return (
    <div>
      <div>{makeSectionTitle("신촌캠퍼스")}</div>
      <div style={{ display: "grid", gridTemplateColumns: "1fr 1fr 1fr" }}>
        {Organ.신촌캠퍼스.map((organ) => (
          <div>
            {makeOrganCard(
              organ.title,
              organ.location,
              organ.phone,
              organ.items
            )}
          </div>
        ))}
      </div>
    </div>
  );
};

export default AdministrativeOfficesInstitutesComponent;
