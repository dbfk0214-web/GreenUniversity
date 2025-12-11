import {
  makeDefaultButton,
  makeDefaultKoreaList,
  makeDefaultLI,
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
      <div style={{ display: "flex", flexDirection: "row" }}>
        {contents.map((content, idx) => {
          const hasNext = idx < contents.length - 1;

          return (
            <>
              <div>
                {makeDefaultStepBox(
                  idx + 1,
                  content.mainDescription,
                  content.subDescription
                )}
              </div>
              {hasNext && (
                <div
                  style={{
                    fontSize: "24px",
                    fontWeight: "700",
                    color: "#555",
                  }}
                >
                  &gt;
                </div>
              )}
            </>
          );
        })}
      </div>
    </>
  );
};

const makeAcademicTitleLI = (title, contents = []) => {
  return (
    <>
      <div>{makeH3Text(title)}</div>
      <div>{makeDefaultLI(contents)}</div>
    </>
  );
};

export {
  makeAcademicTab,
  makeAcademicSectionKoreanList,
  makeAcademicSectionButtonList,
  makeAcademicStepBoxes,
  makeAcademicTitleLI,
};
