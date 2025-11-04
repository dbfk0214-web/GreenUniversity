import React, { useEffect, useState } from "react";
import { MouseCursor } from "../api/MousecursorHandler";
import Navbar from "./Navbar";
import Header from "../layouts/Header";
import Footer from "../layouts/Footer";
import HeaderAdmin from "./subheader/HeaderAdmin";
import HeaderStudent from "./subheader/HeaderStudent";
import HeaderProfessor from "./subheader/HeaderProfessor";
import { useSelector } from "react-redux";

export default function Mainlayouts({children}) {
  const [role, setRole] = useState("ADMIN");
  // const member = useSelector((s) => s.loginSlice); // {email, role, ...}
  // console.log("member:", member);
  // const role = (
  //   (member.userRoleList && member?.userRoleList[0]) ||
  //   "STUDENT"
  // ).toUpperCase();
  // console.log("role:", role);
  const roleHeader =
    role === "ADMIN" ? (
      <HeaderAdmin />
    ) : role === "PROFESSOR" ? (
      <HeaderProfessor />
    ) : (
      <HeaderStudent />
    );
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
        <Navbar subHeader={roleHeader} />
        <div className="flex-1 flex flex-col items-center justify-start bg-white">
          <div className="w-[80%] ml-[19%] rounded-xl border border-gray-200 bg-white my-4 h-[100%]">{children}</div>
          {children}
        </div>
      </div>
      <div className="h-12 shrink-0">
        <Footer />
      </div>
    </div>
  );
}
