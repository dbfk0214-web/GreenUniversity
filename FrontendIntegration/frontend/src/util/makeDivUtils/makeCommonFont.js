// H1 스타일 텍스트
const makeH1Text = (text, size = "24px") => {
  return (
    <>
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
    </>
  );
};

// H2 스타일 텍스트
const makeH2Text = (text, size = "20px") => {
  return (
    <>
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
    </>
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

// h1 + bold를 만드는 함수
const makeBoldText = (text, size = "16px") => {
  return (
    <>
      <h1 style={{ fontWeight: "bold", fontSize: size }}>{text}</h1>
    </>
  );
};

export { makeH1Text, makeH2Text, makeH3Text, makeBoldText };
