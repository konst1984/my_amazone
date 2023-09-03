import React from "react";
import "./globals.css";
import type { Metadata } from "next";
import { Poppins } from "next/font/google";
import Header from "@/components/Header/Header";
import Footer from "@/components/Footer/Footer";
import OverFooter from "@/components/Footer/OverFooter";
import { Providers } from "@/app/redux/Provider";

const poppins = Poppins({ subsets: ["latin"], weight: ["300", "400", "600"] });

export const metadata: Metadata = {
  title: "My Amazone shop",
  description: "Buy any goods",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html className="scroll-smooth" lang="en">
      <body className={poppins.className}>
        <Providers>
          <Header />
          <div className="grow max-w-[1500px] w-full mx-auto">{children}</div>
          <OverFooter />
          <Footer />
        </Providers>
      </body>
    </html>
  );
}
