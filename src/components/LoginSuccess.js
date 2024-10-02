import { useEffect } from "react";
import { useNavigate } from "react-router-dom";

const LoginSuccess = () => {
  const navigate = useNavigate();
  useEffect(() => {
    // URL에서 토큰 추출
    const url = new URLSearchParams(window.location.search);
    const token = url.get("token");
    alert(token);

    // 토큰 로컬스토리지에 저장
    localStorage.setItem("token", token);

    // 메인 페이지로 이동
    navigate("/");
  }, []);

  return null;
};
export default LoginSuccess;
