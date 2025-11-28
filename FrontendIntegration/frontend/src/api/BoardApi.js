import axios from "axios";
import {createTableConfig, excludeColumns } from "./commonApi";
import PostApi from "./PostApi";
import { tableDefinitions } from "./tablesConfig";

const tableName = "board";

const extraButtons =
  [

  ];

const config = createTableConfig(tableDefinitions[tableName], extraButtons);


export default { config };  