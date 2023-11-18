import testimonial from "../../assets/images/testimonial/testimonial.jpg";

const TestimonialLeft = () => {
  return (
    <div className="xl:mb-10 relative mx-auto">
      <img
        src={testimonial}
        alt=""
        className="md:w-80 md:top-0 md:left-[40px] w-56 left-[50px] top-16 rotate-12"
      />
      <div className="">
        <img
          src={testimonial}
          alt=""
          className="absolute md:w-80 lg:left-14 left-5 lg:top-40 md:top-40 -rotate-6"
        />
      </div>
    </div>
  );
};

export default TestimonialLeft;
