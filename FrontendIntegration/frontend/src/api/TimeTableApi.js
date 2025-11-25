import axios from "axios";
import { createTableConfig, excludeColumns } from "./commonApi";
import DepartmentApi from "./DepartmentApi";
import { tableDefinitions } from "./tablesConfig";

const tableName = "time";

const extraButtons =
  [
    
  ];

const config = createTableConfig(tableDefinitions[tableName], extraButtons);


export default { config };  