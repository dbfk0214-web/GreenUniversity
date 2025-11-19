import React from "react";
import Img1 from "../images/1.png";

const Footer = () => {
  return (
    <footer className="flex items-center justify-between bg-blue-50 px-3 py-3 h-15 rounded-md">
      <img
        src={Img1}
        alt="그린대학교 로고"
        className="h-14 w-auto object-contain"
      />

      <div className="text-right">
        <hr className="border-gray-300 mb-2 h-2" />
        <p className="text-xl font-bold ">그린대학교</p>
        <p className="text-base">경기 성남시 분당구 돌마로 46</p>
        <p className="text-base">대표전화: 031-123-4567</p>
      </div>
    </footer>
  );
};

export default Footer;
