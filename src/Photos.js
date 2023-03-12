import React from "react";
import "./Photos.css";

export default function Photos(props) {
  if (props.photos) {
    return (
      <div className="Photos row">
        {props.photos.map((photo, index) => {
          return (
            <div className="photo col-md-4" key={index}>
              <img
                src={photo.src.landscape}
                alt={photo.alt}
                className="img-fluid rounded mt-2 mb-2"
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
