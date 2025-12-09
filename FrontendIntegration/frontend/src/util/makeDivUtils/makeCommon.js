// 제목을 강조하는 기능입니다.
const makeSectionTitle = (title, subTitle = "") => {
  return (
    <div style={{ marginBottom: "12px" }}>
      <h2
        style={{
          fontSize: "20px",
          fontWeight: "700",
          paddingBottom: "8px",
          borderBottom: "2px solid #1d4ed8", // 파란 줄
          display: "inline-block",
        }}
      >
        {title}
        {subTitle && <span style={{ fontWeight: "500" }}> ({subTitle})</span>}
      </h2>
    </div>
  );
};

// 적당히 볼드 텍스트 출력 기능입니다.
const makeBoldText = (text, size = "16px") => {
  return (
    <span
      style={{
        fontWeight: "600",
        fontSize: "16px",
        color: "#222",
      }}
    >
      {text}
    </span>
  );
};

// 텍스트에 태그를 입힙니다.
const makeDefaultTag = (text) => {
  return (
    <span
      style={{
        display: "inline-block",
        color: "#333",
        fontSize: "14px",
        backgroundColor: "green",
      }}
    >
      {text}
    </span>
  );
};

// 추후 옮기기

// Tab추가 기능입니다.
// makeDefaultTab([{ value: "test" }, { value: "test2" }])
const makeDefaultTab = (tabs = []) => {
  return (
    <div
      style={{
        border: "2px solid #1d4ed8",
        borderRadius: "10px",
        padding: "12px 20px",
        display: "flex",
        gap: "20px",
        alignItems: "center",
      }}
    >
      {tabs.map((tab) => (
        <div>{tab.value}</div>
      ))}
    </div>
  );
};

// 리스트 항목을 ul,li로 출력합니다.
const makeDefaultUlLI = (lists = []) => {
  return (
    <>
      <ul
        style={{
          listStyleType: "disc",
          paddingLeft: "20px",
          display: "grid",
          gridTemplateColumns: "repeat(2,1fr)",
          backgroundColor: "green",
        }}
      >
        {lists.map((list) => (
          <li>{list}</li>
        ))}
      </ul>
    </>
  );
};

const makeDefaultInfoBox = (lists = []) => {
  return (
    <>
      <div>
        {lists.map((list) => (
          <div>{list}</div>
        ))}
      </div>
    </>
  );
};

export {
  makeSectionTitle,
  makeBoldText,
  makeDefaultTag,
  makeDefaultTab,
  makeDefaultUlLI,
  makeDefaultInfoBox,
};
