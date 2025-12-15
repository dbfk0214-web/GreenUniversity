import React from "react";
import SuppportColleges from "../../json/admissionEducation/support_colleges.json";
// import { makeCollegeSection } from "../../util/makeDivUtils/admissionEducation/makeAdmissionCommon";
// import { makeSectionTitle } from "../../util/makeDivUtils/makeCommonLayout";

const CollegesComponent = () => {
  const columns = ["name", "officeLocation", "phone"];

  return (
    <div>
     
    </div>
  );
};

export default CollegesComponent;


//  {/* 타이틀 */}
//       <div>{makeSectionTitle("대학")}</div>
//       <div>
//         {SuppportColleges.colleges.map((college) => (
//           <div>
//             {makeCollegeSection(
//               college.image,
//               college.name,
//               college.description,
//               college.location,
//               college.phone,
//               college.departments,
//               columns
//             )}
//           </div>
//         ))}
//       </div>