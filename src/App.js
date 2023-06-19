import AboutUs from "./components/AboutUs";
import Expertise from "./components/Expertise";
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
    </>
  );
}