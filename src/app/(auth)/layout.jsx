"use client";
import { useRouter } from "next/navigation";
import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";

const RootLayout = ({ children }) => {
  const router = useRouter();
  const { userData } = useSelector((state) => state.auth);
  useEffect(() => {
    if (userData) {
      router.push("/");
    }
  }, [userData, router]);
  return children;
};

export default RootLayout;
