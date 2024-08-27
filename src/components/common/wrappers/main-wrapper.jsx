"use client";
import Footer from "@/components/layout/footer";
import Header from "@/components/layout/header";
import { usePathname, useRouter } from "next/navigation";
import React, { useEffect, useState } from "react";

const MainWrapper = ({ children }) => {
  const router = useRouter();
  const pathname = usePathname();
  const [user, setUser] = useState(true); // Example user state

  // Check if the pathname should bypass the layout
  const shouldRenderLayout = !["/login", "/register", "/forgot-password"].includes(pathname);

  // Redirect if the user is not logged in and should not see the layout
  useEffect(() => {
    if (!user && shouldRenderLayout) {
      router.push("/login");
    }
  }, [user, pathname, shouldRenderLayout, router]);

  if (!user && shouldRenderLayout) {
    return null; // Or a loading spinner, if you prefer
  }

  return (
    <>
      {shouldRenderLayout ? (
        <>
          <Header />
          {children}
          <Footer />
        </>
      ) : (
        children
      )}
    </>
  );
};

export default MainWrapper;
