import React from "react";
import { useDispatch } from "react-redux";
import { useNavigate } from "react-router-dom";
import { logout } from "../slice/loginSlice";

export const useNavigationTest = () => {
  const navigate = useNavigate();
  const dispatch = useDispatch();

  const Home = () => {
    navigate("/");
    console.log("확인", Home);
  };
  const handleLogout = (e) => {
    e.preventDefault();
    dispatch(logout());
    alert("로그아웃 되었습니다.");
    navigate("/");
  };

  return { Home, handleLogout };
};
