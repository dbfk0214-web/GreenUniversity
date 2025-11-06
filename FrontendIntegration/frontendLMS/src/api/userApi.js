import axios from "axios";
import { API_SERVER_HOST } from "./commonApi";
const host = `${API_SERVER_HOST}/api/user`;

export const doLogin = async (loginParam) => {
  console.log("login post를 받았다", loginParam);
  const header = { headers: { "Content-Type": "application/json" } };
  // const form = new FormData();
  const { email, password, nickname } = loginParam;
  // form.append("email", loginParam.email);
  // form.append("password", loginParam.pw);
  const res = await axios.post(`${host}/login`, { email, password }, header);
  return res.data;
};

export const doRegister = async (a) => {
  console.log("여기는 등록이야 : ");
  console.log(a);
  try {
    const res = await axios.post(`${host}/register`, a, {
      headers: { "Content-Type": "application/json" },
    });
    return res.data;
  } catch (err) {
    console.error("register error:", err);
    throw err;
  }
};
