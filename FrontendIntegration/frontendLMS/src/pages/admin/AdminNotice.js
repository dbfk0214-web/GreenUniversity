import { Link } from "react-router-dom";

const AdminNotice = ({ notice }) => {

  return (
    <div>
      <div>
        <div>
          <div>공지사항 관리</div>
        </div>
        <div>공지 등록</div>
        <div>공지 수정 / 삭제</div>
        <div>개시기간 설정</div>
      </div>
      <div>
        <div>
          <div>
            공지등록 
            <div>학과 소식 / 뉴스 관리</div>
            <div>게시기간 설정</div>
          </div>
        </div>
        <div>
          자료실 관리
          <div>카테고리 관리</div>
          <div>파일 업로드 / 다운로드 관리</div>
        </div>
      </div>
    </div>
  );
};

export default AdminNotice;
