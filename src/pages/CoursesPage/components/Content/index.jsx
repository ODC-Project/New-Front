import axios from "axios";
import React, { useEffect, useState } from "react";
import CoursesList from "../CoursesList";
import { Row, Col } from "reactstrap";
import { useParams } from "react-router-dom";

const Content = () => {
  const [coursesList, setCourseList] = useState([]);
  const params = useParams();

  const FetchCourses = async () => {
    // const res = await axios.get(`http://localhost:5000/api/courses`);

    // call api with token
    const res = await axios.get("http://localhost:5000/api/courses", {
      headers: {
        "x-auth-token": localStorage.getItem("token"),
      },
    });
    setCourseList(res.data.courses);
  };

  useEffect(() => {
    FetchCourses();
  }, []);
  return (
    <>
      <section>
        <div className="banner-img-container">
          <img
            alt=""
            src="https://img-c.udemycdn.com/notices/web_banner/slide_2_image_udlite/e6cc1a30-2dec-4dc5-b0f2-c5b656909d5b.jpg"
            style={{ width: "100%" }}
          />
          <div className="banner-img-title">
            <h2 className="banner-text">
              A better way to learn to code. Ready to get started?
            </h2>
            <p>
              Take online coding courses to build your skills and advance your
              career as a programmer.
            </p>
          </div>
        </div>
        <Row>
          <Col lg="12" className="mb-5">
            <div
              className="course__top d-flex justify-content-between align-items-center"
              style={{ paddingBottom: "0" }}
            >
              <div className="course__top__left w-50">
                <h2>A wide selection of courses</h2>
                <p>
                  Choose from 150 online courses. New courses are added every
                  month.Learn to code with computer coding classes for web
                  development, programming and computer science, data science,
                  and much more from top universities and institutions. Join
                  today.Lorem ipsum dolor sit amet consectetur adipisicing elit.
                  Quae consequatur libero quod voluptatibus ullam quia quas,
                  vitae voluptatem recusandae reprehenderit!
                </p>
              </div>

              <div className="w-50 text-end">
                <button className="btn">See All</button>
              </div>
            </div>
          </Col>
        </Row>
        <CoursesList data={coursesList} />
      </section>
    </>
  );
};

export default Content;
