export const API_SERVER_HOST = "http://localhost:8080";

// 함수 정의
export const excludeColumns = (columns, excludeArray) => {
  return Object.keys(columns)
    .filter(key => !excludeArray.includes(key))
    .reduce((acc, key) => {
      acc[key] = columns[key];
      return acc
    }, {});
}

// type정의
// 오타 방지 및 일관성에 도움이 됩니다.
export const typeEnum = {
  "default": "default",
  "read": "read",
  "oneRead": "oneRead",
  "search": "search",
  "write": "write",
  "delete": "delete",
  "update": "update",
  "loading": "loading",
  "modal": "modal",
}