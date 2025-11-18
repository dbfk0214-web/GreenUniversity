import axios from "axios";
import { API_SERVER_HOST, typeEnum } from "./commonApi";
import { Await } from "react-router-dom";

// 나중에 메서드 이름 혹은 역할을 변경 , 미사용 시, 삭제할 것
const Notice = async () => {
  console.log("notice가 가동되었다.");
  const res = await axios.get(`${API_SERVER_HOST}/api/notice/all`);
  return res.data;
};

const readAll = async () => {
  console.log("notice readAll");
  const res = await axios.get(`${API_SERVER_HOST}/api/notice/all`);
  return res.data;
};

const readOne = async () => {
  console.log("notice readOne");
}

const writeOne = async () => {
  console.log("notice writeOne");
}

const deleteOne = async () => {
  console.log("notice deleteOne");
}

const updateOne = async () => {
  console.log("notice updateOne");
}

// 세팅
const config = {
  tableInfo: {
    tableEng: "Notice",
    tableName: "공지사항",
  },
  columns: {
    noticeId: "공지사항아이디",
    title: "제목",
    content: "내용",
    createdAt: "작성일자",
    userDTO: "유저",
  },
  excludeList: ["userDTO"],
  funcs: { Notice, readAll, readOne, writeOne, deleteOne, updateOne },
  formData: {},
  type: typeEnum.read,
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

export default { config, Notice };