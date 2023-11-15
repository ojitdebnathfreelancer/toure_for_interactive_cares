/* eslint-disable react/prop-types */
import { useState } from "react";
import { IoCloseSharp } from "react-icons/io5";
import { FaArrowRightLong } from "react-icons/fa6";

const SearchDestination = ({ setIsDestination }) => {
  const [query, setQuery] = useState("");
  const handelSubmit = (e) => {
    e.preventDefault();
    setQuery(e.target.destination.value);
  };

  console.log(query);

  return (
    <div className="h-32 bg-primary py-5 destination min-h-[89vh]">
      <div className="max-w-7xl mx-auto flex justify-between">
        <div className="bg-white w-[40%] py-4 px-10 box-border rounded-md mt-32">
          <h1 className="text-black text-4xl font-semibold">
            Search The Visit London
          </h1>

          <form onSubmit={handelSubmit}>
            <input
              type="text"
              id="destination"
              name="destination"
              placeholder="What are you searching for?"
              className="w-full mt-10 outline-none pb-5 placeholder:text-[22px] border-b"
            />

            <button
              type="submit"
              className="bg-orange-400 px-6 py-2 font-bold rounded-md mt-5"
            >
              Search
            </button>
          </form>

          <div className="mt-5">
            <h1 className="text-2xl font-semibold">Explore popular searches</h1>

            <ul className="mt-3">
              <li>
                <button
                  type="button"
                  className="flex items-center gap-x-2 group text-orange-400 font-semibold"
                  onClick={() => setQuery("Tower of London")}
                >
                  <FaArrowRightLong
                    size={30}
                    className="group-hover:bg-orange-400 p-2 rounded-full duration-500 group-hover:text-white text-orange-400"
                  />
                  Tower of London
                </button>
              </li>

              <li>
                <button
                  type="button"
                  className="flex items-center gap-x-2 group text-orange-400 font-semibold"
                  onClick={() => setQuery("Tower Bridge")}
                >
                  <FaArrowRightLong
                    size={30}
                    className="group-hover:bg-orange-400 p-2 rounded-full duration-500 group-hover:text-white text-orange-400"
                  />
                  Tower Bridge
                </button>
              </li>

              <li>
                <button
                  type="button"
                  className="flex items-center gap-x-2 group text-orange-400 font-semibold"
                  onClick={() => setQuery("Buckingham Palace")}
                >
                  <FaArrowRightLong
                    size={30}
                    className="group-hover:bg-orange-400 p-2 rounded-full duration-500 group-hover:text-white text-orange-400"
                  />
                  Buckingham Palace
                </button>
              </li>
            </ul>
          </div>
        </div>

        <button
          type="button"
          className="text-white self-start"
          onClick={() => setIsDestination(false)}
        >
          <IoCloseSharp size={40} />
        </button>
      </div>
    </div>
  );
};

export default SearchDestination;
