import { playfairDisplay, poppins } from "@/app/utils/font";
import clsx from "clsx";
import React, { DetailedHTMLProps, HTMLAttributes } from "react";

interface ITextProps
  extends DetailedHTMLProps<
    HTMLAttributes<HTMLParagraphElement>,
    HTMLParagraphElement
  > {
  text: string;
  otherClasses: string;
  //   variant: "p" | "span";
}
const Text = ({ text, otherClasses, ...props }: ITextProps) => {
  //   if (variant === "span") return <span className={clsx(poppins, otherClasses)}>{text}</span>;

  return (
    <p className={clsx(poppins.className, otherClasses)} {...props}>
      {text}
    </p>
  );
};

export default Text;
