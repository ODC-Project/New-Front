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
      `http://159.89.12.104:5000/api/chapitres/${courseId}`,
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
      <ChaptersList
        data={chaptersList}
        courseTitle={chaptersList[0]?.courseId?.title || "title"}
        courseDescription={
          chaptersList[0]?.courseId?.description || "description"
        }
      />
    </section>
  );
};

export default Content;
