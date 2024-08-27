"use client";
import DropdownMenu from "@/components/common/dropdowns/dropdown-menu";
import NextImage from "@/components/common/next-image";
import SecondaryHeading from "@/components/typography/secondary-heading";
import theme from "@/configs/theme/theme";
import { Badge, Box, styled } from "@mui/material";
import { FaHeart, FaUser } from "react-icons/fa";
import { IoMdCart } from "react-icons/io";
import MainLogo from "../../../../public/assets/images/main_logo.webp";
import LayoutProvider from "../provider/layout-provider";
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

const MainHeader = () => {
  let user = null;
  return (
    <LayoutProvider
      parentSxProps={
        {
          //  backgroundColor: theme.palette.backgroundColor.white
        }
      }
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
          <DropdownMenu icon={<FaUser size={18} />} />
        </Box>
      </Box>
    </LayoutProvider>
  );
};

export default MainHeader;
