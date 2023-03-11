import React from "react";

export default function Synonyms(props) {
  if (props.antonyms) {
    return (
      <div className="Antonyms">
        <p>antonyms:</p>
        {props.antonyms.map((antonym, index) => {
          return <span key={index}>{antonym} </span>;
        })}
      </div>
    );
  } else {
    return null;
  }
}
