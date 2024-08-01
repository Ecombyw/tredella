"use client";
import MainSlider from "@/components/Carousel/MainSlider";
import t1 from "../../public/images/t1.jpg";
import t2 from "../../public/images/t2.jpg";
import t3 from "../../public/images/t3.jpg";
import Container from "@/components/Layout/Container/Container";
import ProductSlider from "@/components/Carousel/ProductSlider";
import Category from "@/components/Carousel/Category";
import { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import {
  fetchChildCategoryList,
  fetchMainCategoryList,
  fetchRetailerProductList,
  fetchSubCategoryList,
  fetchWholeSaleProductList,
} from "@/redux";
import { getReducer } from "@/redux/reducer";

export default function Home() {
  const [tabValue, setTabValue] = useState("retail");
  const dispatch = useDispatch();
  const homeData = useSelector((state) => state.homeData);
  const setCurrentTab = getReducer("currentTab");

  useEffect(() => {
    if (tabValue === "retail") {
      dispatch(fetchRetailerProductList({}));
    }
    if (tabValue === "wholesale") {
      dispatch(fetchWholeSaleProductList({}));
    }
  }, [tabValue?.length]);

  useEffect(() => {
    dispatch(fetchMainCategoryList({}));
    dispatch(fetchSubCategoryList({}));
    dispatch(fetchChildCategoryList({}));
  }, []);

  return (
    <>
      <div className="bg-primary py-4 hidden lg:block ">
        <ul className="flex justify-center gap-12 text-white">
          <li
            className={`cursor-pointer hover:underline ${
              tabValue === "retail" ? "underline" : ""
            }`}
            onClick={() => {
              setTabValue("retail");
              dispatch(setCurrentTab("retail"));
            }}
          >
            Retail
          </li>
          <li
            className={`cursor-pointer hover:underline ${
              tabValue === "wholesale" ? "underline" : ""
            }`}
            onClick={() => {
              setTabValue("wholesale");
              dispatch(setCurrentTab("wholesale"));
            }}
          >
            Wholesale
          </li>
          <li
            className={`cursor-pointer hover:underline ${
              tabValue === "royalView" ? "underline" : ""
            }`}
            onClick={() => {
              setTabValue("royalView");
              dispatch(setCurrentTab("royalView"));
            }}
          >
            Royal View
          </li>
        </ul>
      </div>
      <Container>
        {(tabValue === "retail" || tabValue === "wholesale") && (
          <>
            <MainSlider
              MainImage={[
                { image: t1 },
                { image: t2 },
                { image: t3 },
                { image: t2 },
              ]}
            />
            <Category
              categoriesData={homeData?.data?.product_main_categories}
            />
          </>
        )}
        {tabValue === "retail" && (
          <>
            <ProductSlider
              Heading={"Best Deals"}
              ProductItem={homeData?.data?.best_deals}
            />
            <ProductSlider
              Heading={"Brands"}
              ProductItem={homeData?.data?.brands}
            />
          </>
        )}
        {(tabValue === "retail" || tabValue === "wholesale") && (
          <ProductSlider
            Heading={"All Products"}
            ProductItem={homeData?.data?.products}
          />
        )}
        {tabValue === "royalView" && (
          <div className="h-[200px] w-full flex items-center justify-center">
            <h1 className="text-xl">Comming Soon</h1>
          </div>
        )}
      </Container>
    </>
  );
}
