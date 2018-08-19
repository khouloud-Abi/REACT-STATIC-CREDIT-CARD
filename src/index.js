import React from "react";
import ReactDOM from "react-dom";
import Khouloud from "./CreditCard";

import "./styles.css";

function App() {
  return (
    <div className="App">
      <Khouloud />
    </div>
  );
}

const rootElement = document.getElementById("root");
ReactDOM.render(<App />, rootElement);
