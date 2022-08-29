import React from "react";
import { Container, Row, Col } from "reactstrap";
import CourseCard from "../../../../components/CourseCard";
import "./style.css";

const CoursesList = ({ data }) => {
  return (
    <Container>
      <Row>
        {data?.map((item) => (
          <Col lg="4" md="6" sm="6">
            <CourseCard key={item._id} item={item} />
          </Col>
        ))}
      </Row>
    </Container>
  );
};

export default CoursesList;
