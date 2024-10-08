import { addSub, removeSub, countSub, getSub } from "../api/subscribe";

export const initState = {
  count: 0, // 구독자 수
  isSub: false, // 구독 체크 여부
  sub: null, // 구독 정보
};

export const subscribe = async (dispatch, data) => {
  const response = await addSub(data);
  dispatch({ type: "ADD_SUBSCRIBE" });
};

export const unsubscribe = async (dispatch, subCode) => {
  const response = await removeSub(subCode);
  dispatch({ type: "DELETE_SUBSCRIBE" });
};

export const subCount = async (dispatch, channelCode) => {
  const response = await countSub(channelCode);
  dispatch({ type: "COUNT_SUBSCRIBE", payload: response.data });
};

export const fetchSub = async (dispatch, channelCode) => {
  try {
    const response = await getSub(channelCode);
    if (response.data !== "") {
      dispatch({ type: "FETCH_SUBSCRIBE", payload: response.data });
    } else {
      dispatch({ type: "FETCH_SUBSCRIBE_ERROR" });
    }
  } catch (error) {
    localStorage.removeItem("token");
  }
};

export const subscribeReducer = (state, action) => {
  switch (action.type) {
    case "ADD_SUBSCRIBE":
      return {
        ...state,
        isSub: true,
        count: state.count + 1,
      };
    case "DELETE_SUBSCRIBE":
      return {
        ...state,
        isSub: false,
        count: state.count - 1,
      };
    case "COUNT_SUBSCRIBE":
      return {
        ...state,
        count: action.payload,
      };
    case "FETCH_SUBSCRIBE":
      return {
        ...state,
        isSub: true,
        sub: action.payload,
      };
    case "FETCH_SUBSCRIBE_ERROR":
      return {
        ...state,
        isSub: false,
        sub: null,
      };
    default:
      return state;
  }
};
