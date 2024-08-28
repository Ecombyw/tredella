"use client";
import React, { useState } from "react";
import { useForm, FormProvider } from "react-hook-form";
import { Box } from "@mui/material";
import LoginFormFields from "./login-form-fields";
import Link from "next/link";
import SimpleButton from "@/components/common/buttons/simple-button";
import theme from "@/configs/theme/theme";
import { yupResolver } from "@hookform/resolvers/yup";
import { loginFormValidation } from "@/configs/validation/yup-validation";
import { AuthLoginApiRequest } from "@/lib/redux/actions/auth";
import { getReducer } from "@/lib/redux/reducer";
import { useDispatch, useSelector } from "react-redux";
import { useRouter } from "next/navigation";

const LoginFormControl = () => {
  const {
    control,
    handleSubmit,
    setValue,
    getValues,
    setError,
    reset,
    formState = { errors },
  } = useForm({
    defaultValues: {
      email: "",
      password: "",
    },
    mode: "onChange",
    resolver: yupResolver(loginFormValidation),
  });
  const [loading, setLoading] = useState(false);
  const dispatch = useDispatch();
  const router = useRouter();

  // Form submission handler
  const submitForm = async (values) => {
    AuthLoginApiRequest(dispatch, values, setLoading, router);
    reset();
  };
  return (
    <form onSubmit={handleSubmit(submitForm)}>
      <LoginFormFields
        control={control}
        setValue={setValue}
        loading={loading}
      />
      <SimpleButton
        text={"Login"}
        fullWidth
        disabled={!(formState.isDirty && formState.isValid)}
        sxProps={{
          width: "100%",
          height: "38px",
          borderRadius: "4px",
          fontSize: "18px",
          textTransform: "uppercase",
          display: "flex",
          gap: "8px",
          backgroundColor: theme.palette.backgroundColor.primary,
          color: theme.palette.textColor.white,
        }}
        loading={loading}
      />
      <Box my={1} textAlign={"center"} gap={2}>
        Don't have an Account?
        <Link
          href="/register"
          style={{
            paddingLeft: "2px",
            color: theme.palette.textColor.primary,
            textDecoration: "underline",
          }}
        >
          Sign up
        </Link>
      </Box>
    </form>
  );
};

export default LoginFormControl;
