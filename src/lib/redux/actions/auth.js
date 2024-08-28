import AuthService from "@/configs/api/auth.api";
import { useLocalStorage } from "@/configs/hooks/useLocalStorage";
import cookieUtils from "@/configs/utils/cookieUtils";
import { errorToast, successToast } from "@/configs/utils/toaster";
import { getReducer } from "../reducer";
export const setUserDetails = (dispatch, userData) => {
  const setUserInfo = getReducer("userInfo");
  const { setStorageItem } = useLocalStorage();

  dispatch(setUserInfo(userData.buyer));
  cookieUtils.setCookie("token", userData.token);
  setStorageItem("user", userData.buyer);
};
export const resetUserDetails = (dispatch) => {
  const setUserInfo = getReducer("userInfo");
  const { removeStorageItem } = useLocalStorage();

  cookieUtils.removeCookie("token");
  removeStorageItem("user");
  dispatch(setUserInfo(null));
};
export const AuthLoginApiRequest = async (
  dispatch,
  values,
  setLoading,
  router
) => {
  setLoading(true); 
  try {
    const response = await AuthService.login(values);
    if (response?.data?.status === "success") {
      setUserDetails(dispatch, response?.data);
      successToast(response?.data?.message || "Login successfully");
      router.push("/");
    } else {
      errorToast(response?.data?.message);
    }
  } catch (error) {
    throw new Error("Invalid login response", error);
  } finally {
    setLoading(false); // Stop the loading spinner or animation
  }
};

export const AuthRegisterApiRequest = async (values) => {
  try {
    const response = await AuthService.login(values); // Replace with your API endpoint
    if (response) {
      successToast("login");
    }
    // Assuming the response contains the user data
    // return response.data;
  } catch (error) {
    // Return error message
    console.log("Error", error);
  }
};


export const Logout = (dispatch, router) => {
  resetUserDetails(dispatch);
  successToast("Logout successfully");
  router.push(`/`);
};
