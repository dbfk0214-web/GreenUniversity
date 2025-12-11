import { makeDefaultTag } from "../makeCommonLayout";

// 이벤트 카드 기능입니다.
const makeEventCard = (
  image,
  status,
  date,
  title,
  location,
  department,
  categorys = [],
  formats = []
) => {
  return (
    <>
      <div>{title}</div>
      <div style={{ display: "grid", gridTemplateColumns: "1fr 1fr" }}>
        {/* 우측 상단에 진행중 표시 */}
        <div style={{ gridColumn: "1 / 3", textAlign: "right" }}>{status}</div>
        {/* 구역 1 */}
        <div>
          {/* 이미지 */}
          <div>
            <img
              src={image}
              alt="이미지가 없읍니다.,"
              style={{ borderRadius: "4px" }}
            />
          </div>
        </div>

        {/* 구역 2 */}
        {/* 내용이 들어가는 구역 */}
        <div>
          {/* 날짜 */}
          <div>{date}</div>

          {/* 타이틀 */}
          <div>{title}</div>

          {/* 데이터들 */}
          <div>{location}</div>
          <div>{department}</div>
          <div style={{ display: "flex" }}>
            {categorys.map((category) => (
              <div>{makeDefaultTag(category)}</div>
            ))}
          </div>
          <div style={{ display: "flex" }}>
            {formats.map((format) => (
              <div>{makeDefaultTag(format)}</div>
            ))}
          </div>
        </div>
      </div>
    </>
  );
};

export { makeEventCard };
