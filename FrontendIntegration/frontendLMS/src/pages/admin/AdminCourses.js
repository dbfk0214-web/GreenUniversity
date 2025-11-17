import React from "react";

const Admincourses = ({courses}) => {
  return (
    <div>
      <div>
        강의 개설 관리
        <div>강의 등록</div>
        <div>강의 수정 / 삭제</div>
      </div>
      <div>
        강의계획서 관리자
        <div>제출 현황 조회</div>
        <div>승인 / 반려 처리</div>
      </div>
      <div>
        수강 인원 / 신청 관리
        <div>정원 설정</div>
        <div>초과 승인</div>
        <div>수강 현황 통계</div>
      </div>
      <div>
        강의실 및 시간표 관리
        <div>시간표 생성</div>
        <div>중복 검증</div>
      </div>
      <div>
        이수체계 / 커리큘럼 관리자
        <div>교과목 분리</div>
        <div>졸업요건 설정</div>
      </div>
    </div>
  );
};

export default Admincourses;
