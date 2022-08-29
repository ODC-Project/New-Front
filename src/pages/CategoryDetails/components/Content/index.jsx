import React, { useState, useEffect } from "react";
import { useParams } from "react-router-dom";
import axios from "axios";
import CategoryCoursesList from "../CategoryCoursesList";

const Content = () => {
  const params = useParams();
  console.log(params.id);

  const [coursesByCategoryList, setCoursesByCategoryList] = useState([]);

  const fetchCoursesByCategory = async () => {
    // const res = await axios.get(
    //   "http://localhost:5000/api/courses/" + params.id
    // );

    const res = await axios.get(
      `http://localhost:5000/api/courses/${params.id}`
    );
    setCoursesByCategoryList(res.data.data);
  };

  useEffect(() => {
    fetchCoursesByCategory(params.id);
  }, [params.id]); // hedhi ma3neha a3mel execution lil use Effect kol maytbadel url fil fih catgoryId emte3na fhmet ??oui rouhi good ne9sa 7aja fil url lzem en3adiw id

  return (
    <section>
      {/* content page for category details page {coursesByCategoryList.length} */}
      <CategoryCoursesList data={coursesByCategoryList} />
    </section>
  );
};

export default Content;
