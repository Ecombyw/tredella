"use client";
import CustomTextField from "@/components/common/text-field";
import {
  Box,
  Grid,
  IconButton,
  InputAdornment,
  TextField,
} from "@mui/material";
import { ErrorMessage, Field } from "formik";
import MuiPhoneNumber from "material-ui-phone-number-2";
import React from "react";
import { AiOutlineEye, AiOutlineEyeInvisible } from "react-icons/ai";

const SignUpFormFields = ({ errors, touched, setFieldValue, values }) => {
  const [showPassword, setShowPassword] = React.useState(false);

  const handleClickShowPassword = () => setShowPassword((show) => !show);

  return (
    <Grid container spacing={2}>
      <Grid item xs={12} md={6}>
        <CustomTextField
          name="first_name"
          label="First Name"
          error={touched.first_name && !!errors.first_name}
        />
      </Grid>

      <Grid item xs={12} md={6}>
        <CustomTextField
          name="last_name"
          label="Last Name"
          error={touched.last_name && !!errors.last_name}
        />
      </Grid>

      <Grid item xs={12} md={12}>
        <CustomTextField
          name="email"
          label="Email"
          error={touched.email && !!errors.email}
        />
      </Grid>

      <Grid item xs={12} md={12}>
        <MuiPhoneNumber
          name="mobile_number"
          value={values.mobile_number}
          onChange={(value) => setFieldValue("mobile_number", value)}
          fullWidth
          defaultCountry="us"
          label="Phone Number"
        //   margin="dense"
          variant="outlined"
          size="small"
          error={touched.mobile_number && !!errors.mobile_number}
          helperText={touched.mobile_number && errors.mobile_number}
          sx={{
            fontSize: "1rem",
            "& .MuiButtonBase-root.MuiIconButton-root.MuiIconButton-sizeMedium ":
              {
                fontSize: "1rem",
              },
          }}
        />
      </Grid>

      <Grid item xs={12} md={6}>
        <CustomTextField
          name="password"
          label="Password"
          type={showPassword ? "text" : "password"}
          error={touched.password && !!errors.password}
          handleOnClick={handleClickShowPassword}
          endAdornmentIcon={
            showPassword ? (
              <AiOutlineEyeInvisible size={18} />
            ) : (
              <AiOutlineEye size={18} />
            )
          } // Example icons
        />
      </Grid>

      <Grid item xs={12} md={6}>
        <CustomTextField
          name="confirm_password"
          label="Confirm Password"
          type={showPassword ? "text" : "password"}
          error={touched.confirm_password && !!errors.confirm_password}
          handleOnClick={handleClickShowPassword}
          endAdornmentIcon={
            showPassword ? (
              <AiOutlineEyeInvisible size={18} />
            ) : (
              <AiOutlineEye size={18} />
            )
          }
        />
      </Grid>
    </Grid>
  );
};

export default SignUpFormFields;
