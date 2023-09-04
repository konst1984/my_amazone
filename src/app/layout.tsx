import React from "react";
import "./globals.css";
import type { Metadata } from "next";
import { Poppins } from "next/font/google";
import Header from "@/components/Header/Header";
import Footer from "@/components/Footer/Footer";
import { Providers } from "@/app/redux/Provider";
import AsyncWrapper from "@/components/AsyncWrapper";

const poppins = Poppins({ subsets: ["latin"], weight: ["300", "400", "600"] });

export const metadata: Metadata = {
  title: "My Amazone shop",
  description: "Buy any goods",
};

const RootLayout = ({ children }: { children: React.ReactNode }) => {
  return (
    <html className="scroll-smooth" lang="en">
      <body className={poppins.className}>
        <Providers>
          <Header />
          <AsyncWrapper>{children}</AsyncWrapper>
          <Footer />
        </Providers>
      </body>
    </html>
  );
};

export default RootLayout;
