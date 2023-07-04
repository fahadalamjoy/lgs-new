import AboutUs from "./components/AboutUs";
import Contact from "./components/Contact";
import Expertise from "./components/Expertise";
import FifthSection from "./components/FifthSection";
import Footer from "./components/Footer";
import HeroSection from "./components/HeroSection";
import Navbar from "./components/Navbar";
import SecondSection from "./components/SecondSection";
import YoutubeSection from "./components/YoutubeSection";

export default function App() {
  return (
    <>
      <Navbar />
      <HeroSection />
      <SecondSection />
      <YoutubeSection/>
      <AboutUs />
      <Expertise />
      <FifthSection />
      <Contact />
      <Footer/>
    </>
  );
}