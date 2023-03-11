import React, { useState } from "react";
import axios from "axios";
import "./Search.css";
import Meanings from "./Meanings";

export default function Search() {
  let [searchInput, setSearchInput] = useState("");
  let [results, setResults] = useState(null);

  function handleResponse(response) {
    setResults({
      word: response.data.word,
      phonetic: response.data.phonetic,
      meanings: response.data.meanings,
    });
  }

  function handleSearch(event) {
    event.preventDefault();

    const apiKey = "o65149f37004a818054t1c639bd4becf";
    let apiUrl = `https://api.shecodes.io/dictionary/v1/define?word=${searchInput}&key=${apiKey}`;
    axios.get(apiUrl).then(handleResponse);
  }

  function handleInputChange(event) {
    setSearchInput(event.target.value);
  }

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
}
