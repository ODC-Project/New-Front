import React from "react";
import Footer from "../../components/Footer/Footer";
import Header from "../../components/Header/Header";
import HeroSection from "../../components/Hero-Section/HeroSection";
import Content from "./components/Content";

const HomePage = () => {
  return (
    <>
      <Header />
      <HeroSection />
      <Content />

      <Footer />
    </>
  );
};

export default HomePage;
