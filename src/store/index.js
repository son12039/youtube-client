import { configureStore } from "@reduxjs/toolkit";
import countSlice from "./countSlice";

// 리덕스 스토어 : 모든 상태를 관리하는 중앙 저장소

const store = configureStore({ reducer: countSlice.reducer });

export default store;
