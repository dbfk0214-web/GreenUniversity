import React from "react";
import { recursiveRender } from "../../util/makeComponentUtil";
import SupportGraduate from "../../json/admissionEducation/support_graduateSchool.json";
import { makeCollegeSection } from "../../util/makeDivUtils/admissionEducation/makeAdmissionCommon";
import { makeSectionTitle } from "../../util/makeDivUtils/makeCommon";

const GraduateSchoolComponent = () => {
  const columns = ["name", "officeLocation", "phone"];

  return (
    <div>
      {/* 타이틀 */}
      <div>{makeSectionTitle("대학원")}</div>
      <div>
        {SupportGraduate.colleges.map((college) => (
          <div>
            {makeCollegeSection(
              college.image,
              college.name,
              college.description,
              college.location,
              college.phone,
              college.departments,
              columns
            )}
          </div>
        ))}
      </div>
    </div>
  );
};

export default GraduateSchoolComponent;
