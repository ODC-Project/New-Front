import React from "react";
import { Container, Row, Col } from "reactstrap";

import CountUp from "react-countup";
const About = () => {
  return (
    <>
      <section>
        <Container>
          <Row>
            <Col lg="6" md="6">
              <div className="about__img">
                <img
                  src="https://www.capsea-yachting.com/wp-content/uploads/2020/07/e-learning-image.jpg"
                  alt=""
                  className="w-100"
                />
              </div>
            </Col>

            <Col lg="6" md="6">
              <div className="about__content">
                <h1>About Us</h1>
                <p>
                  Lorem ipsum dolor, sit amet consectetur adipisicing elit.
                  Excepturi cupiditate animi deserunt libero nesciunt corporis
                  explicabo nobis ex quo molestiae!
                </p>
                <p className="has-s-font-size">
                  <strong>Was build to change that. </strong>
                  We’re on a mission to democratize training. To deliver a
                  premium learning experience that’s accessible, affordable, and
                  actually enjoyable.
                </p>

                <div className="about__counter">
                  <div className=" d-flex gap-5 align-items-center">
                    <div className="single__counter">
                      <span className="counter">
                        <CountUp start={0} end={25} duration={2} suffix="K" />
                      </span>

                      <p className="counter__title">Completed Projects</p>
                    </div>

                    <div className="single__counter">
                      <span className="counter">
                        <CountUp start={0} end={12} duration={2} suffix="M" />
                      </span>

                      <p className="counter__title">Patient Around World</p>
                    </div>
                  </div>

                  <div className=" d-flex gap-5 align-items-center">
                    <div className="single__counter">
                      <span className="counter">
                        <CountUp start={0} end={95} duration={2} suffix="M" />
                      </span>

                      <p className="counter__title">Ideas Raised Funds</p>
                    </div>

                    <div className="single__counter">
                      <span className="counter">
                        <CountUp start={0} end={5} duration={2} suffix="K" />
                      </span>
                      <p className="counter__title">Categories Served</p>
                    </div>
                  </div>
                </div>
              </div>
            </Col>
          </Row>
        </Container>
        <div className="text-bottom">
          <p>
            We help organizations of all types and sizes prepare for the path
            ahead — wherever it leads. Our curated collection of business and
            technical courses help companies, governments, and nonprofits go
            further by placing learning at the center of their strategies.
          </p>
        </div>
      </section>
    </>
  );
};

export default About;
