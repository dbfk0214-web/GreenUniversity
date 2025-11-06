// StopWhenIdleFollower.jsx
import React, { useEffect, useRef, useState } from "react";
import { MouseCursor } from "../api/MousecursorHandler";

export default function Navbar({ subHeader }) {
  const wrapRef = useRef(null);
  const barRef = useRef(null);

  const [activeEl, setActiveEl] = useState(null); 
  const [hasActive, setHasActive] = useState(false); 
  const apiRef = useRef({ moveToEl: () => {} });
  const prevElRef = useRef(null);

  useEffect(() => {
    const wrap = wrapRef.current;
    const bar = barRef.current;
    if (!wrap || !bar) return;

    const lerp = 0.45,
      idleMs = 80,
      epsilon = 0.2;
    let cx = 0,
      cy = 0,
      tx = 0,
      ty = 0,
      raf = 0,
      running = false,
      lastMoveAt = 0;

    const now = () => performance.now();
    const startRaf = () => {
      if (!running) {
        running = true;
        raf = requestAnimationFrame(tick);
      }
    };
    const stopRaf = () => {
      if (running) {
        running = false;
        cancelAnimationFrame(raf);
      }
    };
    const clamp = (v, min, max) => Math.min(Math.max(v, min), max);

    const getRects = () => ({
      pr: wrap.getBoundingClientRect(),
      cr: bar.getBoundingClientRect(),
    });

    apiRef.current.moveToEl = (el) => {
      if (!el) return;
      const { pr, cr } = getRects();
      const lr = el.getBoundingClientRect();

      let desiredX = (pr.width - cr.width) / 2;
      let desiredY =
        lr.top - pr.top + wrap.scrollTop + (lr.height - cr.height) / 2;

      desiredX = clamp(desiredX, pr.width - cr.width, 0);
      desiredY = clamp(desiredY, 0, pr.height - cr.height);

      tx = desiredX;
      ty = desiredY;
      lastMoveAt = now();
      startRaf();
    };

    const tick = () => {
      cx += (tx - cx) * lerp;
      cy += (ty - cy) * lerp;
      bar.style.transform = `translate3d(${cx}px, ${cy}px, 0)`;

      const dist = Math.hypot(tx - cx, ty - cy);
      const idle = now() - lastMoveAt;
      if (idle > idleMs && dist < epsilon) {
        stopRaf();
        return;
      }
      raf = requestAnimationFrame(tick);
    };

    const initCenter = () => {
      const { pr, cr } = getRects();
      cx = tx = (pr.width - cr.width) / 2;
      cy = ty = (pr.height - cr.height) / 2;
      bar.style.transform = `translate3d(${cx}px, ${cy}px, 0)`;
    };
    initCenter();

    return () => {
      stopRaf();
    };
  }, []);

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

  useEffect(() => {
    const wrap = wrapRef.current;
    if (!wrap) return;

    const lis = Array.from(wrap.querySelectorAll("li"));
    const onEnter = (el) => () => {
      // 이전 활성 클래스 제거
      if (prevElRef.current && prevElRef.current !== el) {
        prevElRef.current.classList.remove("is-active");
      }
      // 현재 활성
      el.classList.add("is-active");
      prevElRef.current = el;
      setActiveEl(el);
      setHasActive(true); // flex 재정렬 트리거
      apiRef.current.moveToEl(el); // 바 이동
    };
    const onLeave = (el) => () => {
      // hover 해제해도 최근 선택 유지하고 싶으면 아래 줄 주석 처리
      el.classList.remove("is-active");
      setActiveEl(null);
      setHasActive(false); // flex 원상 복귀
    };

    lis.forEach((el) => {
      el.addEventListener("mouseenter", onEnter(el));
      el.addEventListener("focusin", onEnter(el));
      el.addEventListener("mouseleave", onLeave(el));
      el.addEventListener("focusout", onLeave(el));
    });

    return () => {
      lis.forEach((el) => el.replaceWith(el.cloneNode(true)));
    };
  }, [subHeader]);

  return (
    <div>
      <div
        id="cursor"
        className="w-10 h-10 rounded-full bg-yellow-300/50 transform transition-transform duration-500 ease-out hover:scale-125"
      />
      <div
        ref={wrapRef}
        className={`
    fixed left-0 top-[10%] 
    w-[20%] 
    bg-blue-400 rounded-2xl 
    flex flex-col justify-start items-center
    pt-6 pb-10 
    transition-all duration-500 ease-in-out list-none
        `}
      >
        <div className="w-full">{subHeader}</div>
        <div
          ref={barRef}
          className={`
            absolute top-0 z-[1]
            w-[130%] min-h-[30px]
            ${activeEl ? "bg-orange-400" : "bg-white"}
            rounded-2xl shadow-2xl
            pointer-events-none
            transform-gpu will-change-transform
            transition-[background-color,box-shadow,filter] duration-300 ease-out
            /* 시각적 부드러움 */
            backdrop-blur-[2px] line-none
          `}
          style={{ left: "-15%" }}
          aria-hidden="true"
        />
        <style>{`
          li { position: relative; z-index: 2; color: #1f2937; transition: color .25s ease; }
          li.is-active { color: #000000 !important; }
        `}</style>
      </div>
    </div>
  );
}
