"use client";
import React, { ReactNode } from "react";
import TopNav from "../../molecules/top-nav";
import "./main-dashboard-layout-styles.scss";

interface MainDashboardLayoutProps {
  children: ReactNode;
}

const MainDashboardLayout = ({ children }: MainDashboardLayoutProps) => {
  return (
    <section data-testid="main-layout-wrapper" className="main-layout-wrapper">
      <TopNav />
      <main>{children}</main>
    </section>
  );
};

export default MainDashboardLayout;
