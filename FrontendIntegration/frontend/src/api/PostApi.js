import axios from "axios";
import { API_SERVER_HOST, typeEnum } from "./commonApi";
import { Await } from "react-router-dom";

const Post = async () => {
  console.log("Post가 가동되었다.");
  const res = await axios.get(`${API_SERVER_HOST}/api/post/all`);
  return res.data;
};

const readAll = async () => {
  console.log("Post가 가동되었다.");
  const res = await axios.get(`${API_SERVER_HOST}/api/post/all`);
  return res.data;
};

// 세팅
const config = {
  tableInfo: {
    tableEng: "Post",
    tableName: "게시글",
  },
  columns: {
    postId: "게시글아이디",
    title: "제목",
    content: "내용",
    created_at: "작성일자",
    userDTO: "유저",
  },
  excludeList: ["userDTO"],
  funcs: { Post, readAll },
  formData: {},
  type: typeEnum.default
};

export default { config, Post };