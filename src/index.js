import React from "react";
import ReactDOM from "react-dom";
import ContextDemo from "./components/ContextDemo";

import "./styles.css";

function App() {
  return (
    <div className="App">
      <ContextDemo />
    </div>
  );
}

const rootElement = document.getElementById("root");
ReactDOM.render(<App />, rootElement);
