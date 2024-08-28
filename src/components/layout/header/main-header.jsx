"use client";
import DropdownMenu from "@/components/common/dropdowns/dropdown-menu";
import NextImage from "@/components/common/next-image";
import SecondaryHeading from "@/components/typography/secondary-heading";
import theme from "@/configs/theme/theme";
import { Badge, Box, styled } from "@mui/material";
import { FaHeart, FaUser, FaUserPlus } from "react-icons/fa";
import { IoIosHelpCircleOutline, IoMdCart } from "react-icons/io";
import MainLogo from "../../../../public/assets/images/main_logo.webp";
import LayoutProvider from "../provider/layout-provider";
import { useRouter } from "next/navigation";
import { MdDashboard, MdOutlineDashboard } from "react-icons/md";
import { TbListDetails } from "react-icons/tb";
import { IoSettings, IoSettingsOutline } from "react-icons/io5";
import { RiLogoutCircleLine } from "react-icons/ri";
import { FiShoppingBag } from "react-icons/fi";
import { Logout } from "@/lib/redux/actions/auth";
import { useDispatch } from "react-redux";

const StyledBadge = styled(Badge)(({ theme }) => ({
  "& .MuiBadge-badge": {
    right: -4,
    top: -4,
    // border: `1px solid ${theme.palette.textColor.primary} !important`,
    backgroundColor: theme.palette.backgroundColor.main,
    color: theme.palette.textColor.primary,
    padding: "0 4px",
  },
}));

const MainHeader = ({ user }) => {
  const router = useRouter();
  const dispatch = useDispatch();
  const authDropdownMenu = [
    {
      menuItem: "component",
    },
    {
      title: "Login",
      listItemIcon: <FaUser size={18} />,
      handleOnClick: () => router.push("/login"),
    },
    {
      title: "Register",
      listItemIcon: <FaUserPlus size={22} />,
      handleOnClick: () => router.push("/register"),
    },
  ];
  const userDropdownMenu = [
    {
      menuItem: "component",
      // component: <RenderUserDetails user={user} />,
    },
    {
      title: "Dashboard",
      listItemIcon: <MdOutlineDashboard size={22} />,
      handleOnClick: () => router.push("/dashboard"),
    },
    {
      title: "Profile",
      listItemIcon: <TbListDetails size={22} />,
      handleOnClick: () => router.push("/profile"),
    },
    {
      title: "Track Order",
      listItemIcon: <FiShoppingBag size={22} />,
      handleOnClick: () => router.push("/profile"),
    },

    {
      title: "Settings",
      listItemIcon: <IoSettingsOutline size={22} />,
      handleOnClick: () => router.push("/settings"),
    },
    {
      title: "Help Center",
      listItemIcon: <IoIosHelpCircleOutline size={22} />,
      // handleOnClick: () => console.log("help"),
    },
    {
      menuItem: "divider",
    },
    {
      title: "Sign Out",
      listItemIcon: <RiLogoutCircleLine size={22} />,
      handleOnClick: () => Logout(dispatch, router),
      menuItemStyles: {
        color: `${theme.palette.textColor.primary} !important`,
      },
    },
  ];
  return (
    <LayoutProvider
      childSxProps={{
        display: "flex",
        alignItems: "center",
        justifyContent: "space-between",
        gap: "12px",
      }}
    >
      <Box
        sx={{
          display: "flex",
          alignItems: "center",
          py: "8px",
        }}
      >
        <NextImage src={MainLogo} height={60} width={200} />
      </Box>
      {/* <Box sx={{ border: "1px solid black", width: "100%", height: "auto" }}>
                search
            </Box> */}
      <Box
        sx={{
          // border: "1px solid white",
          display: "flex",
          alignItems: "center",
          justifyContent: "space-between",
          gap: "24px",
          mt: 3,
        }}
      >
        <StyledBadge badgeContent={4}>
          <SecondaryHeading
            heading={"Wishlist"}
            icon={<FaHeart size={18} />}
            sxProps={{
              cursor: "pointer",
              color: theme.palette.textColor.secondary,
              display: "flex",
              alignItems: "center",
              gap: "6px",
              "&:hover": {
                color: theme.palette.textColor.primary,
              },
            }}
          />
        </StyledBadge>
        <StyledBadge badgeContent={8}>
          <SecondaryHeading
            heading={"Cart"}
            icon={<IoMdCart size={22} />}
            sxProps={{
              cursor: "pointer",
              color: theme.palette.textColor.secondary,
              display: "flex",
              alignItems: "center",
              gap: "6px",
              "&:hover": {
                color: theme.palette.textColor.primary,
              },
            }}
          />
        </StyledBadge>
        <Box
          sx={{
            display: "flex",
            alignItems: "center",
            pb: "4px",
          }}
        >
          <DropdownMenu
            icon={<FaUser size={18} />}
            ariaControlLabel="profile"
            menuDataArray={user ? userDropdownMenu : authDropdownMenu}
          />
          {/* {user && <SecondaryHeading heading={user?.first_name} />} */}
        </Box>
      </Box>
    </LayoutProvider>
  );
};

export default MainHeader;
