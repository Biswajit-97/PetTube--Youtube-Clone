import React from "react";
import GoogleAuth from "./GoogleAuth";

function SidebarAuth() {
  return (
    <div style={{ padding: "16px 20px" }}>
      <p>Sign in to like videos, comment, and subscribe.</p>
      <br />
      <GoogleAuth />
    </div>
  );
}

export default SidebarAuth;
