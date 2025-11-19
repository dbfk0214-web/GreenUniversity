import axios from "axios";
import { API_SERVER_HOST, typeEnum } from "./commonApi";
import { Await } from "react-router-dom";

// 나중에 메서드 이름 혹은 역할을 변경 , 미사용 시, 삭제할 것
const Course = async () => {
  console.log("Course가 가동되었다.");
  const res = await axios.get(`${API_SERVER_HOST}/api/course/all`);
  return res.data;
};

const findByKeyword = async () => {
  console.log("Course findByKeyword");
}

const readAll = async () => {
  console.log("Course readAll");
  const res = await axios.get(`${API_SERVER_HOST}/api/course/all`);
  return res.data;
};

const readOne = async () => {
  console.log("Course readOne");
}

const writeOne = async () => {
  console.log("Course writeOne");
}

const deleteOne = async () => {
  console.log("Course deleteOne");
}

const updateOne = async () => {
  console.log("Course updateOne");
}


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
  funcs: { Course, findByKeyword, readAll, readOne, writeOne, deleteOne, updateOne },
  formData: {},
  type: typeEnum.read,
  color: "bg-neutral-200",
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


export default { config, Course };