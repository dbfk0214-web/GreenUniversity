// StopWhenIdleFollower.jsx
import React, { useEffect, useRef } from "react";
import { MouseCursor } from "../api/MousecursorHandler";

export default function Navbar({ subHeader }) {
  console.log(subHeader);
  const wrapRef = useRef(null);
  const childRef = useRef(null);

  useEffect(() => {
    const wrap = wrapRef.current;
    const child = childRef.current;
    if (!wrap || !child) return;

    // ===== 옵션 =====
    const lerp = 0.45; // 1 = 즉시, 0.3~0.6 빠르고 부드럽게
    const idleMs = 80; // 이 시간 동안 mousemove 없고,
    const epsilon = 0.2; // 목표와의 거리가 이 이하이면 RAF 정지

    let cx = 0,
      cy = 0; // current pos
    let tx = 0,
      ty = 0; // target pos
    let raf = 0;
    let running = false;
    let lastMoveAt = 0;

    const now = () => performance.now();

    const startRaf = () => {
      if (running) return;
      running = true;
      raf = requestAnimationFrame(tick);
    };

    const stopRaf = () => {
      if (!running) return;
      running = false;
      cancelAnimationFrame(raf);
    };

    const getRects = () => {
      const pr = wrap.getBoundingClientRect();
      const cr = child.getBoundingClientRect();
      return { pr, cr };
    };

    const clamp = (v, min, max) => Math.min(Math.max(v, min), max);

    const onMove = (e) => {
      const { pr, cr } = getRects();

      // 부모 기준 마우스 좌표
      const mx = e.clientX - pr.left;
      const my = e.clientY - pr.top;

      // 자식 중심이 마우스를 따라가도록 보정
      let desiredX = mx - cr.width / 2;
      let desiredY = my - cr.height / 2;

      // 가로 120% → 자식이 부모보다 큼
      // 부모 안에 시각적으로 "붙어있게" 하려면 범위를 [pr.width - cr.width, 0]로 제한
      const minX = pr.width - cr.width; // 음수
      const maxX = 0; // 오른쪽 끝 기준
      desiredX = clamp(desiredX, minX, maxX);

      // 세로는 부모 안에 보이도록 제한
      const minY = 0;
      const maxY = pr.height - cr.height;
      desiredY = clamp(desiredY, minY, maxY);

      tx = desiredX;
      ty = desiredY;

      lastMoveAt = now();
      startRaf();

      // 즉시 모드 원하면 아래를 활성화:
      // cx = tx; cy = ty; child.style.transform = `translate3d(${cx}px, ${cy}px, 0)`;
    };

    const onEnter = (e) => onMove(e);
    const onLeave = () => {
      // 영역을 벗어나면 현재 위치 유지(정지). 원위치 복귀 원하면 아래 주석 해제:
      // const { pr, cr } = getRects();
      // tx = (pr.width - cr.width) / 2;
      // ty = (pr.height - cr.height) / 2;
      // startRaf();
    };

    const tick = () => {
      // 보간
      cx += (tx - cx) * lerp;
      cy += (ty - cy) * lerp;

      child.style.transform = `translate3d(${cx}px, ${cy}px, 0)`;

      const dist = Math.hypot(tx - cx, ty - cy);
      const idle = now() - lastMoveAt;

      // 마우스가 멈추고(dist≈0) 일정 시간 지나면 RAF를 멈춤
      if (idle > idleMs && dist < epsilon) {
        stopRaf();
        return; // 완전 정지
      }

      raf = requestAnimationFrame(tick);
    };

    // 초기 위치: 가운데 배치(선택)
    const initCenter = () => {
      const { pr, cr } = getRects();
      cx = tx = (pr.width - cr.width) / 2;
      cy = ty = (pr.height - cr.height) / 2;
      child.style.transform = `translate3d(${cx}px, ${cy}px, 0)`;
    };
    initCenter();

    wrap.addEventListener("mousemove", onMove);
    wrap.addEventListener("mouseenter", onEnter);
    wrap.addEventListener("mouseleave", onLeave);

    return () => {
      wrap.removeEventListener("mousemove", onMove);
      wrap.removeEventListener("mouseenter", onEnter);
      wrap.removeEventListener("mouseleave", onLeave);
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

  return (
    <div>
      {/* 커서 효과 */}
      <div
        id="cursor"
        className="w-10 h-10 rounded-full bg-yellow-300/50 transform transition-transform duration-500 ease-out hover:scale-125"
      />

      {/* 파란 사이드바 */}
      <div
        ref={wrapRef}
        className="fixed left-0 top-[10%] w-[20%] h-[80%] bg-blue-400 rounded-md flex justify-center items-start pt-6"
      >
        {/* 흰 패널: 여기 안에 메뉴를 그려야 화면에 보임 */}
        <div
          ref={childRef}
          className="absolute top-[5%] w-[120%] min-h-[120px] bg-white rounded-md shadow-2xl text-left p-4 overflow-y-auto transform-gpu will-change-transform"
        >
          {subHeader /* ← 이 한 줄이 핵심 */}
        </div>
      </div>
    </div>
  );
}
