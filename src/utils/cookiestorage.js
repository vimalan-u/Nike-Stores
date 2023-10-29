import Cookies from "js-cookie";

export const setItem = (key, data) => {
  data = btoa(data)
  return Cookies.set(key, data, { sameSite: 'none', secure: true, expires: 7 });
};

export const getItem = (key) => {
  const encodedData = Cookies.get(key);
  if (encodedData) {
    return atob(encodedData);
  }
  return undefined;
};

export const removeItem = (key) => {
  return Cookies.remove(key);
};

