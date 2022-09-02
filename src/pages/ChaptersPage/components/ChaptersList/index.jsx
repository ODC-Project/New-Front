import React from "react";
import ChapterItem from "./ChapterItem";
import { Container } from "reactstrap";

const ChaptersList = ({ data }) => {
  return (
    <section>
      <Container>
        <>
          <h3>AWS Fundamentals Specialization</h3>
          <h5>About this Specialization</h5>
          <p>
            This specialization gives current or aspiring IT professionals an
            overview of the features, benefits, and capabilities of Amazon Web
            Services (AWS). As you proceed through these four interconnected
            courses, you will gain a more vivid understanding of core AWS
            services, key AWS security concepts, strategies for migrating from
            on-premises to AWS, and basics of building serverless applications
            with AWS. Additionally, you will have opportunities to practice what
            you have learned by completing labs and exercises developed by AWS
            technical instructors.
          </p>
          {data?.map((item) => (
            <ChapterItem key={item._id} item={item} />
          ))}
        </>
      </Container>
    </section>
  );
};

export default ChaptersList;
