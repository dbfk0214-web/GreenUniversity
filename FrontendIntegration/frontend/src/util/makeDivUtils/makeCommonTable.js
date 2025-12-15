// 기본적인 헤더 양식입니다.
const renderTableHeader = (headers = []) => {
  return (
    <tr>
      {headers.map((header, headerIdx) => (
        <th key={headerIdx} style={{ border: "1px solid #ccc" }}>
          {header}
        </th>
      ))}
    </tr>
  );
};

// 테이블의 body영역을 생성합니다.
const renderTableBody = (rows = [], columns = []) => {
  return (
    <>
      {rows.map((row, rowIdx) => (
        <tr key={rowIdx}>
          {columns.map((col, colIdx) => (
            <td key={colIdx} style={{ border: "1px solid #ccc" }}>{row[col]}</td>
          ))}
        </tr>
      ))}
    </>
  );
};

const makeCommonTable = (headers= [], rows = [], columns = []) => {
  return (
    <>
      <table>
        {headers && headers.length > 0 && 
          <thead>{renderTableHeader(headers)}</thead>
        }
        <tbody>
          {renderTableBody(rows,columns)}
        </tbody>
        
      </table>
    </>
  )
}

export { makeCommonTable };
