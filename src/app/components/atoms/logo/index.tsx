import React from "react";
import Title from "../typography/title";

const Logo = () => {
  return (
    <div className="w-max shrink-0">
      <Title
        text="Genim's Collection"
        fontFamily="playfairDisplay"
        otherClasses="font-semibold uppercase"
      />
    </div>
  );
};

export default Logo;
