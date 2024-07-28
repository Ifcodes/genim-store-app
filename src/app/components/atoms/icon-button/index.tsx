import clsx from "clsx";
import { propagateServerField } from "next/dist/server/lib/render-server";
import React, { DetailedHTMLProps, ReactNode } from "react";

interface IIconButtonProps
  extends DetailedHTMLProps<
    React.ButtonHTMLAttributes<HTMLButtonElement>,
    HTMLButtonElement
  > {
  customRole?: string;
  otherClasses?: string;
  children: ReactNode;
}
const IconButton = ({
  customRole,
  otherClasses,
  children,
  ...props
}: IIconButtonProps) => {
  return (
    <button
      role={customRole}
      className={clsx("icon-button", otherClasses)}
      {...props}
    >
      {children}
    </button>
  );
};

export default IconButton;
