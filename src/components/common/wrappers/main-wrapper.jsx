"use client";
import Footer from "@/components/layout/footer";
import Header from "@/components/layout/header";
import cookieUtils from "@/configs/utils/cookieUtils";
import localStorageUtils from "@/configs/utils/localStorageUtils";
import { resetUserDetails, setUserDetails } from "@/lib/redux/slice/authSlice";
// import { getReducer } from "@/lib/redux/reducer";
import { usePathname, useRouter } from "next/navigation";
import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";

const MainWrapper = ({ children }) => {
  const pathname = usePathname();
  const router = useRouter();
  const dispatch = useDispatch();
  const { userData } = useSelector((state) => state.auth);
  const notShowingHeaderPath = ["/login", "/register", "/forgotPassword"];
  useEffect(() => {
    if (!userData) {
      dispatch(resetUserDetails(dispatch, router));
    }
  }, []); // eslint-disable-line react-hooks/exhaustive-deps
  return (
    <>
      {!notShowingHeaderPath.includes(pathname) && <Header />}
      {children}
      {!notShowingHeaderPath.includes(pathname) && <Footer />}
    </>
  );
};

export default MainWrapper;
