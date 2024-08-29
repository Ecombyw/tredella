"use client";
import { useRouter } from "next/navigation";
import React, { useEffect } from "react";
import { useSelector } from "react-redux";

const RootLayout = ({ children }) => {
  const { userData_temp, userData } = useSelector((state) => state.auth);
  const router = useRouter();
  useEffect(() => {
    // Check user authentication and account status
    if (
      (userData_temp || userData) &&
      (!userData || userData?.account_status !== "active")
    ) {
      // Redirect to home page if unauthorized or inactive
      router.push("/");
    }
  }, [userData_temp, userData, router]);
  
  return children;
};

export default RootLayout;
