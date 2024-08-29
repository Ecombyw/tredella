import { Box } from "@mui/material";
import React from "react";
import LayoutProvider from "../provider/layout-provider";
import TopHeader from "./top-header";
import LowerHeader from "./lower-header";
import MainHeader from "./main-header";
import { useSelector } from "react-redux";

const Header = () => {
  const { userData } = useSelector((state) => state.auth);
  return (
    <>
      <TopHeader />
      <MainHeader user={userData} />
      <LowerHeader />
    </>
  );
};

export default Header;
