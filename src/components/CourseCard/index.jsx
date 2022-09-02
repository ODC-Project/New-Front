import React from "react";

const CourseCard = ({ item, handleCardClick }) => {
  const { image, title, description, numberOfChapitres, numberOfDoneStudents } =
    item;

  return (
    <div className="single__course__item" onClick={handleCardClick}>
      <div className="course__img">
        <img src={image} alt="" className="w-100" />
      </div>

      <div className="course__details">
        <h6 className="course__title mb-4">{title}</h6>

        <p>{description}</p>

        <div className=" d-flex justify-content-between align-items-center">
          <p className="lesson d-flex align-items-center gap-1">
            <i className="ri-book-open-line"></i> {numberOfChapitres} Chapters
          </p>

          <p className="students d-flex align-items-center gap-1">
            <i className="ri-user-line"></i> {numberOfDoneStudents}0
          </p>
        </div>

        <div className=" d-flex justify-content-between align-items-center">
          <p className="rating d-flex align-items-center gap-1">
            <i className="ri-star-fill"></i> 0 K
          </p>

          <p className="enroll d-flex align-items-center gap-1">
            <a href="#"> Enroll Now</a>
          </p>
        </div>
      </div>
    </div>
  );
};

export default CourseCard;
