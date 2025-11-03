import React from "react";
import logo from "../images/1.png";
export default function Header({ subHeader }) {
  return (
    <header className="w-full border-b border-gray-200">
      <div className="mx-auto w-[95%] flex items-center justify-between py-3">
        {/* 좌측 타이틀 */}
        <div className="flex items-center gap-3">
          <img src={logo} alt="logo" className="w-12 h-12 object-contain"></img>
        </div>
        <div className=" flex-1 items-center justify-center text-center font-extrabold font-black">
          그린 대학교 학사 지원 시스템
        </div>
        <button>
          로그인
        </button>
      </div>
    </header>
  );
}
