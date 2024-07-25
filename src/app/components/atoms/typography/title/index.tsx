import clsx from "clsx";
import React, { DetailedHTMLProps } from "react";
import "./title-styles.scss";
import { playfairDisplay, poppins } from "@/app/utils/font";

interface ITitleProps
  extends DetailedHTMLProps<
    React.HTMLAttributes<HTMLHeadingElement>,
    HTMLHeadingElement
  > {
  text: string;
  variant?: "h1" | "h2" | "h3" | "h4";
  fontFamily?: "playfairDisplay" | "poppins";
  otherClasses?: string;
}

const Title = ({
  text,
  variant = "h1",
  fontFamily = "poppins",
  otherClasses,
  ...props
}: ITitleProps) => {
  const titleFonts = {
    poppins: poppins.className,
    playfairDisplay: poppins.className,
  };

  if (variant === "h4")
    return (
      <h4 className={clsx(titleFonts[fontFamily], otherClasses)} {...props}>
        {text}
      </h4>
    );

  if (variant === "h3")
    return (
      <h3 className={clsx(titleFonts[fontFamily], otherClasses)} {...props}>
        {text}
      </h3>
    );

  if (variant === "h2")
    return (
      <h2 className={clsx(titleFonts[fontFamily], otherClasses)} {...props}>
        {text}
      </h2>
    );

  return (
    <h1 className={clsx(titleFonts[fontFamily], otherClasses)} {...props}>
      {text}
    </h1>
  );
};

export default Title;
