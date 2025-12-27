import axios from "axios";
import { createTableConfig, excludeColumns } from "./commonApi";
import DepartmentApi from "./DepartmentApi";
import { tableDefinitions } from "./tablesConfig";

const tableName = "post";

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

/** 게시글 목록 조회 */
export const getPosts = ({ boardType, keyword }) =>
  api.get("/posts", {
    params: {
      boardType, // FREE / DEPT / NOTICE
      keyword,   // 검색어
    },
  });

/** 게시글 상세 */
export const getPostDetail = (id) =>
  api.get(`/posts/${id}`);

/** 게시글 작성 */
export const createPost = (data) =>
  api.post("/posts", data);

/** 게시글 수정 */
export const updatePost = (id, data) =>
  api.put(`/posts/${id}`, data);

/** 게시글 삭제 */
export const deletePost = (id) =>
  api.delete(`/posts/${id}`);

export default { config };  