"use client";
import MainSlider from "@/components/Carousel/MainSlider";
import t1 from "../../public/images/t1.jpg";
import t2 from "../../public/images/t2.jpg";
import t3 from "../../public/images/t3.jpg";
import Container from "@/components/Layout/Container/Container";
import ProductSlider from "@/components/Carousel/ProductSlider";
import Category from "@/components/Carousel/Category";

import { useState } from "react";
import { ProductCard } from "@/components/ui/ProductCard";

export default function Home() {
  const [tabValue, setTabValue] = useState("retail");
  const renderAllProducts = () => {
    const productData = [
      {
        image: t1,
        title: "Urban Shoes Good",
        review: "12",
        price: "100",
        oldPrice: "200",
      },
      {
        image: t1,
        title: "Urban Shoes Good",
        review: "12",
        price: "100",
        oldPrice: "200",
      },
      {
        image: t1,
        title: "Urban Shoes Good",
        review: "12",
        price: "100",
        oldPrice: "200",
      },
      {
        image: t1,
        title: "Urban Shoes Good",
        review: "12",
        price: "100",
        oldPrice: "200",
      },
      {
        image: t1,
        title: "Urban Shoes Good",
        review: "12",
        price: "100",
        oldPrice: "200",
      },
    ];
    return productData?.map((item) => {
      return (
        <div className="md:w-[270px]">
          <ProductCard productdetail={item} />
        </div>
      );
    });
  };
  return (
    <>
      <div className="bg-primary py-4 hidden lg:block ">
        <ul className="flex justify-center gap-12 text-white">
          <li
            className="cursor-pointer hover:underline"
            onClick={() => setTabValue("retail")}
          >
            Retail
          </li>
          <li
            className="cursor-pointer hover:underline"
            onClick={() => setTabValue("wholeSale")}
          >
            Wholesale
          </li>
          <li
            className="cursor-pointer hover:underline"
            onClick={() => setTabValue("royalView")}
          >
            Royal View
          </li>
        </ul>
      </div>
      <Container>
        {(tabValue === "retail" || tabValue === "wholeSale") && (
          <>
            <MainSlider
              MainImage={[
                { image: t1 },
                { image: t2 },
                { image: t3 },
                { image: t2 },
              ]}
            />
            <Category />
          </>
        )}
        {tabValue === "retail" && (
          <>
            <ProductSlider
              Heading={"Best Deals"}
              ProductItem={[
                {
                  image: t1,
                  title: "Urban Shoes Good",
                  review: "12",
                  price: "100",
                  oldPrice: "200",
                },
                {
                  image: t1,
                  title: "Urban Shoes Good",
                  review: "12",
                  price: "100",
                  oldPrice: "200",
                },
                {
                  image: t1,
                  title: "Urban Shoes Good",
                  review: "12",
                  price: "100",
                  oldPrice: "200",
                },
                {
                  image: t1,
                  title: "Urban Shoes Good",
                  review: "12",
                  price: "100",
                  oldPrice: "200",
                },
                {
                  image: t1,
                  title: "Urban Shoes Good",
                  review: "12",
                  price: "100",
                  oldPrice: "200",
                },
              ]}
            />
            <ProductSlider
              Heading={"Brands"}
              ProductItem={[
                {
                  image: t1,
                  title: "Urban Shoes Good",
                  review: "12",
                  price: "100",
                  oldPrice: "200",
                },
                {
                  image: t1,
                  title: "Urban Shoes Good",
                  review: "12",
                  price: "100",
                  oldPrice: "200",
                },
                {
                  image: t1,
                  title: "Urban Shoes Good",
                  review: "12",
                  price: "100",
                  oldPrice: "200",
                },
                {
                  image: t1,
                  title: "Urban Shoes Good",
                  review: "12",
                  price: "100",
                  oldPrice: "200",
                },
                {
                  image: t1,
                  title: "Urban Shoes Good",
                  review: "12",
                  price: "100",
                  oldPrice: "200",
                },
              ]}
            />
          </>
        )}
        {(tabValue === "retail" || tabValue === "wholeSale") && (
          <ProductSlider
            Heading={"All Products"}
            ProductItem={[
              {
                image: t1,
                title: "Urban Shoes Good",
                review: "12",
                price: "100",
                oldPrice: "200",
              },
              {
                image: t1,
                title: "Urban Shoes Good",
                review: "12",
                price: "100",
                oldPrice: "200",
              },
              {
                image: t1,
                title: "Urban Shoes Good",
                review: "12",
                price: "100",
                oldPrice: "200",
              },
              {
                image: t1,
                title: "Urban Shoes Good",
                review: "12",
                price: "100",
                oldPrice: "200",
              },
              {
                image: t1,
                title: "Urban Shoes Good",
                review: "12",
                price: "100",
                oldPrice: "200",
              },
            ]}
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
