import Header from "./Header";
import { Outlet } from "react-router-dom";
import { useEffect, useState } from "react";
import { getVideos } from "../api/video";
const Layout = () => {
  const [videos, setVideos] = useState([]);

  const videoAPI = async () => {
    const result = await getVideos();
    setVideos(result.data);
  };

  useEffect(() => {
    videoAPI();
  }, []);

  //비디오가 추가되는 경우
  const onUpload = (newVideo) => {
    setVideos([newVideo, ...videos]);
  };

  return (
    <>
      <Header onUpload={onUpload} />
      <Outlet context={{ videos }} />
    </>
  );
};

export default Layout;
