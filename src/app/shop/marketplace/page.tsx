import MainDashboardLayout from "@/app/components/layouts/main-dashboard-layout";
import ProductList from "@/app/components/organisms/product-list";
import React from "react";

const Marketplace = () => {
  return (
    <MainDashboardLayout>
      <ProductList products={[]} />
    </MainDashboardLayout>
  );
};

export default Marketplace;
