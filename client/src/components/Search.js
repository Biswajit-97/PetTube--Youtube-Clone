// @ts-nocheck
import React from "react";
import { useHistory } from "react-router-dom";
import Wrapper from "../styles/Search";
import { SearchIcon } from "./Icons";

function Search() {
  const history = useHistory();

  function handleSubmit(event) {
    event.preventDefault();
    const searchQuery = event.target.elements.search.value;

    if (!searchQuery.trim()) return;

    history.push(`/results/${searchQuery}`);
  }

  return (
    <Wrapper>
      <form onSubmit={handleSubmit}>
        <input id="search" type="text" placeholder="Search" />
        <button aria-label="Search videos and channels" type="submit">
          <SearchIcon />
        </button>
      </form>
    </Wrapper>
  );
}

export default Search;
