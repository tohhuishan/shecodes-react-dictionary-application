import React from "react";
import "./Meanings.css";
import Synonyms from "./Synonyms";
import Antonyms from "./Antonyms";

export default function Meanings(props) {
  if (props.results) {
    return (
      <div className="Meanings">
        <section>
          <h2 className="word">{props.results.word}</h2>
          <h4 className="phonetic">{props.results.phonetic}</h4>
        </section>

        {props.results.meanings.map((meaning, index) => {
          return (
            <div className="Meaning" key={index}>
              <section>
                <h3 className="part-of-speech">{meaning.partOfSpeech}</h3>
                <p className="definition">{meaning.definition}</p>
                <p className="example">
                  <em>{meaning.example}</em>
                </p>

                <Synonyms synonyms={meaning.synonyms} />
                <Antonyms antonyms={meaning.antonyms} />
              </section>
            </div>
          );
        })}
      </div>
    );
  } else {
    return null;
  }
}
