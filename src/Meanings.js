import React from "react";

export default function Meanings(props) {
  return (
    <div className="Meanings">
      <h2>{props.results.word}</h2>
      <h3>{props.results.phonetic}</h3>
      {props.results.meanings.map((meaning, index) => {
        return (
          <div className="Meaning" key={index}>
            <p>{meaning.partOfSpeech}</p>

            <p>{meaning.definition}</p>

            <p>{meaning.example}</p>

            {/* 
            <p>{meaning.synonyms}</p> */}
          </div>
        );
      })}
    </div>
  );
}
