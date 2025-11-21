import axios from "axios";
import { API_SERVER_HOST, typeEnum } from "./commonApi";
import { Await } from "react-router-dom";

// 나중에 메서드 이름 혹은 역할을 변경 , 미사용 시, 삭제할 것
const TimeTable = async () => {
  console.log("TimeTable가 가동되었다.");
  const res = await axios.get(`${API_SERVER_HOST}/api/time/all`);
  return res.data;
};

const findByKeyword = async () => {
  console.log("TimeTable findByKeyword");
}

const readAll = async () => {
  console.log("TimeTable readAll");
  const res = await axios.get(`${API_SERVER_HOST}/api/time/all`);
  return res.data;
};

const readOne = async () => {
  console.log("TimeTable readOne");
}

const writeOne = async () => {
  console.log("TimeTable writeOne");
}

const deleteOne = async () => {
  console.log("TimeTable deleteOne");
}

const updateOne = async () => {
  console.log("TimeTable updateOne");
}

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
  funcs: { TimeTable, findByKeyword, readAll, readOne, writeOne, deleteOne, updateOne },
  formData: {},
  type: typeEnum.read,
  color: "bg-emerald-100",
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

export default { config, TimeTable };