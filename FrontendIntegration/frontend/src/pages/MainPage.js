import React, { useEffect } from "react";
import { getCookie, removeCookie } from "../util/cookieUtil";
import { useSelector } from "react-redux";
import LogoLayout from "../layouts/LogoLayout";

const MainPage = () => {
  const user = useSelector((s) => s.loginSlice);
  console.log("user정보:", user);
  //   useEffect(() => {
  //   if(user.role === "GUEST") console.log("게스트입니다.")
  //     else console.log("게스트가 아닙니다.")
  // }, [user])
  return (
  <div>
    <div>
      <LogoLayout/>
    </div>
    메인페이지입니다
  </div>
)};

export default MainPage;
