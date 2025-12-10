import React from "react";
import CertificatesIssuance from "../../json/academicSupport/certificatesIssuance.json";
import {
  makeDefaultLI,
  makeDefaultList,
  makeDefautSectionList,
  makeH2Text,
  makeSectionTitle,
} from "../../util/makeDivUtils/makeCommon";
import {
  makeAcademicSectionButtonList,
  makeAcademicSectionKoreanList,
  makeAcademicStepBoxes,
  makeAcademicTab,
} from "../../util/makeDivUtils/academicSupport/makeAcademicCommon";

const CertificatesIssuanceComponent = () => {
  return (
    <div>
      <div>{makeSectionTitle("인터넷 증명 발급")}</div>
      <div>
        {makeAcademicTab(
          CertificatesIssuance.certificate_overview.title,
          CertificatesIssuance.tabs
        )}
      </div>
      <div>
        {CertificatesIssuance.certificate_overview.items
          .slice(0, 2)
          .map((item) => (
            <div>{makeDefautSectionList(item.title, item.content)}</div>
          ))}
        {
          <div>
            {makeAcademicSectionKoreanList(
              CertificatesIssuance.certificate_overview.items[2].title,
              CertificatesIssuance.certificate_overview.items[2].content
            )}
          </div>
        }
      </div>
      <div>{makeH2Text(CertificatesIssuance.certificate_methods.title)}</div>
      <div>
        <div>
          {makeAcademicSectionButtonList(
            CertificatesIssuance.certificate_methods.internet_issue.title,
            CertificatesIssuance.certificate_methods.internet_issue.content
          )}
        </div>
      </div>
      <div>
        <div>{makeH2Text(CertificatesIssuance.instant_issue_steps.title)}</div>
        <div>
          {makeAcademicStepBoxes(
            CertificatesIssuance.instant_issue_steps.title,
            CertificatesIssuance.instant_issue_steps.steps
          )}
        </div>
      </div>
      <div>
        <div>{makeH2Text(CertificatesIssuance.post_issue_steps.title)}</div>
        <div>
          {makeAcademicStepBoxes(
            CertificatesIssuance.post_issue_steps.title,
            CertificatesIssuance.post_issue_steps.steps
          )}
        </div>
        <div>
          {makeDefaultLI(CertificatesIssuance.certificate_post_info.items)}
        </div>
      </div>
    </div>
  );
};

export default CertificatesIssuanceComponent;
