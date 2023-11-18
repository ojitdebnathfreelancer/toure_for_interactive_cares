import aboutImage from "../../assets/images/about/about.jpg";

const AboutLeft = () => {
  return (
    <div className="xl:pl-10 lg:pl-16 md:pl-10 pl-10 relative">
      <img
        src={aboutImage}
        alt=""
        className="xl:h-96 lg:h-72 md:h-64 h-60 -rotate-12"
      />
      <div className="">
        <img
          src={aboutImage}
          alt=""
          className="absolute lg:h-72 md:h-64 h-60 xl:h-96 top-0 lg:left-48 md:left-40 left-32"
        />
      </div>
    </div>
  );
};

export default AboutLeft;
