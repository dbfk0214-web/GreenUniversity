import { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { useNavigate } from "react-router-dom";
import { doLogin } from "../../api/userApi"; // API 함수 별칭으로 임포트
import { login } from "../../slice/loginSlice"; // 리덕스 액션

const LoginComponent = () => {
  const navigate = useNavigate();
  const dispatch = useDispatch();
  const loginState = useSelector((state) => state.loginSlice);
  console.log("loginState:", loginState);
  const [form, setForm] = useState({ email: "", pw: "" });
  const [loading, setLoading] = useState(false);
  const [errMsg, setErrMsg] = useState("");

  const onChange = (e) => {
    const { name, value } = e.target;
    setForm((prev) => ({ ...prev, [name]: value }));
  };

  const validate = () => {
    if (!form.email.trim()) return "이메일을 입력하세요.";
    if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(form.email))
      return "이메일 형식이 올바르지 않습니다.";
    if (!form.pw) return "비밀번호를 입력하세요.";
    return "";
  };

  const onSubmit = async (e) => {
    e.preventDefault();
    setErrMsg("");

    const v = validate();
    if (v) return setErrMsg(v);

    try {
      setLoading(true);
      // 1) 백엔드 로그인 호출
      const res = await doLogin({ email: form.email, password: form.pw });
      console.log("res:", res);
      // 2) 응답 체크 (프로젝트 응답 포맷에 맞게 조정)
      // 예: 스프링 시큐리티 successHandler가 { ok:true, user:{...} }를 리턴한다고 가정
      if (!res || res.ok === false) {
        return setErrMsg(res?.error || "이메일/비밀번호를 확인하세요.");
      }
      // 3) 스토어에 로그인 상태 저장
      // 쿠키 저장은 login 리듀서가 이미 처리(setCookie)하고 있음
      const user = { ...res };
      console.log("user:,", user);
      dispatch(login(user));

      alert("로그인 성공");
      navigate("/");
    } catch (err) {
      console.error(err);
      setErrMsg("로그인 요청에 실패했습니다.");
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="border-2 border-sky-200 mt-10 m-2 p-6 max-w-2xl mx-auto rounded">
      <h1 className="text-4xl mb-6 font-extrabold text-blue-500 text-center">
        로그인
      </h1>
      <form onSubmit={onSubmit} className="space-y-5">
        <div className="flex items-center">
          <label className="w-40 text-right pr-4 font-bold">이메일</label>
          <input
            type="text"
            name="email"
            value={form.email}
            onChange={onChange}
            className="flex-1 p-4 rounded border border-neutral-500 shadow-md"
            placeholder="you@example.com"
            autoComplete="username"
          />
        </div>
        <div className="flex items-center">
          <label className="w-40 text-right pr-4 font-bold">비밀번호</label>
          <input
            type="password"
            name="pw"
            value={form.pw}
            onChange={onChange}
            className="flex-1 p-4 rounded border border-neutral-500 shadow-md"
            placeholder="비밀번호"
            autoComplete="current-password"
          />
        </div>
        {errMsg && <p className="text-red-600 text-sm text-center">{errMsg}</p>}
        <div className="flex justify-center pt-2">
          <button
            type="submit"
            disabled={loading}
            className={`rounded p-4 w-36 text-xl text-white ${
              loading ? "bg-gray-400" : "bg-blue-500 hover:bg-blue-600"
            }`}
          >
            {loading ? "로그인 중..." : "로그인"}
          </button>
        </div>
      </form>
    </div>
  );
};

export default LoginComponent;
