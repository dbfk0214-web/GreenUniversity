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
      <div>
        <ul
          style={{
            listStyleType: "disc",
            paddingLeft: "20px",
            display: "grid",
            gridTemplateColumns: "repeat(2,1fr)",
            backgroundColor: "green",
          }}
        >
          {courses.map((course) => (
            <li>{course}</li>
          ))}
        </ul>
      </div>
    </>
  );
};

export { makeSectionTitle, makeNonDegreeCard };
