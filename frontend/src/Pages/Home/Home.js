import HeroSection from "../../Components/HomeComponents/HeroSection/HeroSection";
import UpcomingEvents from "../../Components/HomeComponents/UpcomingEvents/UpcomingEvents";
import About from "../../Components/HomeComponents/About/About";
import Services from "../../Components/HomeComponents/Services/Services";

const Home = () => {
  return (
    <>
      <HeroSection />
      <UpcomingEvents />
      <About />
      <Services />
    </>
  );
};

export default Home;
