import axios from "axios";
import { createTableConfig, excludeColumns } from "./commonApi";
import UserApi from "./userApi";
import PostApi from "./PostApi";
import { tableDefinitions } from "./tablesConfig";

const tableName = "comment";

const extraButtons =
  [
    {
      label: "user 정보 읽기",
      action: UserApi.config.funcs.readAll,
      style: "bg-red-300 hover:bg-red-700",
      allColumns: UserApi.config.allColumns,
      tableName: "user"
    },
    {
      label: "post 정보 읽기",
      action: PostApi.config.funcs.readAll,
      style: "bg-red-300 hover:bg-red-700",
      allColumns: PostApi.config.allColumns,
      tableName: "post"
    },
  ];

const config = createTableConfig(tableDefinitions[tableName], extraButtons);


export default { config };  