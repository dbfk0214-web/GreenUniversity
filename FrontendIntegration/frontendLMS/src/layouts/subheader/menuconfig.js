// 메뉴를 한 곳에서만 관리하는 설정 파일

export const menus = {
  ADMIN: [
    // ───────── 공지 및 게시 관리 ─────────
    {
      label: "공지 및 게시 관리",
      to: "#",
      children: [
        {
          label: "공지사항 관리",
          to: "/admin/notices",
          children: [
            { label: "공지 등록", to: "/admin/notices/create" },
            { label: "공지 수정/삭제", to: "/admin/notices/edit" },
            { label: "게시기간 설정", to: "/admin/notices/period" },
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
            { label: "카테고리 관리", to: "/admin/file-management/categories" },
            {
              label: "파일 업로드/다운로드 관리",
              to: "/admin/file-management/files",
            },
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
            { label: "사용자 등록", to: "/admin/users/create" },
            { label: "사용자 수정", to: "/admin/users/edit" },
            { label: "계정 비활성화", to: "/admin/users/deactivate" },
          ],
        },
        {
          label: "권한(Role) 관리",
          to: "/admin/roles",
          children: [
            { label: "권한 그룹 생성", to: "/admin/roles/create-group" },
            { label: "메뉴 접근 설정", to: "/admin/roles/menu-access" },
          ],
        },
        {
          label: "사용자 활동 로그",
          to: "/admin/user-logs",
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
          to: "/admin/course-offerings",
          children: [
            { label: "강의 등록", to: "/admin/course-offerings/create" },
            { label: "강의 수정/삭제", to: "/admin/course-offerings/edit" },
          ],
        },
        {
          label: "강의계획서 관리",
          to: "/admin/syllabi",
          children: [
            { label: "제출 현황 조회", to: "/admin/syllabi/submissions" },
            { label: "승인 / 반려 처리", to: "/admin/syllabi/review" },
          ],
        },
        {
          label: "수강 인원/신청 관리",
          to: "/admin/enrollment",
          children: [
            { label: "정원 설정", to: "/admin/enrollment/capacity" },
            { label: "초과 승인", to: "/admin/enrollment/override" },
            { label: "수강 현황 통계", to: "/admin/enrollment/statistics" },
          ],
        },
        {
          label: "강의실 및 시간표 관리",
          to: "/admin/timetables",
          children: [
            { label: "시간표 생성", to: "/admin/timetables/generate" },
            { label: "중복 검증", to: "/admin/timetables/conflicts" },
          ],
        },
        {
          label: "이수체계/커리큘럼 관리",
          to: "/admin/curriculum",
          children: [
            { label: "교과목 분류 관리", to: "/admin/curriculum/categories" },
            { label: "졸업요건 설정", to: "/admin/curriculum/graduation" },
          ],
        },
      ],
    },

    // ───────── 학과 일정 및 행사 관리 ─────────
    {
      label: "학과 일정 및 행사 관리",
      to: "/admin/department-schedule-events",
      children: [
        {
          label: "학사 일정 관리",
          to: "/admin/academic-calendar",
          children: [
            { label: "일정 등록/수정", to: "/admin/academic-calendar/edit" },
            { label: "캘린더 연동", to: "/admin/academic-calendar/sync" },
          ],
        },
        {
          label: "행사/세미나 관리",
          to: "/admin/events",
          children: [
            { label: "행사 등록", to: "/admin/events/create" },
            { label: "참가자 관리", to: "/admin/events/participants" },
          ],
        },
      ],
    },

    // ───────── 문의 / 민원 관리 ─────────
    {
      label: "문의 / 민원 관리",
      to: "/admin/inquiries",
      children: [
        {
          label: "문의 게시판 관리",
          to: "/admin/inquiries/board",
          children: [
            { label: "문의 내역 조회", to: "/admin/inquiries/board/list" },
            { label: "답변 작성", to: "/admin/inquiries/board/reply" },
          ],
        },
        {
          label: "민원 처리 현황",
          to: "/admin/grievances",
          children: [
            { label: "처리 상태 관리", to: "/admin/grievances/status" },
            { label: "통계 보기", to: "/admin/grievances/statistics" },
          ],
        },
      ],
    },

    // ───────── 자원 관리 ─────────
    {
      label: "자원 관리",
      to: "/admin/resources",
      children: [
        {
          label: "강의실/회의실 관리",
          to: "/admin/rooms",
          children: [
            { label: "강의실 등록", to: "/admin/rooms/create" },
            { label: "예약 관리", to: "/admin/rooms/reservations" },
          ],
        },
        {
          label: "장비/비품 관리",
          to: "/admin/equipment",
          children: [
            { label: "장비 등록", to: "/admin/equipment/create" },
            { label: "사용 내역 관리", to: "/admin/equipment/history" },
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
      to: "/admin/system",
      children: [
        { label: "시스템 설정", to: "/admin/system/settings" },
        { label: "데이터 백업 / 복원", to: "/admin/system/backup-restore" },
        { label: "버전 관리 / 업데이트", to: "/admin/system/version" },
        {
          label: "로그 / 통계 관리",
          to: "/admin/logs",
          children: [
            { label: "로그인 로그", to: "/admin/logs/login" },
            { label: "활동 이력", to: "/admin/logs/activity" },
          ],
        },
      ],
    },

    // ───────── 내부 관리자 커뮤니티 ─────────
    {
      label: "내부 관리자 커뮤니티",
      to: "/admin/internal-community",
      children: [
        { label: "내부 공지", to: "/admin/internal-community/notices" },
        {
          label: "회의록 / 메모 공유",
          to: "/admin/internal-community/minutes",
        },
        { label: "파일 공유", to: "/admin/internal-community/files" },
      ],
    },
  ],

  PROFESSOR: [
    {
      label: "강의/수업관리(교수)",
      to: "/courseenrollementmanagement/professor/courses",
      children: [
        {
          label: "강의 관리",
          to: "/CourseEnrollementManagement/professor/lecturemanagement",
        },
        {
          label: "수업 운영",
          to: "/CourseEnrollementManagement/professor/classmanagement",
          children: [
            {
              label: "휴강 알림",
              to: "/CourseEnrollementManagement/professor/cancellationannouncement:",
            },
            {
              label: "중간·기말고사 공지",
              to: "/CourseEnrollementManagement/professor/examnotice",
            },
          ],
        },
        {
          label: "출결",
          to: "/CourseEnrollementManagement/professor/attendance",
        },
        {
          label: "학생 평가",
          to: "/CourseEnrollementManagement/professor/studentevaluation",
        },
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
      to: "/gradesAcademicRecord/gradePage",
      children: [
        {
          label: "성적표",
          to: "/gradesAcademicRecords/gradereport",
          children: [
            { label: "조회", to: "/gradesAcademicRecords/check" },
            { label: "출력", to: "/gradesAcademicRecords/print" },
            { label: "입력", to: "/gradesAcademicRecords/report" },
          ],
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
        { label: "회원 비밀번호 재설정", to: "/account/reset" },
      ],
    },
  ],

  STUDENT: [
    {
      label: "강의/수업관리(학생)",
      to: "/courseenrollementmanagement/student/classoperation",
      children: [
        {
          label: "강의 관리",
          to: "/CourseEnrollementManagement/student/courseManagement",
        },
        {
          label: "시간표",
          to: "/CourseEnrollementManagement/student/timetable",
        },
        {
          label: "출결",
          to: "/CourseEnrollementManagement/student/classOperation",
        },
        {
          label: "강의 평가",
          to: "/CourseEnrollementManagement/student/courseEvaluation",
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
      to: "/gradesAcademicRecord/gradePage",
      children: [
        {
          label: "성적표",
          to: "/gradesAcademicRecords/gradereport",
          children: [
            { label: "조회", to: "/gradesAcademicRecords/check" },
            { label: "출력", to: "/gradesAcademicRecords/print" },
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
        { label: "회원 비밀번호 재설정", to: "/account/reset" },
      ],
    },
  ],
};
