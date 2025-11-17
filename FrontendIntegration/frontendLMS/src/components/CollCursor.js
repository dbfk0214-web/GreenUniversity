// src/components/CoolCursor.jsx
import React, { useEffect, useRef } from "react";
import { MouseCursor } from "@/api/mouse-cursor-api"; // <- 경로/이름 정확히!

export default function CoolCursor() {
  const cursorRef = useRef(null);
  const trailRef  = useRef(null);
  const instanceRef = useRef(null);

  useEffect(() => {
    if (!cursorRef.current) return;


    instanceRef.current = new MouseCursor({
      root: document,
      cursorEl: cursorRef.current,
      trailEl: trailRef.current,   // 없으면 null
      hideNative: true,
      speed: 0.2,
      center: true,
      clampToBounds: false,
      states: {
        default: { className: "cursor-default" },
        pointer: { className: "cursor-pointer" },
        glow:    { className: "cursor-glow" }
      }
    }).attach();

    return () => {
      // 정리 ✅
      instanceRef.current?.destroy();
      instanceRef.current = null;
    };
  }, []);

  return (
    <>
      {/* 메인 커서 */}
      <div
        ref={cursorRef}
        className="pointer-events-none fixed left-0 top-0 z-[9999] hidden md:block
                   h-6 w-6 -translate-x-1/2 -translate-y-1/2 rounded-full bg-sky-500/70
                   backdrop-blur-sm shadow-md"
        style={{ opacity: 0 }} // attach되며 나타남
      />
      {/* 꼬리(선택) */}
      <div
        ref={trailRef}
        className="pointer-events-none fixed left-0 top-0 z-[9998] hidden md:block
                   h-10 w-10 -translate-x-1/2 -translate-y-1/2 rounded-full bg-sky-300/30
                   blur-md"
        style={{ opacity: 0.9 }}
      />
    </>
  );
}
