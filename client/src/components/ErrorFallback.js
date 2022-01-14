import React from "react";
import ErrorMessage from "./ErrorMessage";

function ErrorFallback({ error }) {
  return (
    <ErrorMessage
      error={error}
      style={{
        height: "100vh",
        marginTop: 0,
      }}
    />
  );
}

export default ErrorFallback;
