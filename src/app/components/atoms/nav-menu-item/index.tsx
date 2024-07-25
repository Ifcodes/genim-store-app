import Link, { LinkProps } from "next/link";
import React from "react";
import Text from "../typography/text/text";
import "./nave-menu-item-styles.scss";

interface INavMenuItemProps extends LinkProps {
  text: string;
}
const NavMenuItem = ({ text, ...props }: INavMenuItemProps) => {
  return (
    <Link role="menu-link-item" className="menu-link-item" {...props}>
      <Text text={text} />
    </Link>
  );
};

export default NavMenuItem;
