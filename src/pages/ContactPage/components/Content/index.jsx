import React from "react";
import { Container, Row, Col } from "reactstrap";

const Content = () => {
  return (
    <>
      <section>
        <br />
        <div>
          <h2 style={{ textAlign: "center" }}>Keep in touch with us</h2>
          <p></p>
        </div>

        <br />
        <br />
        <br />
        <Container>
          <Row>
            <Col>
              <div className="contact">
                <h2 class="text-center">CONTACT</h2>
                <div class="row">
                  <div class="col-sm-5">
                    <p>Contact us and we'll get back to you within 24 hours.</p>
                    <p>
                      <span class="glyphicon glyphicon-map-marker"></span>{" "}
                      Tunis, Tunisia
                    </p>
                    <p>
                      <span class="glyphicon glyphicon-phone"></span> +216
                      345676543
                    </p>
                    <p>
                      <span class="glyphicon glyphicon-envelope"></span>{" "}
                      myemail@something.com
                    </p>
                  </div>
                  <div class="col-sm-7 slideanim">
                    <div class="row">
                      <div class="col-sm-6 form-group">
                        <input
                          class="form-control"
                          id="name"
                          name="name"
                          placeholder="Name"
                          type="text"
                          required
                        />
                      </div>
                      <div class="col-sm-6 form-group">
                        <input
                          class="form-control"
                          id="email"
                          name="email"
                          placeholder="Email"
                          type="email"
                          required
                        />
                      </div>
                    </div>

                    <textarea
                      class="form-control"
                      id="comments"
                      name="comments"
                      placeholder="Comment"
                      rows="5"
                    ></textarea>
                    <br />
                    <div class="row">
                      <div class="col-sm-12 form-group">
                        <button
                          class="btn btn-default pull-right"
                          type="submit"
                        >
                          Send
                        </button>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </Col>
          </Row>
        </Container>
      </section>
    </>
  );
};

export default Content;
