import axios, { AxiosError, AxiosRequestConfig, AxiosResponse } from "axios";
import { useLocalStorage } from "../hooks/useLocalStorage";
import { baseURL } from "../api/end-points";
import cookieUtils from "../utils/cookieUtils";


const AxiosInstance = axios.create({
  baseURL: baseURL,
  headers: {
    "Content-Type": "application/json",
    Accept: "application/json, text/plain, */*",
  },
});

const onRequest = (config) => {
  const token = cookieUtils.getCookie("token");

  if (token) {
    config.headers = {
      ...config.headers,
      Authorization: `Bearer ${token}`,
    };
  }

  return config;
};

const onRequestError = (error) => {
  return Promise.reject(error);
};

const onResponse = (response) => {
  return response;
};

function OnResponseError(error) {
  const { removeStorageItem } = useLocalStorage();
  const statusCode = error?.response?.status;

  // if (statusCode === 401) {
  //   cookieUtils.removeCookie("token");
  //   removeStorageItem("user");
  //   setTimeout(() => {
  //     // window.location.href = "/login";
  //   }, 500);
  // }

  return Promise.reject(error);
}

AxiosInstance.interceptors.request.use(onRequest, onRequestError);
AxiosInstance.interceptors.response.use(onResponse, OnResponseError);

export default AxiosInstance;
