import { makeNonDegreeCard } from "../makeCommon";

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

export { makeNonDegreeProgram };
