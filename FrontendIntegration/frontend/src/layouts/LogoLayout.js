import React from "react";
import Logo2 from "../images/2.svg";
import "../style/tailwind.css";

const LogoLayout = () => {
  return (
    <div className="w-full overflow-hidden h-screen grid place-items-center bg-white">
      <div className="relative w-[50%] aspect-square">
        {/* 가운데 로고: 기존처럼 rotate */}
        <img
          src={Logo2}
          alt="그린로고"
          className="w-full h-full rounded-full object-cover block z-10 reveal-ccw"
        />

        {/* 로고 주변 반대 방향으로 도는 텍스트 링 */}
        <div className="absolute inset-0 flex items-center justify-center pointer-events-none">
          <svg
            viewBox="0 0 200 200"
            className="w-[130%] h-[130%] spin-reverse"
          >
            <defs>
              <path
                id="logoCirclePath"
                d="
                  M 100,100
                  m -80,0
                  a 80,80 0 1,1 160,0
                  a 80,80 0 1,1 -160,0
                "
              />
            </defs>

            <text fontSize="10" letterSpacing="4" className="uppercase">
              <textPath href="#logoCirclePath" startOffset="0%">
                GREEN UNIVERSITY · LMS · GREEN UNIVERSITY · LMS · DESIGN ·
              </textPath>
            </text>
          </svg>
        </div>
      </div>
    </div>
  );
};

export default LogoLayout;
