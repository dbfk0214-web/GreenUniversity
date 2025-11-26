import { createPortal } from "react-dom";
import { useEffect } from "react";
import { MouseCursor } from "../api/MousecursorHandler";

export default function CursorLayer() {
  useEffect(() => {
    const cursorEl = document.getElementById("cursor");
    const trailEl = document.getElementById("cursorTrail");

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

  return createPortal(
    <>
      <div
        id="cursor"
        className="pointer-events-none fixed left-0 top-0 z-[999999] will-change-transform"
      >
        <div className="w-10 h-10 rounded-full bg-yellow-300/50" />
      </div>

      <div
        id="cursorTrail"
        className="pointer-events-none fixed left-0 top-0 z-[999998] rounded-full bg-yellow-200/30"
      />
    </>,
    document.body
  );
}
