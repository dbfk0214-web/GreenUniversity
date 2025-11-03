// StopWhenIdleFollower.jsx
import React, { useEffect, useRef, useState } from "react";
import { MouseCursor } from "../api/MousecursorHandler";

export default function Navbar({ subHeader }) {
  const wrapRef = useRef(null);
  const barRef = useRef(null);

  const [activeEl, setActiveEl] = useState(null);   // 현재 활성 li
  const [hasActive, setHasActive] = useState(false); // flex 재정렬용
  const apiRef = useRef({ moveToEl: () => {} });
  const prevElRef = useRef(null);

  // ===== 하이라이트 바 애니메이션 엔진(기존 유지, 보간) =====
  useEffect(() => {
    const wrap = wrapRef.current;
    const bar = barRef.current;
    if (!wrap || !bar) return;

    const lerp = 0.45, idleMs = 80, epsilon = 0.2;
    let cx = 0, cy = 0, tx = 0, ty = 0, raf = 0, running = false, lastMoveAt = 0;

    const now = () => performance.now();
    const startRaf = () => { if (!running) { running = true; raf = requestAnimationFrame(tick); } };
    const stopRaf  = () => { if (running) { running = false; cancelAnimationFrame(raf); } };
    const clamp = (v, min, max) => Math.min(Math.max(v, min), max);

    const getRects = () => ({ pr: wrap.getBoundingClientRect(), cr: bar.getBoundingClientRect() });

    apiRef.current.moveToEl = (el) => {
      if (!el) return;
      const { pr, cr } = getRects();
      const lr = el.getBoundingClientRect();

      // li 세로 중앙으로 이동, 가로는 중앙 기준(바는 130%)
      let desiredX = (pr.width - cr.width) / 2;
      let desiredY = lr.top - pr.top + wrap.scrollTop + (lr.height - cr.height) / 2;

      desiredX = clamp(desiredX, pr.width - cr.width, 0);
      desiredY = clamp(desiredY, 0, pr.height - cr.height);

      tx = desiredX; ty = desiredY;
      lastMoveAt = now();
      startRaf();
    };

    const tick = () => {
      cx += (tx - cx) * lerp;
      cy += (ty - cy) * lerp;
      // transform 자체도 부드럽지만, 추가적인 트윈 느낌을 위해 will-change + GPU 사용
      bar.style.transform = `translate3d(${cx}px, ${cy}px, 0)`;

      const dist = Math.hypot(tx - cx, ty - cy);
      const idle = now() - lastMoveAt;
      if (idle > idleMs && dist < epsilon) { stopRaf(); return; }
      raf = requestAnimationFrame(tick);
    };

    // 초기 중앙
    const initCenter = () => {
      const { pr, cr } = getRects();
      cx = tx = (pr.width - cr.width) / 2;
      cy = ty = (pr.height - cr.height) / 2;
      bar.style.transform = `translate3d(${cx}px, ${cy}px, 0)`;
    };
    initCenter();

    return () => { stopRaf(); };
  }, []);

  // ===== 커서 이펙트(원본 유지) =====
  useEffect(() => {
    const cursorEl = document.getElementById("cursor");
    const trailEl = document.getElementById("cursorTrail");
    if (!cursorEl) return;
    const api = new MouseCursor({
      root: document.documentElement, cursorEl, trailEl,
      hideNative: true, speed: 0.2, ease: "expo.out",
    }).attach();
    return () => api.destroy();
  }, []);

  // ===== li 이벤트 연결 + '로그인' 완전 제거 + flex 재정렬 =====
  useEffect(() => {
    const wrap = wrapRef.current;
    if (!wrap) return;

    // subHeader DOM 내 "로그인" 텍스트 가진 li 제거(완전 삭제)
    wrap.querySelectorAll("li").forEach((li) => {
      if (/로그인/.test(li.textContent.trim())) {
        li.remove();
      }
    });

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
      setHasActive(true);              // flex 재정렬 트리거
      apiRef.current.moveToEl(el);     // 바 이동
    };
    const onLeave = (el) => () => {
      // hover 해제해도 최근 선택 유지하고 싶으면 아래 줄 주석 처리
      el.classList.remove("is-active");
      setActiveEl(null);
      setHasActive(false);             // flex 원상 복귀
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
      {/* 커서 */}
      <div
        id="cursor"
        className="w-10 h-10 rounded-full bg-yellow-300/50 transform transition-transform duration-500 ease-out hover:scale-125"
      />

      {/* 사이드바 */}
      <div
        ref={wrapRef}
        className={`
          fixed left-0 top-[10%] w-[20%] h-[80%]
          bg-blue-400 rounded-2xl
          flex justify-center items-start pt-6
          overflow-hidden font-extrabold
          /* 리스트: 컬럼 정렬 + 간격. 활성 있을 땐 justify-between 로 재배치 */
          ${hasActive ? "[&_ul]:justify-between" : "[&_ul]:justify-start"}
          [&_ul]:list-none [&_ul]:flex [&_ul]:flex-col [&_ul]:gap-6 [&_ul]:w-full [&_ul]:p-0 m-0
          [&_li]:px-4 [&_li]:py-4 [&_li]:rounded-lg [&_li]:relative
        `}
      >
        {/* 전달받은 메뉴 DOM (로그인은 useEffect에서 실제로 제거됨) */}
        <div className="w-full">
          {subHeader}
        </div>

        {/* 하이라이트 바: 130% 폭, 부드러운 색/그림자/블러 트랜지션 */}
        <div
          ref={barRef}
          className={`
            absolute top-0 z-[1]
            w-[130%] min-h-[52px]
            ${activeEl ? "bg-orange-400" : "bg-white"}
            rounded-2xl shadow-2xl
            pointer-events-none
            transform-gpu will-change-transform
            transition-[background-color,box-shadow,filter] duration-300 ease-out
            /* 시각적 부드러움 */
            backdrop-blur-[2px]
          `}
          style={{ left: "-15%" }}
          aria-hidden="true"
        />

        {/* 텍스트는 항상 바 위에 보이게 + 활성 시 검정으로 변경 */}
        <style>{`
          li { position: relative; z-index: 2; color: #1f2937; transition: color .25s ease; }
          li.is-active { color: #000000 !important; }
        `}</style>
      </div>
    </div>
  );
}
