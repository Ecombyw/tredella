"use client";
import Footer from "@/components/layout/footer";
import Header from "@/components/layout/header";
import { getReducer } from "@/lib/redux/reducer";
import { usePathname, useRouter } from "next/navigation";
import React, { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";

const MainWrapper = ({ children }) => {
  const pathname = usePathname();
  // const router = useRouter();
  // const dispatch = useDispatch();
  // const setUserInfo = getReducer("userInfo");

  const notShowingHeaderPath = ["/login", "/register", "/forgotPassword"];
  // useEffect(() => {
  //   const storedUser = localStorage.getItem("user");
  //   if (storedUser) {
  //     // dispatch(JSON.parse(storedUser));
  //     dispatch(setUserInfo(JSON.parse(storedUser)));

  //   } else {
  //     dispatch(setUserInfo(null));
  //   }
  // }, []);
  return (
    <>
      {!notShowingHeaderPath.includes(pathname) && <Header />}
      {children}
      {!notShowingHeaderPath.includes(pathname) && <Footer />}
    </>
  );
};

export default MainWrapper;
