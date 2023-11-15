import { Link, useLocation } from "react-router-dom";

const NavLinks = () => {
  const pathName = useLocation().pathname;
  return (
    <ul className="flex lg:flex-row flex-col lg:items-center gap-x-7 lg:gap-y-0 gap-y-3 lg:text-black text-white lg:mt-0 mt-5">
      <li
        className={`text-[17px] font-medium capitalize ${
          pathName === "/" && "text-orange-600"
        }`}
      >
        <Link to="/">Home</Link>
      </li>
      <li
        className={`text-[17px] capitalize font-medium ${
          pathName === "/about" && "text-orange-600"
        }`}
      >
        <Link to="/about">About</Link>
      </li>
      <li
        className={`text-[17px] capitalize font-medium ${
          pathName === "/tours" && "text-orange-600"
        }`}
      >
        <Link to="/tours">Tours</Link>
      </li>
      <li
        className={`text-[17px] capitalize font-medium ${
          pathName === "/destination" && "text-orange-600"
        }`}
      >
        <Link to="/destination">Destination</Link>
      </li>
      <li
        className={`text-[17px] capitalize font-medium ${
          pathName === "/blog" && "text-orange-600"
        }`}
      >
        <Link to="/blog">Blog</Link>
      </li>
      <li
        className={`text-[17px] capitalize font-medium ${
          pathName === "/pages" && "text-orange-600"
        }`}
      >
        <Link to="/pages">Pages</Link>
      </li>
      <li
        className={`text-[17px] capitalize font-medium ${
          pathName === "/contact" && "text-orange-600"
        }`}
      >
        <Link to="/contact">Contact</Link>
      </li>
    </ul>
  );
};

export default NavLinks;
