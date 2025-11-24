import axios from "axios";
import { createTableConfig, excludeColumns } from "./commonApi";
import DepartmentApi from "./DepartmentApi";
import { tableDefinitions } from "./tablesConfig";

const tableName = "course";

const extraButtons =
  [
    {
      label: "department 정보 읽기",
      action: DepartmentApi.config.funcs.readAll,
      style: "bg-red-300 hover:bg-red-700",
      columns: { ...excludeColumns(DepartmentApi.config.columns, DepartmentApi.config.excludeList) },
      tableName: "department"
    },
  ];

const config = createTableConfig(tableDefinitions[tableName], extraButtons);


export default { config };  