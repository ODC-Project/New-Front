import React, { useState } from "react";
import { Container, Row, Col } from "reactstrap";
import Slider from "react-slick";

import chooseImg from "../../assests/images/why-choose-us.png";
import "./choose-us.css";

import ReactPlayer from "react-player";

const ChooseUs = () => {
  const settings = {
    infinite: true,
    dots: true,
    speed: 500,
    slidesToShow: 1,
    autoplay: true,
    autoplaySpeed: 3000,
    slidesToScroll: 1,
  };
  /*   const [showVideo, setShowVideo] = useState(false); */
  return (
    <section className="chooseUs-Section">
      <Container>
        <Row>
          <Col lg="6" md="6">
            <div className="choose__content">
              <h2>An interactive and gamified learning platform</h2>
              <p>
                Our educational platform is the result of the collaboration of
                our educational team, our developers, our UX designers, our
                content creators and our partners. This builds a unique learning
                experience combining personalized follow-up with learning and
                autonomy. Its various functionalities allow it to accommodate
                the entire educational path. <br /> We want to create a world
                where anyone can build something meaningful with technology, and
                everyone has the learning tools, resources, and opportunities to
                do so. Code contains a world of possibilities — all that’s
                required is the curiosity and drive to learn.
              </p>
            </div>
          </Col>

          <Col lg="6" md="6">
            <div className="choose__img">
              <div>
                <Slider {...settings}>
                  <div>
                    <img
                      src="https://media.istockphoto.com/photos/profile-side-view-portrait-of-attractive-cheerful-skilled-girl-geek-picture-id1392930383?k=20&m=1392930383&s=612x612&w=0&h=icEyUZRozS_cMXPRLloSPWn-TYEEanv3wIwfwOlySb4="
                      alt=""
                      className="w-100 hero__img"
                    />
                  </div>
                  <div>
                    <img
                      src="https://media.istockphoto.com/photos/web-developer-coding-for-program-working-on-software-startup-project-picture-id1214605359?k=20&m=1214605359&s=612x612&w=0&h=dxfPV86mCQW1XkjoyMapGPzOBuZq39M7JKlcA1vWdjc="
                      alt=""
                      className="w-100 hero__img"
                    />
                  </div>
                  <div>
                    <img
                      src="https://media.istockphoto.com/photos/happy-programmers-talking-while-developing-new-software-in-the-office-picture-id1130266509?k=20&m=1130266509&s=612x612&w=0&h=xgAfgI0jVJAqW9il97VSi2ibjcLn-r5sGDsjTH5KPno="
                      alt=""
                      className="w-100 hero__img"
                    />
                  </div>
                </Slider>
              </div>
              {/* {showVideo ? (
                <ReactPlayer
                  url="https://www.youtube.com/watch?v=qFp27TR4Yew"
                  controls
                  width="100%"
                  height="350px"
                />
              ) : (
                <img src={chooseImg} alt="" className="w-100" />
              )}

              {!showVideo && (
                <span className="play__icon">
                  <i
                    className="ri-play-circle-line"
                    onClick={() => setShowVideo(!showVideo)}
                  ></i>
                </span>
              )} */}
            </div>
          </Col>
        </Row>
      </Container>
    </section>
  );
};

export default ChooseUs;
