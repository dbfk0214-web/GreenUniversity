import axios from "axios";
import { API_SERVER_HOST, typeEnum } from "./commonApi";
import { Await } from "react-router-dom";

// 나중에 메서드 이름 혹은 역할을 변경 , 미사용 시, 삭제할 것
const Board = async () => {
  console.log("boarde가 가동되었다.");
  const res = await axios.get(`${API_SERVER_HOST}/api/board/all`);
  return res.data;
};

const readAll = async () => {
  console.log("board readAll");
  const res = await axios.get(`${API_SERVER_HOST}/api/board/all`);
  return res.data;
};

const readOne = async () => {
  console.log("board readOne");
}

const writeOne = async () => {
  console.log("board writeOne");
}

const deleteOne = async () => {
  console.log("board deleteOne");
}

const updateOne = async () => {
  console.log("board updateOne");
}

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
  funcs: { Board, readAll, readOne, writeOne, deleteOne, updateOne },
  // formData는 write할 때 사용하는 데이터입니다.
  formData: {},
  // 추후 레이아웃에 세팅을 위함. 지금은 default만사용합니다.
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


export default { config, Board, readOne };