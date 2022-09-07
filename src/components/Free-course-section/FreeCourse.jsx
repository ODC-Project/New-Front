import React from "react";
import { Container, Row, Col } from "reactstrap";

import FreeCourseCard from "./FreeCourseCard";

import "./free-course.css";

const FreeCourseList = ({ data }) => {
  return (
    <section style={{ backgroundColor: "#d5e8f8" }}>
      <Container>
        <Row>
          <Col lg="12" className="text-center mb-5">
            <h2 className="fw-bold">Our Free Courses</h2>
            <p>
              provides free and open access to a selection of introductory
              courses taught by distinguished teachers and scholars at our
              platform . The aim of the project is to expand access to
              educational materials for all who wish to learn.
            </p>
          </Col>

          {data?.map((item) => (
            <Col lg="3" md="4" className="mb-4" key={item.id}>
              <FreeCourseCard key={item._id} item={item} />
            </Col>
          ))}
        </Row>
      </Container>
    </section>
  );
};

export default FreeCourseList;
