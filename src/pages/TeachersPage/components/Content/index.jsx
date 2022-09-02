import React from "react";
import { Container, Row, Col } from "reactstrap";

const Content = () => {
  return (
    <section>
      <Container className="container">
        <Row>
          <Col>
            <div className="col-lg-3 col-md-6 " data-wow-delay="0.1s">
              <div className="team-item bg-light">
                <div className="overflow-hidden">
                  <img
                    className="img-fluid"
                    src="https://learndataanalytics.ca/wp-content/uploads/2022/03/rsw_1535m-1024x540.webp"
                    alt=""
                  />
                </div>
                <div className="position-relative">
                  <div className="bg-light d-flex justify-content-center pt-2 px-1">
                    <a className="btn btn sm-square btn-primary mx-1" href="">
                      <i className="fab fa-facebook-f"></i>
                    </a>
                    <a className="btn btn-sm-square btn-primary mx-1" href="">
                      <i className="fab fa-twitter"></i>
                    </a>
                    <a className="btn btn-sm-square btn-primary mx-1" href="">
                      <i className="fab fa-instagram"></i>
                    </a>
                  </div>
                </div>
                <div className="text-center p-4">
                  <h5 className="mb-0">Instructor Name</h5>
                  <small>Designation</small>
                </div>
              </div>
            </div>
            <div className="col-lg-3 col-md-6 " data-wow-delay="0.1s">
              <div className="team-item bg-light">
                <div className="overflow-hidden">
                  <img
                    className="img-fluid"
                    src="https://learndataanalytics.ca/wp-content/uploads/2022/03/rsw_1535m-1024x540.webp"
                    alt=""
                  />
                </div>
                <div className="position-relative">
                  <div className="bg-light d-flex justify-content-center pt-2 px-1">
                    <a className="btn btn sm-square btn-primary mx-1" href="">
                      <i className="fab fa-facebook-f"></i>
                    </a>
                    <a className="btn btn-sm-square btn-primary mx-1" href="">
                      <i className="fab fa-twitter"></i>
                    </a>
                    <a className="btn btn-sm-square btn-primary mx-1" href="">
                      <i className="fab fa-instagram"></i>
                    </a>
                  </div>
                </div>
                <div className="text-center p-4">
                  <h5 className="mb-0">Instructor Name</h5>
                  <small>Designation</small>
                </div>
              </div>
            </div>
            <div className="col-lg-3 col-md-6 " data-wow-delay="0.1s">
              <div className="team-item bg-light">
                <div className="overflow-hidden">
                  <img
                    className="img-fluid"
                    src="https://learndataanalytics.ca/wp-content/uploads/2022/03/rsw_1535m-1024x540.webp"
                    alt=""
                  />
                </div>
                <div className="position-relative">
                  <div className="bg-light d-flex justify-content-center pt-2 px-1">
                    <a className="btn btn sm-square btn-primary mx-1" href="">
                      <i className="fab fa-facebook-f"></i>
                    </a>
                    <a className="btn btn-sm-square btn-primary mx-1" href="">
                      <i className="fab fa-twitter"></i>
                    </a>
                    <a className="btn btn-sm-square btn-primary mx-1" href="">
                      <i className="fab fa-instagram"></i>
                    </a>
                  </div>
                </div>
                <div className="text-center p-4">
                  <h5 className="mb-0">Instructor Name</h5>
                  <small>Designation</small>
                </div>
              </div>
            </div>
          </Col>
        </Row>
      </Container>
    </section>
  );
};

export default Content;
