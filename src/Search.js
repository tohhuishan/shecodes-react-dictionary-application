import React, { useState } from "react";
import axios from "axios";
import "./Search.css";
import Meanings from "./Meanings";

export default function Search(props) {
  let [searchInput, setSearchInput] = useState(props.defaultWord);
  let [results, setResults] = useState({ ready: false });

  function handleResponse(response) {
    setResults({
      ready: true,
      word: response.data.word,
      phonetic: response.data.phonetic,
      meanings: response.data.meanings,
    });
  }

  function search() {
    const apiKey = "o65149f37004a818054t1c639bd4becf";
    let apiUrl = `https://api.shecodes.io/dictionary/v1/define?word=${searchInput}&key=${apiKey}`;
    axios.get(apiUrl).then(handleResponse);
  }

  function handleSearch(event) {
    event.preventDefault();
    search();
  }

  function handleInputChange(event) {
    setSearchInput(event.target.value);
  }

  if (results.ready) {
    return (
      <div className="Search">
        <div className="search-engine">
          <form className="form-control" onSubmit={handleSearch}>
            <label>What word do you want to look up?</label>
            <input
              type="search"
              className="form-control w-100"
              placeholder="Search for a word..."
              autoFocus="on"
              onChange={handleInputChange}
            />
          </form>
        </div>

        <Meanings results={results} />
      </div>
    );
  } else {
    search();
  }
}
