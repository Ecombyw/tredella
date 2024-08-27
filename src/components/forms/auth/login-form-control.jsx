"use client";
import React from "react";
import { Formik, Form, Field, ErrorMessage } from "formik";
import * as Yup from "yup";
import { TextField, Button, Box } from "@mui/material";
import { loginFormValidation } from "@/configs/validation/yup-validation";
import LoginFormFields from "./login-form-fields";
import Link from "next/link";
import SimpleButton from "@/components/common/buttons/simple-button";
import theme from "@/configs/theme/theme";

const LoginFormControl = () => {
  const initialValues = {
    email: "",
    password: "",
  };

  // Form submission handler
  const onSubmit = (values) => {
    console.log("Form data", values);
  };
  return (
    <Formik
      initialValues={initialValues}
      validationSchema={loginFormValidation}
      onSubmit={onSubmit}
    >
      {({ errors, touched, isValid, dirty }) => (
        <Form>
          <LoginFormFields
            dirty={dirty}
            errors={errors}
            isValid={isValid}
            touched={touched}
          />
          <SimpleButton
            text={"Login"}
            type="submit"
            fullWidth
            loading={false}
            disabled={!(dirty && isValid)}
            disableElevation={false}
            // icon={<FaAngleRight size={18} fontWeight={"400"} />}
            sxProps={{
              width: "100%",
              height: "38px",
              borderRadius: "4px",
              //   border: `1px solid ${theme.palette.borderColor.main}`,
              fontSize: "18px",
              textTransform: "uppercase",
              display: "flex",
              gap: "8px",
              backgroundColor: theme.palette.backgroundColor.primary,
              color: theme.palette.textColor.white,
            }}
          />
          <Box my={1} textAlign={"center"} gap={2}>
            Don't have an Account ?
            <Link
              href="/register"
              variant="body2"
              style={{
                paddingLeft: "2px",
                color: theme.palette.textColor.primary,
                textDecoration: "underline",
              }}
            >
              Sign up
            </Link>
          </Box>
        </Form>
      )}
    </Formik>
  );
};

export default LoginFormControl;
