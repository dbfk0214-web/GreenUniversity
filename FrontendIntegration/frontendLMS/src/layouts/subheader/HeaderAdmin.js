// HeaderAdmin.jsx
import React from "react";
import { Link } from "react-router-dom";

export default function HeaderAdmin() {
  // 서브메뉴 공통 스타일
  const subMenu = `
    ml-4 list-disc list-inside text-[0.95rem]
    overflow-hidden max-h-0 opacity-0
    transition-all duration-500 ease-out
    space-y-1
  `;
  const thirdMenu = `
    ml-4 list-disc list-inside text-[0.9rem]
    overflow-hidden max-h-0 opacity-0
    transition-all duration-500 ease-out
    space-y-1
  `;

  return (
    <div>
      <div className="text-left list-none">
        <nav>
          <ul className="space-y-3 text-sm text-gray-800 list-none">
            {/* 공지 및 게시 관리 */}
            <li className="group">
              <Link
                to="#"
                className="block py-2 px-3 rounded-lg hover:bg-white/60 transition-colors duration-300 font-semibold"
              >
                공지 및 게시 관리
              </Link>
              <ul
                className={`${subMenu} group-hover:max-h-[520px] group-hover:opacity-100 group-focus-within:max-h-[520px] group-focus-within:opacity-100`}
              >
                {/* 공지사항 관리 */}
                <li className="group/inner">
                  <Link
                    to="/admin/notice"
                    className="block py-1 px-2 rounded hover:bg-orange-400 hover:text-white transition-colors"
                  >
                    공지사항 관리
                  </Link>
                  <ul
                    className={`${thirdMenu} group-hover/inner:max-h-[260px] group-hover/inner:opacity-100 group-focus-within/inner:max-h-[260px] group-focus-within/inner:opacity-100`}
                  >
                    {["공지 등록", "공지 수정/삭제", "게시기간 설정"].map(
                      (v) => (
                        <li key={v}>
                          <Link
                            to="#"
                            className="block py-1 px-2 rounded hover:bg-orange-400 hover:text-white transition-colors"
                          >
                            {v}
                          </Link>
                        </li>
                      )
                    )}
                  </ul>
                </li>

                <li>
                  <Link
                    to="/admin/news"
                    className="block py-1 px-2 rounded hover:bg-orange-400 hover:text-white transition-colors"
                  >
                    학과 소식/뉴스 관리
                  </Link>
                </li>

                {/* 자료실 관리 */}
                <li className="group/inner">
                  <Link
                    to="/admin/file-management"
                    className="block py-1 px-2 rounded hover:bg-orange-400 hover:text-white transition-colors"
                  >
                    자료실 관리
                  </Link>
                  <ul
                    className={`${thirdMenu} group-hover/inner:max-h-[220px] group-hover/inner:opacity-100 group-focus-within/inner:max-h-[220px] group-focus-within/inner:opacity-100`}
                  >
                    {["카테고리 관리", "파일 업로드/다운로드 관리"].map((v) => (
                      <li key={v}>
                        <Link
                          to="/admin/document management"
                          className="block py-1 px-2 rounded hover:bg-orange-400 hover:text-white transition-colors"
                        >
                          {v}
                        </Link>
                      </li>
                    ))}
                  </ul>
                </li>
              </ul>
            </li>

            {/* 사용자 및 권한 관리 */}
            <li className="group">
              <Link
                to="#"
                className="block py-2 px-3 rounded-lg hover:bg-white/60 transition-colors duration-300 font-semibold"
              >
                사용자 및 권한 관리
              </Link>
              <ul
                className={`${subMenu} group-hover:max-h-[560px] group-hover:opacity-100 group-focus-within:max-h-[560px] group-focus-within:opacity-100`}
              >
                <li className="group/inner">
                  <Link
                    to="/admin/users"
                    className="block py-1 px-2 rounded hover:bg-orange-400 hover:text-white transition-colors"
                  >
                    사용자 계정 관리
                  </Link>
                  <ul
                    className={`${thirdMenu} group-hover/inner:max-h-[260px] group-hover/inner:opacity-100 group-focus-within/inner:max-h-[260px] group-focus-within/inner:opacity-100`}
                  >
                    {["사용자 등록", "사용자 수정", "계정 비활성화"].map(
                      (v) => (
                        <li key={v}>
                          <Link
                            to="/admin/account management"
                            className="block py-1 px-2 rounded hover:bg-orange-400 hover:text-white transition-colors"
                          >
                            {v}
                          </Link>
                        </li>
                      )
                    )}
                  </ul>
                </li>

                <li className="group/inner">
                  <Link
                    to="admin/roles"
                    className="block py-1 px-2 rounded hover:bg-orange-400 hover:text-white transition-colors"
                  >
                    권한(Role) 관리
                  </Link>
                  <ul
                    className={`${thirdMenu} group-hover/inner:max-h-[220px] group-hover/inner:opacity-100 group-focus-within/inner:max-h-[220px] group-focus-within/inner:opacity-100`}
                  >
                    {["권한 그룹 생성", "메뉴 접근 설정"].map((v) => (
                      <li key={v}>
                        <Link
                          to="#"
                          className="block py-1 px-2 rounded hover:bg-orange-400 hover:text-white transition-colors"
                        >
                          {v}
                        </Link>
                      </li>
                    ))}
                  </ul>
                </li>

                <li>
                  <Link
                    to="/admin/user-log"
                    className="block py-1 px-2 rounded hover:bg-orange-400 hover:text-white transition-colors"
                  >
                    사용자 활동 로그
                  </Link>
                </li>
              </ul>
            </li>

            {/* 강의/수업 관리 */}
            <li className="group">
              <Link
                to="#"
                className="block py-2 px-3 rounded-lg hover:bg-white/60 transition-colors duration-300 font-semibold"
              >
                강의/수업 관리
              </Link>
              <ul
                className={`${subMenu} group-hover:max-h-[900px] group-hover:opacity-100 group-focus-within:max-h-[900px] group-focus-within:opacity-100`}
              >
                {/* 강의 개설 관리 */}
                <li className="/admin/courses">
                  <Link
                    to="/admin/course offering management"
                    className="block py-1 px-2 rounded hover:bg-orange-400 hover:text-white transition-colors"
                  >
                    강의 개설 관리
                  </Link>
                  <ul
                    className={`${thirdMenu} group-hover/inner:max-h-[220px] group-hover/inner:opacity-100 group-focus-within/inner:max-h-[220px] group-focus-within/inner:opacity-100`}
                  >
                    {["강의 등록", "강의 수정/삭제"].map((v) => (
                      <li key={v}>
                        <Link
                          to="#"
                          className="block py-1 px-2 rounded hover:bg-orange-400 hover:text-white transition-colors"
                        >
                          {v}
                        </Link>
                      </li>
                    ))}
                  </ul>
                </li>

                {/* 강의계획서 관리 */}
                <li className="group/inner">
                  <Link
                    to="/admin/lectures"
                    className="block py-1 px-2 rounded hover:bg-orange-400 hover:text-white transition-colors"
                  >
                    강의계획서 관리
                  </Link>
                  <ul
                    className={`${thirdMenu} group-hover/inner:max-h-[220px] group-hover/inner:opacity-100 group-focus-within/inner:max-h-[220px] group-focus-within/inner:opacity-100`}
                  >
                    {["제출 현황 조회", "승인 / 반려 처리"].map((v) => (
                      <li key={v}>
                        <Link
                          to="#"
                          className="block py-1 px-2 rounded hover:bg-orange-400 hover:text-white transition-colors"
                        >
                          {v}
                        </Link>
                      </li>
                    ))}
                  </ul>
                </li>

                {/* 수강 인원/신청 관리 */}
                <li className="group/inner">
                  <Link
                    to="/admin/enrollment"
                    className="block py-1 px-2 rounded hover:bg-orange-400 hover:text-white transition-colors"
                  >
                    수강 인원/신청 관리
                  </Link>
                  <ul
                    className={`${thirdMenu} group-hover/inner:max-h-[280px] group-hover/inner:opacity-100 group-focus-within/inner:max-h-[280px] group-focus-within/inner:opacity-100`}
                  >
                    {["정원 설정", "초과 승인", "수강 현황 통계"].map((v) => (
                      <li key={v}>
                        <Link
                          to="#"
                          className="block py-1 px-2 rounded hover:bg-orange-400 hover:text-white transition-colors"
                        >
                          {v}
                        </Link>
                      </li>
                    ))}
                  </ul>
                </li>

                {/* 강의실 및 시간표 관리 */}
                <li className="group/inner">
                  <Link
                    to="/admin/schedules"
                    className="block py-1 px-2 rounded hover:bg-orange-400 hover:text-white transition-colors"
                  >
                    강의실 및 시간표 관리
                  </Link>
                  <ul
                    className={`${thirdMenu} group-hover/inner:max-h-[220px] group-hover/inner:opacity-100 group-focus-within/inner:max-h-[220px] group-focus-within/inner:opacity-100`}
                  >
                    {["시간표 생성", "중복 검증"].map((v) => (
                      <li key={v}>
                        <Link
                          to="#"
                          className="block py-1 px-2 rounded hover:bg-orange-400 hover:text-white transition-colors"
                        >
                          {v}
                        </Link>
                      </li>
                    ))}
                  </ul>
                </li>

                {/* 이수체계/커리큘럼 관리 */}
                <li className="group/inner">
                  <Link
                    to="/admin/curriculum"
                    className="block py-1 px-2 rounded hover:bg-orange-400 hover:text-white transition-colors"
                  >
                    이수체계/커리큘럼 관리
                  </Link>
                  <ul
                    className={`${thirdMenu} group-hover/inner:max-h-[220px] group-hover/inner:opacity-100 group-focus-within/inner:max-h-[220px] group-focus-within/inner:opacity-100`}
                  >
                    {["교과목 분류 관리", "졸업요건 설정"].map((v) => (
                      <li key={v}>
                        <Link
                          to="#"
                          className="block py-1 px-2 rounded hover:bg-orange-400 hover:text-white transition-colors"
                        >
                          {v}
                        </Link>
                      </li>
                    ))}
                  </ul>
                </li>
              </ul>
            </li>

            {/* 학과 일정 및 행사 관리 */}
            <li className="group">
              <Link
                to="/admin/department schedule and event management"
                className="block py-2 px-3 rounded-lg hover:bg-white/60 transition-colors duration-300 font-semibold"
              >
                학과 일정 및 행사 관리
              </Link>
              <ul
                className={`${subMenu} group-hover:max-h-[520px] group-hover:opacity-100 group-focus-within:max-h-[520px] group-focus-within:opacity-100`}
              >
                <li className="group/inner">
                  <Link
                    to="/admin/academic-calendar"
                    className="block py-1 px-2 rounded hover:bg-orange-400 hover:text-white transition-colors"
                  >
                    학사 일정 관리
                  </Link>
                  <ul
                    className={`${thirdMenu} group-hover/inner:max-h-[220px] group-hover/inner:opacity-100 group-focus-within/inner:max-h-[220px] group-focus-within/inner:opacity-100`}
                  >
                    {["일정 등록/수정", "캘린더 연동"].map((v) => (
                      <li key={v}>
                        <Link
                          to="#"
                          className="block py-1 px-2 rounded hover:bg-orange-400 hover:text-white transition-colors"
                        >
                          {v}
                        </Link>
                      </li>
                    ))}
                  </ul>
                </li>

                <li className="group/inner">
                  <Link
                    to="/admin/events"
                    className="block py-1 px-2 rounded hover:bg-orange-400 hover:text-white transition-colors"
                  >
                    행사/세미나 관리
                  </Link>
                  <ul
                    className={`${thirdMenu} group-hover/inner:max-h-[220px] group-hover/inner:opacity-100 group-focus-within/inner:max-h-[220px] group-focus-within/inner:opacity-100`}
                  >
                    {["행사 등록", "참가자 관리"].map((v) => (
                      <li key={v}>
                        <Link
                          to="#"
                          className="block py-1 px-2 rounded hover:bg-orange-400 hover:text-white transition-colors"
                        >
                          {v}
                        </Link>
                      </li>
                    ))}
                  </ul>
                </li>
              </ul>
            </li>

            {/* 문의 / 민원 관리 */}
            <li className="group">
              <Link
                to="/admin/inquiry and complaint management"
                className="block py-2 px-3 rounded-lg hover:bg-white/60 transition-colors duration-300 font-semibold"
              >
                문의 / 민원 관리
              </Link>
              <ul
                className={`${subMenu} group-hover:max-h-[520px] group-hover:opacity-100 group-focus-within:max-h-[520px] group-focus-within:opacity-100`}
              >
                <li className="group/inner">
                  <Link
                    to="/admin/inquiries"
                    className="block py-1 px-2 rounded hover:bg-orange-400 hover:text-white transition-colors"
                  >
                    문의 게시판 관리
                  </Link>
                  <ul
                    className={`${thirdMenu} group-hover/inner:max-h-[220px] group-hover/inner:opacity-100 group-focus-within/inner:max-h-[220px] group-focus-within/inner:opacity-100`}
                  >
                    {["문의 내역 조회", "답변 작성"].map((v) => (
                      <li key={v}>
                        <Link
                          to="#"
                          className="block py-1 px-2 rounded hover:bg-orange-400 hover:text-white transition-colors"
                        >
                          {v}
                        </Link>
                      </li>
                    ))}
                  </ul>
                </li>

                <li className="group/inner">
                  <Link
                    to="/admin/grievances"
                    className="block py-1 px-2 rounded hover:bg-orange-400 hover:text-white transition-colors"
                  >
                    민원 처리 현황
                  </Link>
                  <ul
                    className={`${thirdMenu} group-hover/inner:max-h-[220px] group-hover/inner:opacity-100 group-focus-within/inner:max-h-[220px] group-focus-within/inner:opacity-100`}
                  >
                    {["처리 상태 관리", "통계 보기"].map((v) => (
                      <li key={v}>
                        <Link
                          to="#"
                          className="block py-1 px-2 rounded hover:bg-orange-400 hover:text-white transition-colors"
                        >
                          {v}
                        </Link>
                      </li>
                    ))}
                  </ul>
                </li>
              </ul>
            </li>

            {/* 자원 관리 */}
            <li className="group">
              <Link
                to="admin/support management"
                className="block py-2 px-3 rounded-lg hover:bg-white/60 transition-colors duration-300 font-semibold"
              >
                자원 관리
              </Link>
              <ul
                className={`${subMenu} group-hover:max-h-[720px] group-hover:opacity-100 group-focus-within:max-h-[720px] group-focus-within:opacity-100`}
              >
                <li className="group/inner">
                  <Link
                    to="/admin/rooms"
                    className="block py-1 px-2 rounded hover:bg-orange-400 hover:text-white transition-colors"
                  >
                    강의실/회의실 관리
                  </Link>
                  <ul
                    className={`${thirdMenu} group-hover/inner:max-h-[220px] group-hover/inner:opacity-100 group-focus-within/inner:max-h-[220px] group-focus-within/inner:opacity-100`}
                  >
                    {["강의실 등록", "예약 관리"].map((v) => (
                      <li key={v}>
                        <Link
                          to="#"
                          className="block py-1 px-2 rounded hover:bg-orange-400 hover:text-white transition-colors"
                        >
                          {v}
                        </Link>
                      </li>
                    ))}
                  </ul>
                </li>

                <li className="group/inner">
                  <Link
                    to="/admin/equipment"
                    className="block py-1 px-2 rounded hover:bg-orange-400 hover:text-white transition-colors"
                  >
                    장비/비품 관리
                  </Link>
                  <ul
                    className={`${thirdMenu} group-hover/inner:max-h-[220px] group-hover/inner:opacity-100 group-focus-within/inner:max-h-[220px] group-focus-within/inner:opacity-100`}
                  >
                    {["장비 등록", "사용 내역 관리"].map((v) => (
                      <li key={v}>
                        <Link
                          to="#"
                          className="block py-1 px-2 rounded hover:bg-orange-400 hover:text-white transition-colors"
                        >
                          {v}
                        </Link>
                      </li>
                    ))}
                  </ul>
                </li>

                <li>
                  <Link
                    to="/admin/budget"
                    className="block py-1 px-2 rounded hover:bg-orange-400 hover:text-white transition-colors"
                  >
                    예산 관리
                  </Link>
                </li>
              </ul>
            </li>

            {/* 시스템 관리 */}
            <li className="group">
              <Link
                to="/admin/system management"
                className="block py-2 px-3 rounded-lg hover:bg-white/60 transition-colors duration-300 font-semibold"
              >
                시스템 관리
              </Link>
              <ul
                className={`${subMenu} group-hover:max-h-[720px] group-hover:opacity-100 group-focus-within:max-h-[720px] group-focus-within:opacity-100`}
              >
                {[
                  "시스템 설정",
                  "데이터 백업 / 복원",
                  "버전 관리 / 업데이트",
                ].map((v) => (
                  <li key={v}>
                    <Link
                      to="#"
                      className="block py-1 px-2 rounded hover:bg-orange-400 hover:text-white transition-colors"
                    >
                      {v}
                    </Link>
                  </li>
                ))}

                <li className="group/inner">
                  <Link
                    to="/admin/logs"
                    className="block py-1 px-2 rounded hover:bg-orange-400 hover:text-white transition-colors"
                  >
                    로그 / 통계 관리
                  </Link>
                  <ul
                    className={`${thirdMenu} group-hover/inner:max-h-[220px] group-hover/inner:opacity-100 group-focus-within/inner:max-h-[220px] group-focus-within/inner:opacity-100`}
                  >
                    {["로그인 로그", "활동 이력"].map((v) => (
                      <li key={v}>
                        <Link
                          to="#"
                          className="block py-1 px-2 rounded hover:bg-orange-400 hover:text-white transition-colors"
                        >
                          {v}
                        </Link>
                      </li>
                    ))}
                  </ul>
                </li>
              </ul>
            </li>

            {/* 내부 관리자 커뮤니티 */}
            <li className="group">
              <Link
                to="/admin/internal admin community"
                className="block py-2 px-3 rounded-lg hover:bg-white/60 transition-colors duration-300 font-semibold"
              >
                내부 관리자 커뮤니티
              </Link>
              <ul
                className={`${subMenu} group-hover:max-h-[360px] group-hover:opacity-100 group-focus-within:max-h-[360px] group-focus-within:opacity-100`}
              >
                {["내부 공지", "회의록 / 메모 공유", "파일 공유"].map((v) => (
                  <li key={v}>
                    <Link
                      to="#"
                      className="block py-1 px-2 rounded hover:bg-orange-400 hover:text-white transition-colors"
                    >
                      {v}
                    </Link>
                  </li>
                ))}
              </ul>
            </li>
          </ul>
        </nav>
      </div>
    </div>
  );
}
