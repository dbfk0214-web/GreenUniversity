import styles from "../App.css";
import React, { useEffect, useState } from "react";
import { useLocation } from "react-router-dom";
import { MouseCursor } from "../api/MousecursorHandler";
import Navbar from "./Navbar";
import Footer from "../layouts/Footer";

import { menus } from "../layouts/subheader/menuconfig";
import UserDashboard from "./subheader/UserDashboard";
import ProfessorHomeDashboard from "./subheader/ProfessorHomeDashboard";
import StudentHomeDashboard from "./subheader/StudentHomeDashboard";
import AdminHomeDashboard from "./subheader/AdminHomeDashboard";
import Header from "./Header";


// ✅ ROLE을 "문자열"로 돌려주는 더미 함수 (실제로는 API 사용)
const fetchUserRole = async () => {
  return new Promise((resolve) => {
    setTimeout(() => {
      const roleKey = "PROFESSOR"; // "ADMIN" | "PROFESSOR" | "STUDENT" | "USER"
      resolve(roleKey);
    }, 500);
  });
};

export default function Mainlayouts({ children }) {
  const [role, setRole] = useState(null);
  const [loading, setLoading] = useState(true);
  const location = useLocation();

  // ROLE → 대시보드 컴포넌트 매핑 (함수 컴포넌트로 저장)
  const DASHBOARD_BY_ROLE = {
    ADMIN: AdminHomeDashboard,
    PROFESSOR: ProfessorHomeDashboard,
    STUDENT: StudentHomeDashboard,
    USER: UserDashboard,
  };

  // role이 없거나 매핑되지 않으면 기본값은 Student 대시보드
  const DashboardComponent = DASHBOARD_BY_ROLE[role] || StudentHomeDashboard;

  // ROLE에 맞는 메뉴 가져오기
  const menuList =
    menus[role] || (role ? menus[String(role).toLowerCase()] : []) || [];

  useEffect(() => {
    const loadUserRole = async () => {
      try {
        const userRole = await fetchUserRole();
        console.log("role:", userRole);
        setRole(userRole);
      } catch (error) {
        console.error("사용자 역할을 가져오는 중 오류 발생:", error);
        setRole("USER");
      } finally {
        setLoading(false);
      }
    };

    loadUserRole();

    // 마우스 커서 로직
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

  if (loading) {
    return (
      <div className="h-screen flex items-center justify-center text-2xl font-bold">
        <span class="loader"></span>
        로딩 중...
      </div>
    );
  }

  return (
    <div className="h-screen flex flex-col">
      {/* 상단 공통 헤더 */}
      <div className="h-20 shrink-0 bg-white">
        <Header />
      </div>
      {/* 메인 레이아웃 */}
      <div className="flex flex-1 overflow-y-auto bg-white text-black cursor-none">
        {/* 왼쪽: 역할별 메뉴 */}
        <Navbar subHeader={menuList} />

        {/* 오른쪽: 메인 컨텐츠 영역 */}
        <div className="flex-1 flex flex-col items-center justify-start bg-white">
          <div className="w-[80%] ml-[15%] rounded-xl border border-gray-200 bg-white my-4 h-[100%]">
            <div className="p-4">
              {/* ✅ 오로지 localhost:3000/ 일 때만 대시보드 렌더 */}
              {location.pathname === "/" && <DashboardComponent />}

              {/* ✅ 다른 페이지 컴포넌트(children)는 항상 여기서 렌더 */}
              {children}
            </div>
          </div>
        </div>
      </div>

      {/* 푸터 */}
      <div className="h-10">
        <Footer />
      </div>
    </div>
  );
}
