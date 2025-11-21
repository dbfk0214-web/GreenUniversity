import React from "react";

const Navbar = () => {
  return (
    <nav className="w-full border-b bg-white">
      <div className="max-w-7xl mx-auto px-4 py-6 grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-8">

        {/* ----------------------- 그린소개 ----------------------- */}
        <div>
          <h3 className="text-lg font-bold mb-4">그린소개</h3>
          <ul className="space-y-2">
            <li><a href="http://localhost:3000/aboutgreen/president" className="hover:underline">총장실</a></li>
            <li><a href="http://localhost:3000/aboutgreen/greenvision" className="hover:underline">기린비전</a></li>
            <li><a href="http://localhost:3000/aboutgreen/historyofgreen" className="hover:underline">기린연혁</a></li>
            <li><a href="http://localhost:3000/aboutgreen/universityoverview" className="hover:underline">대학현황</a></li>
            <li><a href="http://localhost:3000/aboutgreen/universitysymbols" className="hover:underline">기린상징</a></li>
            <li><a href="http://localhost:3000/aboutgreen/campusguide" className="hover:underline">캠퍼스 안내</a></li>
          </ul>
        </div>

        {/* ----------------------- 대학생활 ----------------------- */}
        <div>
          <h3 className="text-lg font-bold mb-4">대학생활</h3>
          <ul className="space-y-2">
            <li><a href="http://localhost:3000/campuslife/notices" className="hover:underline">공지사항</a></li>
            <li><a href="http://localhost:3000/campuslife/events" className="hover:underline">행사</a></li>
            <li><a href="http://localhost:3000/campuslife/administrativeofficesinstitutes" className="hover:underline">행정부서/기관</a></li>
            <li><a href="http://localhost:3000/campuslife/serviceguide" className="hover:underline">서비스 이용 안내</a></li>
            <li><a href="http://localhost:3000/campuslife/studentactivities" className="hover:underline">자치활동</a></li>
            <li><a href="http://localhost:3000/campuslife/lostfoundboard" className="hover:underline">교내 분실물 게시판</a></li>
          </ul>
        </div>

        {/* ----------------------- 입학/교육 ----------------------- */}
        <div>
          <h3 className="text-lg font-bold mb-4">입학/교육</h3>
          <ul className="space-y-2">
            <li><a href="http://localhost:3000/admissioneducation/admissionguide" className="hover:underline">입학안내</a></li>
            <li><a href="http://localhost:3000/admissioneducation/colleges" className="hover:underline">대학</a></li>
            <li><a href="http://localhost:3000/admissioneducation/graduateschool" className="hover:underline">대학원</a></li>
            <li><a href="http://localhost:3000/admissioneducation/nondegreeprograms" className="hover:underline">비학위과정</a></li>
          </ul>
        </div>

        {/* ----------------------- 학사지원 ----------------------- */}
        <div>
          <h3 className="text-lg font-bold mb-4">학사지원</h3>
          <ul className="space-y-2">
            <li><a href="http://localhost:3000/academicsupport/academicinformation" className="hover:underline">학사정보</a></li>
            <li><a href="http://localhost:3000/academicsupport/undergraduatecurriculum" className="hover:underline">학부교육과정</a></li>
            <li><a href="http://localhost:3000/academicsupport/tuition" className="hover:underline">등록금</a></li>
            <li><a href="http://localhost:3000/academicsupport/scholarships" className="hover:underline">학부장학금</a></li>
            <li><a href="http://localhost:3000/academicsupport/certificatesissuance" className="hover:underline">증명서/발급</a></li>
            <li><a href="http://localhost:3000/academicsupport/formsapplications" className="hover:underline">각종 신청서 양식 모음</a></li>
          </ul>
        </div>

        {/* ----------------------- 기타안내 ----------------------- */}
        <div>
          <h3 className="text-lg font-bold mb-4">기타안내</h3>
          <ul className="space-y-2">
            <li><a href="http://localhost:3000/information/sitemap" className="hover:underline">사이트맵</a></li>
            <li><a href="http://localhost:3000/information/faq" className="hover:underline">FAQ</a></li>
            <li><a href="http://localhost:3000/information/careers" className="hover:underline">채용안내</a></li>
            <li><a href="http://localhost:3000/information/privacypolicy" className="hover:underline">개인정보보호방침</a></li>
            <li><a href="http://localhost:3000/information/legalnotice" className="hover:underline">법적고지</a></li>
          </ul>
        </div>

        {/* ----------------------- 번외 서비스 ----------------------- */}
        <div>
          <h3 className="text-lg font-bold mb-4">번외 서비스</h3>
          <ul className="space-y-2">
            <li><a href="http://localhost:3000/extraservices/donate" className="hover:underline">후원하기</a></li>
            <li><a href="http://localhost:3000/extraservices/chatbot" className="hover:underline">챗봇</a></li>
            <li><a href="http://localhost:3000/admin/one" className="hover:underline">괸라자 혹은 실험실</a></li>
          </ul>
        </div>

      </div>
    </nav>
  );
};

export default Navbar;
