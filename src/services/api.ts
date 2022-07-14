import { TokenService } from "./token.service";
import axios from "axios";

const instance = axios.create({
  baseURL: `/auth`,
  headers: {
    "Content-Type": "application/json",
  },
});

instance.interceptors.request.use((request) => {
  const token: any = TokenService.getAccessToken();
  request.headers = {
    "x-access-token": token,
    "Content-Type": "application/json",
  };
  return request;
});

instance.interceptors.response.use((response) => {
  console.log(response);
});

export default instance;
