import axios from "axios";
import { API_SERVER_HOST, typeEnum } from "./commonApi";
import { Await } from "react-router-dom";

// 나중에 메서드 이름 혹은 역할을 변경 , 미사용 시, 삭제할 것
const Grade = async () => {
  console.log("grade가 가동되었다.");
  const res = await axios.get(`${API_SERVER_HOST}/api/grade/all`);
  return res.data;
};

const findByKeyword = async () => {
  console.log("Grade findByKeyword");
}

const readAll = async () => {
  console.log("grade readAll");
  const res = await axios.get(`${API_SERVER_HOST}/api/grade/all`);
  return res.data;
};

const readOne = async (gradeId) => {
  console.log("grade readOne");
  console.log(`${API_SERVER_HOST}/api/grade/course/${gradeId}`)
  const res = await axios.get(`${API_SERVER_HOST}/api/grade/course/${gradeId}`);
  return res.data;
}

const writeOne = async () => {
  console.log("grade writeOne");
}

const deleteOne = async () => {
  console.log("grade deleteOne");
}

const updateOne = async () => {
  console.log("grade updateOne");
}

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
  excludeList: ["enrollment", "courseName"],
  funcs: { Grade, findByKeyword, readAll, readOne, writeOne, deleteOne, updateOne },
  formData: {},
  type: typeEnum.read,
  color: "bg-amber-100",
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

export default { config, Grade };