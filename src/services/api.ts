import { TokenService } from "./token.service";
import axios from "axios";

const instance = axios.create({
  baseURL: `/auth`,
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
    console.log(response);
  },
  async (err: any) => {
    console.log(err);

    if (err.response.this.status === 401) {
      if (
        err.response.data.message === "Unauthorized! Access Token was expired!"
      ) {
        try {
          let refreshToken = TokenService.getRefreshToken();

          const res = await instance.post("/refresh", {
            "x-access-token": refreshToken,
            "Content-Type": "application/json",
          });

          console.log(res);
        } catch (_error) {
          return Promise.reject(_error);
        }
      }
    }
  }
);

export default instance;
