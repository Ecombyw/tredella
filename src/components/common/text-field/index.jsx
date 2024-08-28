"use client";
import { IconButton, InputAdornment, TextField } from "@mui/material";
import { Controller } from "react-hook-form";
import React from "react";

const CustomTextField = ({
  name,
  label,
  sxProps = {},
  type,
  handleOnClick,
  endAdornmentIcon,
  control,
  disabled,
}) => {
  return (
    <Controller
      name={name}
      control={control}
      render={({ field, fieldState: { error } }) => (
        <TextField
          {...field}
          label={label}
          variant="outlined"
          size="small"
          fullWidth
          disabled={disabled}
          type={type}
          error={!!error}
          helperText={error ? error.message : null}
          InputProps={{
            endAdornment: (
              <InputAdornment position="start">
                {endAdornmentIcon && (
                  <IconButton
                    aria-label="toggle password visibility"
                    onClick={handleOnClick}
                    edge="center"
                    sx={{ p: 1, height: 36, width: 36 }}
                  >
                    {endAdornmentIcon}
                  </IconButton>
                )}
              </InputAdornment>
            ),
          }}
          sx={{
            "& .MuiInputBase-root": {
              fontSize: 16,
              padding: "0px 2px",
            },
            ...sxProps,
          }}
        />
      )}
    />
  );
};

export default CustomTextField;
