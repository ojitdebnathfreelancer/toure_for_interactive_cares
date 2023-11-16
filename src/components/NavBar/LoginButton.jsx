/* eslint-disable react/prop-types */
import { FaRegUser } from "react-icons/fa";
import { FiSearch } from "react-icons/fi";
import { Link } from "react-router-dom";

const LoginButton = ({ setIsDestination }) => {
  return (
    <div className="flex items-center gap-x-5 lg:text-black text-white lg:mt-0 mt-5">
      <button type="button" onClick={() => setIsDestination(true)}>
        <FiSearch size={22} />
      </button>
      <Link to="/login" className="flex items-center gap-x-2">
        <FaRegUser size={22} />
        <span className="font-semibold">Login / Signup</span>
      </Link>
    </div>
  );
};

export default LoginButton;
