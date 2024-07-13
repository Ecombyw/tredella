"use client";
import React from "react";
import Link from "next/link";
import { CardBody, CardContainer, CardItem } from "./3d-card";
import { Rate } from "antd";
import Image from "next/image";
export function ProductCard({ productdetail }) {
  console.log("=======productdetail", JSON.stringify(productdetail));
  return (
    <>
      <CardContainer containerClassName={"py-2"} className="inter-var">
        <CardBody className="bg-gray-50 relative group/card   border-black/[0.1] w-36 h-auto md:w-full md:h-full rounded-xl px-1 md:px-6 py-1 md:py-3 border  ">
          <CardItem translateZ="100" className="w-full ">
            <Link href={"/detail"}>
              <div className="relative">
                {productdetail?.main_image ? (
                  <img
                    src={
                      productdetail?.main_image
                        ? `https://www.api.tredella.com/public/${productdetail?.main_image}`
                        : require("../../../../public/images/no_image.png")
                    }
                    height="1000"
                    width="1000"
                    className="h-full w-full object-cover rounded-xl group-hover/card:shadow-xl"
                    alt="thumbnail"
                  />
                ) : (
                  <Image
                    src={require("../../../../public/images/no_image.png")}
                    height="1000"
                    width="1000"
                    className="h-full w-full object-cover rounded-xl group-hover/card:shadow-xl"
                    alt="thumbnail"
                  />
                )}
              </div>
              <div className="px-2">
                <h1 className="text-sm md:text-lg font-medium md:font-semibold">
                  {productdetail?.product_name || "No Title"}
                </h1>
                <div className="flex items-center">
                  <Rate
                    defaultValue={productdetail?.total_reviews}
                    disabled
                    style={{ fontSize: 18 }}
                  />
                  <h1 className="pt-1 px-2">
                    (<span>{productdetail?.total_reviews || 0}</span>)
                  </h1>
                </div>
                <div className="flex flex-wrap md:flex-nowrap gap-2 ">
                  <h1 className="text-[13px] md:text-lg font-medium">
                    AED <span>{productdetail?.price}</span>
                  </h1>
                  {productdetail?.oldPrice && (
                    <h1 className="text-[13px] md:text-lg font-medium  line-through">
                      AED <span>{productdetail?.oldPrice}</span>
                    </h1>
                  )}
                </div>
              </div>
            </Link>
          </CardItem>
        </CardBody>
      </CardContainer>
    </>
  );
}
