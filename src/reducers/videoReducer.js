import { getVideo, getVideos } from "../api/video";

export const initState = {
  video: null,
  videos: [],
};

// 액션 함수들
export const fetchVideo = async (dispatch, videoCode) => {
  const response = await getVideo(videoCode);
  dispatch({ type: "FETCH_VIDEO", payload: response.data });
};

export const fetchVideos = async (dispatch, page, keyword) => {
  const response = await getVideos(page, keyword);
  dispatch({ type: "FETCH_VIDEOS", payload: response.data });
};

// fetchVideos - FETCH_VIDEOS

export const videoReducer = (state, action) => {
  switch (action.type) {
    case "FETCH_VIDEO":
      return { ...state, video: action.payload };
    case "FETCH_VIDEOS":
      return { ...state, videos: action.payload };
  }
};
