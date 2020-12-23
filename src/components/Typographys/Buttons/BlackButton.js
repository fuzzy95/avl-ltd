import { Link } from "react-router-dom";

const BlackButton = ({ text, to }) => {
  return (
    <>
      <button className="lg:px-8 px-4 py-2 lg:text-base text-xs rounded-full bg-black hover:bg-white text-white hover:text-black">
        <Link to={to}>{text}</Link>
      </button>
    </>
  );
};

export default BlackButton;
