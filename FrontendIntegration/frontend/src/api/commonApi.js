import axios from "axios";

export const API_SERVER_HOST = "http://localhost:8080";


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

export const createCrudApi = (tableName) => ({
  readAll: () => {
    console.log(`${tableName} readAll`);
    return axios.get(`${API_SERVER_HOST}/api/${tableName}/all`).then(r => r.data);
  },
  readOne: (id) => {
    console.log(`${tableName} readOne`);
    return axios.get(`${API_SERVER_HOST}/api/${tableName}/${id}`).then(r => r.data);
  },
  writeOne: (dto) => {
    console.log(`${tableName} writeOne`, dto);
    return axios.post(`${API_SERVER_HOST}/api/${tableName}/create`, dto).then(r => r.data);
  },
  updateOne: (dto) => {
    console.log(`${tableName} updateOne`);
    return axios.put(`${API_SERVER_HOST}/api/${tableName}`, dto).then(r => r.data);
  },
  deleteOne: (id) => {
    console.log(`${tableName} deleteOne`);
    return axios.delete(`${API_SERVER_HOST}/api/${tableName}/${id}`).then(r => r.data);
  },
});


// 함수 정의
export const excludeColumns = (columns, excludeArray) => {
  return Object.keys(columns)
    .filter(key => !excludeArray.includes(key))
    .reduce((acc, key) => {
      acc[key] = columns[key];
      return acc
    }, {});
}


export const makeDefaultButtonDataList = (overrides = {}) => [
  {
    label: "모두읽기",
    action: null,
    enumType: typeEnum.read,
    style: "bg-red-300 hover:bg-red-700",
    ...overrides.readAll
  },
  {
    label: "데이터추가",
    action: null,
    enumType: typeEnum.write,
    style: "bg-green-500 hover:bg-green-600",
    ...overrides.writeOne
  },
  {
    label: "검색",
    action: null, // 기본은 빈 함수; 각 API에서 교체 가능
    enumType: typeEnum.search,
    style: "bg-blue-500 hover:bg-blue-600",
    ...overrides.search
  },
];


export const createTableConfig = (tabelDef, extraButtons = []) => {
  const { key, tableEng, tableName, columns, excludeList, color } = tabelDef;
  const funcs = createCrudApi(key);

  return {
    key,
    tableInfo: { tableEng, tableName },
    columns,
    excludeList,
    funcs,
    formData: excludeColumns(columns, excludeList),
    type: typeEnum.read,
    color,
    buttonDataList: makeDefaultButtonDataList({
      readAll: { action: funcs.readAll },
    }),
    extrahButtonDataList : extraButtons,
  };
}

