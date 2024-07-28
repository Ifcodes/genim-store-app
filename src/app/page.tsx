"use client";
import MainDashboardLayout from "./components/layouts/main-dashboard-layout";
import Swiper from "./components/molecules/swiper";
import ShopLooks from "./components/organisms/shop-looks";
import { useFetchProducts } from "./hooks/useFetchProducts";

export default function Home() {
  return (
    <MainDashboardLayout>
      <ShopLooks />
    </MainDashboardLayout>
  );
}
