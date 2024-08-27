import React from "react";
import LayoutProvider from "../provider/layout-provider";
import { Box, Divider, Grid, List, ListItem, Typography } from "@mui/material";
import SecondaryDescription from "@/components/typography/secondary-description";
import SecondaryHeading from "@/components/typography/secondary-heading";
import PrimaryHeading from "@/components/typography/primary-heading";
import PrimaryDescription from "@/components/typography/primary-description";
import { FooterNavLink } from "@/components/common/styled-components/layout/header-styled-components";
import { IoLogoFacebook, IoLogoLinkedin, IoLogoTwitter } from "react-icons/io";
import NextImage from "@/components/common/next-image";
import MainLogo from "../../../../public/assets/images/main_logo.webp"

const Footer = () => {
  const RenderList = ({ dataArray }) => {
    return (
      <nav>
        <List
          sx={{
            display: "flex",
            alignItems: "center",
            flexDirection: "column",
            padding: 0,
            margin: 0,
            listStyle: "none",
          }}
        >
          {dataArray.map((item, index) => (
            <ListItem key={index} sx={{ padding: 0 }}>
              <FooterNavLink href={`${item.key}`}>
                <span>{item?.title}</span>
              </FooterNavLink>
            </ListItem>
          ))}
        </List>
      </nav>
      //   <Box sx={{ display: "flex", flexDirection: "column", gap: "2px" }}>
      //     {dataArray.map((item, index) => {})}
      //   </Box>
    );
  };
  return (
    <LayoutProvider childSxProps={{ py: 2 }}>
      <Box
        sx={{
          display: "flex",
          alignItems: "center",
          justifyContent:"center",
          py: "8px",
        }}
      >
        <NextImage src={MainLogo} height={80} width={240} />
      </Box>
      <Divider sx={{ mt: 1, mb: 2 }} />
      <Grid container spacing={2}>
        {/* Footer Content */}
        <Grid item xs={12} md={6} lg={3}>
          <Box sx={{ padding: "10px" }}>
            <PrimaryHeading heading="About Us" sxProps={{ mb: 2 }} />
            <SecondaryHeading
              heading={
                "We know there are a lot of threa developers our but we pride into a firm in the industry."
              }
              sxProps={{
                fontWeight: "400",
              }}
            />
          </Box>
        </Grid>
        <Grid item xs={12} md={6} lg={3}>
          <Box sx={{ padding: "10px" }}>
            <PrimaryHeading heading="Feature" sxProps={{ mb: 2 }} />
            <RenderList
              dataArray={[
                { key: "/", title: "About Us" },
                { key: "/", title: "Term & Conditions" },
                { key: "/", title: "Products" },
              ]}
            />
          </Box>
        </Grid>
        <Grid item xs={12} md={6} lg={3}>
          <Box sx={{ padding: "10px" }}>
            <PrimaryHeading heading="Helpful" sxProps={{ mb: 2 }} />
            <RenderList
              dataArray={[
                { key: "/", title: "Blog" },
                { key: "/", title: "Shop" },
                { key: "/", title: "Support" },
              ]}
            />
          </Box>
        </Grid>
        <Grid item xs={12} md={6} lg={3}>
          <Box sx={{ padding: "10px" }}>
            <PrimaryHeading heading="General Links" sxProps={{ mb: 2 }} />
            <RenderList
              dataArray={[
                { key: "/", title: "About" },
                { key: "/", title: "Category" },
                { key: "/", title: "Contact Us" },
              ]}
            />
          </Box>
        </Grid>

        {/* Divider */}
        <Grid item xs={12}>
          <Divider sx={{ my: 1 }} />
        </Grid>

        {/* Footer Links or Additional Information */}
        <Grid container item xs={12} spacing={2}>
          <Grid item xs={12}>
            <Box sx={{ display: "flex", alignItems: "center", gap: "4px" }}>
              <Box sx={{ display: "flex", alignItems: "center", gap: "4px" }}>
                <IoLogoFacebook size={24} />
                <IoLogoLinkedin size={24} />
                <IoLogoTwitter size={24} />
              </Box>
              <Box>
                <SecondaryHeading
                  heading={"©2024 Tredella All rights reserved"}
                />
              </Box>
            </Box>
          </Grid>
          {/* <Grid item xs={12} md={6}>
            <Typography variant="body2">Footer Link 1</Typography>
          
          </Grid> */}
        </Grid>
      </Grid>
    </LayoutProvider>
  );
};

export default Footer;
