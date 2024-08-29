"use client";
import NextImage from "@/components/common/next-image";
import PrimaryHeading from "@/components/typography/primary-heading";
import PrimaryTitle from "@/components/typography/primary-title";
import theme from "@/configs/theme/theme";
import { Box } from "@mui/material";
import { useSelector } from "react-redux";
import MainLogo from "../../../../public/assets/images/main_logo.webp";

const Page = () => {
    const { userData_temp } = useSelector((state) => state.auth);

  return (
    <Box
      sx={{
        display: "flex",
        flexDirection: "column",
        alignItems: "center",
        justifyContent: "center",
        gap: "20px",
        width: "100%",
        minHeight: "50vh",
        padding: "0px 20px",
      }}
    >
      <Box
        sx={{
          display: "flex",
          alignItems: "center",
          justifyContent: "center",
          py: "8px",
        }}
      >
        <NextImage src={MainLogo} height={60} width={180} />
      </Box>
      <PrimaryTitle
        title={"Please check your registered email, to verify your account!"}
        sxProps={{
          color: theme.palette.textColor.secondary,
          fontSize: "2rem",
        }}
      />
      <PrimaryHeading
        heading={`@email-${userData_temp?.email}`}
        sxProps={{ color: theme.palette.textColor.paragraph }}
      />
    </Box>
  );
};

export default Page;
