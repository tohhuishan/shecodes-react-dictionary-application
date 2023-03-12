import React from "react";
import "./Photos.css";

export default function Photos(props) {
  if (props.photos) {
    return (
      <div className="Photos">
        {props.photos.map((photo, index) => {
          return (
            <div className="photo" key={index}>
              <img
                src={photo.src.landscape}
                alt={photo.alt}
                className="img-fluid rounded"
              />
            </div>
          );
        })}
      </div>
    );
  } else {
    return null;
  }
}
