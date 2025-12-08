import React, { useEffect, useState } from "react";
import GreenSpirit from "../../json/aboutGreen/green_spirit.json";
import { makeSection } from "../../util/makeDivUtils/aboutGreen/makeGreenVision";

const GreenVisionComponent = () => {
  const columns = ["title", "description"];

  return (
    <div>
      {/* title */}
      <div>
        <h1>건학정신,연세이념</h1>
      </div>

      {/* section */}
      <div>
        {GreenSpirit &&
          GreenSpirit.sections.map((section) => (
            <div style={{ border: "1px solid #ccc", display: "flex" }}>
              {makeSection(section.title, section.description)}
            </div>
          ))}
      </div>

      {/* 이미지  */}
      <div>
        <img src="test" alt="대체 이미지" />
      </div>
    </div>
  );
};

export default GreenVisionComponent;

// lagacy 코드
// import dd from "../../json/aboutGreen/green_spirit.json";

// const GreenVisionComponent = () => {
//   const [data, setData] = useState(dd);
//   // useEffect(() => {
//   //   setData(dd);
//   //   console.log(data);
//   // }, []);
//   // console.log(data);

//   const mm = (data) => {
//     return (
//       <div className="p-4 bg-gray-50">
//         {data &&
//           data.map((i, idx) => (
//             <div key={idx} className="p-2 mb-2 rounded-none">
//               {i}
//             </div>
//           ))}
//       </div>
//     );
//   };

//   return (
//     <div>
//       <div>{data.pageTitle}</div>
//       <div>
//         {data &&
//           data.sections.map((t, tt) => (
//             <div key={tt} className="p-2">
//               <div>
//                 <div>{t.title}</div>
//                 <div>{t.description}</div>
//               </div>
//             </div>
//           ))}
//       </div>
//       <div>
//         {data &&
//           data.diagram.items.map((i, idx) => (
//             <div key={idx} className="p-4">
//               <div>
//                 <div>{i.label}</div>
//                 <div>{i.value}</div>
//               </div>
//             </div>
//           ))}
//       </div>
//     </div>
//   );
// };

// export default GreenVisionComponent;
