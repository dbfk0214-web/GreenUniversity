import React, { useState } from "react";
import { Link } from "react-router-dom";

export default function Navbar({ subHeader }) {
  // subHeader가 undefined/null이어도 안전하게
  const sections = Array.isArray(subHeader) ? subHeader : [];

  // index 기반 열림 상태
  const [openSections, setOpenSections] = useState({});
  const [openChildren, setOpenChildren] = useState({});

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

  return (
    <aside
      className="
        fixed
        left-6
        top-1/2
        -translate-y-1/2
        z-30
        pointer-events-auto
      "
    >
      <div
        className="
          w-64
          max-h-[80vh]
          bg-white
          rounded-2xl
          shadow-xl
          border border-gray-200
          overflow-y-auto
        "
      >
        <nav className="px-4 py-4 space-y-4">
          {sections.map((section, sectionIndex) => {
            const children = Array.isArray(section.children)
              ? section.children
              : [];
            const hasChildren = children.length > 0;

            // ✅ 기본 닫힘 (false)
            const isOpen = !!openSections[sectionIndex];

            return (
              <div key={section.label} className="space-y-1">
                {/* 대분류: 링크 + 토글 버튼 분리 */}
                <div className="w-full flex items-center gap-1">
                  {/* 대분류 링크 */}
                  <Link
                    to={section.to || "#"}
                    className="
                      flex-1
                      text-[0.85rem] font-semibold
                      px-3 py-2
                      rounded-xl
                      bg-sky-50
                      text-sky-800
                      hover:bg-orange-100 hover:text-orange-600
                      transition-colors duration-150
                      truncate
                    "
                  >
                    {section.label}
                  </Link>

                  {/* 대분류 펼치기/접기 토글 */}
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
                        bg-slate-50
                        hover:bg-orange-100 hover:text-orange-600
                        border border-gray-200
                        transition-colors duration-150
                      "
                    >
                      {isOpen ? "▾" : "▸"}
                    </button>
                  )}
                </div>

                {/* 중분류 */}
                {hasChildren && isOpen && (
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
                              className="
                                flex-1
                                text-[0.8rem]
                                text-sky-700
                                px-3 py-1.5
                                rounded-lg
                                hover:bg-orange-100 hover:text-orange-600
                                transition-colors duration-150
                                flex items-center gap-2
                              "
                            >
                              <span className="w-1 h-1 rounded-full bg-sky-400" />
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
                                  hover:bg-orange-100 hover:text-orange-600
                                  transition-colors duration-150
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
                                    className="
                                      block
                                      text-[0.75rem]
                                      text-sky-600
                                      px-2 py-1
                                      rounded-lg
                                      hover:bg-orange-100 hover:text-orange-600
                                      transition-colors duration-150
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
      </div>
    </aside>
  );
}
