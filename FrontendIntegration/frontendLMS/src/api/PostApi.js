import axios from "axios";
import { createTableConfig, excludeColumns } from "./commonApi";
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

const api = "http://localhost:8080/api"
// const api = axios.create({
//   baseURL: "http://localhost:8080/api/",
//   withCredentials: true,
// });

/** 게시글 목록 조회 */
export const getPosts = ({ boardType, keyword }) =>
  api.get("/post", {
    params: {
      boardType, // FREE / DEPT / NOTICE
      keyword,   // 검색어
    },
  });

/** 게시글 상세 */
export const getPostDetail = (id) =>
  api.get(`/post/${id}`);

/** 게시글 작성 */
export const createPost = async (postData) => {
  const response = await api.post("/post", postData);
  return response.data;
};
/** 게시글 수정 */
export const updatePost = (id, data) =>
  api.put(`/post/${id}`, data);

/** 게시글 삭제 */
export const deletePost = (id) =>
  api.delete(`/post/${id}`);

/** 보드 안에 포스트 */
export const getPostsByBoard = async () => {
  console.log('boardType')
  const url =`${api}/post`;
  console.log('url',url)
  const res = await axios.get(url)
  console.log('res',res)
  return res 
};


export default { config };  