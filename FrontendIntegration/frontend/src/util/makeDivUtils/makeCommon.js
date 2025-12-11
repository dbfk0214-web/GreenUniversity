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

// h1 + bold를 만드는 함수
const makeBoldText = (text, size = "24px") => {
  return (
    <>
      <h1 style={{ fontWeight: "bold", fontSize: size }}>{text}</h1>
    </>
  );
};

// 라벨링, 여러개 묶어서 출력 (made by 김유라)
const makePrivacyLabelItem = (image, label = "", contents = []) => {
  return (
    <>
      {/* 이미지 */}
      <div>{makeDefaultImageBox(image)}</div>

      {/* 라벨 */}
      <div>{makeDefaultLabelBox(label)}</div>

      {/* 내용들 */}
      <div>{makeDefaultLI(contents)}</div>
    </>
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

// 숫자 코멘트를 특수문자 번호(① ② ③ ...)로 출력합니다.
const makeDefaultNumberComment = (comments = [], startIdx = 0) => {
  const numberIcons = ["①", "②", "③", "④", "⑤", "⑥", "⑦", "⑧", "⑨", "⑩"];

  return (
    <>
      {comments.map((comment, idx) => (
        <div>
          {numberIcons[idx + startIdx]} {comment}
        </div>
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

const makeDefaultImageBox = (image) => {
  return (
    <>
      <div style={{ backgroundColor: "#ddd", borderRadius: "4px" }}>
        <img src={image} alt="이미지가 없읍니다" />
      </div>
    </>
  );
};

// 텍스트에 배경을 입힙니다.
const makeDefaultLabelBox = (text) => {
  return (
    <>
      <div style={{ backgroundColor: "#005EB8", borderRadius: "4px" }}>
        {text}
      </div>
    </>
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

const makePaginationUI = (pages = []) => {
  return (
    <div style={{ display: "flex" }}>
      <div>처음으로</div>
      <div>이전</div>

      {pages.map((page) => (
        <div>{page}</div>
      ))}

      <div>다음</div>
      <div>마지막</div>
    </div>
  );
};

const makeAccordionUI = (row = {}, columns = [], details = []) => {
  return (
    <>
      <details>
        <summary>
          {columns.map((col) => (
            <span>{row[col]} </span>
          ))}
        </summary>

        <div>{details && details.map((detail) => <div>{detail}</div>)}</div>
      </details>
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
  makeDefaultNumberList,
  makeDefaultInfoBox,
  makeDefaultStepBox,
  makeDefaultHeader,
  makeDefaultComment,
  makeDefaultNumberComment,
  makeDefaultTableBody,
  makeDefaultButton,
  makeDefaultImageBox,
  makeDefaultLabelBox,
  makeSearchWindow,
  makeDefaultTotal,
  makePaginationUI,
  makeAccordionUI,
  makePrivacyLabelItem,
};
