import React from "react";

import { ValueContex } from "./InputContext";

import "./styles/ColoreBox.css";

const ColoreBox = ({ color }) => {
  // 3) last piece of the puzzle are the consumers
  return (
    <ValueContex.Consumer>
      {valueContext => {
        const { text } = valueContext;
        const isBoxSelected = valueContext[`${color}BoxEnabled`];
        const boxSelectedClass = isBoxSelected ? "selected" : "";
        return (
          <div className={`box ${color}Class ${boxSelectedClass}`}>
            {isBoxSelected && text}
          </div>
        );
      }}
    </ValueContex.Consumer>
  );
};

export default ColoreBox;
