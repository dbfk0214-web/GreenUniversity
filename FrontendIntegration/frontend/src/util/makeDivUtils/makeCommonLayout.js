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

export {
  makeSectionTitle,
  makeDefaultTabA,
  makeDefaultTabB,
  makeDefaultInfoBox,
  makeDefaultStepBox,
  makeDefaultTag,
  makeDefaultComment,
};
