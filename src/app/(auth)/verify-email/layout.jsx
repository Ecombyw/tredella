"use client";
import { useRouter } from "next/navigation";
import React, { useEffect } from "react";
import { useSelector } from "react-redux";

const RootLayout = ({ children }) => {
  const {  userData } = useSelector((state) => state.auth);
  const router = useRouter();


  useEffect(() => {
    // Check user authentication and account status
    if (
      userData
    ) {
      router.push("/");
    }
  }, [userData]);
  
  return children;
};

export default RootLayout;
