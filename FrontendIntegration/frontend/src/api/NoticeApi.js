import axios from "axios";
import { API_SERVER_HOST, typeEnum } from "./commonApi";
import { Await } from "react-router-dom";

const Notice= async () => {
  console.log("notice가 가동되었다.");
  const res = await axios.get(`${API_SERVER_HOST}/api/notice/all`);
  return res.data;
};

const readAll= async () => {
  console.log("notice가 가동되었다.");
  const res = await axios.get(`${API_SERVER_HOST}/api/notice/all`);
  return res.data;
};

// 세팅
const config = {
  tableInfo: {
    tableEng: "Notice",
    tableName: "공지사항",
  },
  columns: {
    notice_id: "공지사항아이디",
    title: "제목",
    content: "내용",
    created_at: "작성일자",
    userDTO: "유저",
  },
  excludeList: ["userDTO"],
  funcs: { Notice, readAll },
  formData: {},
  type: typeEnum.default
};

export default { config, Notice };