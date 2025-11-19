import axios from "axios";
import { API_SERVER_HOST, typeEnum } from "./commonApi";
const host = `${API_SERVER_HOST}/api/user`;

export const doLogin = async (a) => {
  console.log("login post를 받았다", a);
  const header = { headers: { "Content-Type": "application/json" } };
  // const form = new FormData();
  const { email, password } = a;
  // form.append("email", loginParam.email);
  // form.append("password", loginParam.pw);
  const res = await axios.post(`${host}/login`, { email, password }, header);
  return res.data;
};

export const doRegister = async (a) => {
  console.log("1)여기는 등록이야 : ", a);
  try {
    const res = await axios.post(`${host}/register`, a, {
      headers: { "Content-Type": "application/json" },
    });
    return res.data;
  } catch (err) {
    console.error("register error:", err);
    throw err;
  }
};

const findByKeyword = async () => {
  console.log("User findByKeyword");
}

const readAll = async () => {
  console.log("User가 가동되었다.");
  const res = await axios.get(`${API_SERVER_HOST}/api/user/all`);
  return res.data;
};

// 세팅
const config = {
  tableInfo: {
    tableEng: "User",
    tableName: "유저",
  },
  columns: {
    userId: "유저아이디",
    email: "이메일",
    password: "비밀번호",
    nickname: "닉네임",
    role: "역할",
    offerings: "수업내역",
    enrollments: "수강내역",
    comments: "댓글내역",
    posts: "게시글내역",
    notices: "공지내역",
  },
  excludeList: ["offerings", "enrollments", "comments", "posts", "notices"],
  funcs: { readAll, findByKeyword },
  formData: {},
  type: typeEnum.read,
  color: "bg-teal-100", 
  buttonDataList: [
    {
      label: "모두읽기",
      action: readAll,
      enumType: typeEnum.read,
      style: "bg-red-300 hover:bg-red-700",
    },
    {
      label: "데이터추가",
      action: null,
      enumType: typeEnum.write,
      style: "bg-green-500 hover:bg-green-600",
    },
    {
      label: "검색",
      action: null,
      enumType: typeEnum.search,
      style: "bg-blue-500 hover:bg-blue-600",
    },
  ],
};

export default { config };