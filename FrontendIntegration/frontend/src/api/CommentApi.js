import axios from "axios";
import { API_SERVER_HOST, typeEnum } from "./commonApi";
import { Await } from "react-router-dom";

const Comment = async () => {
  console.log("comment가 가동되었다.");
  const res = await axios.get(`${API_SERVER_HOST}/community/comment/read/{cid}`);
  return res.data;
};

const readAll = async () => {
  console.log("comment가 가동되었다.");
  const res = await axios.get(`${API_SERVER_HOST}/community/commentlist`);
  return res.data;
};

// 세팅
const config = {
  tableInfo: {
    tableEng: "Comment",
    tableName: "댓글",
  },
  columns: {
    commentId: "댓글아이디",
    content: "댓글내용",
    createdAt: "일자",
    user: "유저",
    posts: "게시판글",
  },
  excludeList: ["user","posts"],
  funcs: { Comment, readAll },
  formData: {},
  type: typeEnum.default
};


export default { config, Comment };