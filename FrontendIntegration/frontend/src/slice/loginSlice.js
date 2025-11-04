import { createSlice } from "@reduxjs/toolkit";
import { getCookie, removeCookie, setCookie } from "../util/cookieUtil";

const initialState = { email: "" };

const loadMemberCookie = () => {
  const raw = getCookie("user");
  if (!raw) return null;
  try {
    return JSON.parse(raw); // 문자열 → 객체
  } catch (e) {
    // 손상된 쿠키면 제거
    removeCookie("user");
    return null;
  }
};

const loginSlice = createSlice({
  name: "loginSlice",
  initialState: loadMemberCookie() || initialState,
  reducers: {
    login: (state, action) => {
      const p = action.payload;
      console.log("1)확인", p);
      const next = typeof p === "string" ? { email: p } : p || {};
      setCookie("user", JSON.stringify(next), 1); // 객체를 저장
      return { ...state, ...next };
    },
    logout: () => {
      removeCookie("user");
      return { ...initialState };
    },
  },
});

export const { login, logout } = loginSlice.actions;

export default loginSlice.reducer;
