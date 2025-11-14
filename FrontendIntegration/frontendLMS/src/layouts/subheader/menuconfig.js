// 메뉴를 한 곳에서만 관리하는 설정 파일

export const menus = {
  admin: [
    // ───────── 공지 및 게시 관리 ─────────
    {
      label: "공지 및 게시 관리",
      to: "#",
      children: [
        {
          label: "공지사항 관리",
          to: "/admin/notice",
          children: [
            { label: "공지 등록", to: "#" },
            { label: "공지 수정/삭제", to: "#" },
            { label: "게시기간 설정", to: "#" },
          ],
        },
        {
          label: "학과 소식/뉴스 관리",
          to: "/admin/news",
        },
        {
          label: "자료실 관리",
          to: "/admin/file-management",
          children: [
            { label: "카테고리 관리", to: "/admin/document management" },
            { label: "파일 업로드/다운로드 관리", to: "/admin/document management" },
          ],
        },
      ],
    },

    // ───────── 사용자 및 권한 관리 ─────────
    {
      label: "사용자 및 권한 관리",
      to: "#",
      children: [
        {
          label: "사용자 계정 관리",
          to: "/admin/users",
          children: [
            { label: "사용자 등록", to: "/admin/account management" },
            { label: "사용자 수정", to: "/admin/account management" },
            { label: "계정 비활성화", to: "/admin/account management" },
          ],
        },
        {
          label: "권한(Role) 관리",
          to: "/admin/roles",
          children: [
            { label: "권한 그룹 생성", to: "#" },
            { label: "메뉴 접근 설정", to: "#" },
          ],
        },
        {
          label: "사용자 활동 로그",
          to: "/admin/user-log",
        },
      ],
    },

    // ───────── 강의/수업 관리 ─────────
    {
      label: "강의/수업 관리",
      to: "#",
      children: [
        {
          label: "강의 개설 관리",
          to: "/admin/course offering management",
          children: [
            { label: "강의 등록", to: "#" },
            { label: "강의 수정/삭제", to: "#" },
          ],
        },
        {
          label: "강의계획서 관리",
          to: "/admin/lectures",
          children: [
            { label: "제출 현황 조회", to: "#" },
            { label: "승인 / 반려 처리", to: "#" },
          ],
        },
        {
          label: "수강 인원/신청 관리",
          to: "/admin/enrollment",
          children: [
            { label: "정원 설정", to: "#" },
            { label: "초과 승인", to: "#" },
            { label: "수강 현황 통계", to: "#" },
          ],
        },
        {
          label: "강의실 및 시간표 관리",
          to: "/admin/schedules",
          children: [
            { label: "시간표 생성", to: "#" },
            { label: "중복 검증", to: "#" },
          ],
        },
        {
          label: "이수체계/커리큘럼 관리",
          to: "/admin/curriculum",
          children: [
            { label: "교과목 분류 관리", to: "#" },
            { label: "졸업요건 설정", to: "#" },
          ],
        },
      ],
    },

    // ───────── 학과 일정 및 행사 관리 ─────────
    {
      label: "학과 일정 및 행사 관리",
      to: "/admin/department schedule and event management",
      children: [
        {
          label: "학사 일정 관리",
          to: "/admin/academic-calendar",
          children: [
            { label: "일정 등록/수정", to: "#" },
            { label: "캘린더 연동", to: "#" },
          ],
        },
        {
          label: "행사/세미나 관리",
          to: "/admin/events",
          children: [
            { label: "행사 등록", to: "#" },
            { label: "참가자 관리", to: "#" },
          ],
        },
      ],
    },

    // ───────── 문의 / 민원 관리 ─────────
    {
      label: "문의 / 민원 관리",
      to: "/admin/inquiry and complaint management",
      children: [
        {
          label: "문의 게시판 관리",
          to: "/admin/inquiries",
          children: [
            { label: "문의 내역 조회", to: "#" },
            { label: "답변 작성", to: "#" },
          ],
        },
        {
          label: "민원 처리 현황",
          to: "/admin/grievances",
          children: [
            { label: "처리 상태 관리", to: "#" },
            { label: "통계 보기", to: "#" },
          ],
        },
      ],
    },

    // ───────── 자원 관리 ─────────
    {
      label: "자원 관리",
      to: "admin/support management",
      children: [
        {
          label: "강의실/회의실 관리",
          to: "/admin/rooms",
          children: [
            { label: "강의실 등록", to: "#" },
            { label: "예약 관리", to: "#" },
          ],
        },
        {
          label: "장비/비품 관리",
          to: "/admin/equipment",
          children: [
            { label: "장비 등록", to: "#" },
            { label: "사용 내역 관리", to: "#" },
          ],
        },
        {
          label: "예산 관리",
          to: "/admin/budget",
        },
      ],
    },

    // ───────── 시스템 관리 ─────────
    {
      label: "시스템 관리",
      to: "/admin/system management",
      children: [
        { label: "시스템 설정", to: "#" },
        { label: "데이터 백업 / 복원", to: "#" },
        { label: "버전 관리 / 업데이트", to: "#" },
        {
          label: "로그 / 통계 관리",
          to: "/admin/logs",
          children: [
            { label: "로그인 로그", to: "#" },
            { label: "활동 이력", to: "#" },
          ],
        },
      ],
    },

    // ───────── 내부 관리자 커뮤니티 ─────────
    {
      label: "내부 관리자 커뮤니티",
      to: "/admin/internal admin community",
      children: [
        { label: "내부 공지", to: "#" },
        { label: "회의록 / 메모 공유", to: "#" },
        { label: "파일 공유", to: "#" },
      ],
    },
  ],

  professor: [
    {
      label: "강의/수업관리(교수)",
      to: "/professor/courses",
      children: [
        {
          label: "강의 관리",
          to: "/professor/lecture management",
        },
        {
          label: "수업 운영",
          to: "/professor/class management",
          children: [
            { label: "휴강 알림", to: "/professor/cancellation announcement:" },
            { label: "중간·기말고사 공지", to: "/professor/exam notice" },
          ],
        },
        { label: "출결", to: "/professor/attendance" },
        { label: "학생 평가", to: "/professor/student evaluation" },
      ],
    },
    {
      label: "비교과 프로그램",
      to: "/programs",
      children: [
        {
          label: "비교과 프로그램 신청 현황",
          to: "/professor/extracurricular application status",
        },
      ],
    },
    {
      label: "재정·지원",
      to: "/support",
      children: [
        {
          label: "멘토링·진로/취업",
          to: "/professor/mentoring",
        },
        {
          label: "교수와의 멘토링",
          to: "/professor/mentoring",
        },
        {
          label: "취업지원·상담",
          to: "/professor/mentoring",
        },
      ],
    },
    {
      label: "성적/학사",
      to: "/grades",
      children: [
        { label: "성적표 입력", to: "/professor/grade entry" },
      ],
    },
    {
      label: "커뮤니티",
      to: "/community",
      children: [
        { label: "전체게시판", to: "/" },
        { label: "자유게시판", to: "/" },
        { label: "동아리게시판", to: "/" },
        { label: "학과게시판", to: "/" },
        { label: "Q&A", to: "/" },
        { label: "자료실", to: "/" },
      ],
    },
    {
      label: "인증/계정보안",
      to: "/security",
      children: [
        { label: "회원가입", to: "/" },
        { label: "계정관리", to: "/" },
        { label: "회원정보", to: "/" },
        { label: "회원 비밀번호 재설정", to: "/" },
      ],
    },
  ],

  student: [
    {
      label: "강의/수업관리(학생)",
      to: "/CourseEnrollementManagement/student/courses",
      children: [
        {
          label: "강의 관리",
          to: "/courseenrollementmanagement/student/courseManagement",
        },
        {
          label: "시간표",
          to: "/courseenrollementmanagement/student/timetable",
        },
        {
          label: "출결",
          to: "/courseenrollementmanagement/student/classOperation",
        },
        {
          label: "강의 평가",
          to: "/courseenrollementmanagement/student/courseEvaluation",
        },
      ],
    },
    {
      label: "학사행정·학적·증명·재정",
      to: "/academicAffairs",
      children: [
        { label: "학점관리", to: "/academicAffairs/creditmanagement" },
        { label: "학위 증명", to: "/academicAffairs/degreecertificates" },
      ],
    },
    {
      label: "비교과 프로그램",
      to: "/extracurricularprograms",
      children: [
        {
          label: "비교과프로그램 신청",
          to: "/extracurricularprograms/application",
        },
        {
          label: "비교과프로그램 신청 취소",
          to: "/extracurricularprograms/cancellation",
        },
      ],
    },
    {
      label: "성적·학사",
      to: "/gradesAcademicRecords",
      children: [
        {
          label: "성적표",
          to: "/gradesAcademicRecords/report",
          children: [
            { label: "조회", to: "/gradesAcademicRecords/check" },
            { label: "출력", to: "/gradesAcademicRecords/output" },
          ],
        },
      ],
    },
    {
      label: "지원",
      to: "/financesupport",
      children: [
        {
          label: "멘토링*진로/취업",
          to: "/financesupport/careersupportcounseling",
        },
        {
          label: "교수와의 멘토링",
          to: "/financesupport/mentoringwithprofessors",
        },
        {
          label: "취업지원 * 상담",
          to: "/financesupport/mentoringcareeremployment",
        },
      ],
    },
    {
      label: "커뮤니티",
      to: "/community/community",
      children: [
        {
          label: "전체게시판",
          to: "/community",
          children: [
            { label: "자유게시판", to: "/community/free" },
            { label: "동아리게시판", to: "/community/club" },
            { label: "학과게시판", to: "/community/department" },
            { label: "데이터공유게시판", to: "/community/dataSharing" },
            { label: "Q&A", to: "/community/qanda" },
          ],
        },
      ],
    },
    {
      label: "인증/계정보안",
      to: "/account",
      children: [
        { label: "회원가입", to: "/account/sign" },
        { label: "계정관리", to: "/account/manage" },
        { label: "회원정보", to: "/account/member" },
        { label: "회원 비밀번호 재설정", to: "account/reset" },
      ],
    },
  ],
};
