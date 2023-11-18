/* eslint-disable react/prop-types */
import NavBar from "../components/NavBar/NavBar";
import Footer from "../components/Footer/Footer";
import SearchDestination from "../components/SearchDestination/SearchDestination";
import { useState } from "react";

const MainLayout = ({ children }) => {
  const [isDestination, setIsDestination] = useState(false);
  console.log(isDestination);
  return (
    <div className="flex flex-col min-h-screen justify-between">
      <div>
        <NavBar setIsDestination={setIsDestination} />

        {children}
      </div>
      <Footer />

      <div
        className={`fixed duration-500 z-[99999] left-0 w-full ${
          isDestination ? "md:top-20 top-14" : "-top-[110%]"
        }`}
      >
        <SearchDestination setIsDestination={setIsDestination} />
      </div>
    </div>
  );
};

export default MainLayout;
