import React, { useState } from "react";

export default function Search() {
  let [searchInput, setSearchInput] = useState("");

  function handleSearch(event) {
    event.preventDefault();
    alert(searchInput);
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
              placeholder="Search for a word or phrase"
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
