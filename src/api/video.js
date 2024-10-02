import axios from "axios";

const instance = axios.create({
  baseURL: "http://localhost:8080/api/",
});

export const getVideos = async () => {
  return await instance.get("video");
};

export const addVideo = async (data) => {
  return await instance.post("video", data, {
    headers: {
      "Content-Type": "multipart/form-data",
    },
  });
};
