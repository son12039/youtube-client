import "../../assets/detail.css";
import { useEffect, useReducer } from "react";
import { useParams } from "react-router-dom";
import {
  initState as videoState,
  videoReducer,
  fetchVideo,
  fetchVideos,
} from "../../reducers/videoReducer";
import {
  initState as subscribeState,
  subscribe,
  unsubscribe,
  subCount,
  subscribeReducer,
  fetchSub,
} from "../../reducers/subscribeReducer";
import { useAuth } from "../../contexts/AuthContext";

const Detail = () => {
  const { videoCode } = useParams();
  const { token } = useAuth();

  const [state, dispatch] = useReducer(videoReducer, videoState);
  const [subState, subDispatch] = useReducer(subscribeReducer, subscribeState);

  const { video, videos } = state;
  const { isSub, count, sub } = subState;

  const handleSub = () => {
    if (isSub) {
      unsubscribe(subDispatch, sub.subCode);
    } else {
      subscribe(subDispatch, { channelCode: video.channel.channelCode });
    }
  };

  useEffect(() => {
    fetchVideo(dispatch, videoCode);
    fetchVideos(dispatch, 1, "");
  }, []);

  useEffect(() => {
    if (video != null) {
      subCount(subDispatch, video.channel.channelCode);
      if (token != null) {
        fetchSub(subDispatch, video.channel.channelCode);
      }
    }
  }, [video, token]);

  return (
    <main className="detail">
      <div className="video-detail">
        <video controls src={video?.videoUrl}></video>
        <h2>{video?.videoTitle}</h2>
        <div className="video-detail-desc">
          <div className="detail-desc-left">
            <img src={video?.channel.channelImg} />
            <div className="channel-desc">
              <h3>{video?.channel.channelName}</h3>
              <p>구독자 {count}명</p>
            </div>
            <button onClick={handleSub}>{isSub ? "구독중" : "구독"}</button>
          </div>
        </div>
        <div className="video-detail-info">{video?.videoDesc}</div>
      </div>
      <div className="video-list">
        {videos.map((video) => (
          <a
            href={`/video/${video.videoCode}`}
            className="video-list-card"
            key={video.videoCode}
          >
            <img src={video.videoImg} />
            <div className="video-list-desc">
              <h4>{video.videoTitle}</h4>
              <p>{video.channel.channelName}</p>
              <p className="video-meta">조회수 {video.videoCount}회</p>
            </div>
          </a>
        ))}
      </div>
    </main>
  );
};
export default Detail;
