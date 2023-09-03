import React from "react";
import Link from "next/link";
import Image from "next/image";
import Title from "../assets/images/title._TTD_.webp";
import Dog from "../assets/images/142._TTD_.webp";

const NotFound = () => {
  return (
    <div className="flex flex-col items-center justify-center p-10 bg-white text-center text-gray-800 font-semibold min-h-[50vh]">
      <Link href="/">
        <Image
          src={Title}
          alt="Sorry! We couldn't find that page. Try searching or go to Amazon's home page."
        />
      </Link>
      <Link
        href="https://www.aboutamazon.com/news/workplace/meet-the-dogs-of-amazon?utm_source=gateway&utm_medium=404"
        target="_blank"
      >
        <Image src={Dog} alt="Dogs of Amazon" />
      </Link>
    </div>
  );
};

export default NotFound;
