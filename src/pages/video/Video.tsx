import { useParams } from "react-router-dom";
import { getVideo } from "../../api/api";
import { useEffect, useState } from "react";
import "../../assets/detail.css";

interface Channel {
  channelImg: string;
  channelName: string;
}

interface Video {
  videoUrl: string;
  videoTitle: string;
  channel: Channel;
  videoDesc: string;
}

const Video = () => {
  const { videoCode } = useParams();
  const [video, setVideo] = useState<Video>();

  const getVideoAPI = async () => {
    const response = await getVideo(Number(videoCode));
    setVideo(response.data);
  };

  useEffect(() => {
    getVideoAPI();
  }, []);

  return (
    <>
      <main className="detail">
        <div className="video-detail">
          <video controls src={video?.videoUrl}></video>
          <h2>{video?.videoTitle}</h2>
          <div className="video-detail-desc">
            <div className="detail-desc-left">
              <img src={video?.channel.channelImg} />
              <div className="channel-desc">
                <h3>{video?.channel.channelName}</h3>
                <p>구독자 명</p>
              </div>
            </div>
          </div>
          <div className="video-detail-info">{video?.videoDesc}</div>
        </div>
      </main>
    </>
  );
};

export default Video;
