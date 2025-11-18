import axios from "axios";
import { API_SERVER_HOST, typeEnum } from "./commonApi";
import { Await } from "react-router-dom";

// 나중에 메서드 이름 혹은 역할을 변경 , 미사용 시, 삭제할 것
const Comment = async () => {
  console.log("comment가 가동되었다.");
  const res = await axios.get(`${API_SERVER_HOST}/community/comment/read/{cid}`);
  return res.data;
};

const readAll = async () => {
  console.log("comment readAll");
  const res = await axios.get(`${API_SERVER_HOST}/api/comment/all`);
  return res.data;
};

const readOne = async () => {
  console.log("comment가 readOne");
}

const writeOne = async () => {
  console.log("comment가 writeOne");
}

const deleteOne = async () => {
  console.log("comment가 deleteOne");
}

const updateOne = async () => {
  console.log("comment가 updateOne");
}

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
  funcs: { Comment, readAll, readOne ,writeOne, deleteOne, updateOne },
  formData: {},
  type: typeEnum.read
};


export default { config, Comment };