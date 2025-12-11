// 버튼을 생성합니다.
const makeDefaultButton = (
  label,
  onClick = () => console.log("클릭했습니다.")
) => {
  return (
    <>
      <button onClick={onClick} style={{ border: "1px solid #ccc" }}>
        {label}
      </button>
    </>
  );
};

const makeSearchWindow = (
  searchColumns = [],
  onSearch = (col, kw) => alert("search를 눌렀습니다." + col + "/" + kw)
) => {
  var selectedColumn = "";
  var keyword = "";

  return (
    <>
      <select onChange={(e) => (selectedColumn = e.target.value)}>
        <option value="">선택해주세요</option>
        {searchColumns.map((searchColumn) => (
          <option value={searchColumn}>{searchColumn}</option>
        ))}
      </select>
      <input
        placeholder="검색어를 입력해 주세요."
        style={{ marginLeft: "8px" }}
        onChange={(e) => (keyword = e.target.value)}
      />
      <button onClick={() => onSearch(selectedColumn, keyword)}>클릭</button>
    </>
  );
};

export { makeDefaultButton, makeSearchWindow };
