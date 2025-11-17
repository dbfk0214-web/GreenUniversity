import axios from "axios";
import { API_SERVER_HOST, typeEnum } from "./commonApi";
import { Await } from "react-router-dom";

// 나중에 메서드 이름 혹은 역할을 변경 , 미사용 시, 삭제할 것
const Review = async () => {
  console.log("review가 가동되었다.");
  const res = await axios.get(`${API_SERVER_HOST}/api/review/all`);
  return res.data;
};

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
  funcs: { Review, readAll, readOne ,writeOne, deleteOne, updateOne },
  formData: {},
  type: typeEnum.read
};

export default { config, Review };