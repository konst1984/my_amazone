import OverFooter from "@/components/Footer/OverFooter";
import React from "react";

interface IFooterItems {
  title: string;
  description: string;
}

export const itemsList: IFooterItems[] = [
  {
    title: "Amazon Music",
    description: "Stream millions of songs",
  },
  {
    title: "Amazon Advertising",
    description: "Find, attract, and\n engage customers",
  },
  {
    title: "6pm",
    description: "Score deals\n on fashion brands",
  },
  {
    title: "AbeBook",
    description: "Books, art\n & collectibles",
  },
  {
    title: "ACX",
    description: "Audiobook Publishing\n Made Easy",
  },
  {
    title: "Sell on Amazon",
    description: "Start a Selling Account",
  },
  {
    title: "Amazon Business",
    description: "Everything For\n Your Business",
  },
  {
    title: "AmazonGlobal",
    description: "Ship Orders\n Internationally",
  },
  {
    title: "Home Services",
    description: "Experienced Pros\n Happiness Guarantee",
  },
  {
    title: "Amazon Web Services",
    description: "Scalable Cloud\n Computing Services",
  },
  {
    title: "Audible",
    description: "Listen to Books & Original\n Audio Performances",
  },
  {
    title: "Box Office Mojo",
    description: "Find Movie\n" + "Box Office Data",
  },
  {
    title: "ComiXology",
    description: "Thousands of\n Digital Comics",
  },
  {
    title: "DPReview",
    description: "Digital\n Photography",
  },
  {
    title: "Fabric",
    description: "Sewing, Quilting\n & Knitting",
  },
  {
    title: "Goodreads",
    description: "Book reviews\n & recommendations",
  },
  {
    title: "IMDb",
    description: "Movies, TV\n & Celebrities",
  },
  {
    title: "IMDbPro",
    description: "Get Info Entertainment\n" + "Professionals Need",
  },
  {
    title: "Kindle Direct Publishing",
    description: "Indie Digital & Print Publishing\n Made Easy",
  },
  {
    title: "Prime Video Direct",
    description: "Video Distribution\n Made Easy",
  },
  {
    title: "Shopbop",
    description: "Designer\n Fashion Brands",
  },
  {
    title: "Woot!",
    description: "Deals and\n Shenanigans",
  },
  {
    title: "Zappos",
    description: "Shoes &\n Clothing",
  },
  {
    title: "Ring",
    description: "Smart Home\n Security Systems",
  },
  {
    title: "eero WiFi",
    description: "Stream 4K Video\n in Every Room",
  },
  {
    title: "Blink",
    description: "Smart Security\n for Every Home",
  },
  {
    title: "Neighbors App",
    description: "Real-Time Crime\n & Safety Alerts",
  },
  {
    title: "Amazon Subscription Boxes",
    description: "Top subscription boxes – right to your door",
  },
  {
    title: "PillPack",
    description: "Pharmacy Simplified",
  },
];

const Footer = () => {
  return (
    <div className="z-[60]">
      <OverFooter />
      <div className="w-full bg-custom_blue text-xs text-gray-300 flex flex-col items-center justify-center">
        <div className="hidden lg:block py-[30px] max-w-[1000px]">
          <ul className="lg:grid grid-cols-6 gap-[20px]">
            {itemsList.map((item) => (
              <li key={item.title} className="flex flex-col px-2">
                <span>{item.title}</span>
                <span className="text-stone-400">{item.description}</span>
              </li>
            ))}
          </ul>
        </div>
        <div className="w-full flex flex-col items-center p-[10px] pb-[30px]">
          <div className="flex gap-2 items-center">
            <span className="text-center">Conditions of Use</span>
            <span className="text-center">Privacy Notice</span>
            <span className="text-center">Your Ads Privacy Choices</span>
          </div>
          <p className="pt-2">
            © 1996-2023, Amazon.com, Inc. or its affiliates
          </p>
        </div>
      </div>
    </div>
  );
};

export default Footer;
