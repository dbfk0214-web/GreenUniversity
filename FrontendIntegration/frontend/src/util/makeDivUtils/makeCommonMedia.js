import { makeDefaultLI } from "./makeCommonList";

const makeDefaultImageBox = (image) => {
  return (
    <>
      <div style={{ backgroundColor: "#ddd", borderRadius: "4px" }}>
        <img src={image} alt="이미지가 없읍니다" />
      </div>
    </>
  );
};

// 텍스트에 배경을 입힙니다.
const makeDefaultLabelBox = (text) => {
  return (
    <>
      <div style={{ backgroundColor: "#005EB8", borderRadius: "4px" }}>
        {text}
      </div>
    </>
  );
};

// 숫자 코멘트를 특수문자 번호(① ② ③ ...)로 출력합니다.
const makeDefaultNumberComment = (comments = [], startIdx = 0) => {
  const numberIcons = ["①", "②", "③", "④", "⑤", "⑥", "⑦", "⑧", "⑨", "⑩"];

  return (
    <>
      {comments.map((comment, idx) => (
        <div>
          {numberIcons[idx + startIdx]} {comment}
        </div>
      ))}
    </>
  );
};

const makeDefaultTotal = (total) => {
  return (
    <>
      <div style={{ border: "1px solid #ccc" }}>총 {total}개의 게시물</div>
    </>
  );
};

// 라벨링, 여러개 묶어서 출력 (made by 김유라)
const makePrivacyLabelItem = (image, label = "", contents = []) => {
  return (
    <>
      {/* 이미지 */}
      <div>{makeDefaultImageBox(image)}</div>

      {/* 라벨 */}
      <div>{makeDefaultLabelBox(label)}</div>

      {/* 내용들 */}
      <div>{makeDefaultLI(contents)}</div>
    </>
  );
};

// 텍스트에 태그를 입힙니다.
const makeCommonTag = (text) => {
  return (
    <span
      style={{
        display: "inline-block",
        color: "#333",
        fontSize: "14px",
        backgroundColor: "green",
      }}
    >
      {text}
    </span>
  );
};

const makeCommonBadge	= (text, options = {}) => {

}
const makeCommonImage	= (src, alt = "") => {

}

// export {
//   makeDefaultImageBox,
//   makeDefaultLabelBox,
//   makeDefaultNumberComment,
//   makeDefaultTotal,
//   makePrivacyLabelItem,
// };
export {makeCommonTag, makeCommonBadge, makeCommonImage}
