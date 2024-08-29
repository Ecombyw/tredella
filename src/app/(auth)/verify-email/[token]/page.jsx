"use client";
import { useRouter } from "next/navigation";
import { useEffect, useState } from "react";
import axios from "axios";
import { useDispatch, useSelector } from "react-redux";
import { Verify_email } from "@/lib/redux/actions/auth";
import { errorToast } from "@/configs/utils/toaster";
import { Box } from "@mui/material";
import NextImage from "@/components/common/next-image";
import PrimaryTitle from "@/components/typography/primary-title";
import theme from "@/configs/theme/theme";
import PrimaryHeading from "@/components/typography/primary-heading";
import SimpleButton from "@/components/common/buttons/simple-button";
import MainLogo from "../../../../../public/assets/images/main_logo.webp";
import { STATUSES } from "@/configs/constants/default-values";

export default function VerifyEmail({ params }) {
  const { token = undefined } = params;
  const router = useRouter();
  const dispatch = useDispatch();
  const { userData_temp, status } = useSelector((state) => state.auth);
  console.log("userData_temp", userData_temp);
  const verifyEmail = async (token, data) => {
    try {
      dispatch(Verify_email({ token, data, router }));
    } catch (error) {
      errorToast("Invalid or expired token.");
    }
  };
  return (
    <>
      <Box
        sx={{
          display: "flex",
          flexDirection: "column",
          alignItems: "center",
          justifyContent: "center",
          gap: "20px",
          width: "100%",
          padding: "0px 20px",
          minHeight: "50vh",
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
        <Box sx={{ textAlign: "center" }}>
          <PrimaryHeading
            heading={`Activate your account`}
            sxProps={{ color: theme.palette.textColor.secondary }}
          />
          <PrimaryHeading
            heading={`By clicking the verify email button given below :`}
            sxProps={{ color: theme.palette.textColor.secondary }}
          />
        </Box>

        <SimpleButton
          text="Verify Email"
          onClick={() => verifyEmail(token, userData_temp)}
          sxProps={{
            border: `1px solid ${theme.palette.borderColor.primary}`,
          }}
          loading={status === STATUSES.LOADING ? true : false}
          disabled={status === STATUSES.LOADING ? true : false}
        />
      </Box>
    </>
  );
}
