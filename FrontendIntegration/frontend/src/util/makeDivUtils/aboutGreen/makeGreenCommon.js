// 기본적인 헤더 양식입니다.
const makeDefaultHeader = (headers) => {
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

// 공통적으로 사용할 테이블 양식입니다.
const makeDefaultTableA = (headers = [], rows = [], columns = []) => {
  return (
    <>
      <table style={{ border: "1px solid #ccc" }}>
        <thead>{makeDefaultHeader(headers)}</thead>
        <tbody>
          {rows.map((row) => (
            <tr style={{ border: "1px solid #ccc" }}>
              {columns.map((col) => (
                <td style={{ border: "1px solid #ccc" }}>{row[col]}</td>
              ))}
            </tr>
          ))}
        </tbody>
      </table>
    </>
  );
};

// 공통적으로 사용할 테이블 양식2 입니다.
const makeDefaultTableB = (headers = [], rows = [], columns = []) => {
  return (
    <>
      <table style={{ border: "1px solid #ccc" }}>
        <thead>{makeDefaultHeader(headers)}</thead>
        <tbody>
          {rows.map((row, idx) => {
            const isLast = idx === rows.length - 1;

            return (
              <tr
                style={{
                  border: "1px solid #ccc",
                  background: isLast ? "#6eb7ffff" : "#fff",
                }}
              >
                {columns.map((col) => (
                  <td
                    style={{
                      border: "1px solid #ccc",
                    }}
                  >
                    {row[col]}
                  </td>
                ))}
              </tr>
            );
          })}
        </tbody>
      </table>
    </>
  );
};

const makeDefaultImageSection = (
  backgroundImage,
  title = "none",
  contents = []
) => {
  return (
    <>
      <div
        style={{
          width: "100%",
          minHeight: "200px",
          backgroundImage: `url(${backgroundImage})`,
        }}
      >
        <div style={{ marginTop: "50px" }}>
          <h2
            style={{
              fontSize: "24px",
            }}
          >
            {title}
          </h2>
          <div>
            {contents.map((content) => (
              <div
                style={{
                  fontSize: "20px",
                  color: "orange",
                  marginBottom: "24px",
                  fontFamily: "bold",
                }}
              >
                {content}
              </div>
            ))}
          </div>
        </div>
      </div>
    </>
  );
};

export {
  makeDefaultHeader,
  makeDefaultTableA,
  makeDefaultTableB,
  makeDefaultComment,
  makeSectionTitle,
  makeDefaultImageSection,
};
