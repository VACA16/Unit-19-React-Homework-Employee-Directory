import React from "react";

export default function Body(props) {
  return <div className={`body${props.fluid ? "-fluid" : ""}`} {...props} />;
}
