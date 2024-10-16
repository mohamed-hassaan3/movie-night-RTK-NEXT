"use client";
import Image from "next/image";
import React, { useEffect, useState } from "react";
import ColorThief from 'colorthief';
const Colorthief = ({ imgURL }: { imgURL: string }) => {
  const [background, setBackground] = useState("white");

  useEffect(() => {
    const img = new window.Image();
    img.crossOrigin = "Anonymous";
    img.src = imgURL;

    img.onload = () => {
        const colorThief = new ColorThief();
        // Now, call getColor method directly
        colorThief.getColor(img)
          .then((color: [number, number, number]) => {
            setBackground(`rgb(${color[0]}, ${color[1]}, ${color[2]})`);
          })
          .catch((error) => console.error('Error extracting color:', error));
      };
  }, [imgURL]);

  return (
    <Image
      className="w-full h-full object-cover object-right-top opacity-10 hidden lg:block"
      style={{ backgroundColor: background }}
      src={imgURL}
      layout="fill"
      alt="Banner"
    />
  );
};

export default Colorthief;
