import axios from "axios";
import { API_SERVER_HOST, typeEnum } from "./commonApi";
import { Await } from "react-router-dom";

const Board = async () => {
  console.log("boarde가 가동되었다.");
  const res = await axios.get(`${API_SERVER_HOST}/community/Board/all`);
  return res.data;
};

const readAll = async () => {
  console.log("boarde가 가동되었다.");
  const res = await axios.get(`${API_SERVER_HOST}/community/board/all`);
  return res.data;
};

const readOne = async () => {
  console.log("boarde가 가동되었다.");
  const res = await axios.get(`${API_SERVER_HOST}/community/Board/all`);
  return res.data;
};

// 세팅
const config = {
  // 테이블에 관한 정보
  tableInfo: {
    tableEng: "Board",
    tableName: "게시판종류",
  },
  // 칼럼에 대한 정보
  columns: {
    boardId: "게시판번호",
    boardName: "게시판종류",
    posts: "게시판글",
  },
  // 데이터로 인한 문제를 해결하면 좋으나,,,, 
  // 급할 경우, 직접 데이터를 제외해야합니다.
  excludeList: ["posts"],
  // 사용할 함수를 정의합니다.
  funcs: { Board, readAll },
  // formData는 write할 때 사용하는 데이터입니다.
  formData: {},
  // 추후 레이아웃에 세팅을 위함. 지금은 default만사용합니다.
  type: typeEnum.default
};


export default { config, Board, readOne };