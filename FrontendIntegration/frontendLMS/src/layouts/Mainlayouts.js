import React, { useEffect, useState } from "react";
import { MouseCursor } from "../api/MousecursorHandler";
import Navbar from "./Navbar";
import Header from "../layouts/Header";
import Footer from "../layouts/Footer";

import HeaderAdmin from "./subheader/HeaderAdmin";
import HeaderStudent from "./subheader/HeaderStudent";
import HeaderProfessor from "./subheader/HeaderProfessor";

import { menus } from "../layouts/subheader/menuconfig"; // 실제 파일명 대소문자 확인

export default function Mainlayouts({ children, msg }) {
  const [role, setRole] = useState("STUDENT");

  const HEADER_BY_ROLE = {
    ADMIN: HeaderAdmin,
    PROFESSOR: HeaderProfessor,
    STUDENT: HeaderStudent,
  };

  const HeaderComponent = HEADER_BY_ROLE[role] || HeaderStudent;

  const menuList = menus[role] || menus[role.toLowerCase()] || [];

  useEffect(() => {
    const cursorEl = document.getElementById("cursor");
    const trailEl = document.getElementById("cursorTrail");
    if (!cursorEl) return;

    const api = new MouseCursor({
      root: document.documentElement,
      cursorEl,
      trailEl,
      hideNative: true,
      speed: 0.2,
      ease: "expo.out",
    }).attach();

    return () => api.destroy();
  }, []);

  return (
    <div className="h-screen flex flex-col">
      <div className="h-20 shrink-0 bg-white">
        <Header />
        {/* <HeaderComponent menus={menuList} /> */}
        <HeaderComponent menus={menuList} msg={"STUDENT"} />
      </div>

      <div>
        <div
          id="cursor"
          className="pointer-events-none fixed left-0 top-0 will-change-transform"
        >
          <div className="w-10 h-10 rounded-full bg-yellow-300/50 transition-transform duration-150 ease-out hover:scale-125" />
        </div>
        <div
          id="cursorTrail"
          className="pointer-events-none fixed left-0 top-0 rounded-full bg-yellow-200/30 will-change-transform"
        />
      </div>

      <div className="flex flex-1 overflow-y-auto bg-white text-black cursor-none">
        <Navbar subHeader={menuList} />
        <div className="flex-1 flex flex-col items-center justify-start bg-white">
          <div className="w-[80%] ml-[19%] rounded-xl border border-gray-200 bg-white my-4 h-[100%]">
            {children}
          </div>
        </div>
      </div>

      <div className="h-10">
        <Footer />
      </div>
    </div>
  );
}
