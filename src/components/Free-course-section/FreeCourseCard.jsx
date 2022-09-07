import React from "react";

const FreeCourseCard = ({ item }) => {
  console.log("item", item);
  const { image, title, students, rating } = item;

  return (
    <div className="single__free__course">
      <div className="free__course__img mb-5">
        <img src={image} alt="" className="w-100" style={{ height: "170px" }} />
        <button className="btn free__btn">Free</button>
      </div>

      <div className="free__course__details">
        <h6>{title}</h6>

        <div className=" d-flex align-items-center gap-5">
          <span className=" d-flex align-items-center gap-2">
            {/* <i className="ri-user-line"></i> {students}k */}
            <i className="ri-user-line"></i>{" "}
            {Math.floor(Math.random() * 200 + 1)} students
          </span>

          <span className=" d-flex align-items-center gap-2">
            {/* <i className="ri-book-read-fill"></i> {rating}k */}
            <i className="ri-book-read-fill"></i>{" "}
            {Math.floor(Math.random() * 15 + 1)} chapters
          </span>
        </div>
      </div>
    </div>
  );
};

export default FreeCourseCard;
