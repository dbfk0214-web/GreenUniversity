import styles from "../App.css";
import React, { useEffect } from "react";
import { useLocation } from "react-router-dom";
import { MouseCursor } from "../api/MousecursorHandler";
import Navbar from "./Navbar";
import Footer from "../layouts/Footer";
import Header from "./Header";

import { menus } from "../layouts/subheader/menuconfig";

// 대시보드들
import UserDashboard from "./subheader/UserDashboard";
import ProfessorHomeDashboard from "./subheader/ProfessorHomeDashboard";
import StudentHomeDashboard from "./subheader/StudentHomeDashboard";
import AdminHomeDashboard from "./subheader/AdminHomeDashboard";

import { useSelector } from "react-redux";

export default function Mainlayouts({ children }) {
  const location = useLocation();

  const user = useSelector((state) => state.loginSlice);
  const role = user?.role || "USER";

  console.log("현재 사용자 ROLE:", role);

  // ROLE → 대시보드 매핑
  const DASHBOARD_BY_ROLE = {
    ADMIN: AdminHomeDashboard,
    PROFESSOR: ProfessorHomeDashboard,
    STUDENT: StudentHomeDashboard,
    USER: UserDashboard,
  };

  // ROLE에 맞는 대시보드 선택
  const DashboardComponent = DASHBOARD_BY_ROLE[role] || UserDashboard;

  // ROLE에 맞는 메뉴 가져오기
  const menuList = menus[role] || [];

  return (
    <div className="h-screen flex flex-col">
      {/* 헤더 */}
      <div className="h-20 shrink-0 bg-white">
        <Header />
      </div>

      {role === "USER" && (
        <div>
          휴 편안~~~
        </div>
      )}
      {role !== "USER" && (
        <div>
          {/* 메인 레이아웃 */}
          <div className="flex flex-1 overflow-y-auto bg-white text-black cursor-none">
            {/* 왼쪽 메뉴바 (ROLE 기준) */}
            <Navbar subHeader={menuList} />

            {/* 오른쪽 컨텐츠 영역 */}
            <div className="flex-1 flex flex-col items-center justify-start bg-white">
              <div className="w-[80%] ml-[15%] rounded-xl border border-gray-200 bg-white my-4 h-[100%]">
                <div className="p-4">
                  {/* 홈("/")에서만 ROLE 대시보드 표시 */}
                  {location.pathname === "/" && <DashboardComponent />}

                  {/* 그 외 다른 페이지 */}
                  {children}
                </div>
              </div>
            </div>
          </div>
        </div>
      )}

      {/* 푸터 */}
      <div className="h-10">
        <Footer />
      </div>
    </div>
  );
}
