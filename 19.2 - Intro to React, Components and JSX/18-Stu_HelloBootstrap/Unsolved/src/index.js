import React from "react";
import ReactDOM from "react-dom";
import App from "./App";
import Nav from "./components/nav";
import Jumbotron from "./components/jumbotron";
import Form from "./components/form";

// ReactDOM.render(<App />, document.getElementById("root"));
ReactDOM.render(
  <div>
    <Nav />
    <Jumbotron />
    <Form />
  </div>,
  document.getElementById("root")
);
