const Banner = () => {
  return (
    <div className="banner">
      <div className="max-w-7xl mx-auto flex">
        <div className="xl:mt-44 lg:mt-20 md:mt-7 xl:pb-44 lg:pb-20 md:pb-7 text-white lg:w-[45%] md:w-[60%] xl:p-0 lg:p-6 p-4 box-border">
          <h1 className="md:text-2xl text-xl italic text-[#ffa502] font-bold">
            Explore The
          </h1>
          <p className="xl:text-6xl text-3xl md:text-5xl font-extrabold md:py-2">
            Travel & Adventures
          </p>
          <p className="md:text-[16px] text-[14px]">
            Find awesome hotel, tour, car and activities in London
          </p>
        </div>
      </div>
    </div>
  );
};

export default Banner;
