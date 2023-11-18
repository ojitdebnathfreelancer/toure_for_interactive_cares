/* eslint-disable react-hooks/exhaustive-deps */
/* eslint-disable react/prop-types */
import { useEffect, useState } from "react";
import { IoCloseSharp } from "react-icons/io5";
import { FaArrowRightLong } from "react-icons/fa6";
import { useNavigate } from "react-router-dom";

const SearchDestination = ({ setIsDestination }) => {
  const [query, setQuery] = useState("");
  const navigate = useNavigate();
  const handelSubmit = (e) => {
    e.preventDefault();
    setQuery(e.target.destination.value);
  };

  useEffect(() => {
    if (query) {
      searchPlace();
    }
  }, [query]);

  const searchPlace = () => {
    fetch("/data.json")
      .then((res) => res.json())
      .then((data) => {
        const destination = data.find((d) => d.place.includes(query));

        if (destination?.id) {
          setIsDestination(false);
          navigate(`/details/${destination?.id}`);
          setQuery("");
        } else {
          navigate(`/`);
        }
      });
  };

  return (
    <div className="bg-primary py-5 destination min-h-[89vh]">
      <div className="max-w-7xl mx-auto flex justify-between xl:px-0 md:px-5">
        <div className="bg-white lg:w-[40%] py-4 px-10 box-border rounded-md lg:mt-20 md:mt-32 mt-10">
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
                  onClick={() => setQuery("Lake District")}
                >
                  <FaArrowRightLong
                    size={30}
                    className="group-hover:bg-orange-400 p-2 rounded-full duration-500 group-hover:text-white text-orange-400"
                  />
                  Lake District
                </button>
              </li>

              <li>
                <button
                  type="button"
                  className="flex items-center gap-x-2 group text-orange-400 font-semibold"
                  onClick={() => setQuery("Loch Lomond")}
                >
                  <FaArrowRightLong
                    size={30}
                    className="group-hover:bg-orange-400 p-2 rounded-full duration-500 group-hover:text-white text-orange-400"
                  />
                  Loch Lomond
                </button>
              </li>

              <li>
                <button
                  type="button"
                  className="flex items-center gap-x-2 group text-orange-400 font-semibold"
                  onClick={() => setQuery("Snowdonia")}
                >
                  <FaArrowRightLong
                    size={30}
                    className="group-hover:bg-orange-400 p-2 rounded-full duration-500 group-hover:text-white text-orange-400"
                  />
                  Snowdonia
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
