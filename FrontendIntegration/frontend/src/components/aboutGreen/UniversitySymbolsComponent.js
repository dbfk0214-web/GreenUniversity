import React, { useState } from "react";
import GreenIcon from "../../json/aboutGreen/green_icon.json";
import { makeImageSection } from "../../util/makeDivUtils/aboutGreen/makeGreenSymbols";

const UniversitySymbolsComponent = () => {
  const [mainContent, setMainContent] = useState(GreenIcon.page.mainContent);

  return (
    <div>
      <div>
        {makeImageSection(
          mainContent.backgroundImage,
          mainContent.textOverlay.title,
          mainContent.textOverlay.paragraphs
        )}
      </div>
    </div>
  );
};

export default UniversitySymbolsComponent;

// import React, { useState } from "react";
// import ic from "../../json/aboutGreen/green_icon.json";

// const ItemList = ({ items, className }) => {
//   if (!Array.isArray(items) || items.length === 0) {
//     return null;
//   }

//   return (
//     <>
//       {items.map((item, idx) => (
//         <div key={idx} className={className}>
//           {item}
//         </div>
//       ))}
//     </>
//   );
// };

// const UniversitySymbolsComponent = () => {
//   const [icon, setIcon] = useState(ic);
//   if (!icon || !icon.page) {
//     return <div>데이터를 불러오는 중...</div>;
//   }

//   const { page } = icon;

//   const {
//     title: pageTitle,
//     header = {},
//     mainContent = {},
//     floatingUI = {},
//   } = page;
//   // 2단계: 각 섹션에서 하위 데이터 추출
//   const { title: headerTitle, icons } = header;
//   const { backgroundImage, textOverlay = {} } = mainContent;
//   const { title: textTitle, paragraphs } = textOverlay;
//   const { quickMenu = {}, scrollToTop = {} } = floatingUI;
//   // 3단계: 가장 깊은 데이터 추출
//   const { label: quickMenuLabel } = quickMenu;
//   const { label: scrollTopLabel, icon: scrollTopIcon } = scrollToTop;

//   return (
//     <div>
//       <div>{pageTitle}</div>

//       <div>
//         <div>{headerTitle}</div>
//       </div>

//       <ItemList items={icons} className="p-3" />

//       <div>
//         <div>{backgroundImage}</div>
//       </div>

//       <div>
//         <div>{textTitle}</div>

//         <ItemList items={paragraphs} className="p-3" />
//       </div>

//       <div>
//         <div>{quickMenuLabel}</div>
//       </div>

//       <div>
//         <div>{scrollTopLabel}</div>
//         <div>{scrollTopIcon}</div>
//       </div>
//     </div>
//   );
// };

// export default UniversitySymbolsComponent;
