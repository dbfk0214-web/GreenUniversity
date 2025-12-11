import React from "react";
import Private from "../../json/information/private.json";
import { makePrivacyLabelingSection } from "../../util/makeDivUtils/information/makeInformationCommon";
import {
  makePrivacyTable,
  makePrivacyTableA,
} from "../../util/makeDivUtils/information/makePrivacy";
import { makeH2Text, makeH3Text } from "../../util/makeDivUtils/makeCommonFont";
import {
  makeDefaultInfoBox,
  makeSectionTitle,
} from "../../util/makeDivUtils/makeCommonLayout";
import {
  makeDefaultLI,
  makeDefaultNumberList,
} from "../../util/makeDivUtils/makeCommonList";

const PrivacyPolicyComponent = () => {
  return (
    <div>
      <div>
        <div>{makeSectionTitle("개인정보처리방침")}</div>
        <div>
          <div>{makeDefaultInfoBox(Private.privacy_intro.contents)}</div>
        </div>
        <div>
          <div>{makeH2Text(Private.privacy_labeling.title)}</div>
        </div>
      </div>
      <div>{makePrivacyLabelingSection(Private.privacy_labeling.items)}</div>
      <div>{makeH3Text(Private.privacy_policy_toc.title)}</div>
      <div style={{ border: "1px solid #ccc", borderRadius: "4px" }}>
        {makeDefaultNumberList(Private.privacy_policy_toc.list)}
      </div>

      <div>
        <div>
          <div>{makeH2Text(Private.privacy_policy_chapter1.title)}</div>
          <div>{makeDefaultLI(Private.privacy_policy_chapter1.intro_text)}</div>
        </div>
        <div>
          {/* 제1조  */}
          <div>
            {makePrivacyTableA(
              [Private.privacy_policy_chapter1.info_portal.title],
              Private.privacy_policy_chapter1.info_portal.header,
              Private.privacy_policy_chapter1.info_portal.table.rows,
              Private.privacy_policy_chapter1.info_portal.table.columns
            )}
          </div>
        </div>
        {/* 제1조 하위 */}
        {Private.privacy_policy_chapter1.info_portal2.tables.map(
          (table, idx) => (
            <div>
              {makePrivacyTable(
                table.table.rows[0].subtitle,
                Private.privacy_policy_chapter1.info_portal2.header,
                table.table.rows,
                table.table.columns,
                idx + 1
              )}
            </div>
          )
        )}
      </div>
    </div>
  );
};

export default PrivacyPolicyComponent;
