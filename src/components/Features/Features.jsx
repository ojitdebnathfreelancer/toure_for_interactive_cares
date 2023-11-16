import Title from "../Share/Title/Title";
import { FcBriefcase } from "react-icons/fc";
import Feature from "./Feature";

const Features = () => {
  const features = [
    {
      icon: <FcBriefcase size={30} />,
      title: "Chep Rates",
      desc: "Lorem ipsum, dolor sit amet consectetur adipisicing elit. Similique temporibus placeat, aliquid iure velit",
    },
    {
      icon: <FcBriefcase size={30} />,
      title: "Chep Rates",
      desc: "Lorem ipsum, dolor sit amet consectetur adipisicing elit. Similique temporibus placeat, aliquid iure velit",
    },
    {
      icon: <FcBriefcase size={30} />,
      title: "Chep Rates",
      desc: "Lorem ipsum, dolor sit amet consectetur adipisicing elit. Similique temporibus placeat, aliquid iure velit",
    },
    {
      icon: <FcBriefcase size={30} />,
      title: "Chep Rates",
      desc: "Lorem ipsum, dolor sit amet consectetur adipisicing elit. Similique temporibus placeat, aliquid iure velit",
    },
    {
      icon: <FcBriefcase size={30} />,
      title: "Chep Rates",
      desc: "Lorem ipsum, dolor sit amet consectetur adipisicing elit. Similique temporibus placeat, aliquid iure velit",
    },
    {
      icon: <FcBriefcase size={30} />,
      title: "Chep Rates",
      desc: "Lorem ipsum, dolor sit amet consectetur adipisicing elit. Similique temporibus placeat, aliquid iure velit",
    },
  ];

  return (
    <div className="bg-[#F7F8FA]">
      <div className="py-20 max-w-7xl mx-auto md:px-0 px-5">
        {/* title */}
        <Title sectionName="Features" sectionTitle="Why Choose Us" />

        {/* cards */}
        <div className="grid md:grid-cols-3 grid-cols-1 gap-5 mt-11">
          {features.map((feature, index) => (
            <Feature key={index} feature={feature} />
          ))}
        </div>
      </div>
    </div>
  );
};

export default Features;
