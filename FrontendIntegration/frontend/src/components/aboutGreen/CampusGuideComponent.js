import React, { useState } from "react";
import GreenGuide from "../../json/aboutGreen/green_guide.json";
import {
  makeDefaultImageSection,
  makeDefaultSentence,
  makeSentenceImageSectionA,
  makeSentenceImageSectionB,
} from "../../util/makeDivUtils/aboutGreen/makeGreenCommon";
import { makeSectionTitle } from "../../util/makeDivUtils/makeCommon";

const CampusGuideComponent = () => {
  const [mainContent, setMainContent] = useState(GreenGuide.mainContent);

  return (
    <div>
      {/* section 1 */}
      <div>
        {/* heroImage */}
        <div>
          {makeDefaultImageSection(
            mainContent.heroImage,
            "Yonsei University :",
            ["Sinchon Campus"]
          )}
        </div>
        {/* 소개 */}
        <div>{makeDefaultSentence(mainContent.introduction)}</div>
      </div>

      {/* section 2 */}
      <div>
        <div>{makeSectionTitle("지리적 배경")}</div>
        <div>
          {makeSentenceImageSectionA(
            mainContent.sections[0].image,
            mainContent.sections[0].locationInfo.title,
            mainContent.sections[0].locationInfo.paragraphs
          )}
        </div>
      </div>
      {/* section 3 */}
      <div>
        <div>{makeSectionTitle("지리적 배경")}</div>
        <div style={{ display: "flex", flexWrap: "wrap", gap: "16px" }}>
          {mainContent.sections[1].historicalSites.map((history, idx) => (
            <div key={idx} style={{ width: "48%", marginBottom: "12px" }}>
              {makeSentenceImageSectionB(
                history.image,
                history.name,
                history.description
              )}
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default CampusGuideComponent;

// import React, { useState } from "react";
// import guide from "../../json/aboutGreen/green_guide.json";

// const StarList = ({ i, className }) => {
//   if (!Array.isArray(i) || i.length === 0) {
//     return null;
//   }

//   return (
//     <>
//       {i.map((iv, idx) => (
//         <div key={idx} className={className}>
//           {iv}
//         </div>
//       ))}
//     </>
//   );
// };

// const CampusGuideComponent = () => {
//   const [gid, setGid] = useState(guide);

//   const { header = {}, mainContent = {} } = gid; // page -> gid 로 변경

//   const { title, icons = [], navigationTabs = {} } = header;
//   const { name, active } = navigationTabs;
//   const { introduction = [], sections = [] } = mainContent;

//   return (
//     <div>
//       <div>{title}</div>

//       <StarList i={icons} className="p-3" />

//       <div>
//         <div>{name}</div>
//       </div>

//       <div>
//         <div>{active}</div>
//       </div>

//       <hr />
//       <h3>소개</h3>

//       <StarList i={introduction} className="introduction-paragraph" />

//       <div>
//         {sections.map((section, idx) => (
//           <div key={idx}>
//             <h4>{section.title}</h4>

//             {section.locationInfo && (
//               <div>
//                 <h5>{section.locationInfo.title}</h5>
//                 <p>
//                   <i>{section.locationInfo.quote}</i>
//                 </p>
//                 <StarList
//                   i={section.locationInfo.paragraphs}
//                   className="paragraph-item"
//                 />
//               </div>
//             )}
//             {section.historicalSites && (
//               <div>
//                 {section.historicalSites.map((site) => (
//                   <div key={site.name}>
//                     <h5>{site.name}</h5>
//                     <img src={site.image} alt={site.name} width="100" />
//                     <p>{site.description}</p>
//                   </div>
//                 ))}
//               </div>
//             )}
//           </div>
//         ))}
//       </div>
//     </div>
//   );
// };
// export default CampusGuideComponent;
