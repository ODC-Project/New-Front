import React from "react";
import { Container, Row, Col } from "reactstrap";
import Slider from "react-slick";

import "./hero-section.css";

const HeroSection = () => {
  const settings = {
    infinite: true,
    dots: true,
    speed: 500,
    slidesToShow: 1,
    autoplay: true,
    autoplaySpeed: 3000,
    slidesToScroll: 1,
  };
  return (
    <section className="hero">
      <Container>
        <Row>
          <Col lg="6" md="6">
            <div className="hero__content">
              <h2 className="mb-4 hero__title">
                <br />
                CODE YOUR WAY TO SUCCESS <br />
                Discover a limitless world of learning
                <br />
                {/*  Apprenez selon votre horaire approprié. */}
              </h2>
              <p className="mb-5">
                We train the next tech generation in the latest technologies and
                <br />
                the jobs of the future to prepare <br />
                them for the professional world and strengthen their
                employability.
                <br />
              </p>
            </div>
            {/* <div className="search">
              <input type="text" placeholder="Search" />
              <button className="btn">Search</button>
            </div> */}
          </Col>

          <Col lg="6" md="6">
            <div>
              <Slider {...settings}>
                <div>
                  <img
                    src="https://media.istockphoto.com/photos/beautiful-young-woman-with-laptop-isolated-on-white-background-picture-id1321598161?k=20&m=1321598161&s=170667a&w=0&h=cPmvggzxAKup_ptbFJVR0Rv1ZMfPqaMfHpvdnyYYXiM="
                    alt=""
                    className="w-100 hero__img"
                  />
                </div>
                <div>
                  <img
                    src="https://media.istockphoto.com/photos/charming-handsome-picture-id528582811?k=20&m=528582811&s=612x612&w=0&h=ipjmeCeHebLM2I3443YETj148kCSbs1KQKqApTgAzmY="
                    alt=""
                    className="w-100 hero__img"
                  />
                </div>
                <div>
                  <img
                    src="https://media.istockphoto.com/photos/group-of-multiracial-business-people-picture-id1306673186?k=20&m=1306673186&s=612x612&w=0&h=PaPYNhXzbEQ5mn-zllWawF6J66atQ0Eru0jrycFlhf0="
                    alt=""
                    className="w-100 hero__img"
                  />
                </div>
              </Slider>
            </div>
          </Col>
        </Row>
      </Container>
    </section>
  );
};

export default HeroSection;
