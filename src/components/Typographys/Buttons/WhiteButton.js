import { Link } from "react-router-dom";

const WhiteButton = ({ text, to }) => {
  return (
    <>
      <Link to={to}>
        <button className="border border-white lg:px-8 px-4 py-2 lg:text-base text-xs rounded-full hover:bg-white hover:text-lemon">
          {text}
        </button>
      </Link>
    </>
  );
};

export default WhiteButton;
