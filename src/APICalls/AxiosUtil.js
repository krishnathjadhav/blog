import axios from "axios";
import { useContext } from "react";
import AuthContext from "../Contexts/AuthContext";

const axiosInstance = axios.create({
  baseURL: "http://localhost:8080/",
  headers: {
    Authorization: "Bearer ",
  },
});
let authorizartionToken;
const onRequest = (config) => {
  //console.info(`[request] [${JSON.stringify(config)}]`);
  console.log("onRequest: ", authorizartionToken);
  if (authorizartionToken) {
    config.headers.Authorization = "Bearer " + authorizartionToken;
  }
  return config;
};

const onRequestError = (error) => {
  //console.error(`[request error] [${JSON.stringify(error)}]`);
  return Promise.reject(error);
};

const onResponse = (response) => {
  //console.info(`[response] [${JSON.stringify(response)}]`);
  return response;
};

const onResponseError = (error) => {
  //console.error(`[response error] [${JSON.stringify(error)}]`);
  return Promise.reject(error);
};

export function getAxiosInstance(authToken) {
  authorizartionToken = authToken;
  axiosInstance.interceptors.request.use(onRequest, onRequestError);
  axiosInstance.interceptors.response.use(onResponse, onResponseError);
  return axiosInstance;
}
