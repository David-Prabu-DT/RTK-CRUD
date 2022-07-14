const setSignupUser = <T>(user: T) => {
  localStorage.setItem("user", JSON.stringify(user));
};

const setAccessToken = <T>(user: T) => {
  localStorage.setItem("accessToken", JSON.stringify(user));
};

const setRefreshToken = <T>(user: T) => {
  localStorage.setItem("RefreshToken", JSON.stringify(user));
};

const getAccessToken = () => {
  return localStorage.getItem("accessToken");
};

const getRefreshToken = () => {
  return localStorage.getItem("refreshToken");
};

const UpdateAccessToken = <T>(_token: T) => {
  localStorage.setItem("accessToken", JSON.stringify(_token));
};

export const TokenService = {
  setSignupUser,
  setAccessToken,
  getAccessToken,
  UpdateAccessToken,
  getRefreshToken,
  setRefreshToken,
};
