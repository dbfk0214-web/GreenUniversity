// 기본적인 헤더 렌더
const renderTableHeader = (headers = []) => {
  return (
    <tr>
      {headers.map((header, idx) => (
        <th
          key={idx}
          className="border border-gray-300 bg-gray-100 px-3 py-2 text-sm font-semibold text-center"
        >
          {header}
        </th>
      ))}
    </tr>
  );
};

// 테이블 body 렌더
const renderTableBody = (rows = [], columns = []) => {
  return rows.map((row, rowIdx) => (
    <tr key={rowIdx} className="hover:bg-gray-50">
      {columns.map((col, colIdx) => (
        <td
          key={colIdx}
          className={`border border-gray-300 px-3 py-2 text-sm text-gray-700
            ${col === "title" ? "text-left" : "text-center"}
          `}
        >
          {row[col]}
        </td>
      ))}
    </tr>
  ));
};

// 테이블 생성
const makeCommonTable = (headers = [], rows = [], columns = []) => {
  return (
    <div className="w-full overflow-x-auto">
      <table className="w-full border-collapse">
        {headers.length > 0 && <thead>{renderTableHeader(headers)}</thead>}
        <tbody>
          {rows && rows.length > 0 ? (
            renderTableBody(rows, columns)
          ) : (
            <tr>
              <td
                colSpan={columns.length}
                className="border border-gray-300 py-6 text-center text-gray-500"
              >
                데이터가 없습니다.
              </td>
            </tr>
          )}
        </tbody>
      </table>
    </div>
  );
};

export { makeCommonTable };
