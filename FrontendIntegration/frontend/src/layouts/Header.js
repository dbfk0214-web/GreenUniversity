import React from "react";
import { useNavigationTest } from "../hook/useNavigationTest";
import { useSelector } from "react-redux";
import SignedLoginComponent from "../components/auth/SignedLoginComponent";
import UnSignedLoginComponent from "../components/auth/UnSignedLoginComponent";

const Header = () => {
  const { Home } = useNavigationTest();
  const loginState = useSelector((state) => state.loginSlice);

  return (
    <div className="sticky top-0 z-50 w-full bg-white shadow-sm">
      <header className="flex justify-between items-center px-8 py-4 bg-black text-white border-b border-gray-800 h-[68px]">
        <div className="text-2xl font-bold">
          <div
            onClick={Home}
            className="text-gray-200 font-medium hover:text-white no-underline"
          >
            테스트입니다
          </div>
        </div>
        <div>
          {/* loginState에 email 값이 있으면 로그인 된 상태, 없으면 로그아웃 상태 */}
          {loginState.email ? (
            <SignedLoginComponent />
          ) : (
            <UnSignedLoginComponent />
          )}
        </div>
      </header>
    </div>
  );
};

export default Header;
