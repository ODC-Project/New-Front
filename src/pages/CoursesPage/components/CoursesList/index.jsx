import React from "react";
import { Container, Row, Col } from "reactstrap";
import CourseCard from "../../../../components/CourseCard";
import "./style.css";
import { useNavigate } from "react-router-dom";

const CoursesList = ({ data }) => {
  let navigate = useNavigate();
  const handleClick = (id) => {
    navigate(`/chapters/${id}`);
  };
  return (
    <Container>
      <Row>
        {data?.map((item) => (
          <Col lg="4" md="6" sm="6">
            <CourseCard
              key={item._id}
              item={item}
              handleCardClick={() => handleClick(item._id)}
            />
          </Col>
        ))}
      </Row>
    </Container>
  );
};

export default CoursesList;
