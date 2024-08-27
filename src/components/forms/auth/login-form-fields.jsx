"use client";
import CustomTextField from "@/components/common/text-field";
import { Box, Grid } from "@mui/material";
import Link from "next/link";
import { useState } from "react";
import { AiOutlineEye, AiOutlineEyeInvisible } from "react-icons/ai";

const LoginFormFields = ({ errors, touched, isValid, dirty }) => {
  const [showPassword, setShowPassword] = useState (false);

  const handleClickShowPassword = () => setShowPassword((show) => !show);
  return (
    <>
      <Grid container spacing={2}>
        <Grid item xs={12}>
          <CustomTextField
            name="email"
            label="Email"
            error={touched.email && !!errors.email}
          />
        </Grid>
        <Grid item xs={12}>
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
      </Grid>
      <Box my={1} textAlign={"end"}>
        <Link href="/forgot-password" variant="body2" color="primary">
          Forgot password?
        </Link>
      </Box>
    </>
  );
};

export default LoginFormFields;
