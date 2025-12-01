import React, { useEffect } from "react";
import { useNavigationTest } from "../hook/useNavigationTest";
import { useSelector } from "react-redux";
import SignedLoginComponent from "../components/auth/SignedLoginComponent";
import UnSignedLoginComponent from "../components/auth/UnSignedLoginComponent";
import logo from "../images/1.png";
import Navbar from "./Navbar";

const Header = () => {
  const { Home } = useNavigationTest();
  const user = useSelector((s) => s.loginSlice);
  console.log("user정보:", user);
  const loginState = useSelector((state) => state.loginSlice);
  // useEffect(() => {
  //   if (user.role === "GUEST") console.log("게스트입니다.")
  //   else console.log("게스트가 아닙니다.");
  // }, [user]);

  return (
    // 헤더 전체를 sticky로
    <div className="sticky top-0 z-[100] w-full">
      {/* 🔹 1줄차 상단 바: 로고 + 로그인 */}
      <div className="w-full bg-sky-300 text-white shadow-sm border-b border-sky-400">
        <div className="max-w-7xl mx-auto flex items-center justify-between h-[64px] px-8">
          {/* 로고 */}
          <button
            type="button"
            onClick={Home}
            className="flex items-center gap-2"
          >
            <img src={logo} alt="로고" className="h-10" />
          </button>
        <div>{user.role}</div>
          {/* 로그인 / 회원가입 */}
          <div className="flex items-center gap-4">
            {/* loginState에 email 값이 있으면 로그인 된 상태, 없으면 로그아웃 상태 */}
            {loginState.email ? (
              <SignedLoginComponent />
            ) : (
              <UnSignedLoginComponent />
            )}
          </div>
        </div>
      </div>

      {/* 🔹 2줄차 네비게이션(사이트맵 스타일) */}
      {user.role === "GUEST" ? (
        <div/>
      ):(
        <Navbar/>
      )}
    </div>
  );
};

export default Header;
