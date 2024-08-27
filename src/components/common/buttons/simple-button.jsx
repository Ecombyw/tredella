"use client";
import theme from "@/configs/theme/theme";
import { Box, Button, CircularProgress } from "@mui/material";

const SimpleButton = ({
  text = "button",
  startIcon,
  endIcon,
  icon,
  onClick,
  variant = "contained",
  disableRipple = false,
  sxProps,
  loading = false,
  disabled,
  disableElevation = true,
  disableTouchRipple = false,
}) => {
  return (
    <>
      {variant === "text" && (
        <Button
          variant={variant}
          onClick={onClick}
          loading={loading}
          disabled={disabled || loading}
          disableRipple={disableRipple}
          startIcon={loading ? "spinner" : startIcon}
          endIcon={loading ? "spinner" : endIcon}
          sx={{
            // color: theme.palette.textColor.secondary,
            // backgroundColor: theme.palette.backgroundColor.white,
            textTransform: "capitalize",
            fontSize: "1rem",
            letterSpacing: "0.8px",
            height: "42px",
            borderRadius: "8px",

            ...sxProps,
          }}
          disableElevation={true}
          disableTouchRipple={true}
        >
          {text}
        </Button>
      )}
      {variant === "contained" && (
        <Button
          variant={variant}
          onClick={onClick}
          loading={loading}
          disabled={disabled || loading}
          disableRipple={disableRipple}
          sx={{
            color: theme.palette.textColor.secondary,
            backgroundColor: theme.palette.backgroundColor.white,
            textTransform: "none",
            fontSize: "1rem",
            height: "42px",
            borderRadius: "8px",
            display: "flex",
            alignItems: "center",
            padding: "12px 16px",
            justifyContent: "center",
            lineHeight: "18.4px",
            "&:hover": {
              color: theme.palette.textColor.primary,
              backgroundColor: theme.palette.backgroundColor.white,
            },
            ...sxProps,
          }}
          disableElevation={disableElevation}
          disableTouchRipple={disableTouchRipple}
        >
          {loading && (
            <Box
              sx={{
                display: "flex",
                alignItems: "center",
                justifyContent: "center",
              }}
            >
              <CircularProgress
                size={18}
                sx={{ color: `${theme.palette.textColor.disabled}` }}
              />
            </Box>
          )}
          {!loading && icon && (
            <span
              style={{
                display: "flex",
                alignItems: "center",
                justifyContent: "center",
              }}
            >
              {icon}
            </span>
          )}
          {text}
        </Button>
      )}
      {variant === "outlined" && (
        <Button
          variant={variant}
          onClick={onClick}
          loading={loading}
          disabled={disabled || loading}
          disableRipple={disableRipple}
          startIcon={loading ? "spinner" : startIcon}
          endIcon={loading ? "spinner" : endIcon}
          sx={{
            // color: theme.palette.textColor.white,
            // backgroundColor: theme.palette.backgroundColor.white,
            textTransform: "capitalize",
            fontSize: "1rem",
            letterSpacing: "0.8px",
            height: "42px",
            borderRadius: "8px",
            display: "flex",
            alignItems: "center",
            justifyContent: "center",
            ...sxProps,
          }}
          disableElevation={disableElevation}
          disableTouchRipple={disableTouchRipple}
        >
          {text}
        </Button>
      )}
    </>
  );
};

export default SimpleButton;
