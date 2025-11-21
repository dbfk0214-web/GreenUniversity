import axios from "axios";
import { API_SERVER_HOST, typeEnum } from "./commonApi";
import { Await } from "react-router-dom";

// 나중에 메서드 이름 혹은 역할을 변경 , 미사용 시, 삭제할 것
const Comment = async () => {
  console.log("comment가 가동되었다.");
  const res = await axios.get(`${API_SERVER_HOST}/community/comment/read/{cid}`);
  return res.data;
};

const findByKeyword = async () => {
  console.log("Comment findByKeyword");
}

const readAll = async () => {
  console.log("comment readAll");
  const res = await axios.get(`${API_SERVER_HOST}/api/comment/commentlist`);
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
  excludeList: ["user", "posts"],
  funcs: { Comment, findByKeyword, readAll, readOne, writeOne, deleteOne, updateOne },
  formData: {},
  type: typeEnum.read,
  color: "bg-stone-100",
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


export default { config, Comment };