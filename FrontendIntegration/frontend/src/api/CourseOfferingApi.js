import axios from "axios";
import { API_SERVER_HOST, typeEnum } from "./commonApi";
import { Await } from "react-router-dom";

// 나중에 메서드 이름 혹은 역할을 변경 , 미사용 시, 삭제할 것
const CourseOffering = async () => {
  console.log("courseOffering이 가동되었다.");
  const res = await axios.get(`${API_SERVER_HOST}/api/courseoffering/all`);
  return res.data;
};

const readAll = async () => {
  console.log("courseOffering readAll");
  const res = await axios.get(`${API_SERVER_HOST}/api/courseoffering/all`);
  return res.data;
};

const readOne = async () => {
  console.log("courseOffering readOne");
}

const writeOne = async () => {
  console.log("courseOffering writeOne");
}

const deleteOne = async () => {
  console.log("courseOffering deleteOne");
}

const updateOne = async () => {
  console.log("courseOffering updateOne");
}

// 세팅
const config = {
  tableInfo: {
    tableEng: "CourseOffering",
    tableName: "개설강의",
  },
  columns: {
    offeringId: "개설강의코드",
    professorName: "교수이림",
    courseName: "강의이름",
    year: "년도",
    semester: "학기",
    course: "강의정보",
    user: "유저",
    enrollments: "수강내역들",
    timeTables: "시간표들",
  },
  excludeList: ["course", "user", "enrollments", "timeTables"],
  funcs: { CourseOffering, readAll, readOne, writeOne, deleteOne, updateOne },
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

export default { config, CourseOffering };