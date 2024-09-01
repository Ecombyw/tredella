import { createSlice } from "@reduxjs/toolkit";
import { loginRequest, SignUpRequest, Verify_email } from "../actions/auth";
import { STATUSES } from "@/configs/constants/default-values";
import cookieUtils from "@/configs/utils/cookieUtils";
import localStorageUtils from "@/configs/utils/localStorageUtils";

const authSlice = createSlice({
  name: "auth",
  initialState: {
    userData: localStorageUtils.getItem("userData"),
    status: STATUSES.IDLE,
    error: null,
  },
  reducers: {
    setUserDetails: (state, action) => {
      state.userData = action.payload.buyer;
      localStorageUtils.setItem("userData", action.payload.buyer);
      cookieUtils.setCookie("token", action.payload.token);
    },

    setCompanyDetails: (state, action) => {
      state.userData["company"] = action.payload;
      // localStorage.setItem("userData", JSON.stringify(state.userData));
    },
    resetUserDetails: (state) => {
      localStorageUtils.removeItem("userData");
      cookieUtils.removeCookie("token");
      state.userData = null;
    },
  

  },
  extraReducers: (builder) => {
    builder
      .addCase(loginRequest.pending, (state) => {
        state.status = STATUSES.LOADING;
      })
      .addCase(loginRequest.fulfilled, (state, action) => {
        state.status = STATUSES.IDLE;
        // if (action.payload) {
        //   localStorage.setItem("userData", JSON.stringify(action.payload));
        //   state.userData = action.payload;
        // }
      })
      .addCase(loginRequest.rejected, (state, action) => {
        state.status = STATUSES.ERROR;
        state.error = action.payload;
      })
      .addCase(SignUpRequest.pending, (state) => {
        state.status = STATUSES.LOADING;
      })
      .addCase(SignUpRequest.fulfilled, (state, action) => {
        state.status = STATUSES.IDLE;
      })
      .addCase(SignUpRequest.rejected, (state, action) => {
        state.status = STATUSES.ERROR;
        state.error = action.payload;
      })
      .addCase(Verify_email.pending, (state) => {
        state.status = STATUSES.LOADING;
      })
      .addCase(Verify_email.fulfilled, (state, action) => {
        state.status = STATUSES.IDLE;
      })
      .addCase(Verify_email.rejected, (state, action) => {
        state.status = STATUSES.ERROR;
        state.error = action.payload;
      });
  },
});

export default authSlice.reducer;
export const { setUserDetails, resetUserDetails, setTempUserDetails,clearUserDataTemp } =
  authSlice.actions;
