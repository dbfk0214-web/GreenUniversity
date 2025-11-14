// src/layouts/Navbar.js
import React, { useState } from "react";
import { NavLink } from "react-router-dom";
import { useSelector } from "react-redux";
import { menus } from "../layouts/subheader/menuconfig";

export default function Navbar() {
  const loginState = useSelector((state) => state.loginSlice);

  // 로그인 역할에 따라 메뉴 세트 선택
  let menuData = menus.student;
  if (loginState?.role === "ADMIN") menuData = menus.admin;
  else if (loginState?.role === "PROFESSOR") menuData = menus.professor;

  // 어떤 대분류/중분류가 열려 있는지 상태
  const [openMain, setOpenMain] = useState(null); // 대분류 index
  const [openSub, setOpenSub] = useState(null);   // "mIdx-sIdx"

  const handleMainClick = (idx) => {
    setOpenMain((prev) => (prev === idx ? null : idx));
    setOpenSub(null); // 다른 대분류 열면 소분류는 초기화
  };

  const handleSubClick = (mIdx, sIdx) => {
    const key = `${mIdx}-${sIdx}`;
    setOpenSub((prev) => (prev === key ? null : key));
  };

  return (
    <aside
      className="
        fixed left-0 top-[10%]
        w-[20%]
        bg-blue-300/90 backdrop-blur-lg
        rounded-[32px]
        px-5 pt-8 pb-10
        shadow-2xl
        max-h-[80vh] overflow-y-auto
        transition-all duration-500
      "
    >
      <nav>
        <ul className="space-y-4 text-gray-900 font-semibold list-none">
          {menuData.map((main, mIdx) => {
            const mainOpen = openMain === mIdx;
            const mainHasChildren =
              Array.isArray(main.children) && main.children.length > 0;

            return (
              <li key={main.label} className="group">
                {/* ───────── 대분류 (URL + 토글) ───────── */}
                <NavLink
                  to={main.to || "#"}
                  onClick={() => handleMainClick(mIdx)}
                  className={`
                    w-full flex items-center justify-between
                    py-3 px-4
                    bg-white/80 hover:bg-white
                    rounded-[24px]
                    shadow-md hover:shadow-lg
                    transition-all duration-300
                    text-left
                    ${mainOpen ? "scale-[1.02]" : "scale-[1]"}
                  `}
                >
                  <span className="text-[17px]">{main.label}</span>
                  {mainHasChildren && (
                    <span
                      className={`
                        text-sm transition-transform duration-300
                        ${mainOpen ? "rotate-90" : "rotate-0"}
                      `}
                    >
                      ▸
                    </span>
                  )}
                </NavLink>

                {/* ───────── 중분류 영역 (대분류 클릭 시 스르륵) ───────── */}
                {mainHasChildren && (
                  <ul
                    className={`
                      ml-3 mt-2 space-y-2
                      overflow-hidden
                      transform
                      transition-[max-height,opacity,transform] duration-500 ease-out
                      ${
                        mainOpen
                          ? "max-h-[800px] opacity-100 translate-y-0"
                          : "max-h-0 opacity-0 -translate-y-3"
                      }
                    `}
                  >
                    {main.children.map((mid, sIdx) => {
                      const subKey = `${mIdx}-${sIdx}`;
                      const subOpen = openSub === subKey;
                      const midHasChildren =
                        Array.isArray(mid.children) && mid.children.length > 0;

                      return (
                        <li key={mid.label} className="pl-1">
                          {midHasChildren ? (
                            <>
                              {/* ───── 중분류 (URL + 토글) ───── */}
                              <NavLink
                                to={mid.to || "#"}
                                onClick={() => handleSubClick(mIdx, sIdx)}
                                className={`
                                  w-full flex items-center justify-between
                                  py-2 px-3
                                  bg-white/70 hover:bg-white
                                  rounded-[20px]
                                  shadow-sm hover:shadow-md
                                  transition-all duration-300
                                  text-left
                                  ${subOpen ? "scale-[1.02]" : "scale-[1]"}
                                `}
                              >
                                <span className="text-[15px]">
                                  {mid.label}
                                </span>
                                <span
                                  className={`
                                    text-xs transition-transform duration-300
                                    ${subOpen ? "rotate-90" : "rotate-0"}
                                  `}
                                >
                                  ▸
                                </span>
                              </NavLink>

                              {/* ───── 소분류 영역 (중분류 클릭 시 스르륵) ───── */}
                              <ul
                                className={`
                                  ml-4 mt-1 space-y-1
                                  overflow-hidden
                                  transform
                                  transition-[max-height,opacity,transform] duration-500 ease-out
                                  ${
                                    subOpen
                                      ? "max-h-[500px] opacity-100 translate-y-0"
                                      : "max-h-0 opacity-0 -translate-y-3"
                                  }
                                `}
                              >
                                {mid.children.map((leaf) => (
                                  <li key={leaf.label}>
                                    <NavLink
                                      to={leaf.to}
                                      className="
                                        block py-1.5 px-3
                                        rounded-[16px]
                                        bg-white/60 hover:bg-orange-300 hover:text-white
                                        shadow-sm hover:shadow-lg
                                        transition-all duration-300
                                        text-[14px]
                                      "
                                    >
                                      {leaf.label}
                                    </NavLink>
                                  </li>
                                ))}
                              </ul>
                            </>
                          ) : (
                            // 소분류 없는 중분류 → 바로 링크만
                            <NavLink
                              to={mid.to || "#"}
                              className="
                                block py-2 px-3
                                rounded-[20px]
                                bg-white/70 hover:bg-orange-300 hover:text-white
                                shadow-sm hover:shadow-md
                                transition-all duration-300
                                text-[15px]
                              "
                            >
                              {mid.label}
                            </NavLink>
                          )}
                        </li>
                      );
                    })}
                  </ul>
                )}
              </li>
            );
          })}
        </ul>
      </nav>
    </aside>
  );
}
