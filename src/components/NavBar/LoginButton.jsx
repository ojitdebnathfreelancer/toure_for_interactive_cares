/* eslint-disable react/prop-types */
import toast from "react-hot-toast";
import { FaRegUser } from "react-icons/fa";
import { FiSearch } from "react-icons/fi";
import { Link, useNavigate } from "react-router-dom";

const LoginButton = ({ setIsDestination }) => {
  const user = JSON.parse(localStorage.getItem("user")) ?? {};

  const navigate = useNavigate();

  const logoutUser = () => {
    localStorage.removeItem("user");
    toast.success("Successfully Logout");
    navigate("/");
  };

  return (
    <div className="flex items-center gap-x-5 lg:text-black text-white lg:mt-0 mt-5">
      <button type="button" onClick={() => setIsDestination(true)}>
        <FiSearch size={22} />
      </button>

      {user?.id ? (
        <button
          className="flex items-center gap-x-2"
          onClick={() => logoutUser()}
        >
          <FaRegUser size={22} /> Logout
        </button>
      ) : (
        <Link to="/login" className="flex items-center gap-x-2">
          <FaRegUser size={22} />
          <span className="font-semibold">Login / Signup</span>
        </Link>
      )}
    </div>
  );
};

export default LoginButton;
