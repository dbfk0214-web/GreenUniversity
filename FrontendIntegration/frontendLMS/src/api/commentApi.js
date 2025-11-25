import axios from "axios";
import { createTableConfig, excludeColumns } from "./commonApi";
import UserApi from "./UserApi";
import PostApi from "./PostApi";
import { tableDefinitions } from "./tablesConfig";

const tableName = "comment";

const extraButtons =
  [
    {
      label: "user 정보 읽기",
      action: UserApi.config.funcs.readAll,
      style: "bg-red-300 hover:bg-red-700",
      columns: { ...excludeColumns(UserApi.config.columns, UserApi.config.excludeList) },
      tableName: "user"
    },
    {
      label: "post 정보 읽기",
      action: PostApi.config.funcs.readAll,
      style: "bg-red-300 hover:bg-red-700",
      columns: { ...excludeColumns(PostApi.config.columns, PostApi.config.excludeList) },
      tableName: "post"
    },
  ];

const config = createTableConfig(tableDefinitions[tableName], extraButtons);


export default { config };  