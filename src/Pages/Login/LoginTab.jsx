import { useState } from "react";

import Login from "./Login";
import Registration from "../Registation/Registration";
import MainLayout from "../../layout/MainLayout";

const LoginTab = () => {
  const [openTab, setOpenTab] = useState(1);
  const [active, setActive] = useState(true);

  return (
    <MainLayout>
      <div className="my-8 md:mt-8 mt-14">
        <div className="container mx-auto ">
          <div className="flex  justify-center px-4 max-w-screen-xl m-auto ">
            <ul className="flex justify-end  space-x-2 no-underline mb-3  ">
              <li className="-mr-4">
                <button
                  onClick={() => {
                    setOpenTab(1);
                    setActive(true);
                  }}
                  className={` ${
                    active === true ? "bg-primary" : "bg-red-600"
                  } inline-block  w-full text-white 
                font-bold py-3 px-6 rounded duration-300`}
                >
                  Login
                </button>
              </li>
              <li>
                <button
                  onClick={() => {
                    setOpenTab(2);
                    setActive(false);
                  }}
                  className={` ${
                    active !== true ? "bg-primary" : "bg-red-600"
                  } inline-block  w-full text-white 
                font-bold py-3 px-6 rounded duration-300`}
                >
                  Resister
                </button>
              </li>
            </ul>
          </div>
        </div>
        <div className="">
          <div className={openTab === 1 ? "block" : "hidden"}>
            <Login />
          </div>
          <div className={openTab === 2 ? "block" : "hidden"}>
            <Registration />
          </div>
        </div>
      </div>
    </MainLayout>
  );
};

export default LoginTab;
