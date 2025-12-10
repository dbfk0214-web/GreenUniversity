import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom";

export default function Navbar({ subHeader }) {
  // subHeader가 undefined/null이어도 안전하게
  const sections = Array.isArray(subHeader) ? subHeader : [];

  // index 기반 열림 상태
  const [openSections, setOpenSections] = useState({});
  const [openChildren, setOpenChildren] = useState({});

  // 🔹 사이드바 열림/닫힘 상태
  const [isOpen, setIsOpen] = useState(true);

  // 🔹 화면 크기에 따라 자동으로 열림/닫힘 상태 세팅
  //    - lg 이상: 기본 열림
  //    - lg 미만: 기본 닫힘 (버튼만 보이게)
  useEffect(() => {
    const handleResize = () => {
      if (typeof window === "undefined") return;

      if (window.innerWidth < 1024) {
        // lg 아래: 닫힌 상태
        setIsOpen(false);
      } else {
        // lg 이상: 열린 상태
        setIsOpen(true);
      }
    };

    handleResize(); // 처음 진입 시 한 번 실행
    window.addEventListener("resize", handleResize);

    return () => window.removeEventListener("resize", handleResize);
  }, []);

  const toggleSection = (index) => {
    setOpenSections((prev) => ({
      ...prev,
      [index]: !prev[index],
    }));
  };

  const toggleChild = (index) => {
    setOpenChildren((prev) => ({
      ...prev,
      [index]: !prev[index],
    }));
  };

  const handleLinkClick = () => {
    // 모바일에서 메뉴 클릭하면 닫고 싶으면 주석 해제
    // if (window.innerWidth < 1024) setIsOpen(false);
  };

  /** 공통 네비 내용 */
  const renderNavContent = () => (
    <nav className="px-4 py-4 space-y-4">
      {sections.map((section, sectionIndex) => {
        const children = Array.isArray(section.children)
          ? section.children
          : [];
        const hasChildren = children.length > 0;

        const isSectionOpen = !!openSections[sectionIndex];

        return (
          <div key={section.label} className="space-y-1">
            {/* 대분류 */}
            <div className="w-full flex items-center gap-1">
              <Link
                to={section.to || "#"}
                onClick={handleLinkClick}
                className="
                  flex-1
                  text-[0.85rem] font-semibold
                  px-3 py-2
                  rounded-xl
                  bg-gradient-to-r from-sky-50 to-sky-100
                  text-sky-800
                  hover:from-orange-50 hover:to-orange-100
                  hover:text-orange-600
                  transition-colors duration-200
                  text-center
                  truncate
                "
              >
                {section.label}
              </Link>

              {hasChildren && (
                <button
                  type="button"
                  onClick={() => toggleSection(sectionIndex)}
                  className="
                    flex-shrink-0
                    text-[11px]
                    px-2 py-1
                    rounded-full
                    text-sky-500
                    bg-white/80
                    border border-sky-100
                    hover:bg-orange-50 hover:text-orange-500
                    transition-colors duration-200
                  "
                >
                  {isSectionOpen ? "▾" : "▸"}
                </button>
              )}
            </div>

            {/* 중분류 */}
            {hasChildren && isSectionOpen && (
              <ul className="pl-2 mt-1 space-y-1">
                {children.map((child, childIndex) => {
                  const grandChildren = Array.isArray(child.children)
                    ? child.children
                    : [];
                  const hasGrand = grandChildren.length > 0;

                  const key = `${sectionIndex}-${childIndex}`;
                  const isChildOpen = !!openChildren[key];

                  return (
                    <li key={child.label} className="space-y-1">
                      <div className="flex items-center justify-between">
                        <Link
                          to={child.to || "#"}
                          onClick={handleLinkClick}
                          className="
                            flex-1
                            text-[0.8rem]
                            text-sky-700
                            px-3 py-1.5
                            rounded-lg
                            hover:bg-orange-50 hover:text-orange-600
                            transition-colors duration-200
                            flex items-center gap-2
                          "
                        >
                          <span className="w-1.5 h-1.5 rounded-full bg-sky-400" />
                          <span className="truncate">{child.label}</span>
                        </Link>

                        {hasGrand && (
                          <button
                            type="button"
                            onClick={() => toggleChild(key)}
                            className="
                              ml-1
                              text-[10px]
                              px-1.5 py-0.5
                              rounded-full
                              text-sky-500
                              hover:bg-orange-50 hover:text-orange-500
                              transition-colors duration-200
                            "
                          >
                            {isChildOpen ? "▾" : "▸"}
                          </button>
                        )}
                      </div>

                      {/* 소분류 */}
                      {hasGrand && isChildOpen && (
                        <ul className="ml-4 border-l border-gray-200 pl-3 space-y-0.5">
                          {grandChildren.map((gChild) => (
                            <li key={gChild.label}>
                              <Link
                                to={gChild.to || "#"}
                                onClick={handleLinkClick}
                                className="
                                  block
                                  text-[0.75rem]
                                  text-sky-600
                                  px-2 py-1
                                  rounded-lg
                                  hover:bg-orange-50 hover:text-orange-600
                                  transition-colors duration-200
                                "
                              >
                                {gChild.label}
                              </Link>
                            </li>
                          ))}
                        </ul>
                      )}
                    </li>
                  );
                })}
              </ul>
            )}
          </div>
        );
      })}
    </nav>
  );

  return (
    <>
      {/* 🔹 항상 화면에 고정된 X 버튼 (햄버거 역할 + 회전 애니메이션) */}
<button
  type="button"
  onClick={() => setIsOpen((prev) => !prev)}
  className="
    fixed
    left-4
    top-1/2
    -translate-y-1/2
    z-50
    flex
    h-10 w-10
    items-center justify-center
    rounded-2xl
    bg-white/90
    backdrop-blur
    shadow-[0_10px_25px_rgba(15,23,42,0.15)]
    border border-sky-100
  "
>
  <span className="sr-only">Toggle navigation</span>

  <div
    className={`
      relative
      w-4 h-4
      transition-transform duration-300
      ${isOpen ? "rotate-0" : "rotate-90"}
    `}
  >
    <span
      className="
        absolute left-0 top-1/2
        -translate-y-1/2
        block h-[2px] w-full
        rounded-full bg-slate-700
        rotate-45
      "
    />
    <span
      className="
        absolute left-0 top-1/2
        -translate-y-1/2
        block h-[2px] w-full
        rounded-full bg-slate-700
        -rotate-45
      "
    />
  </div>
</button>

      {/* 🔹 좌측 사이드 Navbar (X 버튼 안쪽으로 들어갔다 나오는 느낌) */}
      <aside
        className={`
          fixed
          left-6
          top-1/2
          -translate-y-1/2
          z-40
          pointer-events-auto
          transition-transform duration-300
          ${isOpen ? "translate-x-0" : "-translate-x-[120%]"}
        `}
      >
        <div
          className="
            w-64
            max-h-[80vh]
            bg-white/95
            backdrop-blur
            rounded-2xl
            shadow-[0_18px_45px_rgba(15,23,42,0.20)]
            border border-sky-100
            overflow-y-auto
          "
        >
          {renderNavContent()}
        </div>
      </aside>
    </>
  );
}
