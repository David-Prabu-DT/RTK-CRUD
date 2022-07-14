import { TokenService } from "./token.service";
import axios from "axios";

const SignUp = async <T>(data: T) => {
  await axios
    .post(`${process.env.REACT_APP_AUTH_API_URL}/auth/signup`, data)
    .then((_res) => {
      console.log(_res);

      _res.data && TokenService.setSignupUser(_res.data);
      return _res.data;
    })
    .catch((_err) => {
      console.log(_err);
    });
};

const LogIn = async <T>(data: T) => {
  await axios
    .post(`${process.env.REACT_APP_AUTH_API_URL}/auth/login`, data)
    .then((_res) => {
      console.log(_res);
    })
    .catch((_err) => {
      console.log(_err);
    });
};

export const AuthService = { SignUp, LogIn };
