import { ROUTES } from "@utils/routes";
import axios from "axios";
import Cookies from "js-cookie";
import Router from "next/router";

const http = axios.create({
  baseURL: process.env.NEXT_PUBLIC_REST_API_ENDPOINT, // TODO: take this api URL from env
  timeout: 30000,
  headers: {
    Accept: "application/json",
    "Content-Type": "application/json",
  },
});

// Change request data/error here
http.interceptors.request.use(
  (config) => {
    const token = Cookies.get("auth_token");
    config.headers = {
      ...config.headers,
      Authorization: `Bearer ${token}`,
    };
    return config;
  },
  (error) => {
    return Promise.reject(error);
  }
);

// Change response data/error here
http.interceptors.response.use(
  (response) => {
    return response;
  },
  (error) => {
    if (
      (error.response && error.response.status === 401) ||
      (error.response && error.response.status === 403)
	  (error.response && error.response.status === 409)
    ) {
      Cookies.remove("auth_token");
      Cookies.remove("auth_permissions");
      Router.push(ROUTES.LOGIN);
    }
    return Promise.reject(error);
  }
);

export default http;
