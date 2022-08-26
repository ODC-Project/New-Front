import React from "react";
import { Container, Row, Col } from "reactstrap";

const Content = () => {
  return (
    <section>
      <Container className="container">
        <Row>
          <Col>
            <div class="col-lg-3 col-md-6 " data-wow-delay="0.1s">
              <div class="team-item bg-light">
                <div class="overflow-hidden">
                  <img
                    class="img-fluid"
                    src="https://learndataanalytics.ca/wp-content/uploads/2022/03/rsw_1535m-1024x540.webp"
                    alt=""
                  />
                </div>
                <div class="position-relative">
                  <div class="bg-light d-flex justify-content-center pt-2 px-1">
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
                <div class="text-center p-4">
                  <h5 class="mb-0">Instructor Name</h5>
                  <small>Designation</small>
                </div>
              </div>
            </div>
            <div class="col-lg-3 col-md-6 " data-wow-delay="0.1s">
              <div class="team-item bg-light">
                <div class="overflow-hidden">
                  <img
                    class="img-fluid"
                    src="https://learndataanalytics.ca/wp-content/uploads/2022/03/rsw_1535m-1024x540.webp"
                    alt=""
                  />
                </div>
                <div class="position-relative">
                  <div class="bg-light d-flex justify-content-center pt-2 px-1">
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
                <div class="text-center p-4">
                  <h5 class="mb-0">Instructor Name</h5>
                  <small>Designation</small>
                </div>
              </div>
            </div>
            <div class="col-lg-3 col-md-6 " data-wow-delay="0.1s">
              <div class="team-item bg-light">
                <div class="overflow-hidden">
                  <img
                    class="img-fluid"
                    src="https://learndataanalytics.ca/wp-content/uploads/2022/03/rsw_1535m-1024x540.webp"
                    alt=""
                  />
                </div>
                <div class="position-relative">
                  <div class="bg-light d-flex justify-content-center pt-2 px-1">
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
                <div class="text-center p-4">
                  <h5 class="mb-0">Instructor Name</h5>
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
