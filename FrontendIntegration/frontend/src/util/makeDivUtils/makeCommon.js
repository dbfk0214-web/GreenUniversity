// 제목을 강조하는 기능입니다. + H1
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

// 적당히 볼드 텍스트 출력 기능입니다. H1
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

// H1 스타일 텍스트
const makeH1Text = (text, size = "24px") => {
  return (
    <h1
      style={{
        fontWeight: 700,
        fontSize: size,
        color: "#222",
        margin: "8px 0",
      }}
    >
      {text}
    </h1>
  );
};

// H2 스타일 텍스트
const makeH2Text = (text, size = "20px") => {
  return (
    <h2
      style={{
        fontWeight: 600,
        fontSize: size,
        color: "#333",
        margin: "6px 0",
      }}
    >
      {text}
    </h2>
  );
};

// H3 스타일 텍스트
const makeH3Text = (text, size = "16px") => {
  return (
    <h2
      style={{
        fontWeight: 600,
        fontSize: size,
        color: "#444",
        margin: "4px 0",
      }}
    >
      {text}
    </h2>
  );
};

// Tab추가 기능입니다.
// makeDefaultTab([{ value: "test" }, { value: "test2" }])
const makeDefaultTabA = (tabs = []) => {
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
        <div>{tab}</div>
      ))}
    </div>
  );
};

const makeDefaultTabB = (tabs = []) => {
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

const makeDefaultStepBox = (
  step = 1,
  mainDescription = "",
  subDescription = []
) => {
  return (
    <>
      <div
        style={{
          border: "1px solid #ccc",
        }}
      >
        <div>{step}</div>
        <div>{mainDescription}</div>
        <div>
          {subDescription.map((description) => (
            <div>{description}</div>
          ))}
        </div>
      </div>
    </>
  );
};

// 코멘트를 생성하는 양식입니다.
const makeDefaultComment = (comments = []) => {
  return (
    <>
      {comments.map((comment) => (
        <div>※ {comment} ※</div>
      ))}
    </>
  );
};

// 기본적인 헤더 양식입니다.
const makeDefaultHeader = (headers = []) => {
  return (
    <tr>
      {headers.map((h, i) => (
        <th key={i} style={{ border: "1px solid #ccc" }}>
          {h}
        </th>
      ))}
    </tr>
  );
};

// 테이블의 body영역을 생성합니다.
const makeDefaultTableBody = (rows = [], columns = []) => {
  return (
    <>
      {rows.map((row) => (
        <tr style={{ border: "1px solid #ccc" }}>
          {columns.map((col) => (
            <td style={{ border: "1px solid #ccc" }}>{row[col]}</td>
          ))}
        </tr>
      ))}
    </>
  );
};

// 버튼을 생성합니다.
const makeDefaultButton = (
  label,
  onClick = () => console.log("클릭했습니다.")
) => {
  return (
    <>
      <button onClick={onClick} style={{ border: "1px solid #ccc" }}>
        {label}
      </button>
    </>
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

const makeSearchWindow = (
  searchColumns = [],
  onSearch = (col, kw) => alert("search를 눌렀습니다." + col + "/" + kw)
) => {
  var selectedColumn = "";
  var keyword = "";

  return (
    <>
      <select onChange={(e) => (selectedColumn = e.target.value)}>
        <option value="">선택해주세요</option>
        {searchColumns.map((searchColumn) => (
          <option value={searchColumn}>{searchColumn}</option>
        ))}
      </select>
      <input
        placeholder="검색어를 입력해 주세요."
        style={{ marginLeft: "8px" }}
        onChange={(e) => (keyword = e.target.value)}
      />
      <button onClick={() => onSearch(selectedColumn, keyword)}>클릭</button>
    </>
  );
};

const makeDefaultTotal = (total) => {
  return (
    <>
      <div style={{ border: "1px solid #ccc" }}>총 {total}개의 게시물</div>
    </>
  );
};

export {
  makeSectionTitle,
  makeBoldText,
  makeH1Text,
  makeH2Text,
  makeH3Text,
  makeDefaultTag,
  makeDefaultTabA,
  makeDefaultTabB,
  makeDefaultList,
  makeDefaultKoreaList,
  makeDefaultLI,
  makeDefaultUlLI,
  makeDefautSectionList,
  makeDefaultInfoBox,
  makeDefaultStepBox,
  makeDefaultHeader,
  makeDefaultComment,
  makeDefaultTableBody,
  makeDefaultButton,
  makeSearchWindow,
  makeDefaultTotal,
};
