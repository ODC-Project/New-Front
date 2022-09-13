import React from "react";

const CourseCard = ({ item, handleCardClick }) => {
  const { image, title, description, numberOfChapitres, numberOfDoneStudents } =
    item;

  return (
    <div className="single__course__item">
      <div className="course__img">
        <img src={image} alt="" className="w-100" style={{ height: "200px" }} />
      </div>

      <div className="course__details">
        <h6 className="course__title mb-4">{title}</h6>

        <p
          style={{
            height: "100px",
            overflow: "scroll",
          }}
        >
          {description}
        </p>

        <div className=" d-flex justify-content-between align-items-center">
          <p className="lesson d-flex align-items-center gap-1">
            <i className="ri-book-read-fill"></i>{" "}
            {Math.floor(Math.random() * 15 + 1)} Chapters
          </p>

          <p className="students d-flex align-items-center gap-1">
            <i className="ri-user-line"></i>{" "}
            {Math.floor(Math.random() * 200 + 1)} Students
          </p>
        </div>

        <div className=" d-flex justify-content-end align-items-center">
          <button class="btn" onClick={handleCardClick}>
            Enroll
          </button>
        </div>
      </div>
    </div>
  );
};

export default CourseCard;
