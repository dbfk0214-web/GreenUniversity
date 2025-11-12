import axios from "axios";
import { API_SERVER_HOST } from "./commonApi";
import { Await } from "react-router-dom";

export const attendance = async () => {
  console.log("attendance가 가동되었다.");
  const res = await axios.get(`${API_SERVER_HOST}/api/attendance/all`);
  return res.data;
};
// 출석 확인

// export const attendanceHandler = async () => {
//   const attendanceData = {
//     userId: Number(userId), //input에서 받은 값
//     date,                              
//     status: "PRESENT",               
//     memo
//   };
//   const res = await axios.post(`${API_SERVER_HOST}/api/attendance`, attendanceData);
//   console.log(res.data);
// };
//출석 입력