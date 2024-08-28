"use client";
import React, { useState } from "react";
import { Box, Grid } from "@mui/material";
import { AiOutlineEye, AiOutlineEyeInvisible } from "react-icons/ai";
import CustomTextField from "@/components/common/text-field";
import Link from "next/link";

const LoginFormFields = ({ control, loading }) => {
  const [showPassword, setShowPassword] = useState(false);

  const handleClickShowPassword = () => setShowPassword((show) => !show);

  return (
    <>
      <Grid container spacing={2}>
        <Grid item xs={12}>
          <CustomTextField
            control={control}
            name="email"
            label="Email"
            disabled={loading}
          />
        </Grid>
        <Grid item xs={12}>
          <CustomTextField
            control={control}
            name="password"
            label="Password"
            disabled={loading}
            type={showPassword ? "text" : "password"}
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
      <Box my={1} textAlign={"end"}>
        <Link
          disabled={loading}
          href="/forgot-password"
          variant="body2"
          color="primary"
        >
          Forgot password?
        </Link>
      </Box>
    </>
  );
};

export default LoginFormFields;
