import React from "react";
import { Link } from "react-router-dom";

const GreenButton = ({ to, text }) => {
  return (
    <div>
      <button className="px-8 py-2 rounded-full bg-green-200 hover:bg-green-400 text-white">
        <Link to={to}>{text}</Link>
      </button>
    </div>
  );
};

export default GreenButton;
