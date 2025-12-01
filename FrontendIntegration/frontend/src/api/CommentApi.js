import axios from "axios";
import { createTableConfig, excludeColumns } from "./commonApi";
import UserApi from "./userApi";
import PostApi from "./PostApi";
import { tableDefinitions } from "./tablesConfig";

const tableName = "comment";

const extraButtons =
  [

  ];

const config = createTableConfig(tableDefinitions[tableName], extraButtons);


export default { config };  