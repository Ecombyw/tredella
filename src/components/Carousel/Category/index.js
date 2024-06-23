//@ts-nocheck
"use client";
import { useEffect, useRef } from "react";
import {
  motion,
  useScroll,
  useSpring,
  useTransform,
  useMotionValue,
  useVelocity,
  useAnimationFrame,
} from "framer-motion";
import { wrap } from "@motionone/utils";
import Image from "next/image";
import { Brandimg } from "@/components/constant";
import Link from "next/link";

// Function to duplicate the array for a seamless loop
const createLoopedArray = (arr, count) => {
  const loopedArray = [];
  for (let i = 0; i < count; i++) {
    loopedArray.push(...arr);
  }
  return loopedArray;
};

const loopedBrandimg = createLoopedArray(Brandimg, 4); // Adjust the count based on your needs

function ParallaxText({ children, baseVelocity = 300 }) {
  const baseX = useMotionValue(0);
  const { scrollY } = useScroll();
  const scrollVelocity = useVelocity(scrollY);
  const smoothVelocity = useSpring(scrollVelocity, {
    damping: 50,
    stiffness: 400,
  });
  const velocityFactor = useTransform(smoothVelocity, [0, 4000], [0, 4], {
    clamp: false,
  });

  const x = useTransform(baseX, (v) => `${wrap(-20, -45, v)}%`);

  const directionFactor = useRef(1);
  useAnimationFrame((t, delta) => {
    let moveBy = directionFactor.current * baseVelocity * (delta / 6000);

    if (velocityFactor.get() < 0) {
      directionFactor.current = -1;
    } else if (velocityFactor.get() > 0) {
      directionFactor.current = 1;
    }

    moveBy += directionFactor.current * moveBy * velocityFactor.get();

    baseX.set(baseX.get() + moveBy);
  });
 
  return (
    <div className="parallax">
      <motion.div className="scroller" style={{ x }}>
        {loopedBrandimg.map((array, index) => (
          <Link href={"/products"}
            key={index}
            className="grid place-items-center md:w-[32%] max-w-[30%] ">
            <div className={` md:p-0 w-20 h-20 md:w-36 md:h-32 ml-2 mr-2 items-center flex flex-col pb-2  border border-primary100 rounded-lg `}>
              <Image
                className="py-1 rounded-md w-16 h-16 md:w-24 md:h-24 lg:w-28 lg:h-28 mx-auto"
                src={array.image}
                alt={array.image}
                width={300}
                height={300}
              />
              <p className="leading-loose text-sm md:text-lg font-medium">Category</p>
            </div>
          </Link>
        ))}
      </motion.div>
    </div>
  );
}

export default function Category() {
  return (
    <div className={"mt-16 md:mt-32  space-y-3"}>
      <ParallaxText baseVelocity={-5}>Framer Motion</ParallaxText>
      <ParallaxText baseVelocity={5}>Scroll velocity</ParallaxText>
    </div>
  );
}
