import React from "react";
import { getCookie, removeCookie } from "../util/cookieUtil";
import { useSelector } from "react-redux";
import LogoLayout from "../layouts/LogoLayout";

const MainPage = () => {
  const user = useSelector((s) => s.loginSlice);
  console.log("user정보:", user);
  return (
  <div>
    <div>
      <LogoLayout/>
    </div>
    메인페이지입니다
  </div>
)};

export default MainPage;
