import Image from "next/image";
import React from "react";

const ImageComponent = ({ src, width, height, alt }) => {
  return (
    <Image
      src={src}
      width={width}
      height={height}
      alt={alt || "IMAGE"}
      className="object-cover w-full"
      loading="lazy"
    />
  );
};

export default ImageComponent;
