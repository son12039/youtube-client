import axios from "axios";

const instance = axios.create({
  baseURL: "http://localhost:8080/api/",
});

export const getVideo = async (videoCode: number) => {
  return await instance.get(`video/${videoCode}`);
};
