import React, { useState } from "react";
import SupportAdmission from "../../json/admissionEducation/support_admission.json";
import {
  makeBottomButtons,
  makeContactCard,
  makeGuideGrid,
  makeIntroSection,
  makeSimpleTableB,
} from "../../util/makeDivUtils/admissionEducation/makeAdmissionEducation";

const AdmissionGuideComponent = () => {
  const cardKeys = ["sinchon", "miral"];
  const cardColumns = ["title", "address", "email", "phone", "workingHours"];

  const noticeColumn = ["category", "text", "date"];

  const [admission, setAdmission] = useState(SupportAdmission.admission);

  return (
    <div>
      {/* Card 2개 */}
      <div style={{ display: "flex" }}>
        {admission &&
          cardKeys.map((key) => (
            <div>
              {makeContactCard(admission.campusContacts[key], cardColumns)}
            </div>
          ))}
      </div>

      {/* 베너같은 것 */}
      <div>
        {admission &&
          makeIntroSection(
            admission.intro.title,
            admission.intro.description,
            "https://www.yonsei.ac.kr/sites/sc/images/sub/iphak-banner.jpg"
          )}
      </div>

      {/* 전체 */}
      <div>
        {/* 컨텐츠1  */}
        <div style={{ display: "flex" }}>
          {/* 공지사항 */}
          <div>
            {admission &&
              makeSimpleTableB(
                admission.notice.items,
                noticeColumn,
                admission.notice.title
              )}
          </div>

          {/* 전형안내 */}
          <div>
            {admission &&
              makeGuideGrid(admission.guides.items, admission.guides.title)}
          </div>
        </div>

        {/* 컨텐츠2 */}
        <div>{admission && makeBottomButtons(admission.bottomButtons)}</div>
      </div>
    </div>
  );
};

export default AdmissionGuideComponent;
