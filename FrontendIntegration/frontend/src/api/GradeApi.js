import axios from "axios";
import { API_SERVER_HOST, typeEnum } from "./commonApi";
import { Await } from "react-router-dom";

// 나중에 메서드 이름 혹은 역할을 변경 , 미사용 시, 삭제할 것
const Grade = async () => {
  console.log("grade가 가동되었다.");
  const res = await axios.get(`${API_SERVER_HOST}/api/grade/all`);
  return res.data;
};

const readAll = async () => {
  console.log("grade readAll");
  const res = await axios.get(`${API_SERVER_HOST}/api/grade/all`);
  return res.data;
};

const readOne = async () => {
  console.log("grade readOne");
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
  excludeList: ["enrollment","courseName"],
  funcs: { Grade, readAll, readOne ,writeOne, deleteOne, updateOne },
  formData: {},
  type: typeEnum.read
};

export default { config, Grade };