import axios from "axios";
import { createTableConfig } from "./commonApi";
import { tableDefinitions } from "./tablesConfig";

const tableName = "notice";

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
/** 공지 생성 */
export const createNotice = (data) =>
  api.post("/notice", data);

/** 공지 수정 */
export const updateNotice = (id, data) =>
  api.put(`/notice/${id}`, data);

/** 공지 삭제 */
export const deleteNotice = (id) =>
  api.delete(`/notice/${id}`);

/** 공지 고정 토글 */
export const toggleNoticePin = (id) =>
  api.patch(`/notice/${id}/pin`);

// 전체 공지 조회
export const getNotices = () =>
  api.get("/notice/all");

/* N-2) 단일 공지 조회*/
export const getNoticeById = (noticeId) =>
  api.get(`/notice/one/${noticeId}`);

export default { config };  