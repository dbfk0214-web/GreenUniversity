import {
  makeDefaultButton,
  makeDefaultKoreaList,
  makeDefaultStepBox,
  makeDefaultTabA,
  makeH2Text,
  makeH3Text,
} from "../makeCommon";

const makeAcademicTab = (title, tabs) => {
  return (
    <>
      <div>{makeH2Text(title)}</div>
      <div>{makeDefaultTabA(tabs)}</div>
    </>
  );
};

const makeAcademicSectionKoreanList = (title, contents = []) => {
  return (
    <>
      <div>{makeH3Text(title)}</div>
      <div>{makeDefaultKoreaList(contents)}</div>
    </>
  );
};

const makeAcademicSectionButtonList = (title, contents = []) => {
  return (
    <>
      <div>{makeH3Text(title)}</div>
      <div>{contents.map((content) => makeDefaultButton(content))}</div>
    </>
  );
};

const makeAcademicStepBoxes = (title, contents = []) => {
  return (
    <>
      <div>{makeH3Text(title)}</div>
      <div>
        {contents.map((content, idx) => (
          <div>
            {makeDefaultStepBox(
              idx + 1,
              content.mainDescription,
              content.subDescription
            )}
          </div>
        ))}
      </div>
    </>
  );
};

export {
  makeAcademicTab,
  makeAcademicSectionKoreanList,
  makeAcademicSectionButtonList,
  makeAcademicStepBoxes,
};
