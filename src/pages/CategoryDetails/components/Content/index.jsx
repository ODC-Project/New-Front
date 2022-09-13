import React, { useState, useEffect } from "react";
import { useParams } from "react-router-dom";
import axios from "axios";
import CategoryCoursesList from "../CategoryCoursesList";

const Content = () => {
  const params = useParams();

  const [coursesByCategoryList, setCoursesByCategoryList] = useState([]);

  const fetchCoursesByCategory = async () => {
    // const res = await axios.get(
    //   "http://159.89.12.104:5000/api/courses/" + params.id
    // );

    const res = await axios.get(
      `http://159.89.12.104:5000/api/courses/${params.id}`
    );
    setCoursesByCategoryList(res.data.data);
  };

  useEffect(() => {
    fetchCoursesByCategory(params.id);
  }, [params.id]);

  return (
    <section>
      {/* content page for category details page {coursesByCategoryList.length} */}
      <CategoryCoursesList data={coursesByCategoryList} />
    </section>
  );
};

export default Content;
