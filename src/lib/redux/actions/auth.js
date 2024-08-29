import AuthService from "@/configs/api/auth.api";
import { errorToast, successToast } from "@/configs/utils/toaster";
import { createAsyncThunk } from "@reduxjs/toolkit";
import {
  clearUserDataTemp,
  resetUserDetails,
  setTempUserDetails,
  setUserDetails,
} from "../slice/authSlice";
import localStorageUtils from "@/configs/utils/localStorageUtils";
// export const setUserDetails = (dispatch, userData) => {
//   const setUserInfo = getReducer("userInfo");
//   const { setStorageItem } = useLocalStorage();

//   dispatch(setUserInfo(userData.buyer));
//   cookieUtils.setCookie("token", userData.token);
//   setStorageItem("user", userData.buyer);
// };
// export const resetUserDetails = (dispatch) => {
//   const setUserInfo = getReducer("userInfo");
//   const { removeStorageItem } = useLocalStorage();

//   cookieUtils.removeCookie("token");
//   removeStorageItem("user");
//   dispatch(setUserInfo(null));
// };
// export const AuthLoginApiRequest = async (
//   dispatch,
//   values,
//   setLoading,
//   router
// ) => {
//   setLoading(true);
//   try {
//     const response = await AuthService.login(values);
//     if (response?.data?.status === "success") {
//       setUserDetails(dispatch, response?.data);
//       successToast(response?.data?.message || "Login successfully");
//       router.push("/");
//     } else {
//       errorToast(response?.data?.message);
//     }
//   } catch (error) {
//     throw new Error("Invalid login response", error);
//   } finally {
//     setLoading(false); // Stop the loading spinner or animation
//   }
// };

// export const AuthRegisterApiRequest = async (values) => {
//   try {
//     const response = await AuthService.login(values); // Replace with your API endpoint
//     if (response) {
//       successToast("login");
//     }
//     // Assuming the response contains the user data
//     // return response.data;
//   } catch (error) {
//     // Return error message
//     console.log("Error", error);
//   }
// };

export const Logout = (dispatch, router) => {
  dispatch(resetUserDetails());
  successToast("Logout successfully");
  router.push(`/`);
};

export const loginRequest = createAsyncThunk(
  "auth/login",
  async (
    { values, router, showMessage = true },
    { dispatch, rejectWithValue, getState }
  ) => {
    try {
      const response = await AuthService.login(values);
      if (response?.data?.status === "success") {
        dispatch(setUserDetails(response?.data));
        {
          showMessage &&
            successToast(response?.data?.message || "Login successfully");
        }
        router.push("/");
      } else {
        errorToast(response?.data?.message);
      }
    } catch (error) {
      console.log("loginRequest:error", error);
      return rejectWithValue(error.response.data);
    }
  }
);
export const SignUpRequest = createAsyncThunk(
  "auth/Signup",
  async ({ values, router }, { dispatch, rejectWithValue, getState }) => {
    try {
      const response = await AuthService.register(values);
      if (response?.data?.status === "success") {
        dispatch(setTempUserDetails(values));
        successToast(response?.data?.message);
        router.push("/verify-email");
      } else {
        errorToast(response?.data?.message);
      }
    } catch (error) {
      console.log("loginRequest:error", error);
      return rejectWithValue(error.response.data);
    }
  }
);
export const Verify_email = createAsyncThunk(
  "auth/verify_email",
  async ({ token, data, router }, { dispatch, rejectWithValue, getState }) => {
    try {
      // Make the API call to verify the email link
      const response = await AuthService.verifyEmailLink(token);
      if (response?.data?.status === "success") {
        // Dispatch the login request with the necessary parameters
        dispatch(
          loginRequest({
            values: {
              email: data?.email,
              password: data?.password,
            },
            router,
            showMessage: false, // Avoid showing the toast twice
          })
        );

        // Remove temporary data from local storage safely
        localStorageUtils.removeItem("userData_temp");

        // Instead of mutating the state directly, handle this in your reducer
        // For example, you could dispatch an action like:
        dispatch(clearUserDataTemp());

        successToast(
          response?.data?.message || "Account activated successfully"
        );
      } else {
        // Handle the error case where verification was not successful
        errorToast(response?.data?.message || "Failed to activate account");
        return rejectWithValue(response?.data || "Failed to activate account");
      }
    } catch (error) {
      console.log("Verify_email:error", error);

      // Safely handle errors, returning a default message if specific data is unavailable
      return rejectWithValue(
        error.response?.data || "An error occurred during email verification"
      );
    }
  }
);
