import Title from "../Share/Title/Title";
import TeamCard from "./TeamCard";
import { FaLinkedin } from "react-icons/fa";
import { FaFacebookF } from "react-icons/fa";
import "./Team.css";

import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/pagination";
import { Pagination } from "swiper/modules";

const Team = () => {
  const teamInfo = [
    {
      images:
        "https://images.unsplash.com/photo-1491349174775-aaafddd81942?q=80&w=1374&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
      icon1: <FaLinkedin size={30} />,
      icon2: <FaFacebookF size={30} />,
    },
    {
      images:
        "https://images.unsplash.com/photo-1519085360753-af0119f7cbe7?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MjN8fHBlcnNvbiUyMGltYWdlcyUyMHByb2Zlc3Npb25hbHxlbnwwfHwwfHx8MA%3D%3D",
      icon1: <FaLinkedin size={30} />,
      icon2: <FaFacebookF size={30} />,
    },
    {
      images:
        "https://images.unsplash.com/photo-1559386484-97dfc0e15539?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MjR8fHBlcnNvbiUyMGltYWdlcyUyMHByb2Zlc3Npb25hbHxlbnwwfHwwfHx8MA%3D%3D",
      icon1: <FaLinkedin size={30} />,
      icon2: <FaFacebookF size={30} />,
    },
    {
      images:
        "https://images.unsplash.com/photo-1587837073080-448bc6a2329b?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MjZ8fHBlcnNvbiUyMGltYWdlcyUyMHByb2Zlc3Npb25hbHxlbnwwfHwwfHx8MA%3D%3D",
      icon1: <FaLinkedin size={30} />,
      icon2: <FaFacebookF size={30} />,
    },
    {
      images:
        "https://images.unsplash.com/photo-1587837073080-448bc6a2329b?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MjZ8fHBlcnNvbiUyMGltYWdlcyUyMHByb2Zlc3Npb25hbHxlbnwwfHwwfHx8MA%3D%3D",
      icon1: <FaLinkedin size={30} />,
      icon2: <FaFacebookF size={30} />,
    },
    {
      images:
        "https://images.unsplash.com/photo-1587837073080-448bc6a2329b?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MjZ8fHBlcnNvbiUyMGltYWdlcyUyMHByb2Zlc3Npb25hbHxlbnwwfHwwfHx8MA%3D%3D",
      icon1: <FaLinkedin size={30} />,
      icon2: <FaFacebookF size={30} />,
    },
    {
      images:
        "https://images.unsplash.com/photo-1587837073080-448bc6a2329b?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MjZ8fHBlcnNvbiUyMGltYWdlcyUyMHByb2Zlc3Npb25hbHxlbnwwfHwwfHx8MA%3D%3D",
      icon1: <FaLinkedin size={30} />,
      icon2: <FaFacebookF size={30} />,
    },
    {
      images:
        "https://images.unsplash.com/photo-1587837073080-448bc6a2329b?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MjZ8fHBlcnNvbiUyMGltYWdlcyUyMHByb2Zlc3Npb25hbHxlbnwwfHwwfHx8MA%3D%3D",
      icon1: <FaLinkedin size={30} />,
      icon2: <FaFacebookF size={30} />,
    },
  ];

  return (
    <div className="max-w-7xl mx-auto md:px-0 px-5">
      {/* Title */}
      <Title sectionName="Team" sectionTitle="Our Amazing Team" />

      {/* Swiper */}
      <Swiper
        slidesPerView={5}
        spaceBetween={30}
        pagination={{
          clickable: true,
        }}
        modules={[Pagination]}
        breakpoints={{
          320: { slidesPerView: 2, spaceBetween: 20 },
          768: {
            slidesPerView: 4,
            spaceBetween: 20,
          },
          1024: {
            slidesPerView: 5,
            spaceBetween: 30,
          },
        }}
        className="mySwiper mt-11 md:px-10 px-2"
      >
        {teamInfo.map((team, index) => (
          <SwiperSlide key={index}>
            <TeamCard team={team} />
          </SwiperSlide>
        ))}
      </Swiper>
    </div>
  );
};

export default Team;
