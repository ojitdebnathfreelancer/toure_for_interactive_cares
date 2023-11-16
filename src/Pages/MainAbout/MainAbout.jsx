import Compines from "../../components/Compines/Compines";
import Counter from "../../components/Counter/Counter";
import Features from "../../components/Features/Features";
import Team from "../../components/Team/Team";
import Testimonials from "../../components/Testimonials/Testimonials";
import MainLayout from "../../layout/MainLayout";
import About from "../About/About";

const MainAbout = () => {
  return (
    <MainLayout>
      <About />
      <Counter />
      <Features />
      <Team />
      <Testimonials />
      <Compines />
    </MainLayout>
  );
};

export default MainAbout;
