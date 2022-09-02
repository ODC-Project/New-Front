import React from "react";
import { ListGroupItem, ListGroup } from "reactstrap";
import "./style.css";

const ChapterItem = ({ item }) => {
  const { title, videoUrl } = item;
  return (
    <>
      <div>
        <ListGroup>
          <ListGroupItem action href={{ videoUrl }} tag="a">
            {title}
          </ListGroupItem>
        </ListGroup>
      </div>
    </>
  );
};

export default ChapterItem;
