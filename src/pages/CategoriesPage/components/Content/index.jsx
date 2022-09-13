import axios from "axios";
import React, { useEffect, useState } from "react";
import CategoriesList from "../CategoriesList";
import "./style.css";

const Content = () => {
  const [categoriesList, setCategoriesList] = useState([]);

  const FetchCategories = async () => {
    const res = await axios.get("http://159.89.12.104:5000/api/categories", {
      headers: {
        "x-auth-token": localStorage.getItem("token"),
      },
    });
    setCategoriesList(res.data.data);
  };

  useEffect(() => {
    FetchCategories();
  }, []);
  return (
    <>
      <CategoriesList data={categoriesList} />
    </>
  );
};

export default Content;
