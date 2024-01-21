"use client"

import React, { useEffect, useState } from "react";

const Banner = () => {
    
    const [currentImageIndex, setCurrentImageIndex] = useState(0)

    const bannerImg =[
        "https://rukminim2.flixcart.com/fk-p-flap/1600/270/image/aa1b2bdcf519b468.jpg?q=20",
        "https://rukminim2.flixcart.com/fk-p-flap/1600/270/image/e7b40c1b2a494248.jpg?q=20",
        "https://rukminim2.flixcart.com/fk-p-flap/1600/270/image/e28fb2d7c8002d84.jpg?q=20",
        "https://rukminim2.flixcart.com/fk-p-flap/1600/270/image/352e6f0f8034fab5.jpg?q=20"

    ]

  useEffect(() => {
    const interval = setInterval(() => {
      
      setCurrentImageIndex((prevIndex) =>
        prevIndex === bannerImg.length - 1 ? 0 : prevIndex + 1
      )
    }, 2000)

    
    return () => clearInterval(interval);
  }, [currentImageIndex, bannerImg.length]);
    
  return (
    <div className="mx-[20px] mt-[40px]">
      <div className="bg-[#fff] min-h-[250px]">
        <img src={bannerImg[currentImageIndex]} className="" />
      </div>
    </div>
  );
};

export default Banner;
