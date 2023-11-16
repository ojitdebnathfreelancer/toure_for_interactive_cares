import AboutLeft from "./AboutLeft";
import AboutRight from "./AboutRight";

const About = () => {
  return (
    <div className="md:h-screen max-w-7xl mx-auto">
      <div className="grid md:grid-cols-2 grid-cols-1 gap-5 items-center pt-24">
        <AboutLeft />
        <AboutRight />
      </div>
    </div>
  );
};

export default About;
