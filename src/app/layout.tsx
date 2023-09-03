import React from "react";
import "./globals.css";
import type { Metadata } from "next";
import { Poppins } from "next/font/google";
import Header from "@/components/Header/Header";
import Footer from "@/components/Footer/Footer";
import OverFooter from "@/components/Footer/OverFooter";
import { Providers } from "@/app/redux/Provider";
import axios from "axios";
import Wrapper from "@/components/Wrapper";

const poppins = Poppins({ subsets: ["latin"], weight: ["300", "400", "600"] });

export const metadata: Metadata = {
  title: "My Amazone shop",
  description: "Buy any goods",
};

async function getAllGoods() {
  try {
    const res = await axios.get("https://fakestoreapiserver.reactbd.com/tech");
    return res.data;
  } catch (e) {
    throw new Error(e.message);
  }
}

const RootLayout = async ({ children }: { children: React.ReactNode }) => {
  const goods = await getAllGoods();
  return (
    <html className="scroll-smooth" lang="en">
      <body className={poppins.className}>
        <Providers>
          <Header />
          <div className="grow max-w-[1500px] w-full mx-auto">
            <Wrapper goods={goods}>{children}</Wrapper>
          </div>
          <OverFooter />
          <Footer />
        </Providers>
      </body>
    </html>
  );
};

export default RootLayout;
