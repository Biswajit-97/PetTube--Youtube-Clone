import React from "react";
import noResultsImg from "../assets/no-results.png";
import Wrapper from "../styles/NoResults";

function NoResults({ title, text }) {
  return (
    <Wrapper>
      <img src={noResultsImg} alt="no results" />
      <h2>{title}</h2>
      <p className="secondary">{text}</p>
    </Wrapper>
  );
}

export default NoResults;
