import { Link } from "react-router-dom";

const Error = () => {
  return (
    <div className="min-h-screen flex justify-center items-center">
      <div className="flex flex-col items-center">
        <h1 className="text-black text-4xl font-bold">404! Back To Home</h1>
        <Link to="/" className="text-primary font-semibold mt-5 text-xl">
          Home
        </Link>
      </div>
    </div>
  );
};

export default Error;
