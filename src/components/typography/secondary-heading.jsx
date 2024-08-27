import { Typography } from "@mui/material";
import React from "react";

const SecondaryHeading = ({ heading, icon, sxProps, onClick = undefined }) => {
  return (
    <>
      <Typography
        variant="h4"
        component="h4"
        sx={{
          ...sxProps,
          "@media(max-width:769px)": {
            fontSize: "1rem",
            fontWeight: 500,
            lineHeight: "1.5rem",
          },
        }}
        onClick={onClick}
      >
        {icon}
        {heading}
      </Typography>
    </>
  );
};

export default SecondaryHeading;
