"use client";
import React from "react";
import Logo from "../../atoms/logo";
import { SearchInput } from "../../atoms/form/search-input";
import NavMenuItem from "../../atoms/nav-menu-item";
import "./top-nav-styles.scss";
import { usePathname } from "next/navigation";
import LikedProductsIndicator from "../../atoms/liked-products-indicator";
import CartedProductIndicator from "../../atoms/carted-products-indicator";
import { PiUserCircleLight } from "react-icons/pi";

const TopNav = () => {
  const pathName = usePathname();

  const links = [
    {
      text: "Home",
      href: "/",
    },
    {
      text: "Marketplace",
      href: "/shop/marketplace",
    },
    {
      text: "Men",
      href: "/shop/men",
    },
    {
      text: "Women",
      href: "/shop/women",
    },
    {
      text: "Children",
      href: "/shop/children",
    },
  ];

  return (
    <nav className="top-nav">
      <Logo />
      <SearchInput />
      <div className="menu-items">
        {links.map((link) => {
          const isActive = link.href === pathName;
          return (
            <NavMenuItem
              key={link.href}
              text={link.text}
              href={link.href}
              isActive={isActive}
            />
          );
        })}
      </div>
      <div className="secondary-cta-wrapper">
        <LikedProductsIndicator likes={250} />
        <CartedProductIndicator totalProducts={20} />
        <PiUserCircleLight size={28} />
      </div>
    </nav>
  );
};

export default TopNav;
