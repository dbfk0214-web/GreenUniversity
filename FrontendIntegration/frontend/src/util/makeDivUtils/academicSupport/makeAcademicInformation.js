const makeLeftRightButton = (currentTerm) => {
  return (
    <>
      <div style={{ display: "flex", alignItems: "center", gap: "12px" }}>
        <h1>{currentTerm}</h1>

        {/* 좌측 이동 버튼 */}
        <button style={{ border: "1px solid #ccc", background: "#fff" }}>
          ◀
        </button>

        {/* 우측 이동 버튼 */}
        <button style={{ border: "1px solid #ccc", background: "#fff" }}>
          ▶
        </button>
      </div>
    </>
  );
};

const makeEventMonthSection = (month, monthEng, rows = [], columns = []) => {
  return (
    <>
      {/* Left */}
      <div>
        <div>{month}</div>
        <div>{monthEng}</div>
      </div>

      {/* Right */}
      <div>
        {rows.map((row) => (
          <div style={{ display: "flex" }}>
            {columns.map((column) => (
              <div>{row[column]}</div>
            ))}
          </div>
        ))}
      </div>
    </>
  );
};

export { makeLeftRightButton, makeEventMonthSection };
