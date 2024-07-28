"use client";
import React, { ReactNode } from "react";
import TopNav from "../../molecules/top-nav";
import Swiper from "../../molecules/swiper";

interface MainDashboardLayoutProps {
  children: ReactNode;
}

const MainDashboardLayout = ({ children }: MainDashboardLayoutProps) => {
  const imgs = [
    "/img1.jpg",
    "/img2.jpg",
    "/img3.avif",
    "/img4.avif",
    // "/img5.avif",
    "/img6.avif",
    "/img7.avif",
    "/img8.jpg",
  ];

  return (
    <section data-testid="main-layout" className="main-layout-wrapper">
      <TopNav />
      <main>{children}</main>
    </section>
  );
};

export default MainDashboardLayout;
