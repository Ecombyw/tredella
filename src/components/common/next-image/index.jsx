import Image from "next/image";
import React from "react";

const NextImage = ({
  src = undefined,
  alt = "alt logo",
  sxProps,
  width,
  height,
}) => {
  return (
    <Image
      src={src}
      alt={alt}
      width={width}
      height={height}
      quality={100}
      // Use the style prop to apply objectFit and objectPosition
      style={{ 
        objectFit: "cover", 
        objectPosition: "center", 
        ...sxProps 
      }}
    />
  );
};

export default NextImage;
