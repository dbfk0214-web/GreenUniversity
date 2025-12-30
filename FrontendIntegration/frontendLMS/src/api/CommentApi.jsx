import axios from "axios";
import { createTableConfig } from "./commonApi";
import { tableDefinitions } from "./tablesConfig";

/* =========================
   axios instance
========================= */
const api = axios.create({
  baseURL: "http://localhost:8080/api",
  withCredentials: true,
});

/* =========================
   API FUNCTIONS (먼저 선언!!)
========================= */

/** 관리자 댓글 전체 조회 */
export const getAllComments = () => api.get("/comment/all");

/** 댓글 숨김 */
export const hideComment = (commentId) =>
  api.patch(`/comment/${commentId}/hide`);

/** 댓글 복구 */
export const restoreComment = (commentId) =>
  api.patch(`/comment/${commentId}/restore`);

/** 댓글 삭제 */
export const deleteComment = (commentId) =>
  api.delete(`/comment/${commentId}`);

/** 게시글별 댓글 조회 */
export const getCommentsByPost = (postId) =>
  api.get(`/posts/${postId}/comments`);

/** 댓글 등록 */
export const createComment = (postId, data) =>
  api.post(`/posts/${postId}/comments`, data);

/** 댓글 수정 */
export const updateComment = (commentId, data) =>
  api.put(`/comments/${commentId}`, data);

/* =========================
   table config
========================= */

const tableName = "comment";

let tableDefinition = tableDefinitions[tableName];

tableDefinition = {
  ...tableDefinition,
  allColumns: {
    ...tableDefinition.allColumns,
    searchColumns: {
      one: tableDefinition.allColumns.responseColumns,
    },
  },
};

const extraButtons = [];

/* =========================
   config 생성 (마지막!)
========================= */
const config = createTableConfig(tableDefinition, extraButtons);

config.funcs = {
  // 목록
  all: getAllComments,
  list: getAllComments,

  // 상태
  hide: hideComment,
  restore: restoreComment,

  // 삭제
  delete: deleteComment,
  remove: deleteComment,
};

export default { config };
