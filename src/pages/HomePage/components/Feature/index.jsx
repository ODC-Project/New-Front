import React from "react";
import { Container, Row, Col } from "reactstrap";
import "./style.css";

const FeatureData = [
  {
    title: "Quick Learning",
    desc: "In addition to containing a final project, each course contains several projects and practical exercises to give the possibility to the student to test and build by himself.",
    icon: "ri-draft-line",
  },

  {
    title: "All Time Support",
    desc: "Each student will be accompanied by a high-level instructor. We firmly believe that effective training requires human assistance.",
    icon: "ri-discuss-line",
  },

  {
    title: "Certification",
    desc: "By joining us you will have access to the support of an entire community passionate about digital technology. We also asure certificate at the end of certain courses.",
    icon: "ri-contacts-book-line",
  },
];

const Features = () => {
  return (
    <section>
      <Container>
        <Row>
          {FeatureData.map((item, index) => (
            <Col lg="4" md="6" key={index}>
              <div className="single__feature text-center px-4">
                <h2 className="mb-3">
                  <i className={item.icon}></i>
                </h2>
                <h6>{item.title}</h6>
                <p>{item.desc}</p>
              </div>
            </Col>
          ))}
        </Row>
      </Container>
    </section>
  );
};

export default Features;
