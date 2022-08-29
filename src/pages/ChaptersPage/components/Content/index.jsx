import React, { useState, useEffect } from "react";
import { useParams } from "react-router-dom";
import ChaptersList from "../ChaptersList";
import axios from "axios";

const Content = () => {
  const params = useParams();
  console.log(params.courseId);
  const [chaptersList, setChaptersList] = useState([]);

  const FetchCourseChapters = async () => {
    const res = await axios.get("http://localhost:5000/api/courses/");

    // call api with token
    // const res = await axios.get("http://localhost:5000/api/courses/", {
    //   headers: {
    //     "x-auth-token": localStorage.getItem("token"),
    //   },
    // });
    setChaptersList(res.data.courses);
  };

  useEffect(() => {
    FetchCourseChapters();
  }, []);
  return (
    <section>
      this content page
      <ChaptersList />
    </section>
  );
};

export default Content;
