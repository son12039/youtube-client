import { createSlice } from "@reduxjs/toolkit";

// createSlice로 리듀서 정의
const countSlice = createSlice({
  name: "count", // 슬라이스명
  initialState: { count: 0 }, // 초기 상태
  reducers: {
    increase: (state) => {
      state.count += 1;
    },
    decrease: (state) => {
      state.count -= 1;
    },
  },
});

// 액션 내보내기
export const { increase, decrease } = countSlice.actions;

export default countSlice;
