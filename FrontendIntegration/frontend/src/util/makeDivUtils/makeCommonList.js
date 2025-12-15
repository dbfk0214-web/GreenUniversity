// 내부용 코드입니다. 
// 리스트를 렌더링합니다.
const renderListItems = (items, renderItem, wrapperClass) => {
  return (
    <div className={wrapperClass}>
      {items.map((item, idx) => renderItem(item, idx))}
    </div>
  );
};

// 점이 있는 버전입니다.
const makeCommonDiscList = (items, columns = 1) => {
  const wrapperClass =
    columns === 2 ? "grid grid-cols-2 gap-x-4" : "space-y-1";

  return (
    <ul className={`list-disc pl-5 ${wrapperClass}`}>
      {items.map((item, idx) => (
        <li key={idx}>{item}</li>
      ))}
    </ul>
  );
};

// 점이 없는 버전입니다.
const makeCommonNumberList = (items, columns = 1) => {
  const wrapperClass =
    columns === 2 ? "grid grid-cols-2 gap-x-4" : "space-y-1";

  return renderListItems(
    items,
    (item, idx) => <div key={idx}>{idx + 1}. {item}</div>,
    wrapperClass
  );
};

// 가~하로 변형된 버전입니다.
const makeCommonKoreaList = (items) => {
  const korea = ["가","나","다","라","마","바","사","아","자","차","카","타","파","하"];

  return renderListItems(
    items,
    (item, idx) => <div key={idx}>{korea[idx]} {item}</div>,
    "space-y-1"
  );
};

export {makeCommonDiscList,makeCommonNumberList, makeCommonKoreaList}
