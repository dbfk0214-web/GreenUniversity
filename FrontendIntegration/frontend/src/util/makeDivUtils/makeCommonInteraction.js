const makePaginationUI = (pages = []) => {
  return (
    <div style={{ display: "flex" }}>
      <div>처음으로</div>
      <div>이전</div>

      {pages.map((page) => (
        <div>{page}</div>
      ))}

      <div>다음</div>
      <div>마지막</div>
    </div>
  );
};

const makeAccordionUI = (row = {}, columns = [], details = []) => {
  return (
    <>
      <details>
        <summary>
          {columns.map((col) => (
            <span>{row[col]} </span>
          ))}
        </summary>

        <div>{details && details.map((detail) => <div>{detail}</div>)}</div>
      </details>
    </>
  );
};

export { makePaginationUI, makeAccordionUI };
