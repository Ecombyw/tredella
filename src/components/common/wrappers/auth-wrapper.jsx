"use client";
import theme from "@/configs/theme/theme";
import { Box, Grid } from "@mui/material";
import React from "react";
import NextImage from "../next-image";
import MainLogo from "../../../../public/assets/images/main_logo.webp";
import PrimaryTitle from "@/components/typography/primary-title";
import PrimaryDescription from "@/components/typography/primary-description";
import SecondaryTitle from "@/components/typography/secondary-title";
import PrimaryHeading from "@/components/typography/primary-heading";
import SecondaryHeading from "@/components/typography/secondary-heading";

const AuthWrapper = ({ title, description, children }) => {
  return (
    <>
      <Box
        sx={{
          width: "100%",
          minHeight: "100vh",
          display: "flex",
          alignItems: "center",
          justifyContent: "center",
          padding: "10px",
          backgroundColor: theme.palette.backgroundColor.primary,
          "@media(min-width:769px)": {
            height: "100vh",
          },
          "@media(min-width:992px)": {
            padding: "0px",
            backgroundColor: theme.palette.backgroundColor.white,
          },

          "@media(min-width:1440px)": {
            height: "680px",
            padding: "60px",
            maxWidth: "1440px",
            mx: "auto",
          },
        }}
      >
        <Box
          sx={{
            width: "100%",
            height: "100%",
            padding: "10px",
            backgroundColor: theme.palette.backgroundColor.white,
            boxShadow: 4,

            overflow: "hidden",
            "@media(min-width:992px)": {
              padding: "0px",
            },
          }}
        >
          <Box
            sx={{
              width: "100%",
              textAlign: "center",
              "@media(min-width:992px)": {
                display: "none",
              },
            }}
          >
            <NextImage src={MainLogo} height={60} width={180} />
          </Box>
          <Box
            sx={{
              "@media(min-width:992px)": {
                display: "flex",
                height: "100%",
              },
            }}
          >
            <Box
              sx={{
                display: "none",
                "@media(min-width:992px)": {
                  width: "100%",
                  display: "inline-flex",
                  flexDirection: "column",
                  justifyContent: "center",
                  gap: "40px",
                  backgroundColor: theme.palette.backgroundColor.primary,
                  borderBottomRightRadius: "20px",
                  borderTopRightRadius: "20px",
                },
              }}
            >
              <Box
                sx={{
                  width: "90%",
                  textAlign: "center",
                  color: theme.palette.textColor.white,
                }}
              >
                <PrimaryHeading
                  heading={title}
                  sxProps={{
                    fontSize: "2.5rem",
                    mb: 4,
                  }}
                />
                <SecondaryHeading
                  heading={description}
                  sxProps={{ fontSize: "1.2rem" }}
                />
              </Box>
              <Box sx={{ width: "100%", textAlign: "center" }}></Box>
            </Box>

            {/* ============= right */}
            <Box
              sx={{
                width: "100%",
                display: "flex",
                flexDirection: "column",
                justifyContent: "center",
                "@media (max-width:425px)": {
                  mt: 2,
                },
                "@media (min-width:425px)": {
                  width: "300px",
                  mx: "auto",
                },
                "@media (min-width:768px) and (max-width:992px)": {
                  width: "460px",
                  mt: 0,
                },
                "@media (min-width:992px)": {
                  width: "100%",
                  padding: "10px 60px",
                },
                "@media (min-width:1024px)": {
                  padding: "10px 100px",
                },
                "@media (min-width:1440px)": {
                  padding: "10px 120px",
                },
              }}
            >
              {" "}
              <Box
                sx={{
                  display: "none",
                  "@media(min-width:992px)": {
                    display: "block",
                    width: "100%",
                    textAlign: "center",
                    mb: 4,
                  },
                }}
              >
                <NextImage src={MainLogo} height={80} width={200} />
              </Box>
              {children}
            </Box>
          </Box>
        </Box>
      </Box>
    </>
  );
};

export default AuthWrapper;
