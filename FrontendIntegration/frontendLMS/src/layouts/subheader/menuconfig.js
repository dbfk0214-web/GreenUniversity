export const menus = {
  ADMIN: [
    // ───────── 공지 및 게시 관리 ─────────
    {
      label: "공지 및 게시 관리",
      to: "/adminmanagement/notice",
    },

    // ───────── 사용자 및 권한 관리 ─────────
    {
      label: "사용자 및 권한 관리",
      to: "/adminmanagement/userrole",
    },

    // ───────── 강의/수업 관리 ─────────
    {
      label: "강의/수업 관리",
      to: "/adminmanagement/courseclass",
    },

    // ───────── 학과 일정 및 행사 관리 ─────────
    {
      label: "학과 일정 및 행사 관리",
      to: "/adminmanagement/events",
    },

    // ───────── 문의 / 민원 관리 ─────────
    {
      label: "문의 / 민원 관리",
      to: "/adminmanagement/inquiry",
    },

    // ───────── 자원 관리 ─────────
    {
      label: "자원 / 시스템 관리",
      to: "/adminmanagement/support",
    },

    // ───────── 내부 관리자 커뮤니티 ─────────
    {
      label: "내부 관리자 커뮤니티",
      to: "/adminmanagement/internalcommunity",
    },
  ],

  PROFESSOR: [
    {
      label: "강의/수업관리(교수)",
      to: "/courseenrollmentmanagement/professor/courseprofessor",
      children: [
        {
          label: "강의 관리",
          to: "/courseenrollmentmanagement/professor/lecturemanagement",
        },
        {
          label: "수업 운영",
          to: "/courseenrollmentmanagement/professor/classmanagement",
          children: [
            {
              label: "휴강 알림",
              to: "/courseenrollmentmanagement/professor/cancellationannouncement",
            },
            {
              label: "중간·기말고사 공지",
              to: "/courseenrollmentmanagement/professor/examnotice",
            },
          ],
        },
        {
          label: "출결",
          to: "/courseenrollmentmanagement/professor/attendance",
        },
        {
          label: "학생 평가",
          to: "/courseenrollmentmanagement/professor/studentevaluation",
        },
      ],
    },

    {
      label: "비교과 프로그램",
      to: "/extracurricularprograms",
      children: [
        {
          label: "비교과프로그램 신청 현황",
          to: "/extracurricularprograms/ProgramApplicationPage",
        },
        {
          label: "비교과프로그램 신청 취소",
          to: "/extracurricularprograms/cancellation",
        },
        {
          label: "비교과프로그램 현황 관리",
          to: "/extracurricularprograms/status",
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
      label: "성적·학사",
      to: "/gradesacademicrecords",
      children: [
        {
          label: "성적표",
          to: "/gradesacademicrecords/gradereport",
          children: [
            { label: "조회", to: "/gradesacademicrecords/check" },
            { label: "출력", to: "/gradesacademicrecords/print" },
            { label: "입력", to: "/gradesacademicrecords/gradeentry" },
          ],
        },
      ],
    },

    {
      label: "커뮤니티",
      to: "/community",
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
        { label: "회원 비밀번호 재설정", to: "/account/reset" },
      ],
    },
  ],

  STUDENT: [
    {
      label: "강의/수업관리(학생)",
      to: "/courseenrollmentmanagement/student/classoperation",
      children: [
        {
          label: "강의 관리",
          to: "/courseenrollmentmanagement/student/coursemanagement",
        },
        {
          label: "시간표",
          to: "/courseenrollmentmanagement/student/timetable",
        },
        {
          label: "출결",
          to: "/courseenrollmentmanagement/student/attendance",
        },
        {
          label: "강의 평가",
          to: "/courseenrollmentmanagement/student/courseevaluation",
        },
      ],
    },

    {
      label: "학사행정·학적·증명·재정",
      to: "/academicaffairs",
      children: [
        { label: "학점관리", to: "/academicaffairs/creditmanagement" },
        { label: "학위 증명", to: "/academicaffairs/degreecertificates" },
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
      to: "/gradesacademicrecords",
      children: [
        {
          label: "성적표",
          to: "/gradesacademicrecords/gradereport",
          children: [
            { label: "조회 및 출력", to: "/gradesacademicrecords/check" },
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
      to: "/community",
      children: [
        {
          label: "전체게시판",
          to: "/community",
          children: [
            { label: "자유게시판", to: "/community/free" },
            { label: "동아리게시판", to: "/community/club" },
            { label: "학과게시판", to: "/community/department" },
            { label: "정보공유게시판", to: "/community/dataSharing" },
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
        { label: "회원정보", to: "/account/member" },
        { label: "회원 비밀번호 재설정", to: "/account/reset" },
      ],
    },
  ],
};
