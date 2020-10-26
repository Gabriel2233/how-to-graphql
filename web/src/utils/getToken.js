import { AUTH_TOKEN } from "../constants";

export const getStoragedToken = () => {
  const token = localStorage.getItem(AUTH_TOKEN);

  return token;
};
