import aboutImage from "../../assets/images/about/about.jpg";

const AboutLeft = () => {
  return (
    <div className="relative">
      <img
        src={aboutImage}
        alt=""
        className=" md:w-80 md:top-0 md:left-[40px] w-72 left-[50px] top-16 -rotate-12"
      />
      <div className="">
        <img
          src={aboutImage}
          alt=""
          className="absolute md:top-48 md:left-60 md:w-80 w-72 left-[150px] top-40 "
        />
      </div>
    </div>
  );
};

export default AboutLeft;
