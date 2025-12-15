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


export {makeCommonTitle,makeCommonComment}