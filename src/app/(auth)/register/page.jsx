import AuthWrapper from "@/components/common/wrappers/auth-wrapper";
import LoginFormControl from "@/components/forms/auth/login-form-control";
import SignUpFormControl from "@/components/forms/auth/sign-up-form-control";
import { TextField } from "@mui/material";
import React from "react";

const Register = () => {
  return (
    <>
      <AuthWrapper
        title="Create your account"
        description={"Please enter valid details to continue with tredella."}
      >
        <SignUpFormControl />
      </AuthWrapper>
    </>
  );
};

export default Register;
