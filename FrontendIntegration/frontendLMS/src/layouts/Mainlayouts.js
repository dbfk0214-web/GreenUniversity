import React, { Children, useEffect } from "react";
import { MouseCursor } from "../api/MousecursorHandler";
import Navbar from "../layouts/Navbar";
import Header from "../layouts/Header";
import Footer from "../layouts/Footer";
import Header_admin from "./subheader/Header_admin";

export default function Mainlayouts() {
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
      <div className="h-20 shrink-0 bg-gray-900">
        <Header children={Header_admin} />
      </div>

      <div className="flex flex-1 overflow-y-auto bg-white text-white cursor-none">
        <Navbar />
        <div className="flex-1 flex flex-col items-center justify-start bg-white">
          <div className="w-3/5 rounded-xl border border-gray-200 bg-white my-4 h-[600px]"></div>
          <div className="w-3/5 rounded-xl border border-gray-200 bg-white my-4 h-[600px]"></div>
        </div>
      </div>

      <div className="h-12 shrink-0">
        <Footer />
      </div>
    </div>
  );
}
