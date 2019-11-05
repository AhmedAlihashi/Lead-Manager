import React, { Component, Fragment } from "react";
import ReactDOM from "react-dom";

import Container from "./Container";

class App extends Component {
  render() {
    return <Container />;
  }
}

ReactDOM.render(<App />, document.getElementById("app"));
