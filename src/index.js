import React from "react";
import ReactDOM from "react-dom";

const name = "Ani";
const last = "Wgn";
var lucky = Math.floor(Math.random() * 10);
var year = new Date().getFullYear();
randomImg = "https://picsum.photos/100";
//getFullYear geht nicht ohne () weil wir sie ja dadurch erst callen
//var currentYear = new Date(); sagt uns das aktuelle Datum!

ReactDOM.render(
  <div>
    <div>
      <h1 className="heading">
        Hello {name} {last}!
      </h1>
      <h3>this works too: {name + " " + last}</h3>
      <h4>or this: {`${name} ${last}`}</h4>
      <p>
        its called template literals in es6 or string interpolation in other
        langs
      </p>
      <p>Your lucky number is {lucky}!</p>
      <p>Your unlucky number is {Math.floor(Math.random() * 100)}! sorry. </p>
    </div>
    <div>
      <h1>JS EX in JSX practice</h1>
      <p>created by {name + " " + last}</p>
      <p>Copyright {year}</p>
      <p
        contentEditable="true"
        className="editable"
        draggable="true"
        spellCheck="false"
      >
        this content is editable
      </p>
    </div>
    <div>
      <img
        alt="random"
        className="img-style"
        src="https://picsum.photos/300/450"
      />
      <img
        alt="random"
        className="img-style"
        src="https://picsum.photos/500/200"
      />
      <img
        alt="random"
        className="img-style"
        src="https://picsum.photos/200/400"
      />
      <img src={randomImg} alt="random" />
    </div>
  </div>,
  document.getElementById("root")
);

//It should display 2 paragraph HTML elements.
//The paragraphs should say:
//Created by YOURNAME.
//Copyright CURRENTYEAR.
//E.g.
//Created by Angela Yu.
//Copyright 2019.

//only expressions possible but you cannot write statements !!
//expression: will be evaluated to a fix value! ends up equaling something
//statemens ask pc to do work depending on the statement :D
