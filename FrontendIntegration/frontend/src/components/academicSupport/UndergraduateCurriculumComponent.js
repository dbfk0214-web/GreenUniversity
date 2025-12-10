import React, { useState } from "react";
import UndergraduateCurriculum from "../../json/academicSupport/undergraduateCurriculum.json";
import {
  makeDefaultLI,
  makeSectionTitle,
} from "../../util/makeDivUtils/makeCommon";
import {
  makeAcademicTableA,
  makeAcademicTableB,
  makeGuideSection,
} from "../../util/makeDivUtils/academicSupport/makeAcademicCurriculm";

const UndergraduateCurriculumComponent = () => {
  // useState로 데이터 가져오기
  const [graduationRequirements, setGraduationRequirements] = useState(
    UndergraduateCurriculum.graduationRequirements
  );

  const [courseClassification, setCourseClassification] = useState(
    UndergraduateCurriculum.courseClassification
  );

  return (
    <div>
      <div>{makeSectionTitle("학과이수과정")}</div>
      <div>
        <div>{makeGuideSection(UndergraduateCurriculum.overview.title)}</div>
        <div>{makeDefaultLI(UndergraduateCurriculum.overview.description)}</div>
      </div>
      <div>
        <div>{makeGuideSection(courseClassification.title)}</div>
        <div>
          {makeAcademicTableB(
            courseClassification.table.headers,
            courseClassification.table.rows,
            courseClassification.table.columns
          )}
        </div>
      </div>
      <div>
        <div>
          {makeGuideSection(
            graduationRequirements.title,
            graduationRequirements.description,
            graduationRequirements.label
          )}
        </div>
        <div>
          {makeAcademicTableA(
            graduationRequirements.table.rows,
            graduationRequirements.table.columns
          )}
        </div>
      </div>
    </div>
  );
};

export default UndergraduateCurriculumComponent;
