import React, { useEffect, useRef, useState } from "react";
import { NavLink } from "react-router-dom";

export default function SidebarNav({ menu = defaultMenu }) {
  const wrapRef = useRef(null);
  const barRef = useRef(null);
  const itemRefs = useRef([]);
  const [activeIndex, setActiveIndex] = useState(0);    
  const [hoverIndex, setHoverIndex] = useState(null);   

  const current = useRef({ y: 0 });
  const target = useRef({ y: 0 });
  const rafId = useRef(0);

  // 현재 index(hover 우선, 없으면 active)의 top 계산
  const getTargetTop = (idx) => {
    const wrap = wrapRef.current;
    const el = itemRefs.current[idx];
    if (!wrap || !el) return 0;
    const pr = wrap.getBoundingClientRect();
    const cr = el.getBoundingClientRect();
    return cr.top - pr.top; // 부모 기준 top
  };

  const animate = () => {
    const lerp = 0.12;
    current.current.y += (target.current.y - current.current.y) * lerp;
    if (barRef.current) {
      barRef.current.style.transform = `translate3d(-10%, ${current.current.y}px, 0)`; // 좌우 약간 오버
    }
    if (Math.abs(target.current.y - current.current.y) > 0.5) {
      rafId.current = requestAnimationFrame(animate);
    }
  };

  const moveToIndex = (idx) => {
    target.current.y = getTargetTop(idx);
    cancelAnimationFrame(rafId.current);
    rafId.current = requestAnimationFrame(animate);
  };

  // 최초 위치는 activeIndex로
  useEffect(() => {
    // 첫 렌더 후 refs 채워지고 나서 위치 잡기
    const id = setTimeout(() => moveToIndex(activeIndex), 0);
    return () => clearTimeout(id);
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  // hover 변경 시 바 이동 & 색상 전환
  useEffect(() => {
    const idx = hoverIndex ?? activeIndex;
    moveToIndex(idx);
    if (barRef.current) {
      // hover 중이면 주황색, 아니면 흰색
      barRef.current.classList.toggle("bg-orange-400", hoverIndex !== null);
    }
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [hoverIndex, activeIndex]);

  // itemRefs 크기 맞추기
  itemRefs.current = [];
  const setItemRef = (el) => {
    if (el && !itemRefs.current.includes(el)) itemRefs.current.push(el);
  };

  return (
    <aside
      ref={wrapRef}
      className="
        relative w-[20%] rounded-2xl bg-blue-400
        px-4 pt-6 pb-8
        shadow-xl
        transition-all duration-500 ease-in-out
      "
    >
      {/* 움직이는 하이라이트 바 (부모 영역 안에서만 이동) */}
      <div
        ref={barRef}
        className="
          absolute left-0 top-0
          w-[130%] h-[56px] rounded-2xl
          shadow-2xl pointer-events-none
          transform-gpu will-change-transform
          bg-white
          transition-colors duration-300
        "
        aria-hidden
      />

      <nav>
        <ul className="list-none space-y-4 font-extrabold text-[18px]">
          {menu.map((m, idx) => {
            const isActive = activeIndex === idx;
            const isHover = hoverIndex === idx;
            const activeOrHover = isActive || isHover;

            return (
              <li
                key={m.key ?? m.title}
                ref={setItemRef}
                className="relative group"
                onMouseEnter={() => setHoverIndex(idx)}
                onMouseLeave={() => setHoverIndex(null)}
                onClick={() => setActiveIndex(idx)} // 클릭 시 고정
              >
                {/* 대분류 링크 (NavLink 사용 시 라우트와 동기화) */}
                <NavLink
                  to={m.to ?? "#"}
                  className={`
                    block rounded-xl px-4 py-3 transition-all duration-300
                    ${activeOrHover ? "text-white" : "text-black"}
                  `}
                >
                  {m.title}
                </NavLink>

                {/* 하위 메뉴: 대분류 hover 또는 active 때 부드럽게 펼침 */}
                {m.children?.length > 0 && (
                  <ul
                    className={`
                      ml-4 list-none text-[15px] font-semibold
                      overflow-hidden transition-all duration-500 ease-out
                      ${activeOrHover ? "max-h-[600px] opacity-100 mt-2" : "max-h-0 opacity-0 mt-0"}
                    `}
                  >
                    {m.children.map((c) => (
                      <li key={c.key ?? c.title} className="group/child">
                        <NavLink
                          to={c.to ?? "#"}
                          className="
                            block rounded-lg px-3 py-2
                            transition-colors duration-200
                            hover:bg-white/50 hover:text-black
                          "
                        >
                          {c.title}
                        </NavLink>
                        {/* 3뎁스 예시가 필요하면 여기에 또 ul 넣고 같은 패턴 복붙 */}
                      </li>
                    ))}
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
