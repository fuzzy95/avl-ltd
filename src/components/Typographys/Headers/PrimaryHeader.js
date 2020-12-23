import React from "react";

const PrimaryHeader = ({ text }) => {
  return (
    <>
      <h1 className="font-medium lg:text-left text-center uppercase font-oswald lg:text-6xl text-4xl">
        {text}
      </h1>
    </>
  );
};

export default PrimaryHeader;
