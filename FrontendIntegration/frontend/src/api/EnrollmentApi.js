import axios from "axios";
import { API_SERVER_HOST, typeEnum } from "./commonApi";

const findByKeyword = async () => {
  console.log("Enrollment findByKeyword");
}

const readAll = async () => {
  console.log("Department readAll");
  const res = await axios.get(`${API_SERVER_HOST}/api/enrollment/all`);
  return res.data;
};

const readOne = async () => {
  console.log("Enrollment readOne");
}

const writeOne = async (dto) => {
  console.log("Enrollment writeOne");
}

const deleteOne = async () => {
  console.log("Enrollment deleteOne");
}

const updateOne = async () => {
  console.log("Enrollment updateOne");
}

// 세팅
const config = {
  tableInfo: {
    tableEng: "Enrollment",
    tableName: "수강신청내역",
  },
  columns: {
    enrollmentId: "수강 내역 아이디",
    enrollDate: "강의 개설 날짜",
    courseOffering: "강의 정보",
    user: "유저",
    grades: "성적들",
    attendances: "출석들",
    reviews: "리뷰들",
  },
  excludeList: ["courseOffering","user","grades","attendances","reviews"],
  funcs: { findByKeyword, readAll, readOne, writeOne, deleteOne, updateOne },
  formData: {},
  type: typeEnum.read,
  color: "bg-grey-600",
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