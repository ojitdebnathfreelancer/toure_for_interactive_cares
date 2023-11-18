/* eslint-disable react/prop-types */
import { useContext } from "react";
import toast from "react-hot-toast";
import { FaRegUser } from "react-icons/fa";
import { FiSearch } from "react-icons/fi";
import { Link, useNavigate } from "react-router-dom";
import { AuthContext } from "../../context/ContextProvider";

const LoginButton = ({ setIsDestination }) => {
  const { user, logout } = useContext(AuthContext);
  const navigate = useNavigate();

  const userLogout = () => {
    logout();
    toast.success("Successfully Logout");
    navigate("/login");
  };

  return (
    <div className="flex items-center gap-x-5 lg:text-black text-white lg:mt-0 mt-5">
      <button type="button" onClick={() => setIsDestination(true)}>
        <FiSearch size={22} />
      </button>

      {user?.displayName && (
        <span className="flex items-center gap-x-1">
          <FaRegUser size={20} />
          {user?.displayName}
        </span>
      )}

      {user?.email ? (
        <button
          className="flex items-center gap-x-2"
          onClick={() => userLogout()}
        >
          Logout
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
