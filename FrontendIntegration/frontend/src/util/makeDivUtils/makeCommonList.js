import { makeH3Text } from "./makeCommonFont";

const makeDefaultList = (lists = []) => {
  return (
    <div>
      {lists.map((list, index) => (
        <li key={index} style={{ marginBottom: "6px", lineHeight: "1.5" }}>
          {list}
        </li>
      ))}
    </div>
  );
};

const makeDefaultNumberList = (contents = []) => {
  return (
    <>
      <div style={{ display: "grid", gridTemplateColumns: "1fr 1fr" }}>
        {contents.map((content, idx) => (
          <div>
            {idx + 1}.{content}
          </div>
        ))}
      </div>
    </>
  );
};

const makeDefaultKoreaList = (lists = []) => {
  const koreaList = [
    "가",
    "나",
    "다",
    "라",
    "마",
    "바",
    "사",
    "아",
    "자",
    "차",
    "카",
    "타",
    "파",
    "하",
  ];
  return (
    <>
      {lists.map((list, idx) => (
        <div>
          {koreaList[idx]} {list}
        </div>
      ))}
    </>
  );
};

// 기본적인 ul,li구조입니다.
const makeDefaultLI = (lists = []) => {
  return (
    <ul
      style={{
        listStyleType: "disc",
        paddingLeft: "20px",
        margin: "10px 0",
      }}
    >
      {lists.map((list, index) => (
        <li key={index} style={{ marginBottom: "6px", lineHeight: "1.5" }}>
          {list}
        </li>
      ))}
    </ul>
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

const makeDefautSectionList = (title, contents = []) => {
  return (
    <>
      <div>{makeH3Text(title)}</div>
      <div>
        {contents.map((content) => (
          <div>{content}</div>
        ))}
      </div>
    </>
  );
};

export {
  makeDefaultList,
  makeDefaultNumberList,
  makeDefaultKoreaList,
  makeDefaultLI,
  makeDefaultUlLI,
  makeDefautSectionList,
};
