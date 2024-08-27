import { IconButton, InputAdornment, TextField } from "@mui/material";
import { ErrorMessage, Field } from "formik";
import React from "react";

const CustomTextField = ({
  name,
  label,
  sxProps = {},
  error,
  type,
  handleOnClick,
  endAdornmentIcon,
}) => {
  return (
    <Field
      as={TextField}
      name={name}
      label={label}
      variant="outlined"
      size="small"
      fullWidth
      type={type}
      error={error}
      InputProps={{
        endAdornment: (
          <InputAdornment position="start">
            {endAdornmentIcon && (
              <IconButton
                aria-label="toggle password visibility"
                onClick={handleOnClick}
                edge="end"
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
          fontSize: 16, // Adjust font size
          padding: "0 2px", // Adjust padding
        },
        ...sxProps,
      }}
      helperText={<ErrorMessage name={name} />}
    />
  );
};

export default CustomTextField;
