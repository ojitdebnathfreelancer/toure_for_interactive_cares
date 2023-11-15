import { Link } from "react-router-dom";
import logo from "../../assets/logo.png";

const LogoLink = () => {
  return (
    <Link to="/" className="flex items-center">
      <img src={logo} alt="logo" className="md:h-16 h-12" />
      <h1 className="md:text-2xl text-lg font-extrabold italic lg:text-black text-white">
        Tour
      </h1>
    </Link>
  );
};

export default LogoLink;
