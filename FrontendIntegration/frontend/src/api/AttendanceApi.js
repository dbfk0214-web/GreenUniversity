import axios from "axios";
import { API_SERVER_HOST, typeEnum } from "./commonApi";
import { Await } from "react-router-dom";
import { useState } from "react";

// excludeKeys정의
const excludeKeys = ["memo"];

const Attendance = async () => {
  console.log("attendance가 가동되었다.");
  const res = await axios.get(`${API_SERVER_HOST}/api/attendance/student/checkclass`);
  return res.data;
};

const readAll = async () => {
  console.log("attendance가 가동되었다.");
  const res = await axios.get(`${API_SERVER_HOST}/api/attendance/all`);
  return res.data;
};

const config = {
  columns: {
    attendance: "이름",
    localDateTime: "출석일",
    status: "상태",
  },
  func:{Attendance,readAll},
  excludeKeys: excludeKeys,
  formData: {},
  type:typeEnum.default
};


export default {config};
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