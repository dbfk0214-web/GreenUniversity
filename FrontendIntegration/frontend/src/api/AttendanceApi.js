import axios from "axios";
import { API_SERVER_HOST, typeEnum } from "./commonApi";
import { Await } from "react-router-dom";
import { useState } from "react";

// 나중에 메서드 이름 혹은 역할을 변경 , 미사용 시, 삭제할 것
const Attendance = async () => {
  console.log("attendance가 가동되었다.");
  const res = await axios.get(`${API_SERVER_HOST}/api/attendance/student/checkclass`);
  return res.data;
};

const readAll = async () => {
  console.log("attendance readAll");
  const res = await axios.get(`${API_SERVER_HOST}/api/attendance/all`);
  return res.data;
};

const readOne = async () => {
  console.log("attendance readOne");
  return {};
}

const writeOne = async () => {
  console.log("attendance writeOne");
}

const deleteOne = async () => {
  console.log("attendance deleteOne");
}

const updateOne = async () => {
  console.log("attendance updateOne");
}

const config = {
  tableInfo: {
    tableEng: "Attendance",
    tableName: "출석",
  },
  columns: {
    attendanceId: "이름",
    localDateTime: "출석일",
    status: "상태",
  },
  excludeList: [],
  funcs: { Attendance, readAll, readOne, writeOne, deleteOne, updateOne },
  formData: {},
  type: typeEnum.read,
  buttonDataList: [
    {
      label: "모두읽기",
      action: readAll,
      enumType: typeEnum.read,
      style: "bg-red-300 hover:bg-red-700",
    },
    {
      label: "데이터추가",
      action: null,
      enumType: typeEnum.write,
      style: "bg-green-500 hover:bg-green-600",
    },
    {
      label: "검색",
      action: null,
      enumType: typeEnum.search,
      style: "bg-blue-500 hover:bg-blue-600",
    },
  ],
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