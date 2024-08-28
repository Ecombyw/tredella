import Cookies from "js-cookie";

const cookieUtils = {
  setCookie: (name, value, options = {}) => {
    Cookies.set(name, value, options);
  },

  getCookie: (name) => {
    return Cookies.get(name);
  },
  
  removeCookie: (name, options = {}) => {
    Cookies.remove(name, options);
  },
};

export default cookieUtils;
