export const menus = {
  ADMIN: [
    // ───────── 공지 및 게시 관리 ─────────
    {
      label: "공지 및 게시 관리",
      to: "/admin/notice",
    },

    // ───────── 사용자 및 권한 관리 ─────────
    {
      label: "사용자 및 권한 관리",
      to: "/admin/userrole",
    },

    // ───────── 강의/수업 관리 ─────────
    {
      label: "강의/수업 관리",
      to: "/admin/courseclass",
    },

    // ───────── 학과 일정 및 행사 관리 ─────────
    {
      label: "학과 일정 및 행사 관리",
      to: "/admin/events",
    },

    // ───────── 문의 / 민원 관리 ─────────
    {
      label: "문의 / 민원 관리",
      to: "/admin/inquiry",
    },

    // ───────── 자원 관리 ─────────
    {
      label: "자원 / 시스템 관리",
      to: "/admin/support",
    },

    // ───────── 내부 관리자 커뮤니티 ─────────
    {
      label: "내부 관리자 커뮤니티",
      to: "/admin/internalcommunity",
    },
  ],

PROFESSOR: [
  // ───────── 강의 / 수업 관리 ─────────
  {
    label: "강의 / 수업 관리",
    to: "/professor/course",
  },
    {
    label: "출결 관리",
    to: "/professor/attendance",
  },
    {
    label: "과제 / 정보 관리",
    to: "/professor/assignment",
  },
  // ───────── 비교과 프로그램 관리 ─────────
  {
    label: "비교과 프로그램 관리",
    to: "/professor/extra",
  },
  // ───────── 성적 · 학사 관리 ─────────
  {
    label: "성적 / 학사 관리",
    to: "/professor/grade",
  },
  // ───────── 인증 / 계정 보안 ─────────
  {
    label: "지원 관리",
    to: "/professor/support",
  },
    {
    label: "인증 / 계정 보안",
    to: "/professor/account",
  },
],

STUDENT: [
  // ───────── 강의 / 수업 관리 ─────────
  {
    label: "강의 / 수업 관리",
    to: "/student/course",
  },

  // ───────── 학사 행정 · 학적 · 증명 · 재정 ─────────
  {
    label: "학사 / 행정 관리",
    to: "/student/academic",
  },

  // ───────── 비교과 프로그램 ─────────
  {
    label: "비교과 프로그램",
    to: "/student/extra",
  },

  // ───────── 성적 · 학사 ─────────
  {
    label: "성적 · 학사",
    to: "/student/grade",
  },

  // ───────── 지원 ─────────
  {
    label: "지원",
    to: "/student/support",
  },

  // ───────── 커뮤니티 ─────────
  {
    label: "커뮤니티",
    to: "/student/community",
  },

  // ───────── 인증 / 계정 보안 ─────────
  {
    label: "인증 / 계정 보안",
    to: "/student/account",
  },
],

};
