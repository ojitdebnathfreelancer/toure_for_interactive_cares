/* eslint-disable react/prop-types */
import NavBar from "../components/NavBar/NavBar";
import Footer from "../components/Footer/Footer";
import SearchDestination from "../components/SearchDestination/SearchDestination";
import { useState } from "react";

const MainLayout = ({ children }) => {
  const [isDestination, setIsDestination] = useState(false);

  return (
    <div className="flex flex-col min-h-screen justify-between">
      <div>
        <NavBar setIsDestination={setIsDestination} />

        {children}
      </div>
      <Footer />

      <div
        className={`absolute duration-500 z-[1] left-0 w-full ${
          isDestination ? "top-20" : "-top-[100%]"
        }`}
      >
        <SearchDestination setIsDestination={setIsDestination} />
      </div>
    </div>
  );
};

export default MainLayout;
