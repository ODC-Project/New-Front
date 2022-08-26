import React from "react";
import CategoryCard from "./CategoryCard";
import { Col, Container, Row } from "reactstrap";
import "./style.css";

const CategoryItem = [
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
];

const CategoriesList = () => {
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
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Assumenda,
            maiores. Amet, repellat quis, quod excepturi ipsum tempore
            reprehenderit nulla voluptatum maxime explicabo perferendis ducimus
            fugit odio iusto enim deserunt rerum!
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
          When people grow, companies do too. And yet,
          <strong>
            so often the training we carefully create for our teams, is
            delivered on platforms not built for us.
          </strong>
          They’re confusing to use, stressful to manage, and just feel…off. To
          add insult to injury, they often come at a price we can’t afford.
        </p>
      </div>
      <br />
      <Container>
        <Row>
          {CategoryItem.map((item, index) => (
            <Col lg="4" md="6" sm="6">
              <CategoryCard key={item._id} item={item} index={index} />
            </Col>
          ))}
        </Row>
      </Container>
      {/*  <Container>
        <Row>
          {[1, 2, 3, 4, 5, 6]?.map((item, index) => (
            <Col lg="4" md="6" sm="6">
              <CategoryCard key={item._id} item={item} index={index} />
            </Col>
          ))}
        </Row>
      </Container> */}
    </section>
  );
};

export default CategoriesList;
