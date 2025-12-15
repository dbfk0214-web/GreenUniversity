import React, { useState } from "react";
import GreenIcon from "../../json/aboutGreen/green_icon.json";
// import { makeImageSection } from "../../util/makeDivUtils/aboutGreen/makeGreenSymbols";

const UniversitySymbolsComponent = () => {
  const [mainContent, setMainContent] = useState(GreenIcon.page.mainContent);

  return (
    <div>

    </div>
  );
};

export default UniversitySymbolsComponent;


      // <div>
      //   {makeImageSection(
      //     mainContent.backgroundImage,
      //     mainContent.textOverlay.title,
      //     mainContent.textOverlay.paragraphs
      //   )}
      // </div>
