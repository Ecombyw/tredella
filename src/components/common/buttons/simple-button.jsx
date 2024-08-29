"use client";
import theme from "@/configs/theme/theme";
import { Box, Button, CircularProgress } from "@mui/material";

const SimpleButton = ({
  text = "button",
  type = "submit",
  startIcon,
  endIcon,
  icon,
  onClick = undefined,
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
          disabled={disabled || loading}
          disableRipple={disableRipple}
          startIcon={loading ? <CircularProgress size={18} /> : startIcon}
          endIcon={loading ? <CircularProgress size={18} /> : endIcon}
          sx={{
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
          {loading ? <CircularProgress size={18} /> : text}
        </Button>
      )}
      {variant === "contained" && (
        <Button
          type={type}
          variant={variant}
          onClick={onClick}
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
              border: `1px solid ${theme.palette.borderColor.primary}`,
            },
            ...sxProps,
          }}
          disableElevation={disableElevation}
          disableTouchRipple={disableTouchRipple}
        >
          {loading ? (
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
          ) : icon ? (
            <span
              style={{
                display: "flex",
                alignItems: "center",
                justifyContent: "center",
              }}
            >
              {icon}
            </span>
          ) : (
            text
          )}
        </Button>
      )}
      {variant === "outlined" && (
        <Button
          variant={variant}
          onClick={onClick}
          disabled={disabled || loading}
          disableRipple={disableRipple}
          startIcon={loading ? <CircularProgress size={18} /> : startIcon}
          endIcon={loading ? <CircularProgress size={18} /> : endIcon}
          sx={{
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
          {loading ? <CircularProgress size={18} /> : text}
        </Button>
      )}
    </>
  );
};

export default SimpleButton;
