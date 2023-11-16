/* eslint-disable react/prop-types */

const TeamCard = ({ team }) => {
  const { images, icon1, icon2 } = team;
  return (
    <div>
      <div className="relative overflow-hidden transition duration-300 transform shadow-lg lg:hover:-translate-y-2 hover:shadow-2xl">
        <img
          className="object-cover w-full h-56 md:h-64 xl:h-80"
          src={images}
          alt="Person"
        />
        <div className="absolute inset-0 flex flex-col justify-center px-5 py-4 text-center transition-opacity duration-300 bg-black bg-opacity-75 opacity-0 hover:opacity-100">
          <div className="flex items-center justify-center space-x-3">
            <a
              href="/"
              className="text-white transition-colors duration-300 hover:text-teal-accent-400"
            >
              {icon1}
            </a>
            <a
              href="/"
              className="text-white transition-colors duration-300 hover:text-teal-accent-400"
            >
              {icon2}
            </a>
          </div>
        </div>
      </div>
    </div>
  );
};

export default TeamCard;
