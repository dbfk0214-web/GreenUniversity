// h1 ~ h3 전용 타이틀 (기본 스타일 유지 + size만 변경)
const makeCommonHeading = (text, level = 1, sizeClass = "") => {
  const baseClass = "font-bold text-gray-900";
  const className = `${baseClass} ${sizeClass}`;

  if (level === 1) return <h1 className={className}>{text}</h1>;
  if (level === 2) return <h2 className={className}>{text}</h2>;
  return <h3 className={className}>{text}</h3>;
};


// 타이틀을 만듭니다.
const makeCommonTitle = (
  mainTitle, 
  subTitle, 
  mainStyle = "text-xl font-bold pb-2 border-b-2 border-blue-600 inline-block", 
  subStyle = "text-sm text-gray-500 font-medium ml-1"
) => {
  return (
      <>
        <div className={mainStyle}>{mainTitle}</div>
        {subTitle && <div className={subStyle}> ({subTitle})</div>}
      </>
  );
};


// 코멘트를 생성하는 양식입니다.
const makeCommonComment = (
  comments = [], 
  commentStyle = ""
) => {
  return (
    <>
      {comments.map((comment, idx) => (
        <div key={idx} className={commentStyle}>※ {comment} ※</div>
      ))}
    </>
  );
};


export {makeCommonHeading,makeCommonTitle,makeCommonComment}