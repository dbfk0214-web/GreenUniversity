import axios from "axios";
import {createTableConfig, excludeColumns } from "./commonApi";
import EnrollmentApi from "./EnrollmentApi";
import { tableDefinitions } from "./tablesConfig";

const tableName = "attendance";

const extraButtons =
  [
    {
      label: "Enrollment 정보 읽기",
      action: EnrollmentApi.config.funcs.readAll,
      // enumType: typeEnum.read,
      style: "bg-red-300 hover:bg-red-700",
      columns: { ...excludeColumns(EnrollmentApi.config.columns, EnrollmentApi.config.excludeList) },
      tableName: "enrollment"
    },
  ];

const config = createTableConfig(tableDefinitions[tableName], extraButtons);

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