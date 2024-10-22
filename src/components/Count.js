import { useState, useReducer } from "react";
import styled from "styled-components";
import { useDispatch, useSelector } from "react-redux";
import { increase, decrease } from "../store/countSlice";

const StyledDiv = styled.div`
  margin: 20px;
  h1 {
    font-size: 4rem;
    font-weight: bold;
  }
  button {
    margin: 10px;
    padding: 5px 30px;
    font-size: 3rem;
    background-color: black;
    color: white;
    border-radius: 5px;
  }
`;

const Count = () => {
  // useDispatch : 컴포넌트에서 리덕스 액션을 보낼 수 있게 해주는 훅
  const dispatch = useDispatch();

  // useSelector : 리덕스 스토어에서 상태를 가져오는 훅
  const count = useSelector((state) => state.count.count);

  return (
    <StyledDiv>
      <h1>Count : {count}</h1>
      <button onClick={() => dispatch(increase())}>+</button>
      <button onClick={() => dispatch(decrease())}>-</button>
    </StyledDiv>
  );
};
export default Count;
