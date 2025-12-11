import { makePrivacyLabelItem } from "../makeCommonMedia";

const makePrivacyLabelingSection = (items = []) => {
  return (
    <div style={{ display: "flex" }}>
      {items.map((item) => (
        <div style={{ border: "1px solid #ccc" }}>
          {makePrivacyLabelItem(item.image, item.label, item.contents)}
        </div>
      ))}
    </div>
  );
};

const makeDefaultNumberCommentB = (comment, startIdx = 0) => {
  return (
    <>
      <div>
        {startIdx + ")"} {comment}
      </div>
    </>
  );
};

export { makePrivacyLabelingSection, makeDefaultNumberCommentB };
