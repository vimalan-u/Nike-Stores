import Cookies from "js-cookie";

export const setItem = (key, data) => {
  return Cookies.set(key, data, { sameSite: 'none', secure: true, expires: 7 });
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
