import React, { useState } from "react";
import axios from "axios";

export default function Search() {
  let [searchInput, setSearchInput] = useState("");

  function handleResponse(response) {
    console.log(response);
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
      <form className="form-control" onSubmit={handleSearch}>
        <label>What would you like to search for?</label>
        <div className="row">
          <div className="col-9">
            <input
              type="search"
              className="form-control w-100"
              placeholder="Search for a word..."
              autoFocus="on"
              onChange={handleInputChange}
            />
          </div>

          <div className="col-3">
            <input
              type="submit"
              className="form-control w-100"
              value="Search"
            />
          </div>
        </div>
      </form>
    </div>
  );
}
