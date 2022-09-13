import React from "react";
import ChapterItem from "./ChapterItem";
import { Container } from "reactstrap";

const ChaptersList = ({ data, courseTitle, courseDescription }) => {
  return (
    <section>
      <Container>
        <>
          <h3>{courseTitle}</h3>
          <h5>About this Specialization</h5>
          <p>{courseDescription}</p>
          {data?.map((item) => (
            <ChapterItem key={item._id} item={item} />
          ))}
        </>
      </Container>
    </section>
  );
};

export default ChaptersList;
