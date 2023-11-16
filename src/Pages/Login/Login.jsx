const Login = () => {
  const handleSubmit = (e) => {
    e.preventDefault();
    const username = e.target.username.value;
    const password = e.target.password.value;

    const userData = { username, password };
    console.log(userData);
  };
  return (
    <div className="w-full max-w-md shadow-xl rounded-lg m-auto border-2 -mt-10">
      <form onSubmit={handleSubmit} className="bg-white rounded px-8 pt-6 pb-2">
        <div className="mb-4 mt-3">
          <label className="block text-gray-600 font-semibold text-sm mb-2">
            Username
          </label>
          <input
            className=" border rounded w-full py-3 focus:outline-gray-600 px-3
             text-gray-700 leading-tight border-gray-500 "
            id="login username"
            type="text"
            name="username"
            placeholder="Enter Username"
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
