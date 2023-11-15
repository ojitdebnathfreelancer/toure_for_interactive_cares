/* eslint-disable react/prop-types */
import LoginButton from "../NavBar/LoginButton";
import LogoLink from "../NavBar/LogoLink";
import NavLinks from "../NavBar/NavLinks";

const SideBar = ({ isOpen }) => {
  return (
    <div
      className={`bg-primary2 min-h-screen absolute top-0  duration-700 py-2 px-5 lg:hidden block ${
        isOpen ? "left-0 md:w-[35%] w-[75%]" : "-left-[150%] w-[0%]"
      }`}
    >
      <LogoLink />
      <LoginButton />
      <NavLinks />
    </div>
  );
};

export default SideBar;
