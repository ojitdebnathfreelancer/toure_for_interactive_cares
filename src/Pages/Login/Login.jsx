import { useContext } from "react";
import toast from "react-hot-toast";
import { useNavigate } from "react-router-dom";
import { AuthContext } from "../../context/ContextProvider";

const Login = () => {
  const navigate = useNavigate();
  const { loginUser } = useContext(AuthContext);
  const bookId = JSON.parse(localStorage.getItem("bookingData")) ?? null;

  const handleSubmit = (e) => {
    e.preventDefault();
    const email = e.target.email.value;
    const password = e.target.password.value;

    loginUser(email, password)
      .then(() => {
        toast.success("Successfully Login");
        if (bookId) {
          navigate(`/details/${bookId.id}`);
        } else {
          navigate("/");
        }
      })
      .catch((err) => {
        toast.error(err.message);
      });
  };
  return (
    <div className="w-full max-w-md shadow-xl rounded-lg m-auto border-2 -mt-10">
      <form onSubmit={handleSubmit} className="bg-white rounded px-8 pt-6 pb-2">
        <div className="mb-4 mt-3">
          <label className="block text-gray-600 font-semibold text-sm mb-2">
            Email
          </label>
          <input
            className=" border rounded w-full py-3 focus:outline-gray-600 px-3
             text-gray-700 leading-tight border-gray-500 "
            id="login email"
            type="email"
            name="email"
            placeholder="Enter Email"
            required
          />
        </div>
        <div className="mb-1">
          <label className="block text-gray-600 font-semibold text-sm mb-2">
            Password
          </label>
          <input
            className=" border rounded w-full py-3 focus:outline-gray-600 px-3
             text-gray-700 leading-tight border-gray-500 "
            id="login password"
            type="password"
            name="password"
            placeholder="Enter Password"
            required
          />
        </div>
        <p className="pb-1 text-blue-600 text-right font-semibold text-sm hover:underline">
          Forget Password?
        </p>
        <div className="flex items-center justify-between">
          <button
            className="bg-primary w-full text-white font-bold py-3 px-4
             rounded duration-300 "
            type="submit"
          >
            Login
          </button>
        </div>
      </form>
    </div>
  );
};

export default Login;
