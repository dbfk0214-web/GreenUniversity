import axios from "axios";
import { API_SERVER_HOST, createTableConfig } from "./commonApi";
import { tableDefinitions } from "./tablesConfig";

const tableName = "attendance";

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


export default { config };


// 나중에 메서드 이름 혹은 역할을 변경 , 미사용 시, 삭제할 것
// const Attendance = async () => {
//   console.log("attendance가 가동되었다.");
//   const res = await axios.get(`${API_SERVER_HOST}/api/attendance/student/checkclass`);
//   return res.data;
// };

// const findByKeyword = async () => {
//   console.log("attendance findByKeyword");
// }