import HeroSection from "../../../../components/Hero-Section/HeroSection";
/* import AboutUs from "../AboutUs"; */
import ChooseUs from "../ChooseUs";
// import Courses from "../components/Courses-section/Courses";
// import Features from "./components/Feature";
// import FreeCourse from "../components/Free-course-section/FreeCourse";

// import Testimonials from "../components/Testimonial/Testimonials";
// import Newsletter from "../components/Newsletter/Newsletter";
import "./style.css";
import Partner from "../Partner";
import About from "../About ";

const Content = () => {
  // call api partner
  return (
    <>
      <HeroSection />

      {/*   <AboutUs /> */}
      <About />
      <Partner />
      {/* <Courses /> */}
      <ChooseUs />
      {/* <Features /> */}
      {/* <FreeCourse /> */}
      {/* <Testimonials /> */}

      {/* <Newsletter /> */}
    </>
  );
};

export default Content;
