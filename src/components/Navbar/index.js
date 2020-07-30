import React from "react";
import "./style.css";

export default function Navbar(props) {
  return (
    <nav className="navbar navbar-expand-lg navbar-secondary bg-secondary">
      <h3>Directory</h3>
      <div className={`navbar${props.fluid ? "-fluid" : ""}`} {...props} />
      <nav type="text" />
    </nav>
  );
}
