import { TokenService } from "./token.service";
import axios from "axios";

const instance = axios.create({
  baseURL: `${process.env.REACT_APP_API_URL}/auth`,
  headers: {
    "Content-Type": "application/json",
  },
});

instance.interceptors.request.use((request: any) => {
  const token: any = TokenService.getAccessToken();
  request.headers = {
    "x-access-token": token,
    "Content-Type": "application/json",
  };
  return request;
});

instance.interceptors.response.use(
  (response: any) => {
    // console.log(response);
    return response;
  },
  async (err: any) => {
    TokenService.getRefreshToken();

    const originalConfig = err.config;
    // console.log(err.response.data.message);

    if (err.response.status === 401) {
      TokenService.getRefreshToken();
      if (
        err.response.data.message === "Unauthorized! Access Token was expired!"
      ) {
        TokenService.getRefreshToken();

        try {
          let refreshToken = TokenService.getRefreshToken();

          const res = await instance.post("/refresh", {
            "x-access-token": refreshToken,
            "Content-Type": "application/json",
          });

          console.log(res);

          TokenService.UpdateAccessToken(res?.data?.data?.token);
          instance.defaults.headers.common["x-access-token"] =
            res?.data?.data?.token;
          return instance(originalConfig);
        } catch (_error) {
          return Promise.reject(_error);
        }
      }
    }
  }
);

export default instance;
