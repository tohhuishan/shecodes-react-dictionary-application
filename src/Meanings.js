import React from "react";
import Synonyms from "./Synonyms";
import Antonyms from "./Antonyms";

export default function Meanings(props) {
  if (props.results) {
    return (
      <div className="Meanings">
        <h2>{props.results.word}</h2>
        <h3>{props.results.phonetic}</h3>
        {props.results.meanings.map((meaning, index) => {
          return (
            <div className="Meaning" key={index}>
              <p>{meaning.partOfSpeech}</p>

              <p>definition:</p>
              <p>{meaning.definition}</p>

              <p>example:</p>
              <p>{meaning.example}</p>

              <Synonyms synonyms={meaning.synonyms} />

              <Antonyms antonyms={meaning.antonyms} />
            </div>
          );
        })}
      </div>
    );
  } else {
    return null;
  }
}
