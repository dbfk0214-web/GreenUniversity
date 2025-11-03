// HeaderProfessor.jsx
import React from "react";
import { Link } from "react-router-dom";

export default function HeaderProfessor() {
  return (
    <div>
      <div className="text-left list-none">
        <nav>
          <ul className="space-y-3 text-sm text-gray-800 list-none">
            {/* 강의/수업관리(교수) */}
            <li className="group">
              <Link
                to="/prof/courses"
                className="block py-2 px-3 rounded-lg hover:bg-white/60 transition-colors duration-300 font-semibold"
              >
                강의/수업관리(교수)
              </Link>
              <ul
                className="
                ml-4 list-disc list-inside text-[0.95rem]
                overflow-hidden max-h-0 opacity-0
                transition-all duration-500 ease-out
                group-hover:max-h-[420px] group-hover:opacity-100
                group-focus-within:max-h-[420px] group-focus-within:opacity-100
                space-y-1
              "
              >
                <li>
                  <Link
                    to="/"
                    className="block py-1 px-2 rounded hover:bg-orange-400 hover:text-white transition-colors"
                  >
                    강의 관리
                  </Link>
                </li>

                {/* 수업 운영 (2뎁스) */}
                <li className="group/inner">
                  <Link
                    to="/"
                    className="block py-1 px-2 rounded hover:bg-orange-400 hover:text-white transition-colors"
                  >
                    수업 운영
                  </Link>
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
                        to="/"
                        className="block py-1 px-2 rounded hover:bg-orange-400 hover:text-white transition-colors"
                      >
                        휴강 알림
                      </Link>
                    </li>
                    <li>
                      <Link
                        to="/"
                        className="block py-1 px-2 rounded hover:bg-orange-400 hover:text-white transition-colors"
                      >
                        중간·기말고사 공지
                      </Link>
                    </li>
                  </ul>
                </li>

                <li>
                  <Link
                    to="/"
                    className="block py-1 px-2 rounded hover:bg-orange-400 hover:text-white transition-colors"
                  >
                    출결
                  </Link>
                </li>
                <li>
                  <Link
                    to="/"
                    className="block py-1 px-2 rounded hover:bg-orange-400 hover:text-white transition-colors"
                  >
                    학생 평가
                  </Link>
                </li>
              </ul>
            </li>

            {/* 비교과 프로그램 */}
            <li className="group">
              <Link
                to="/programs"
                className="block py-2 px-3 rounded-lg hover:bg-white/60 transition-colors duration-300 font-semibold"
              >
                비교과 프로그램
              </Link>
              <ul
                className="
                ml-4 list-disc list-inside text-[0.95rem]
                overflow-hidden max-h-0 opacity-0
                transition-all duration-500 ease-out
                group-hover:max-h-[220px] group-hover:opacity-100
                group-focus-within:max-h-[220px] group-focus-within:opacity-100
                space-y-1
              "
              >
                <li>
                  <Link
                    to="/"
                    className="block py-1 px-2 rounded hover:bg-orange-400 hover:text-white transition-colors"
                  >
                    비교과 프로그램 신청 현황
                  </Link>
                </li>
              </ul>
            </li>

            {/* 재정·지원 */}
            <li className="group">
              <Link
                to="/support"
                className="block py-2 px-3 rounded-lg hover:bg-white/60 transition-colors duration-300 font-semibold"
              >
                재정·지원
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
                {["멘토링·진로/취업", "교수와의 멘토링", "취업지원·상담"].map(
                  (v) => (
                    <li key={v}>
                      <Link
                        to="/"
                        className="block py-1 px-2 rounded hover:bg-orange-400 hover:text-white transition-colors"
                      >
                        {v}
                      </Link>
                    </li>
                  )
                )}
              </ul>
            </li>

            {/* 성적/학사 */}
            <li className="group">
              <Link
                to="/grades"
                className="block py-2 px-3 rounded-lg hover:bg-white/60 transition-colors duration-300 font-semibold"
              >
                성적/학사
              </Link>
              <ul
                className="
                ml-4 list-disc list-inside text-[0.95rem]
                overflow-hidden max-h-0 opacity-0
                transition-all duration-500 ease-out
                group-hover:max-h-[220px] group-hover:opacity-100
                group-focus-within:max-h-[220px] group-focus-within:opacity-100
                space-y-1
              "
              >
                <li>
                  <Link
                    to="/"
                    className="block py-1 px-2 rounded hover:bg-orange-400 hover:text-white transition-colors"
                  >
                    성적표 입력
                  </Link>
                </li>
              </ul>
            </li>

            {/* 커뮤니티 */}
            <li className="group">
              <Link
                to="/community"
                className="block py-2 px-3 rounded-lg hover:bg-white/60 transition-colors duration-300 font-semibold"
              >
                커뮤니티
              </Link>
              <ul
                className="
                ml-4 list-disc list-inside text-[0.95rem]
                overflow-hidden max-h-0 opacity-0
                transition-all duration-500 ease-out
                group-hover:max-h-[520px] group-hover:opacity-100
                group-focus-within:max-h-[520px] group-focus-within:opacity-100
                space-y-1
              "
              >
                {[
                  "전체게시판",
                  "자유게시판",
                  "동아리게시판",
                  "학과게시판",
                  "Q&A",
                  "1대1 상담",
                  "질문",
                ].map((v) => (
                  <li key={v}>
                    <Link
                      to="/"
                      className="block py-1 px-2 rounded hover:bg-orange-400 hover:text-white transition-colors"
                    >
                      {v}
                    </Link>
                  </li>
                ))}
              </ul>
            </li>

            {/* 인증/계정보안 */}
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
                      to="/"
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
