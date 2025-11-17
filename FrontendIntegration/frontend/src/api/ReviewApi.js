import axios from "axios";
import { API_SERVER_HOST, typeEnum } from "./commonApi";
import { Await } from "react-router-dom";

const Review = async () => {
  console.log("review가 가동되었다.");
  const res = await axios.get(`${API_SERVER_HOST}/api/review/all`);
  return res.data;
};

const readAll = async () => {
  console.log("review가 가동되었다.");
  const res = await axios.get(`${API_SERVER_HOST}/api/review/all`);
  return res.data;
};

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
  funcs: { Review, readAll },
  formData: {},
  type: typeEnum.default
};

export default { config, Review };