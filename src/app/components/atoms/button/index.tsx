"use client";
import { DetailedHTMLProps, ReactNode } from "react";
import "./button-styles.scss";
import clsx from "clsx";

interface IButtonTypes
  extends DetailedHTMLProps<
    React.ButtonHTMLAttributes<HTMLButtonElement>,
    HTMLButtonElement
  > {
  buttonType?: "primary" | "secondary";
  iconBefore?: ReactNode;
  iconAfter?: ReactNode;
  children: ReactNode | string;
  otherClasses?: string;
}

export const Button = ({
  buttonType = "primary",
  iconAfter,
  iconBefore,
  children,
  otherClasses,
  ...props
}: IButtonTypes) => {
  return (
    <button
      role="button"
      className={clsx(
        otherClasses,
        buttonType === "primary" && "primary-button",
        buttonType === "secondary" && "secondary-button"
      )}
      {...props}
    >
      {iconBefore}
      {children}
      {iconAfter}
    </button>
  );
};
