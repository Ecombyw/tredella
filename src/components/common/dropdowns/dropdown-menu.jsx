import theme from "@/configs/theme/theme";
import {
  Avatar,
  Divider,
  IconButton,
  ListItemIcon,
  Menu,
  MenuItem,
  Tooltip,
} from "@mui/material";
import React from "react";
import { FaUser, FaUserPlus } from "react-icons/fa";
import { RiLogoutCircleLine } from "react-icons/ri";

const DropdownMenu = ({
  icon,
  sxProps,
  menuArray = [],
  tooltipTitle = "Profile",
}) => {
  const [anchorEl, setAnchorEl] = React.useState(null);
  const open = Boolean(anchorEl);
  const handleClick = (event) => {
    setAnchorEl(event.currentTarget);
  };
  const handleClose = () => {
    setAnchorEl(null);
  };
  return (
    <>
      <IconButton
        onClick={handleClick}
        size="small"
        sx={{
          height: "40px",
          width: "40px",
          color: open
            ? theme.palette.textColor.primary
            : theme.palette.textColor.secondary,
          "&:hover": {
            color: theme.palette.textColor.primary,
          },
          backgroundColor: open && `${theme.palette.backgroundColor.main}`,
          ...sxProps,
        }}
        aria-controls={open ? `${tooltipTitle}-menu` : undefined}
        aria-haspopup="true"
        aria-expanded={open ? "true" : undefined}
      >
        {icon || <FaUser size={18} />}
      </IconButton>
      <Menu
        anchorEl={anchorEl}
        id={`${tooltipTitle}-menu`}
        open={open}
        onClose={handleClose}
        onClick={handleClose}
        PaperProps={{
          elevation: 0,
          sx: {
            overflow: "visible",
            filter: "drop-shadow(0px 2px 8px rgba(0,0,0,0.32))",
            mt: 1.5,
            minWidth: "280px",
            padding: "0px 10px",
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
          },
        }}
        transformOrigin={{ horizontal: "right", vertical: "top" }}
        anchorOrigin={{ horizontal: "right", vertical: "bottom" }}
      >
        <MenuItem onClick={handleClose}>
          <ListItemIcon>
            <FaUser size={18} />
          </ListItemIcon>
          Login
        </MenuItem>
        <MenuItem onClick={handleClose}>
          <ListItemIcon>
            <FaUserPlus size={22} />
          </ListItemIcon>
          Register
        </MenuItem>
        <Divider />
        <MenuItem onClick={handleClose}>
          <ListItemIcon>
            <RiLogoutCircleLine size={22} />
          </ListItemIcon>
          Logout
        </MenuItem>
      </Menu>
    </>
  );
};

export default DropdownMenu;
