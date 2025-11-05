import React from "react";
import { useNavigationTest } from "../hook/useNavigationTest";

const Header = () => {
  const { Home } = useNavigationTest();

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
      </header>
    </div>
  );
};

export default Header;
