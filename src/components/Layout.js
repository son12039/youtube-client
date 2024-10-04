import Header from "./Header";
import { Outlet } from "react-router-dom";
import { useEffect, useState, useMemo, useCallback } from "react";
import { getVideos } from "../api/video";

/*
  최적화 : 서비스의 기능을 개선하는 기술. 불필요하게 낭비되는 연산을 줄여 렌더링의 성능을 높이는 방법
  리액트에서 최적화는 '메모이제이션(Memoization)' 기법을 이용한다.
  메모이제이션 : 말그래도 '메모하는 방법'
  
  useMemo(콜백함수, []) : 특정 함수를 호출했을 때 그 함수의 반환값을 기억
   - 쓰이는데가 상태가 배열이나 객체일 때
  useCallback(콜백함수, []) : 리렌더링될 때 작성된 함수를 다시 생성하지 않도록 메모이제이션하는 훅
   - 쓰이는데는 함수
*/

const Layout = () => {
  const [videos, setVideos] = useState([]);
  const [page, setPage] = useState(1);
  const [keyword, setKeyword] = useState("");
  // const [more, setMore] = useState(true);
  const memoVideos = useMemo(() => videos, [videos]);

  const videoAPI = useCallback(async (page) => {
    const result = await getVideos(page);
    if (page === 1) {
      setVideos(result.data);
    } else {
      setVideos((prev) => [...prev, ...result.data]);
    }
    // setMore(result.data.length > 0);
  }, []);

  useEffect(() => {
    videoAPI(page, keyword);
  }, [page, keyword, videoAPI]);

  // 비디오에서 검색 기능
  const onSearch = (keyword) => {
    setPage(1);
    setVideos([]);
    setKeyword(keyword);
  };

  //비디오가 추가되는 경우 -> useCallback
  const onUpload = useCallback(() => {
    videoAPI(page);
  }, [videoAPI]);

  return (
    <>
      <Header onUpload={onUpload} onSearch={onSearch} />
      <Outlet context={{ videos: memoVideos, setPage }} />
    </>
  );
};

export default Layout;
