import axios from "axios";
import React, { useEffect, useState } from "react";
import CourseList from "../CoursesList";

const Content = () => {
  const [coursesList, setCourseList] = useState([]);

  const FetchCourses = async () => {
    const res = await axios.get("http://localhost:5000/api/courses/");

    // call api with token
    // const res = await axios.get("http://localhost:5000/api/courses/", {
    //   headers: {
    //     "x-auth-token": localStorage.getItem("token"),
    //   },
    // });
    setCourseList(res.data.courses);
  };

  useEffect(() => {
    FetchCourses();
  }, []);
  return (
    <>
      {/* total data courses {coursesList.length} */}
      <CourseList data={coursesList} />
    </>
  );
};

export default Content;
