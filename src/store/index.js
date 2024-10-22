import { configureStore } from "@reduxjs/toolkit";
import countSlice from "./countSlice";
import subscribeSlice from "./subscribeSlice";
import commentSlice from "./commentSlice";

// 리덕스 스토어 : 모든 상태를 관리하는 중앙 저장소

const store = configureStore({
  reducer: {
    count: countSlice.reducer,
    subscribe: subscribeSlice.reducer,
    comment: commentSlice.reducer,
  },
});

export default store;
