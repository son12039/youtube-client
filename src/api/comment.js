import axios from "axios";

const instance = axios.create({
  baseURL: "http://localhost:8080/api/",
});

const authorize = axios.create({
  baseURL: "http://localhost:8080/api/private/",
  headers: {
    Authorization: `Bearer ${localStorage.getItem("token")}`,
  },
});

export const addComment = async (data) => {
  return await authorize.post("comment", data);
};

export const viewComments = async (videoCode) => {
  return await instance.get(`video/${videoCode}/comment`);
};
