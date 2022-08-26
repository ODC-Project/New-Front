import React from "react";
import "./testimonial.css";
import { Container, Row, Col } from "reactstrap";
import Slider from "react-slick";

const Testimonials = () => {
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
    <section>
      <Container>
        <Row>
          <Col lg="10" md="12" className="m-auto">
            <div className="testimonial__wrapper d-flex justify-content-between align-items-center ">
              <div className="testimonial__img w-60">
                <img
                  src="https://wallpaperaccess.com/full/7967375.jpg"
                  alt=""
                  className="w-100"
                />
              </div>

              <div className="testimonial__content w-50">
                <h2 className="mb-4">Our Students Voice</h2>

                <Slider {...settings}>
                  <div>
                    <div className="single__testimonial">
                      <h6 className="mb-3 fw-bold">
                        Excellent course of materials
                      </h6>
                      <p>
                        An interactive and in-browser embedded coding
                        environment, that's just perfect. I believe this to be a
                        very effective medium for learning a skill such as
                        coding.
                      </p>

                      <div className="student__info mt-4">
                        <h6 className="fw-bold">Rainer Grimm</h6>
                        <p>Software architect and Instructor</p>
                      </div>
                    </div>
                  </div>

                  <div>
                    <div className="single__testimonial">
                      <h6 className="mb-3 fw-bold">Great instructors</h6>
                      <p>
                        Their platform has allowed me to help a broader audience
                        of learners. I look forward to working with them again
                        in the future!
                      </p>

                      <div className="student__info mt-4">
                        <h6 className="fw-bold">Saad Aleem</h6>
                        <p>Software Engineer, Google</p>
                      </div>
                    </div>
                  </div>

                  <div>
                    <div className="single__testimonial">
                      <h6 className="mb-3 fw-bold">
                        Excellent course of materials
                      </h6>
                      <p>
                        A rich yet very easy to use platform, a wonderful team
                        and a true opportunity to make a difference by sharing
                        my skills - couldn't have asked for better!
                      </p>

                      <div className="student__info mt-4">
                        <h6 className="fw-bold"> Kenan Eyvazov</h6>
                        <p>DevOps Engineer</p>
                      </div>
                    </div>
                  </div>
                </Slider>
              </div>
            </div>
          </Col>
        </Row>
      </Container>
    </section>
  );
};

export default Testimonials;
