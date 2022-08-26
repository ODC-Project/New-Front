import React from "react";
import CategoriesList from "./index";

import { useNavigate } from "react-router-dom";
import "./card.css";

const CategoryCard = ({ item, index }) => {
  let navigate = useNavigate();
  const { image, title } = item;

  const onCardClick = () => navigate(`/categories/${index}`);
  return (
    <>
      <div className="single__course__item" onClick={onCardClick}>
        <div className="course__img">
          <img src={image} alt="" className="w-100" />
        </div>

        <div className="category__title__details">
          <h5 className="category__title mb-4">{title}</h5>
        </div>
      </div>
    </>
  );
};

export default CategoryCard;
