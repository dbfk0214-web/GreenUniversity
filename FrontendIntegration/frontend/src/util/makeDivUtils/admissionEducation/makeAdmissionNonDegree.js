import { makeDefaultUlLI } from "../makeCommon";

const makeNonDegreeProgram = (rows = []) => {
  return (
    <>
      <div
        style={{
          display: "grid",
          gridTemplateColumns: "repeat(3,1fr)",
        }}
      >
        {rows.map((row) => (
          <div style={{ border: "1px solid #ccc" }}>
            <div>{makeNonDegreeCard(row.title, row.courses)}</div>
          </div>
        ))}
      </div>
    </>
  );
};

const makeNonDegreeCard = (title, courses = []) => {
  return (
    <>
      {/* 상단 */}
      <div style={{ display: "flex" }}>
        {/* 타이틀 */}
        <ul style={{ listStyleType: "disc", paddingLeft: "20px" }}>
          <li>{title}</li>
        </ul>

        {/* 버튼 */}
        <div>
          <button>버튼🏠</button>
        </div>
      </div>

      {/* 하단 */}
      <div>{makeDefaultUlLI(courses)}</div>
    </>
  );
};

export { makeNonDegreeProgram, makeNonDegreeCard };
