// HeaderStudent.jsx
import React from "react";
import { Link } from "react-router-dom";

export default function HeaderStudent() {
 const data = {
    자유게시판: "student/free",
    동아리게시판: "student/club",
    학과게시판: "student/department",
    "Q&A": "student/q&a",
    "1대1 상담": "student/counsel",
    질문: "question",
  };
  const datas = {
    
    "회원가입":"student/signup",
    "계정관리":" student/accountAdministration",
    "회원정보":"student/memberinformation",
    "회원 비밀번호 재설정":"student/passwordreset",
  }
  return (
    
    <div id="StudentMain">
      <img src="" alt=""></img>
      <div className="text-left list-none">
        <nav>
          {/* 최상위는 대분류만 보이도록, 불릿 제거 */}
          <ul className="space-y-3 text-sm text-gray-800 list-none">
            {/* 공지/게시 */}
            <li className="group">
              <Link
                to="Student/Courses"
                className="block py-2 px-3 rounded-lg hover:bg-white/60 transition-colors duration-300 font-semibold"
              >
                강의/수업관리(학생)
              </Link>

              {/* 하위: hover/focus-within시에만 스르륵 열림 */}
              <ul
                className="
                ml-4 list-disc list-inside text-[0.95rem]
                overflow-hidden max-h-0 opacity-0
                transition-all duration-500 ease-out
                group-hover:max-h-[400px] group-hover:opacity-100
                group-focus-within:max-h-[400px] group-focus-within:opacity-100
                space-y-1
              "
              >
                <li>
                  <Link
                    to="Student/CourseManagement"
                    className="block py-1 px-2 rounded hover:bg-orange-400 hover:text-white transition-colors"
                  >
                    강의 관리
                  </Link>
                </li>
                <li>
                  <Link
                    to="Student/Timetable"
                    className="block py-1 px-2 rounded hover:bg-orange-400 hover:text-white transition-colors"
                  >
                    시간표
                  </Link>
                </li>
                <li>
                  <Link
                    to="Student/ClassOperation"
                    className="block py-1 px-2 rounded hover:bg-orange-400 hover:text-white transition-colors"
                  >
                    출결
                  </Link>
                </li>
                <li>
                  <Link
                    to="Student/CourseEvaluation"
                    className="block py-1 px-2 rounded hover:bg-orange-400 hover:text-white transition-colors"
                  >
                    강의 평가
                  </Link>
                </li>
              </ul>
            </li>

            {/* 학사행정 */}
            <li className="group">
              <Link
                to="/"
                className="block py-2 px-3 rounded-lg hover:bg-white/60 transition-colors duration-300 font-semibold"
              >
                학사행정·학적·증명·재정
              </Link>
              <ul
                className="
                ml-4 list-disc list-inside text-[0.95rem]
                overflow-hidden max-h-0 opacity-0
                transition-all duration-500 ease-out
                group-hover:max-h-[300px] group-hover:opacity-100
                group-focus-within:max-h-[300px] group-focus-within:opacity-100
                space-y-1
              "
              >
                <li>
                  <Link
                    to="Student/CreditManagement"
                    className="block py-1 px-2 rounded hover:bg-orange-400 hover:text-white transition-colors"
                  >
                    학점관리
                  </Link>
                </li>
                <li>
                  <Link
                    to="Student/Degree"
                    className="block py-1 px-2 rounded hover:bg-orange-400 hover:text-white transition-colors"
                  >
                    학위 증명
                  </Link>
                </li>
              </ul>
            </li>

            {/* 비교과 */}
            <li className="group">
              <Link
                to="Student/Programs"
                className="block py-2 px-3 rounded-lg hover:bg-white/60 transition-colors duration-300 font-semibold"
              >
                비교과 프로그램
              </Link>
              <ul
                className="
                ml-4 list-disc list-inside text-[0.95rem]
                overflow-hidden max-h-0 opacity-0
                transition-all duration-500 ease-out
                group-hover:max-h-[260px] group-hover:opacity-100
                group-focus-within:max-h-[260px] group-focus-within:opacity-100
                space-y-1
              "
              >
                <li>
                  <Link
                    to="Student/Application"
                    className="block py-1 px-2 rounded hover:bg-orange-400 hover:text-white transition-colors"
                  >
                    비교과프로그램 신청
                  </Link>
                </li>
                <li>
                  <Link
                    to="Student/Cancle"
                    className="block py-1 px-2 rounded hover:bg-orange-400 hover:text-white transition-colors"
                  >
                    비교과프로그램 신청 취소
                  </Link>
                </li>
              </ul>
            </li>

            {/* 성적 */}
            <li className="group">
              <Link
                to="Student/Grades"
                className="block py-2 px-3 rounded-lg hover:bg-white/60 transition-colors duration-300 font-semibold"
              >
                성적·학사
              </Link>
              <ul
                className="
                ml-4 list-disc list-inside text-[0.95rem]
                overflow-hidden max-h-0 opacity-0
                transition-all duration-500 ease-out
                group-hover:max-h-[320px] group-hover:opacity-100
                group-focus-within:max-h-[320px] group-focus-within:opacity-100
                space-y-1
              "
              >
                <li className="group/inner">
                  <Link
                    to="Student/Report"
                    className="block py-1 px-2 rounded hover:bg-orange-400 hover:text-white transition-colors"
                  >
                    성적표
                  </Link>
                  {/* 3뎁스 예시 (필요 시) */}
                  <ul
                    className="
                    ml-4 list-disc list-inside text-[0.9rem]
                    overflow-hidden max-h-0 opacity-0
                    transition-all duration-500 ease-out
                    group-hover/inner:max-h-[200px] group-hover/inner:opacity-100
                    group-focus-within/inner:max-h-[200px] group-focus-within/inner:opacity-100
                    space-y-1
                  "
                  >
                    <li>
                      <Link
                        to="Student/Check"
                        className="block py-1 px-2 rounded hover:bg-orange-400 hover:text-white transition-colors"
                      >
                        조회
                      </Link>
                    </li>
                    <li>
                      <Link
                        to="Student/Output"
                        className="block py-1 px-2 rounded hover:bg-orange-400 hover:text-white transition-colors"
                      >
                        출력
                      </Link>
                    </li>
                  </ul>
                </li>
              </ul>
            </li>

            {/* 지원 */}
            <li className="group">
              <Link
                to="Student/Support"
                className="block py-2 px-3 rounded-lg hover:bg-white/60 transition-colors duration-300 font-semibold"
              >
                지원
              </Link>
              <ul
                className="
                ml-4 list-disc list-inside text-[0.95rem]
                overflow-hidden max-h-0 opacity-0
                transition-all duration-500 ease-out
                group-hover:max-h-[320px] group-hover:opacity-100
                group-focus-within:max-h-[320px] group-focus-within:opacity-100
                space-y-1
              "
              >
                <li>
                  <Link
                    to="Student/Mentoring"
                    className="block py-1 px-2 rounded hover:bg-orange-400 hover:text-white transition-colors"
                  >
                    멘토링*진로/취업
                  </Link>
                </li>
                <li>
                  <Link
                    to="Student/ProfessorWithMentoring"
                    className="block py-1 px-2 rounded hover:bg-orange-400 hover:text-white transition-colors"
                  >
                    교수와의 멘토링
                  </Link>
                </li>
                <li>
                  <Link
                    to="Student/Employmentsuppor"
                    className="block py-1 px-2 rounded hover:bg-orange-400 hover:text-white transition-colors"
                  >
                    취업지원 * 상담
                  </Link>
                </li>
              </ul>
            </li>

            {/* 커뮤니티 */}
            <li className="group">
              <Link
                to="Student/Community"
                className="block py-2 px-3 rounded-lg hover:bg-white/60 transition-colors duration-300 font-semibold"
              >
                커뮤니티
              </Link>
              <ul
                className="
                ml-4 list-disc list-inside text-[0.95rem]
                overflow-hidden max-h-0 opacity-0
                transition-all duration-500 ease-out
                group-hover:max-h-[480px] group-hover:opacity-100
                group-focus-within:max-h-[480px] group-focus-within:opacity-100
                space-y-1
              "
              >
                <li className="group/inner">
                  <Link
                    to="Student/Entire"
                    className="block py-1 px-2 rounded hover:bg-orange-400 hover:text-white transition-colors"
                  >
                    전체게시판
                  </Link>
                  <ul
                    className="
                    ml-4 list-disc list-inside text-[0.9rem]
                    overflow-hidden max-h-0 opacity-0
                    transition-all duration-500 ease-out
                    group-hover/inner:max-h-[520px] group-hover/inner:opacity-100
                    group-focus-within/inner:max-h-[520px] group-focus-within/inner:opacity-100
                    space-y-1
                  "
                  >
                    {[자유게시판,동아리게시판,학과게시판,"Q&A","1대1 상담",질문].map((v) => (
                      <li key={v}>
                        <Link
                          to={data[v]}
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

            {/* 보안 */}
            <li className="group">
              <Link
                to="/security"
                className="block py-2 px-3 rounded-lg hover:bg-white/60 transition-colors duration-300 font-semibold"
              >
                인증/계정보안
              </Link>
              <ul
                className="
                ml-4 list-disc list-inside text-[0.95rem]
                overflow-hidden max-h-0 opacity-0
                transition-all duration-500 ease-out
                group-hover:max-h-[360px] group-hover:opacity-100
                group-focus-within:max-h-[360px] group-focus-within:opacity-100
                space-y-1
              "
              >
                {[
                  "회원가입",
                  "계정관리",
                  "회원정보",
                  "회원 비밀번호 재설정",
                ].map((v) => (
                  <li key={v}>
                    <Link
                      to={datas[v]}
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
