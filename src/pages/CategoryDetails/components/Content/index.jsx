import React from "react";
import { useParams } from "react-router-dom";

const Content = () => {
  const params = useParams();
  console.log(params.id);
  return <section>content page for category details page</section>;
};

export default Content;
