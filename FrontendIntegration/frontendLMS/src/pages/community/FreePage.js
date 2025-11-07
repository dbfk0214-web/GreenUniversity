import React from "react";

const FreePage = () => {
  return (
    <div className="text-center items-center">
      <div className="font-extrabold text-center mt-5 mb-5">자유게시판</div>
      <hr />
      <div className="flex-column">
        <div className="flex-1">content</div>
        <div className="flex-1">content</div>
        <div className="flex-1">content</div>
        <div className="flex-1">content</div>
        <div className="flex-1">content</div>
      </div>
      <div>
        <button>글쓰기</button>
      </div>
      <div>페이지네이션</div>
    </div>
  );
};

export default FreePage;
