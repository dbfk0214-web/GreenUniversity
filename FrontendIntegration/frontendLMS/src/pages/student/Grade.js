const modalTypes = {
  // 성적 조회
  MY_GRADES: "MY_GRADES",
  COURSE_GRADES: "COURSE_GRADES",
  STUDENT_SCORE_DETAIL: "STUDENT_SCORE_DETAIL",
  FINAL_GRADE: "FINAL_GRADE",
  GPA_OVERVIEW: "GPA_OVERVIEW",

  // 출결 · 시험
  ATTENDANCE_STATUS: "ATTENDANCE_STATUS",
  EXAM_SCHEDULE: "EXAM_SCHEDULE",

  // 학사 관리
  ACADEMIC_WARNING: "ACADEMIC_WARNING",
  GRADE_APPEAL: "GRADE_APPEAL",
};

function renderModalContent(activeModal) {
  switch (activeModal) {
    case modalTypes.MY_GRADES:
      return {
        title: "전체 성적 조회",
        subtitle: "학기별 성적을 확인합니다.",
        hint: "학기 선택 + 성적 테이블 구성을 추천합니다.",
        // content: <StudentGradeComponet mode="modal" />,
      };

    case modalTypes.COURSE_GRADES:
      return {
        title: "과목별 성적",
        subtitle: "수강 과목 성적을 확인합니다.",
        hint: "과목별 점수 및 등급 표시를 추천합니다.",
      };

    // ✅ 신규 1: 상세 점수
    case modalTypes.STUDENT_SCORE_DETAIL:
      return {
        title: "상세 점수 확인",
        subtitle: "중간 · 기말 · 과제 점수",
        hint: "과목 선택 → 평가 항목별 점수 테이블(StudentScore)을 추천합니다.",
      };

    // ✅ 신규 2: 최종 성적
    case modalTypes.FINAL_GRADE:
      return {
        title: "최종 성적 조회",
        subtitle: "학기별 최종 등급 및 평점",
        hint: "학기 기준 최종 등급(A+, B 등) + 평점(Grade) 요약 UI를 추천합니다.",
      };

    case modalTypes.GPA_OVERVIEW:
      return {
        title: "평균 평점(GPA)",
        subtitle: "누적 GPA 현황입니다.",
        hint: "그래프 + 기준선 표시를 추천합니다.",
      };

    case modalTypes.ATTENDANCE_STATUS:
      return {
        title: "출결 현황",
        subtitle: "출결 상태를 확인합니다.",
        hint: "출석/지각/결석 색상 구분을 추천합니다.",
      };

    case modalTypes.EXAM_SCHEDULE:
      return {
        title: "시험 일정 조회",
        subtitle: "시험 일정을 확인합니다.",
        hint: "캘린더 또는 리스트 UI를 추천합니다.",
      };

    case modalTypes.ACADEMIC_WARNING:
      return {
        title: "학사 경고 내역",
        subtitle: "학사 경고 여부를 확인합니다.",
        hint: "경고 사유 및 기준 표시를 추천합니다.",
      };

    case modalTypes.GRADE_APPEAL:
      return {
        title: "성적 이의 신청",
        subtitle: "성적 이의 신청을 제출합니다.",
        hint: "사유 입력 + 증빙 첨부 UI를 추천합니다.",
      };

    default:
      return {
        title: "성적 · 학사",
        subtitle: "",
        hint: "",
      };
  }
}
