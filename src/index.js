import React from "react";
import ReactDOM from "react-dom";

const name = "Ani";
var lucky = Math.random();
ReactDOM.render(
  <div>
    <h1>Hello {name}!</h1>
    <p>Your lucky number is {lucky}!</p>
  </div>,
  document.getElementById("root")
);
