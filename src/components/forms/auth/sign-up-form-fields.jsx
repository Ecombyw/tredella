"use client";
import React, { useState } from "react";
import { Grid, MenuItem, TextField } from "@mui/material";
import { AiOutlineEye, AiOutlineEyeInvisible } from "react-icons/ai";
import CustomTextField from "@/components/common/text-field";
import MuiPhoneNumber from "material-ui-phone-number-2";
import { Controller, useFormContext } from "react-hook-form"; // Using React Hook Form
import { countries } from "@/configs/constants/dataArray";

const SignUpFormFields = ({ control, setValue, loading, errors }) => {
  const [showPassword, setShowPassword] = useState(false);

  const handleClickShowPassword = () => setShowPassword((show) => !show);

  return (
    <Grid container spacing={2}>
      <Grid item xs={12} md={6}>
        <CustomTextField
          control={control}
          name="first_name"
          label="First Name"
          disabled={loading}
          // error={!!errors.first_name}
          // helperText={errors.first_name?.message}
        />
      </Grid>

      <Grid item xs={12} md={6}>
        <CustomTextField
          control={control}
          name="last_name"
          label="Last Name"
          disabled={loading}
          // error={!!errors.last_name}
          // helperText={errors.last_name?.message}
        />
      </Grid>

      <Grid item xs={12}>
        <CustomTextField
          control={control}
          name="email"
          label="Email"
          disabled={loading}
          // error={!!errors.email}
          // helperText={errors.email?.message}
        />
      </Grid>

      <Grid item xs={12} md={6}>
        <Controller
          name="country"
          control={control}
          render={({ field }) => (
            <TextField
              {...field}
              select
              label="Country"
              fullWidth
              size="small"
              error={!!errors.country}
              helperText={errors.country ? errors.country.message : ""}
              disabled={loading}
            >
              {countries?.map((country) => (
                <MenuItem key={country.code} value={country.label}>
                  {country.label}
                </MenuItem>
              ))}
            </TextField>
          )}
        />
      </Grid>
      <Grid item xs={12} md={6}>
        <Controller
          name="mobile_number"
          control={control}
          render={({ field }) => (
            <MuiPhoneNumber
              {...field}
              fullWidth
              defaultCountry="us"
              label="Phone Number"
              variant="outlined"
              size="small"
              disabled={loading}
              error={!!errors.mobile_number}
              helperText={errors.mobile_number?.message}
              onChange={(value) => setValue("mobile_number", value)}
              sx={{
                fontSize: "1rem",
                "& .MuiButtonBase-root.MuiIconButton-root.MuiIconButton-sizeMedium":
                  {
                    fontSize: "1rem",
                  },
              }}
            />
          )}
        />
      </Grid>

      <Grid item xs={12} md={6}>
        <CustomTextField
          control={control}
          name="password"
          label="Password"
          type={showPassword ? "text" : "password"}
          disabled={loading}
          // error={!!errors.password}
          // helperText={errors.password?.message}
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

      <Grid item xs={12} md={6}>
        <CustomTextField
          control={control}
          name="confirm_password"
          label="Confirm Password"
          type={showPassword ? "text" : "password"}
          disabled={loading}
          error={!!errors.confirm_password}
          helperText={errors.confirm_password?.message}
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
