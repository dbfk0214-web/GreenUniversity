import { makeDefaultHeader } from "../makeCommonTable";

const makeCampusTableA = (headers = [], rows = [], columns = []) => {
  return (
    <>
      <table style={{ border: "1px solid #ccc" }}>
        {/* 헤드 */}
        <thead>{makeDefaultHeader(headers)}</thead>

        {/* 내용 */}
        <tbody>
          {rows.map((row) => (
            <tr style={{ border: "1px solid #ccc" }}>
              {columns.map((col) => {
                const cell = row[col];

                if (
                  (typeof cell === "object" && cell?.rowspan === 0) ||
                  (typeof cell === "object" && cell?.colspan === 0)
                ) {
                  return null;
                }

                // colspan이 있는 경우
                if (typeof cell === "object" && cell?.colspan > 0) {
                  return (
                    <td
                      style={{ border: "1px solid #ccc" }}
                      colSpan={row[col].colspan}
                    >
                      {row[col].value}
                    </td>
                  );
                }

                // rowspan이 있는 경우
                if (typeof cell === "object" && cell?.rowspan > 0) {
                  return (
                    <td
                      style={{ border: "1px solid #ccc" }}
                      rowSpan={row[col].rowspan}
                    >
                      {row[col].value}
                    </td>
                  );
                }

                // 마지막 까지 걸러진 경우, 일반 셀입니다.
                if (cell === "") {
                  console.log("걸러진 셀", cell);
                } else {
                  return <td style={{ border: "1px solid #ccc" }}>{cell}</td>;
                }
              })}
            </tr>
          ))}
        </tbody>
      </table>
    </>
  );
};

const makeCampusTableB = (
  rows = [],
  columns = [],
  resultRows = [],
  count = 3
) => {
  return (
    <>
      <table style={{ border: "1px solid #ccc" }}>
        {/* 내용 */}
        <tbody>
          {rows.map((row, idx) => (
            <>
              <tr style={{ border: "1px solid #ccc" }}>
                {columns.map((col) => {
                  const cell = row[col];

                  if (typeof cell === "object" && cell?.rowspan === 0) {
                    return null;
                  }

                  // rowspan이 있는 경우
                  if (typeof cell === "object" && cell?.rowspan > 0) {
                    return (
                      <td
                        style={{ border: "1px solid #ccc" }}
                        rowSpan={row[col].rowspan}
                      >
                        {row[col].value}
                      </td>
                    );
                  }

                  // 마지막 까지 걸러진 경우, 일반 셀입니다.
                  if (cell === "") {
                    console.log("걸러진 셀", cell);
                  } else {
                    return <td style={{ border: "1px solid #ccc" }}>{cell}</td>;
                  }
                })}
              </tr>

              {idx % count === count - 1 && (
                <tr>
                  <td colSpan={columns.length}>
                    {resultRows[Math.floor(idx / count)]?.keyword} /
                    {resultRows[Math.floor(idx / count)]?.count}
                  </td>
                </tr>
              )}
            </>
          ))}
        </tbody>
      </table>
    </>
  );
};

export { makeCampusTableA, makeCampusTableB };
