import axios from "axios";
import { API_SERVER_HOST, typeEnum } from "./commonApi";
import { Await } from "react-router-dom";

// 나중에 메서드 이름 혹은 역할을 변경 , 미사용 시, 삭제할 것
const Review = async () => {
  console.log("review가 가동되었다.");
  const res = await axios.get(`${API_SERVER_HOST}/api/review/all`);
  return res.data;
};

const findByKeyword = async () => {
  console.log("Review findByKeyword");
}

const readAll = async () => {
  console.log("review readAll");
  const res = await axios.get(`${API_SERVER_HOST}/api/review/all`);
  return res.data;
};

const readOne = async () => {
  console.log("review readOne");
}

const writeOne = async () => {
  console.log("review writeOne");
}

const deleteOne = async () => {
  console.log("review deleteOne");
}

const updateOne = async () => {
  console.log("review updateOne");
}

// 세팅
const config = {
  tableInfo: {
    tableEng: "Review",
    tableName: "리뷰",
  },
  columns: {
    reviewId: "리뷰아이디",
    rating: "평가점수",
    comment: "댓글내영",
    createAt: "작성일자",
    enrollmentDTO: "수강내역",
  },
  excludeList: ["enrollmentDTO"],
  funcs: { Review, findByKeyword, readAll, readOne, writeOne, deleteOne, updateOne },
  formData: {},
  type: typeEnum.read,
  color: "bg-green-100",
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

export default { config, Review };