import React, { useEffect, useState } from "react";
// import GreenSpirit from "../../json/aboutGreen/green_spirit.json";
// import { makeSection } from "../../util/makeDivUtils/aboutGreen/makeGreenVision";

const GreenVisionComponent = () => {
  const columns = ["title", "description"];

  return (
    <div>
      {/* title */}
      <div>
        <h1>건학정신,연세이념</h1>
      </div>


      {/* 이미지  */}
      <div>
        <img src="test" alt="대체 이미지" />
      </div>
    </div>
  );
};

export default GreenVisionComponent;


      // {/* section */}
      // <div>
      //   {GreenSpirit &&
      //     GreenSpirit.sections.map((section) => (
      //       <div style={{ border: "1px solid #ccc", display: "flex" }}>
      //         {makeSection(section.title, section.description)}
      //       </div>
      //     ))}
      // </div>