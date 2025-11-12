import { createContext } from "react";

const AdminSelectedContext = createContext({
  selectId: "",
  setSelectId: () => {},
});

export default AdminSelectedContext;
