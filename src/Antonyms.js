import React from "react";

export default function Synonyms(props) {
  if (props.antonyms) {
    return (
      <div className="Antonyms">
        <h3 className="sub-header">antonyms</h3>
        <p className="antonyms">
          {props.antonyms.map((antonym, index) => {
            return <span key={index}>{antonym} </span>;
          })}
        </p>
      </div>
    );
  } else {
    return null;
  }
}
