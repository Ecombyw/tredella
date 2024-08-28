"use client";
import theme from "@/configs/theme/theme";
import {
  Avatar,
  Box,
  Divider,
  IconButton,
  ListItemIcon,
  Menu,
  MenuItem,
} from "@mui/material";
import React from "react";
import { FaUser } from "react-icons/fa6";

const DropdownMenu = ({
  ariaControlLabel = "account",
  menuButton,
  menuButtonIcon,
  menuButtonSxProps,
  menuDataArray = [
    {
      menuItem: "component",
      component: <FaUser />,
      handleOnClick: () => console.log("onClick"),
      componentStyles: { border: "1px solid red" },
    },
    {
      title: "Profile",
      listItemIcon: <FaUser />,
      handleOnClick: () => console.log("onClick"),
      menuItemStyles: { border: "1px solid red" },
    },
    {
      menuItem: "divider",
    },
  ],
}) => {
  const [anchorEl, setAnchorEl] = React.useState(null);
  const open = Boolean(anchorEl);

  const handleClick = (event) => {
    setAnchorEl(event.currentTarget);
  };

  const handleClose = () => {
    setAnchorEl(null);
  };

  const renderMenuItem = (item, index) => {
    const {
      menuItem = "list-item",
      listItemIcon,
      listItemIconAvatar = false,
      title = "",
      handleOnClick = undefined,
      menuItemStyles = {},
      componentStyles = {},
    } = item;

    switch (menuItem) {
      case "list-item":
        return (
          <MenuItem
            key={index}
            sx={{
              mb: 1,
              display: "flex",
              alignItems: "center",
              gap: "10px",
              color: theme.palette.textColor.secondary,
              fontWeight: "500",
              fontSize: "16px",
              lineHeight: "30px",
              letterSpacing: "0.12px",
              ...menuItemStyles,
            }}
            onClick={() => {
              handleOnClick();
              handleClose();
            }}
          >
            <Box sx={{ width: "22px", display: "flex", alignItems: "center",justifyContent:"start" }}>
              {listItemIconAvatar ? (
                <Avatar
                  sx={{
                    width: 28,
                    height: 28,
                    border: `1px solid ${theme.palette.borderColor.primary}`,
                    bgcolor: "white",
                  }}
                >
                  {listItemIcon}
                </Avatar>
              ) : (
                listItemIcon
              )}
            </Box>

            {title}
          </MenuItem>
        );

      case "component":
        return (
          <Box key={index} sx={{ ...componentStyles, pb: 1 }}>
            {item?.component}
          </Box>
        );

      case "divider":
        return (
          <Divider
            key={index}
            sx={{ ...componentStyles }}
            variant="fullWidth"
          />
        );

      default:
        return null;
    }
  };

  return (
    <>
      <IconButton
        onClick={handleClick}
        size="small"
        sx={{ ...menuButtonSxProps }}
        aria-controls={open ? `${ariaControlLabel}-menu` : undefined}
        aria-haspopup="true"
        aria-expanded={open ? "true" : undefined}
      >
        {menuButton || (
          <Avatar
            variant="circular"
            sx={{
              width: 36,
              height: 36,
              backgroundColor: "transparent",
            }}
          >
            {menuButtonIcon || (
              <FaUser
                color={
                  open
                    ? theme.palette.backgroundColor.primary
                    : theme.palette.backgroundColor.secondary
                }
              />
            )}
          </Avatar>
        )}
      </IconButton>

      <Menu
        anchorEl={anchorEl}
        id={`${ariaControlLabel}-menu`}
        open={open}
        onClose={handleClose}
        PaperProps={{
          elevation: 0,
          sx: {
            overflow: "visible",
            filter: "drop-shadow(0px 2px 8px rgba(0,0,0,0.32))",
            minWidth: "200px",
            padding: "0px 12px ",
            mt: 2.5,
            "& .MuiAvatar-root": {
              width: 32,
              height: 32,
              ml: -0.5,
              mr: 1,
            },
            "&::before": {
              content: '""',
              display: "block",
              position: "absolute",
              top: 0,
              right: 14,
              width: 10,
              height: 10,
              bgcolor: "background.paper",
              transform: "translateY(-50%) rotate(45deg)",
              zIndex: 0,
            },
            "@media(min-width:768px)": {
              padding: "0px 14px ",
              width: "260px",
            },
          },
        }}
        transformOrigin={{ horizontal: "right", vertical: "top" }}
        anchorOrigin={{ horizontal: "right", vertical: "bottom" }}
      >
        {menuDataArray?.map(renderMenuItem)}
      </Menu>
    </>
  );
};

export default DropdownMenu;
