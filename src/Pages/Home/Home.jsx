import Banner from "../../components/Banner/Banner";
import FeaturedTours from "../../components/FeaturedTours/FeaturedTours";
import Testimonials from "../../components/Testimonials/Testimonials";

import MainLayout from "../../layout/MainLayout";

const Home = () => {
  return (
    <>
      <MainLayout>
        <Banner />
        <Testimonials />
        <FeaturedTours />
      </MainLayout>
    </>
  );
};

export default Home;
