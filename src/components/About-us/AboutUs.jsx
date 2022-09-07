import React from "react";
import "./about.css";
import { Container, Row, Col } from "reactstrap";
import aboutImg from "../../assests/images/about-us.png";
import CountUp from "react-countup";
import "./about.css";

const AboutUs = () => {
  return (
    <section className="about">
      {/* <Container className="card">
<Row>
  <Col lg="3" md="6" sm="6">
    <div className="animation-delay: 0.5s">
      <div className="service-item text-center pt-3">
        <div className="p-4">
          <i className="ri-earth-fill"></i>

          <h5 className="mb-3">Online Classes</h5>
          <p>
            Diam elitr kasd sed at elitr sed ipsum justo dolor sed clita
            amet diam
          </p>
        </div>
      </div>
    </div>
  </Col>
  <Col lg="3" md="6" sm="6">
    <div className="wow fadeInUp" data-wow-delay="0.3s">
      <div className="service-item text-center pt-3">
        <div className="p-4">
          <i className="ri-honour-fill"></i>
          <h5 className="mb-3">Skilled Instructors</h5>
          <p>
            Diam elitr kasd sed at elitr sed ipsum justo dolor sed clita
            amet diam
          </p>
        </div>
      </div>
    </div>
  </Col>
  <Col lg="3" md="6" sm="6">
    <div className="wow fadeInUp" data-wow-delay="0.3s">
      <div className="service-item text-center pt-3">
        <div className="p-4">
          <i className="ri-book-mark-fill"></i>
          <h5 className="mb-3">Book Library</h5>
          <p>
            Diam elitr kasd sed at elitr sed ipsum justo dolor sed clita
            amet diam
          </p>
        </div>
      </div>
    </div>
  </Col>
  <Col lg="3" md="6" sm="6">
    <div className="wow fadeInUp" data-wow-delay="0.3s">
      <div className="service-item text-center pt-3">
        <div className="p-4">
          <i className="ri-home-3-line"></i>
          <h5 className="mb-3">Home Projects</h5>
          <p>
            Diam elitr kasd sed at elitr sed ipsum justo dolor sed clita
            amet diam
          </p>
        </div>
      </div>
    </div>
  </Col>
</Row>
</Container>
 */}

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
              <h2>About Us</h2>
              <p>
                The E-Learning method now replaces the traditional, highly
                theoretical and non-motivating educational system. Our learning
                model is based on projects and exercises providing the student
                with long-term knowledge and skills.
              </p>

              <div className="about__counter">
                <div className=" d-flex gap-5 align-items-center">
                  <div className="single__counter">
                    <span className="counter">
                      <CountUp start={0} end={25} duration={2} suffix="M" />
                    </span>

                    <p className="counter__title">
                      students trained in the trendiest technologies on the
                      market.
                    </p>
                  </div>

                  <div className="single__counter">
                    <span className="counter">
                      <CountUp start={0} end={12} duration={2} suffix="K" />
                    </span>

                    <p className="counter__title">
                      trainer instructors who accompany our students on a daily
                      basis.
                    </p>
                  </div>
                </div>

                <div className=" d-flex gap-5 align-items-center">
                  <div className="single__counter">
                    <span className="counter">
                      <CountUp start={0} end={95} duration={2} suffix="K" />
                    </span>

                    <p className="counter__title">
                      training courses launched with professionals in the
                      business.
                    </p>
                  </div>

                  <div className="single__counter">
                    <span className="counter">
                      <CountUp start={0} end={5} duration={2} suffix="K" />
                    </span>

                    <p className="counter__title">
                      recruiting partners who have trusted our pedagogy
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </Col>
        </Row>
      </Container>
    </section>
  );
};

export default AboutUs;
