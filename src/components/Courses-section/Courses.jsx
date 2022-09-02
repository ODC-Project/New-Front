import React from "react";
import { Container, Row, Col } from "reactstrap";

import "./courses.css";
import CourseCard from "./CourseCard";
import { useNavigate } from "react-router-dom";

// to change with api
const coursesData = [
  {
    id: "01",
    title: "Data Science",
    lesson: 12,
    students: 12.5,
    rating: 5.9,
    image:
      "https://csc.edu.vn/data/images/mon-hoc/lap-trinh/Khoa-hoc-data-science-khnt-hcm-online.png",
  },

  {
    id: "02",
    title: "Machine Learning",
    lesson: 12,
    students: 12.5,
    rating: 5.9,
    image:
      "https://awareth.aware-cdn.net/wp-content/uploads/2018/03/MachineLearning_01_Header.jpg",
  },

  {
    id: "03",
    title: "Frontend development",
    lesson: 12,
    students: 12.5,
    rating: 5.9,
    image:
      "https://web4s.vn/uploads/tiny_uploads/tin-tuc/web-development/development-la-gi.jpeg",
  },
];

const Courses = () => {
  let navigate = useNavigate();
  const handleClick = (id) => {
    navigate(`/Chapters/${id}`);
  };

  return (
    <section>
      <Container>
        <Row>
          <Col lg="12" className="mb-5">
            <div className="course__top d-flex justify-content-between align-items-center">
              <div className="course__top__left w-50">
                <h2>Our Popular Courses</h2>
                <p>
                  Lorem ipsum dolor sit amet consectetur adipisicing elit. Quae
                  consequatur libero quod voluptatibus ullam quia quas, vitae
                  voluptatem recusandae reprehenderit!
                </p>
              </div>

              <div className="w-50 text-end">
                <button className="btn">See All</button>
              </div>
            </div>
          </Col>
          {coursesData.map((item) => {
            console.log(item);
            return (
              <Col lg="4" md="6" sm="6" key={item.id}>
                <CourseCard
                  item={item}
                  handleCardClick={() => handleClick(item.id)}
                />
              </Col>
            );
          })}
        </Row>
      </Container>
    </section>
  );
};

export default Courses;
