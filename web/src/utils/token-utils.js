import { AUTH_TOKEN } from "../constants";

export const getStoragedToken = () => {
  const token = localStorage.getItem(AUTH_TOKEN);

  return token;
};

export const saveToken= (token) => {
  localStorage.setItem(AUTH_TOKEN, token)
}
