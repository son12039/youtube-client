// 1. 초기 상태
export const initState = {
  count: 0,
};

// 2. 리듀서 함수
//    상태(state)와 액션(action)을 받아 상태들을 업데이트하는 역할
//    - state : 현재 상태
//    - action : 상태를 어떻게 변경할지 정의한 객체, 주로 type으로 구분
//               switch문을 사용하여, action의 type에 따라 상태를 다르게 처리
export const countReducer = (state = initState, action) => {
  switch (action.type) {
    case "INCREASE":
      return { count: state.count + 1 };
    case "DECREASE":
      return { count: state.count - 1 };
    default:
      return state;
  }
};
