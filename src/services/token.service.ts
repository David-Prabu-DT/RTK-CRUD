const setSignupUser = <T>(user: T) => {
  localStorage.setItem("user", JSON.stringify(user));
};

const setAccessToken = <T>(_token: T) => {
  localStorage.setItem("accessToken", JSON.stringify(_token));
};

const setRefreshToken = <T>(_token: T) => {
  localStorage.setItem("RefreshToken", JSON.stringify(_token));
};

const getAccessToken = () => {
  return localStorage.getItem("accessToken");
};

const getRefreshToken = () => {
  return localStorage.getItem("RefreshToken");
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
