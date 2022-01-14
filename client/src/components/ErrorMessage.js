import React from "react";
import Wrapper from "../styles/ErrorMessage";

function ErrorMessage({ error, ...props }) {
  return (
    <Wrapper role="alert" {...props}>
      <h2>Oops, something went wrong:</h2>
      <h3 className="message">{error.message}</h3>
    </Wrapper>
  );
}

export default ErrorMessage;
