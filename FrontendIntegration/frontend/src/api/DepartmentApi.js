import axios from "axios";
import { API_SERVER_HOST, typeEnum } from "./commonApi";
import { Await } from "react-router-dom";

const findByKeyword = async () => {
  console.log("Department findByKeyword");
}

const readAll = async () => {
  console.log("Department readAll");
  const res = await axios.get(`${API_SERVER_HOST}/api/department/all`);
  return res.data;
};

const readOne = async () => {
  console.log("Department readOne");
}

const writeOne = async (dto) => {
  console.log("Department writeOne");
  const res = await axios.post(`${API_SERVER_HOST}/api/department/write`,dto);
  return res.data;
}

const deleteOne = async () => {
  console.log("Department deleteOne");
}

const updateOne = async () => {
  console.log("Department updateOne");
}

// 세팅
const config = {
  tableInfo: {
    tableEng: "Department",
    tableName: "학과",
  },
  columns: {
    departmentId: "학과아이디",
    deptName: "학과이름",
    courses: "코스목록"
  },
  excludeList: ["courses"],
  funcs: { findByKeyword, readAll, readOne, writeOne, deleteOne, updateOne },
  formData: {},
  type: typeEnum.read,
  color: "bg-yellow-100",
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