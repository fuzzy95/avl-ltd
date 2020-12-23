import { Link } from "react-router-dom";

const BlackButton = ({ text, to }) => {
  return (
    <>
      <button className="px-8 py-2 rounded-full bg-black hover:bg-white text-white hover:text-black">
        <Link to={to}>{text}</Link>
      </button>
    </>
  );
};

export default BlackButton;
