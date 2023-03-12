import React, { useState } from "react";
import axios from "axios";
import "./Search.css";
import Meanings from "./Meanings";
import Photos from "./Photos";

export default function Search(props) {
  let [searchInput, setSearchInput] = useState(props.defaultWord);
  let [loaded, setLoaded] = useState(false);
  let [results, setResults] = useState(null);
  let [photos, setPhotos] = useState(null);

  function handleDictionaryResponse(response) {
    setResults({
      ready: true,
      word: response.data.word,
      phonetic: response.data.phonetic,
      meanings: response.data.meanings,
    });
  }

  function handlePhotoResponse(response) {
    setPhotos(response.data.photos);
  }

  function search() {
    const dictionaryAPIKey = "o65149f37004a818054t1c639bd4becf";
    let dictionaryAPIUrl = `https://api.shecodes.io/dictionary/v1/define?word=${searchInput}&key=${dictionaryAPIKey}`;
    axios.get(dictionaryAPIUrl).then(handleDictionaryResponse);

    const photoAPIKey =
      "vRCKLoL2ePmO6Fij7FSo2tQwqX31QK6Yjn1TEKTVgCuvjMd1TOCs8mWZ";
    let photoAPIUrl = `https://api.pexels.com/v1/search?query=${searchInput}&per_page=9`;
    axios
      .get(photoAPIUrl, {
        headers: { Authorization: `${photoAPIKey}` },
      })
      .then(handlePhotoResponse);
  }

  function handleSearch(event) {
    event.preventDefault();
    search();
  }

  function handleInputChange(event) {
    setSearchInput(event.target.value);
  }

  if (loaded) {
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
        <Photos photos={photos} />
      </div>
    );
  } else {
    setLoaded(true);
    search();
    return null;
  }
}
