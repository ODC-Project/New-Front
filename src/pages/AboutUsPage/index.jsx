import React from "react";
import Footer from "../../components/Footer/Footer";
import Header from "../../components/Header/Header";
import Content from "./components/Content";
import Testimonials from "../../components/Testimonial/Testimonials";
import ChooseUs from "../../components/Choose-us/ChooseUs";

const AboutUsPage = () => {
  return (
    <>
      <Header />
      <Content />
      {/* <AboutUs /> */}
      <ChooseUs />
      <Testimonials />
      <Footer />
    </>
  );
};

export default AboutUsPage;
