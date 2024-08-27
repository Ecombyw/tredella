import AuthWrapper from "@/components/common/wrappers/auth-wrapper";
import LoginFormControl from "@/components/forms/auth/login-form-control";
import { TextField } from "@mui/material";
import React from "react";

const Login = () => {
  return (
    <>
      <AuthWrapper
        title="Welcome Back !"
        description={"Login to your account."}
      >
        <LoginFormControl />
      </AuthWrapper>
    </>
  );
};

export default Login;
