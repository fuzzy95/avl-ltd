import { Link } from "react-router-dom";

const WhiteButton = ({ text, to }) => {
  return (
    <>
      <Link to={to}>
        <button className="border border-white px-8 py-2 rounded-full hover:bg-white hover:text-lemon">
          {text}
        </button>
      </Link>
    </>
  );
};

export default WhiteButton;
