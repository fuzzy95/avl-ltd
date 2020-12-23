import React from "react";
import { Link } from "react-router-dom";

const GreenButton = ({ to, text }) => {
  return (
    <div>
      <button className="lg:px-8 px-4 py-2 lg:text-base text-xs rounded-full bg-green-400 hover:bg-green-500 text-white">
        <Link to={to}>{text}</Link>
      </button>
    </div>
  );
};

export default GreenButton;
