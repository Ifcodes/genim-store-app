import Link, { LinkProps } from "next/link";
import React from "react";
import Text from "../typography/text/text";
import "./nave-menu-item-styles.scss";
import clsx from "clsx";

interface INavMenuItemProps extends LinkProps {
  text: string;
  isActive: boolean;
}
const NavMenuItem = ({ isActive, text, ...props }: INavMenuItemProps) => {
  return (
    <Link role="menu-link-item" {...props}>
      <div
        className={clsx("menu-link-item", {
          "border-b-2": isActive,
        })}
      >
        <Text text={text} />
      </div>
    </Link>
  );
};

export default NavMenuItem;
