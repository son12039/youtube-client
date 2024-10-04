/*
    Context : 문맥이라는 뜻. 리액트에서 같은 문맥 아래에 있는 컴포넌트 그룹에 데이터를 공급하는 기능. Context를 이용하면 Props를 전달하지 않고도 컴포넌트 전역에 데이터를 공급할 수 있다.
    ContextAPI : Context를 만들고 다루는 리액트 기능
*/
import { createContext, useState, useContext } from "react";

// 1. 새로운 Context 생성
const AuthContext = createContext();

// 2. Context.Provider 기능을 사용해야 한다.
// Provider를 통해 고르인 상태와 로그인/로그아웃 기능 제공
export const AuthProvider = ({ children }) => {
  // 로그인 상태 - token 유무
  const [token, setToken] = useState(localStorage.getItem("token"));

  // 로그인 기능 : 토큰 저장
  const login = (token) => {
    localStorage.setItem("token", token);
    setToken(token);
  };

  // 로그아웃 기능 : 토큰 삭제
  const logout = () => {
    localStorage.removeItem("token");
    setToken(null);
  };
  return (
    <AuthContext.Provider value={{ token, login, logout }}>
      {children}
    </AuthContext.Provider>
  );
};

// 3. Context의 상태와 기능을 쉽게 사용할 수 있도록 커스텀 훅 만들기
export const useAuth = () => useContext(AuthContext);
