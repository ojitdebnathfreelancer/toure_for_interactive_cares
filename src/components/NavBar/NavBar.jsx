/* eslint-disable react/prop-types */
import NavLinks from "./NavLinks";
import LogoLink from "./LogoLink";
import LoginButton from "./LoginButton";
import { GiHamburgerMenu } from "react-icons/gi";
import SideBar from "../SideBar/SideBar";
import { useState } from "react";

const NavBar = ({ setIsDestination }) => {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <div className="py-3 bg-white">
      <div className="max-w-7xl mx-auto flex justify-between items-center xl:px-0 md:px-4 px-2">
        <div className="flex items-center xl:gap-x-28 lg:gap-x-14">
          <LogoLink />

          <div className="lg:block hidden">
            <NavLinks />
          </div>
        </div>

        <div className="lg:block hidden">
          <LoginButton setIsDestination={setIsDestination} />
        </div>

        <SideBar isOpen={isOpen} setIsDestination={setIsDestination} />

        <button
          onClick={() => setIsOpen((prv) => !prv)}
          type="button"
          className="lg:hidden block"
        >
          <GiHamburgerMenu size={25} />
        </button>
      </div>
    </div>
  );
};

export default NavBar;
