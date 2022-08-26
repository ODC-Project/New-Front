import React from "react";
import { Container, Row, Col } from "reactstrap";

import FreeCourseCard from "./FreeCourseCard";

import "./free-course.css";

const freeCourseData = [
  {
    id: "01",
    title: "Basic Web Development Course",
    image:
      "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRTc9Is6HInupQuOyu0KiIR7toTnRqY81qyILDTIRqnlvtg9BiNV3NtQQGw__5VnxfC8Kg&usqp=CAU",
    students: 5.3,
    rating: 1.7,
  },
  {
    id: "02",
    title: "Learn How to Learn",
    image:
      "https://t4.ftcdn.net/jpg/00/88/91/65/360_F_88916501_CVw2lFZBLe5pgFaxSRsrmN729woqZ5tb.jpg",
    students: 5.3,
    rating: 1.7,
  },

  {
    id: "03",
    title: "Object Oriented Programming",
    image:
      "https://iou.ac/wp-content/uploads/2021/07/Object-Oriented-Programming-1.png",
    students: 5.3,
    rating: 1.7,
  },

  {
    id: "04",
    title: "Basic UI/UX Design - Figma",
    image: "https://www.codefirst.co.uk/blog/file/59/",
    students: 5.3,
    rating: 1.7,
  },
];

const FreeCourse = () => {
  return (
    <section>
      <Container>
        <Row>
          <Col lg="12" className="text-center mb-5">
            <h2 className="fw-bold">Our Free Courses</h2>
          </Col>

          {freeCourseData.map((item) => (
            <Col lg="3" md="4" className="mb-4" key={item.id}>
              <FreeCourseCard item={item} />
            </Col>
          ))}
        </Row>
      </Container>
    </section>
  );
};

export default FreeCourse;
