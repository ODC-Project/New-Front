import React from "react";
import { Col, Container, Row } from "reactstrap";
import CategoryCard from "./CategoryCard";
import "./style.css";

/*const CategoryItem = [
   {
    id: "1",
    title: "Development",
    image: "https://expertcode.net/upload/course/5.jpeg",
  },
  {
    id: "2",
    title: "Data Science",
    image:
      "https://cdn.futura-sciences.com/buildsv6/images/wide1920/9/5/0/950321c11d_50173256_data-science-1.jpg",
  },
  {
    id: "3",
    title: "Design",
    image: "https://i.ytimg.com/vi/ewJgxHQo0TU/maxresdefault.jpg",
  },
  {
    id: "4",
    title: "Software and It",
    image: "https://techbytes-it.com/wp-content/uploads/2021/06/software.jpeg",
  },
  {
    id: "5",
    title: "AWS",
    image:
      "https://assets.intersystems.com/dims4/default/a9dad27/2147483647/strip/true/crop/780x422+0+0/resize/780x422!/quality/90/?url=http%3A%2F%2Finter-systems-brightspot.s3.amazonaws.com%2F26%2Fbd%2F6a6aa762425f87ad7d5c2fe65f8c%2Fawslogo-image.jpg",
  },
  {
    id: "6",
    title: "Machine Learning",
    image:
      "https://blog.integral-system.fr/wp-content/uploads/2020/02/33797061.jpg",
  }, 
];*/

const CategoriesList = ({ data }) => {
  console.log(data);
  return (
    <section>
      <div className="banner-img-container">
        <img
          alt=""
          src="https://img-c.udemycdn.com/notices/web_banner/slide_2_image_udlite/e6cc1a30-2dec-4dc5-b0f2-c5b656909d5b.jpg"
          style={{ width: "100%" }}
        />
        <div className="banner-img-title">
          <h2 className="banner-text">Our Courses Categories</h2>
          <p>
            The content of our courses is developed with E-learning partner
            companies. It is employability oriented and is constantly updated
            according to recruiters' requests. Start your new career at any
            time! Available part-time? No problem, study at your own pace.
          </p>
        </div>
      </div>
      <br />
      <div className="has">
        <h2>
          Boost <strong> your training with us</strong>
        </h2>
      </div>
      <div className="has-txt">
        <p>
          <strong>
            Benefit from weekly mentoring sessions with an industry expert
          </strong>
          In addition to containing a final project, each course contains
          several projects and practical exercises to give the possibility to
          the student to test and build by himself.
        </p>
      </div>
      <br />
      <Container>
        <Row>
          {data?.map((item) => (
            <Col lg="4" md="6" sm="6">
              <CategoryCard key={item._id} item={item} categoryId={item._id} />
            </Col>
          ))}
        </Row>
      </Container>
    </section>
  );
};
export default CategoriesList;
