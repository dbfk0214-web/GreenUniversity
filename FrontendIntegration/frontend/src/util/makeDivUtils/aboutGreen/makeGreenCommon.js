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

// 공통적으로 사용할 테이블A 양식입니다.
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

// 공통적으로 사용할 테이블B 양식 입니다.
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

// 기본적인 이미지 섹션입니다.
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

const makeDefaultSentence = (contents = [], title = "") => {
  return (
    <>
      <div>
        {/* 제목 */}
        {title && (
          <div
            style={{ fontSize: "20px", fontWeight: "700", color: "#1d4ed8" }}
          >
            {title}
          </div>
        )}

        {/* 내용들 */}
        <div style={{ marginBottom: "24px" }}>
          {contents.map((content) => (
            <div style={{ marginBottom: "10px" }}>{content}</div>
          ))}
        </div>
      </div>
    </>
  );
};

const makeSentenceImageSectionA = (imageUrl, title = "", contents = []) => {
  return (
    <>
      <div style={{ display: "flex" }}>
        <div>
          <img src={imageUrl} alt="" style={{ width: "48%" }} />
        </div>

        <div>
          {/* 제목 */}
          {title && (
            <div
              style={{ fontSize: "20px", fontWeight: "700", color: "#1d4ed8" }}
            >
              {title}
            </div>
          )}

          {/* 내용들 */}
          <div style={{ marginBottom: "24px" }}>
            {contents.map((content) => (
              <div style={{ marginBottom: "10px" }}>{content}</div>
            ))}
          </div>
        </div>
      </div>
    </>
  );
};

const makeSentenceImageSectionB = (imageUrl, title = "", contents = []) => {
  return (
    <>
      <div>
        <div>
          <img src={imageUrl} alt="" style={{ width: "100%" }} />
        </div>
        <div>{makeDefaultSentence(contents, title)}</div>
      </div>
    </>
  );
};

export {
  makeDefaultHeader,
  makeDefaultTableA,
  makeDefaultTableB,
  makeDefaultComment,
  makeDefaultImageSection,
  makeDefaultSentence,
  makeSentenceImageSectionA,
  makeSentenceImageSectionB,
};
