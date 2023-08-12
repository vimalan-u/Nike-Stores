import Cookies from "js-cookie";

export const setItem = (key, data) => {
  return Cookies.set(key, data);
};

export const getItem = (key) => {
  if (Cookies.get(key)) {
    return Cookies.get(key);
  }
  return undefined;
};

export const removeItem = (key) => {
  return Cookies.remove(key);
};
