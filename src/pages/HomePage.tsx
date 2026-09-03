import Hero from "../components/sections/Hero";
import FeaturedProjects from "../components/sections/FeaturedProjects";
import Services from "../components/sections/Services";
import About from "../components/sections/About";
import ContactCTA from "../components/sections/ContactCTA";
import { useEffect } from "react";

const HomePage = () => {
  useEffect(() => {
    document.title = "Harold Bejarano | Desarrollador Full Stack";
  }, []);

  return (
    <>
      <Hero />
      <FeaturedProjects />
      <Services />
      <About />
      <ContactCTA />
    </>
  );
};

export default HomePage;
