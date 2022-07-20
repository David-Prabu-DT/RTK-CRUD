import { TokenService } from "./token.service";
import axios from "axios";

const SignUp = async <T>(data: T, navigate: any) => {
  await axios
    .post(`${process.env.REACT_APP_API_URL}/auth/signup`, data)
    .then((_res) => {
      _res.data && TokenService.setSignupUser(_res.data);
      navigate("/login");
      return true;
    })
    .catch((_err) => {
      console.log(_err.response.data.Message);
      alert(_err.response.data.Message);
    });
};

const LogIn = async <T>(data: T, navigate: any) => {
  await axios
    .post(`${process.env.REACT_APP_API_URL}/auth/login`, data)
    .then((_res) => {
      if (_res.data.token && _res.data.refreshToken) {
        TokenService.setAccessToken(_res.data.token);
        TokenService.setRefreshToken(_res.data.refreshToken);
      }
      navigate("/employees");
      return _res.data;
    })
    .catch((_err) => {
      console.log(_err);
      alert(_err.response.data.Message);
    });
};

export const AuthService = { SignUp, LogIn };
