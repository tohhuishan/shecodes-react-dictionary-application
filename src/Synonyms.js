import React from "react";

export default function Synonyms(props) {
  if (props.synonyms) {
    return (
      <div className="Synonyms">
        <h3 className="sub-header">synonyms</h3>
        <p className="synonyms">
          {props.synonyms.map((synonym, index) => {
            return <span key={index}>{synonym} </span>;
          })}
        </p>
      </div>
    );
  } else {
    return null;
  }
}
