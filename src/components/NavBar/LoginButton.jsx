/* eslint-disable react/prop-types */
import { FaRegUser } from "react-icons/fa";
import { FiSearch } from "react-icons/fi";

const LoginButton = ({ setIsDestination }) => {
  return (
    <div className="flex items-center gap-x-5 lg:text-black text-white lg:mt-0 mt-5">
      <button type="button" onClick={() => setIsDestination(true)}>
        <FiSearch size={22} />
      </button>
      <button type="button" className="flex items-center gap-x-2">
        <FaRegUser size={22} />
        <span className="font-semibold">Login / Signup</span>
      </button>
    </div>
  );
};

export default LoginButton;
