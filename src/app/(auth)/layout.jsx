"use client";
import { useRouter } from "next/navigation";
import React, { useEffect } from "react";
import { useSelector } from "react-redux";

const RootLayout = ({ children }) => {
  const router = useRouter();
  const { user } = useSelector((state) => state.userInfo);
  console.log('RootLayout', user)
  useEffect(() => {
    if (user) {
      router.push("/");
    }
  }, [user, router]);
  return children;
};

export default RootLayout;
