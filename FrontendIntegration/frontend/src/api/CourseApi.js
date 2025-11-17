import axios from "axios";
import { API_SERVER_HOST, typeEnum } from "./commonApi";
import { Await } from "react-router-dom";

const Course = async () => {
  console.log("Course가 가동되었다.");
  const res = await axios.get(`${API_SERVER_HOST}/api/course/all`);
  return res.data;
};

const readAll = async () => {
  console.log("Course가 가동되었다.");
  const res = await axios.get(`${API_SERVER_HOST}/api/course/all`);
  return res.data;
};

// 세팅
const config = {
  tableInfo: {
    tableEng: "Course",
    tableName: "강의종류",
  },
  columns: {
    courseId: "강의과목코드",
    courseName: "과목명",
    description: "강의설명",
    credits: "학점",
    department: "학과",
    offerings: "하위강의들",
  },
  excludeList: ["department", "offerings"],
  funcs: { Course, readAll },
  formData: {},
  type: typeEnum.default
};


export default { config, Course };