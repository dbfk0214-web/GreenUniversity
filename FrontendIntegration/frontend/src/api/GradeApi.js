import axios from "axios";
import { API_SERVER_HOST, typeEnum } from "./commonApi";
import { Await } from "react-router-dom";

const Grade = async () => {
  console.log("grade가 가동되었다.");
  const res = await axios.get(`${API_SERVER_HOST}/api/grade/all`);
  return res.data;
};

const readAll = async () => {
  console.log("grade가 가동되었다.");
  const res = await axios.get(`${API_SERVER_HOST}/api/grade/all`);
  return res.data;
};

// 세팅
const config = {
  tableInfo: {
    tableEng: "Grade",
    tableName: "성적",
  },
  columns: {
    gradeId: "성적아이디",
    gradeValue: "성적값",
    courseName: "강의이름",
    enrollment: "수강내역",
  },
  excludeList: ["enrollment"],
  funcs: { Grade, readAll },
  formData: {},
  type: typeEnum.default
};

export default { config, Grade };