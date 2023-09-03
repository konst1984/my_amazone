"use client";
import React from "react";
import Image from "next/image";
import { Carousel } from "react-responsive-carousel";
import sliderImg_1 from "../assets/images/slider/sliderImg_1.webp";
import sliderImg_2 from "../assets/images/slider/sliderImg_2.webp";
import sliderImg_3 from "../assets/images/slider/sliderImg_3.webp";
import "react-responsive-carousel/lib/styles/carousel.min.css";

const Slider = () => {
  return (
    <div className="relative max-h-[350px]">
      <Carousel
        autoPlay
        infiniteLoop
        showStatus={false}
        showIndicators={false}
        showThumbs={false}
        interval={3000}
      >
        <div>
          <Image
            priority
            src={sliderImg_1}
            alt="Product"
            className="min-h-[200px] object-cover"
          />
        </div>
        <div>
          <Image
            src={sliderImg_2}
            alt="Product"
            className="min-h-[200px] cover"
          />
        </div>
        <div>
          <Image
            src={sliderImg_3}
            alt="Product"
            className="min-h-[200px] cover"
          />
        </div>
      </Carousel>
    </div>
  );
};

export default Slider;
