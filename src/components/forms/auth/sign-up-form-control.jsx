"use client";
import React from "react";
import { Formik, Form, Field, ErrorMessage } from "formik";
import * as Yup from "yup";
import { TextField, Button, Box } from "@mui/material";
import {
  loginFormValidation,
  signUpFormValidation,
} from "@/configs/validation/yup-validation";
import LoginFormFields from "./login-form-fields";
import Link from "next/link";
import SimpleButton from "@/components/common/buttons/simple-button";
import theme from "@/configs/theme/theme";
import SignUpFormFields from "./sign-up-form-fields";

const SignUpFormControl = () => {
  const initialValues = {
    first_name: "",
    last_name: "",
    email: "",
    mobile_number: "",
    password: "",
    confirm_password: "",
  };

  // Form submission handler
  const onSubmit = (values) => {
    console.log("Form data", values);
  };
  return (
    <Formik
      initialValues={initialValues}
      validationSchema={signUpFormValidation}
      onSubmit={onSubmit}
    >
      {({ errors, touched, isValid, dirty, setFieldValue, values }) => (
        <Form>
          <SignUpFormFields
            dirty={dirty}
            errors={errors}
            isValid={isValid}
            touched={touched}
            setFieldValue={setFieldValue}
            values={values}
          />
          <SimpleButton
            text={"Sign in"}
            type="submit"
            fullWidth
            loading={false}
            disabled={!(dirty && isValid)}
            disableElevation={false}
            sxProps={{
              mt: 2,
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
          />
          <Box my={1} textAlign={"center"} gap={2}>
            Already have an Account ?
            <Link
              href="/login"
              variant="body2"
              style={{
                paddingLeft: "2px",
                color: theme.palette.textColor.primary,
                textDecoration: "underline",
              }}
            >
              Login
            </Link>
          </Box>
        </Form>
      )}
    </Formik>
  );
};

export default SignUpFormControl;
