import React from "react";
import axios from "axios";
import { useState, useEffect } from "react";
import FreeCourseList from "../FreeCourse";

const Content = () => {
  const [freeCourseList, setFreeCourseList] = useState([]);
  const FetchFreeCourses = async () => {
    const res = await axios.get("http://localhost:5000/api/courses/free");
    setFreeCourseList(res.data.data);
  };
  useEffect(() => {
    FetchFreeCourses();
  }, []);
  return (
    <>
      <FreeCourseList data={freeCourseList} />
    </>
  );
};

export default Content;
