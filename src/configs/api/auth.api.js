import {
  FORGOT_PASSWORD_ENDPOINT,
  LOGIN_ENDPOINT,
  REGISTER_ENDPOINT,
  RESET_PASSWORD_ENDPOINT,
  UPDATE_FORGOT_PASSWORD_ENDPOINT,
  VERIFY_EMAIL_LINK_ENDPOINT,
  VERIFY_LINK_FORGOT_PASSWORD_ENDPOINT,
} from "./end-points";
import { post, get } from "../services/api.request";

const AuthService = {
  login: (data) => {
    return post(LOGIN_ENDPOINT, data);
  },
  register: (data) => {
    return post(REGISTER_ENDPOINT, data);
  },
  forgotPasswordSend: (data) => {
    return post(FORGOT_PASSWORD_ENDPOINT, data);
  },
  resetPassword: (data) => {
    return post(RESET_PASSWORD_ENDPOINT, data);
  },
  verifyEmailLink: (token) => {
    return get(`${VERIFY_EMAIL_LINK_ENDPOINT}/${token}`);
  },
  verifyLink: (data) => {
    return post(VERIFY_LINK_FORGOT_PASSWORD_ENDPOINT, data);
  },
  updateForgotPassword: (data) => {
    return post(UPDATE_FORGOT_PASSWORD_ENDPOINT, data);
  },
};
export default AuthService;
