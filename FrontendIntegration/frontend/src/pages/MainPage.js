import React from "react";
import { getCookie, removeCookie } from "../util/cookieUtil";
import { useSelector } from "react-redux";

const MainPage = () => {
  const user = useSelector((s) => s.loginSlice);
  console.log("user정보:", user);
  return <div>메인페이지입니다</div>;
};

export default MainPage;
