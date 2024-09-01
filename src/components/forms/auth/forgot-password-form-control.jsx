"use client";
import React from "react";
import { Formik, Form, Field, ErrorMessage } from "formik";
import * as Yup from "yup";
import { TextField, Button, Box } from "@mui/material";
import {
  forgotPasswordFormValidation,
  loginFormValidation,
} from "@/configs/validation/yup-validation";
import LoginFormFields from "./login-form-fields";
import Link from "next/link";
import SimpleButton from "@/components/common/buttons/simple-button";
import theme from "@/configs/theme/theme";
import ForgotPasswordFormFields from "./forgot-password-form-fields";

const ForgotPasswordFormControl = () => {
  const initialValues = {
    email: "",
  };

  // Form submission handler
  const onSubmit = (values) => {
    console.log("Form data", values);
  };
  return (
  <div>forget password</div>  );
};

export default ForgotPasswordFormControl;
