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

export { makeDefaultHeader, makeDefaultTableBody };
