import React, { Children, useEffect } from "react";
import { MouseCursor } from "../api/MousecursorHandler";
import Navbar from "../layouts/Navbar";
import Header from "../layouts/Header";
import Footer from "../layouts/Footer";

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
    <div className="h-screen flex flex-col overflow-hidden">
      <div className="h-20 shrink-0 bg-gray-900">
        <Header />
      </div>
      <div className="flex flex-1 overflow-hidden bg-white text-white cursor-none">
        <Navbar />
        <div
          id="cursor"
          className="pointer-events-none fixed left-0 top-0 z-[9999] w-6 h-6 rounded-full border-2 border-orange-300 bg-orange-300 opacity-0"
        />
        <div
          id="cursorTrail"
          className="pointer-events-none fixed left-0 top-0 z-[9998] w-4 h-4 rounded-full border border-orange-300 bg-yellow-200/10 opacity-0"
        />
        <div className="flex-1 flex flex-col items-center justify-center bg-white overflow-hidden">
          <div className="w-3/5 flex-1 rounded-xl border border-gray-200 bg-white"></div>
          <div className="w-3/5 flex-1 rounded-xl border border-gray-200 bg-white"></div>
        </div>
      </div>
      <div className="h-12 shrink-0">
        <Footer />
      </div>
    </div>
  );
}
