import React from "react";

const TartiaryHeading = ({ text }) => {
  return (
    <>
      <h3 className="font-thin text-black lg:text-xl md:text-lg text-base mt-2">
        {text}
      </h3>
    </>
  );
};

export default TartiaryHeading;
