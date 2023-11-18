import { useContext } from "react";
import toast from "react-hot-toast";
import { useNavigate } from "react-router-dom";
import { AuthContext } from "../../context/ContextProvider";

const Registration = () => {
  const navigate = useNavigate();
  const { createUser, isLoading, updateUserProfile } = useContext(AuthContext);
  const bookId = JSON.parse(localStorage.getItem("bookId")) ?? null;

  const handleResister = (e) => {
    e.preventDefault();
    const username = e.target.username.value;
    const email = e.target.email.value;
    const password = e.target.password.value;

    createUser(email, password)
      .then(() => {
        updateUserProfile(username).then(() => {
          toast.success("Successfully registered");
          if (bookId) {
            navigate(`/details/${bookId}`);
            localStorage.removeItem("bookId");
          } else {
            navigate("/");
          }
        });
      })
      .catch((err) => {
        toast.error(err.message);
      });
  };
  return (
    <div className="w-full max-w-md shadow-xl rounded-lg m-auto border-2 -mt-10">
      <form
        onSubmit={handleResister}
        className="bg-white rounded px-8 pt-6 pb-2"
      >
        <div className="mb-4 mt-3">
          <label className="block text-gray-600 font-semibold text-sm mb-2">
            Username
          </label>
          <input
            className=" border rounded w-full py-3 focus:outline-gray-600 px-3
             text-gray-700 leading-tight border-gray-500 "
            id="username"
            name="username"
            type="text"
            placeholder="Enter Username"
            required
          />
        </div>
        <div className="mb-4">
          <label className="block text-gray-600 font-semibold text-sm mb-2">
            Email
          </label>
          <input
            className=" border rounded w-full py-3 focus:outline-gray-600 px-3
             text-gray-700 leading-tight border-gray-500 "
            id="register email"
            name="email"
            type="email"
            placeholder="Enter Your Email"
            required
          />
        </div>

        <div className="mb-4">
          <label className="block text-gray-600 font-semibold text-sm mb-2">
            Password
          </label>
          <input
            className=" border rounded w-full py-3 focus:outline-gray-600 px-3 
            text-gray-700 leading-tight border-gray-500 "
            id="register password"
            type="password"
            name="password"
            placeholder="Password"
            required
          />
        </div>
        <div className="flex items-center justify-between">
          <button
            disabled={isLoading}
            className="bg-primary w-full text-white font-bold py-3 px-4 
            rounded duration-300 "
            type="submit"
          >
            {isLoading ? "Loading" : "Register"}
          </button>
        </div>
      </form>
    </div>
  );
};

export default Registration;
