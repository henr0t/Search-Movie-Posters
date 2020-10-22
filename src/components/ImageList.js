import "./ImageList.css";
import React from "react";
import ImageCard from "./ImageCard";

const ImageList = (props) => {
  const posters = props.posters.map((img) => {
    if (img.poster_path == null) {
      return null;
    } else {
      return <ImageCard key={img.id} img={img} />;
    }
  });
  return <div className="image-list">{posters}</div>;
};

export default ImageList;
