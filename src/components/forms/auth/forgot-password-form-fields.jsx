"use client";
import CustomTextField from "@/components/common/text-field";
import PrimaryDescription from "@/components/typography/primary-description";
import PrimaryHeading from "@/components/typography/primary-heading";
import SecondaryDescription from "@/components/typography/secondary-description";
import SecondaryHeading from "@/components/typography/secondary-heading";
import { Box, Grid } from "@mui/material";
import Link from "next/link";
import { useState } from "react";

const ForgotPasswordFormFields = ({ errors, touched, isValid, dirty }) => {
  return (
    <>
      <Box textAlign={"start"} mb={2}>
        <SecondaryHeading heading={"Enter your registered email !"} />
      </Box>
      <Grid container spacing={2}>
        <Grid item xs={12}>
          <CustomTextField
            name="email"
            label="Email"
            error={touched.email && !!errors.email}
          />
        </Grid>
      </Grid>
    </>
  );
};

export default ForgotPasswordFormFields;
