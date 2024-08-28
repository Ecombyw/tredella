import { Box } from "@mui/material";
import React from "react";
import LayoutProvider from "../provider/layout-provider";
import TopHeader from "./top-header";
import LowerHeader from "./lower-header";
import MainHeader from "./main-header";
import { useSelector } from "react-redux";

const Header = () => {
  const { user } = useSelector((state) => state.userInfo);
  return (
    <>
      <TopHeader />
      <MainHeader user={user} />
      <LowerHeader />
    </>
  );
};

export default Header;
