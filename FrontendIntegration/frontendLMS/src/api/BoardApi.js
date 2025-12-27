import axios from "axios";
import {createTableConfig, excludeColumns } from "./commonApi";
import PostApi from "./PostApi";
import { tableDefinitions } from "./tablesConfig";

const tableName = "board";

const extraButtons =
  [

  ];

var tableDefinition = tableDefinitions[tableName];
tableDefinition = {
  ...tableDefinition,
  allColumns: {
    ...tableDefinition.allColumns,
    searchColumns: {
      "one": tableDefinition.allColumns.responseColumns
    }
  }
}
const config = createTableConfig(tableDefinition, extraButtons);

const api = axios.create({
  baseURL: "http://localhost:8080/api",
  withCredentials: true,
});

/** 게시글 전체 조회 (게시판 타입별) */
export const getBoardPosts = (boardType) =>
  api.get("/boards/posts", {
    params: { boardType }, // FREE / DEPT / NOTICE
  });

/** 게시글 작성 */
export const createBoardPost = (data) =>
  api.post("/boards/posts", data);


export default { config };  