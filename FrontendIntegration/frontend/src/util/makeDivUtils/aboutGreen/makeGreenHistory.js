const makeMainSection = (title, description, imageUrl) => {
  return (
    <>
      {/* 이미지 위에 타이틀 */}
      <div style={{ backgroundImage: `url(${imageUrl})` }}>{title}</div>

      {/* 설명 */}
      <div>{description}</div>
    </>
  );
};

const makeTimelineItem = (date, description, imageUrl) => {
  return (
    <>
      <div>{date}</div>
      <div>{description}</div>
      <img src={imageUrl} alt="이미지가 없습니다." />
    </>
  );
};

const makeTimeLine = (leftRow = [], rightRow = []) => {
  var timeLineLength = rightRow.length;

  return (
    <div style={{ display: "flex", flexDirection: "column" }}>
      {Array.from({ length: timeLineLength }, (_, idx) => (
        <div
          key={idx}
          style={{
            display: "grid",
            gridTemplateColumns: "1fr auto 1fr",
            alignItems: "flex-start",
          }}
        >
          {/* 왼쪽의 데이터를 오른쪽에 출력 */}
          <div>
            {leftRow[idx] &&
              makeTimelineItem(
                leftRow[idx].date,
                leftRow[idx].description,
                leftRow[idx].imageUrl
              )}
          </div>
          {/* 가운데 세로 라인(심플 버전) */}
          <div
            style={{
              borderLeft: "1px solid #ccc",
            }}
          ></div>
          {/* 오른쪽 */}
          <div>
            {rightRow[idx] &&
              makeTimelineItem(
                rightRow[idx].date,
                rightRow[idx].description,
                rightRow[idx].imageUrl
              )}
          </div>
        </div>
      ))}
    </div>
  );
};

export { makeMainSection, makeTimeLine };
