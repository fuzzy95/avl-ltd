import React from "react";

const PrimaryHeader = ({ text }) => {
  return (
    <>
      <h1 className="font-normal uppercase font-anton lg:text-6xl text-4xl">
        {text}
      </h1>
    </>
  );
};

export default PrimaryHeader;
