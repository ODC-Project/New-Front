import React from "react";
import { Container, Row, Col } from "reactstrap";

import "./hero-section.css";

const HeroSection = () => {
  return (
    <section>
      <Container>
        <Row>
          <Col lg="6" md="6">
            <div className="hero__content">
              <h2 className="mb-4 hero__title">
                Vous débutez sur E-Learning ?<br />
                C'est votre jour de chance.
                <br />
                inscrivez-vous.
                <br />
                Apprenez selon votre horaire approprié.
              </h2>
              <p className="mb-5">
                Lorem ipsum dolor sit amet consectetur <br /> adipisicing elit.
                Aut saepe voluptatum earum delectus <br /> deserunt id iste,
                quas officiis et repellat!
                <br />
                Lorem ipsum dolor sit amet consectetur
              </p>
            </div>
            {/* <div className="search">
              <input type="text" placeholder="Search" />
              <button className="btn">Search</button>
            </div> */}
          </Col>

          <Col lg="6" md="6">
            <img
              src="https://media.istockphoto.com/photos/beautiful-young-woman-with-laptop-isolated-on-white-background-picture-id1321598161?k=20&m=1321598161&s=170667a&w=0&h=cPmvggzxAKup_ptbFJVR0Rv1ZMfPqaMfHpvdnyYYXiM="
              alt=""
              className="w-100 hero__img"
            />
          </Col>
        </Row>
      </Container>
    </section>
  );
};

export default HeroSection;
