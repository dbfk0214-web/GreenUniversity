import axios from "axios";
import { API_SERVER_HOST, typeEnum } from "./commonApi";
import { Await } from "react-router-dom";
import { useState } from "react";

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
  tableInfo: {
    tableEng: "Attendance",
    tableName: "출석",
  },
  columns: {
    attendance: "이름",
    localDateTime: "출석일",
    status: "상태",
  },
  funcs: { Attendance, readAll },
  formData: {},
  type: typeEnum.default
};


export default { config };
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


// 더미 데이터
/* const [dummyData, setDummyData] = useState([
  {
    name: "홍길동",
    date: "2025-11-12",
    status: "출석",
    memo: "지각 없음",
  },
  {
    name: "김철수",
    date: "2025-11-12",
    status: "결석",
    memo: "사유서 제출 예정",
  },
  {
    name: "이영희",
    date: "2025-11-12",
    status: "지각",
    memo: "10분 늦음",
  },
]); */