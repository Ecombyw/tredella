import AuthWrapper from "@/components/common/wrappers/auth-wrapper";
import ForgotPasswordFormControl from "@/components/forms/auth/forgot-password-form-control";
import LoginFormControl from "@/components/forms/auth/login-form-control";
import { TextField } from "@mui/material";
import React from "react";

const ForgotPassword = () => {
  return (
    <>
      <AuthWrapper
        title="Forgot Password"
        description={"We will send a reset link to your registered email !"}
      >
        <ForgotPasswordFormControl />
      </AuthWrapper>
    </>
  );
};

export default ForgotPassword;
