import api from "./api";

const getPublicContent = () => {
  return api.get("/test/all");
};

const getUserBoard = () => {
  return api.get("/test/all");
};

const getModeratorBoard = () => {
  return api.get("/test/all");
};

const getAdminBoard = () => {
  return api.get("/test/all");
};

export const UserService = {
  getPublicContent,
  getUserBoard,
  getModeratorBoard,
  getAdminBoard,
}; 
