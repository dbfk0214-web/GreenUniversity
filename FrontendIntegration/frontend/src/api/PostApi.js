import axios from "axios";
import { API_SERVER_HOST, typeEnum } from "./commonApi";
import { Await } from "react-router-dom";

// 나중에 메서드 이름 혹은 역할을 변경 , 미사용 시, 삭제할 것
const Post = async () => {
  console.log("Post가 가동되었다.");
  const res = await axios.get(`${API_SERVER_HOST}/api/post/all`);
  return res.data;
};

const findByKeyword = async () => {
  console.log("Post findByKeyword");
}

const readAll = async () => {
  console.log("Post readAll");
  const res = await axios.get(`${API_SERVER_HOST}/api/post/all`);
  return res.data;
};

const readOne = async () => {
  console.log("Post readOne");
}

const writeOne = async () => {
  console.log("Post writeOne");
}

const deleteOne = async () => {
  console.log("Post deleteOne");
}

const updateOne = async () => {
  console.log("Post updateOne");
}

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
    createAt: "작성일자",
    userDTO: "유저",
  },
  excludeList: ["userDTO"],
  funcs: { Post, findByKeyword, readAll, readOne, writeOne, deleteOne, updateOne },
  formData: {},
  type: typeEnum.read,
  color: "bg-lime-100",
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

export default { config, Post };