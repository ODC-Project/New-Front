import React, { useState, useEffect } from "react";
import { useParams } from "react-router-dom";
import ChaptersList from "../ChaptersList";
import axios from "axios";

const Content = () => {
  const params = useParams();
  const courseId = params.courseId;
  console.log(params.courseId);
  const [chaptersList, setChaptersList] = useState([]);

  const FetchCourseChapters = async () => {
    const res = await axios.get(
      `http://localhost:5000/api/chapitres/${courseId}`,
      {
        headers: {
          "x-auth-token": localStorage.getItem("token"),
        },
      }
    );
    setChaptersList(res.data.data);
  };

  useEffect(() => {
    FetchCourseChapters();
  }, []);
  return (
    <section>
      this content page {chaptersList?.length}
      <ChaptersList data={chaptersList} />
    </section>
  );
};

export default Content;
