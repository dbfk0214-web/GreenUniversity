import axios from "axios";
import { API_SERVER_HOST, typeEnum } from "./commonApi";
import { Await } from "react-router-dom";

const TimeTable = async () => {
  console.log("TimeTable가 가동되었다.");
  const res = await axios.get(`${API_SERVER_HOST}/api/time/all`);
  return res.data;
};

const readAll = async () => {
  console.log("TimeTable가 가동되었다.");
  const res = await axios.get(`${API_SERVER_HOST}/api/time/all`);
  return res.data;
};

// 세팅
const config = {
  tableInfo: {
    tableEng: "TimeTable",
    tableName: "시간표",
  },
  columns: {
    timetableId: "시간표아이디",
    dayOfWeek: "요일",
    startTime: "수업시작시간",
    endTime: "수업종료시간",
    location: "위치",
    courseOffering: "실제수업",
  },
  excludeList: ["courseOffering"],
  funcs: { TimeTable, readAll },
  formData: {},
  type: typeEnum.default
};

export default { config, TimeTable };