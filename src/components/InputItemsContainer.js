import React from "react";
import InputItems from "./InputItems";
import { ValueContex, HandlersContex } from "./InputContext";

import "./styles/InputItems.css";

const InputItemsContainer = props => {
  // 3) last piece of the puzzle are the consumers
  return (
    <ValueContex.Consumer>
      {valueContext => {
        const {
          text,
          greenBoxEnabled,
          redBoxEnabled,
          orangeBoxEnabled,
          grayBoxEnabled
        } = valueContext;
        return (
          <HandlersContex.Consumer>
            {handlersContext => {
              const { handleToggleBox, handleChangeText } = handlersContext;
              return (
                <InputItems
                  text={text}
                  greenBoxEnabled={greenBoxEnabled}
                  redBoxEnabled={redBoxEnabled}
                  orangeBoxEnabled={orangeBoxEnabled}
                  grayBoxEnabled={grayBoxEnabled}
                  handleChangeText={handleChangeText}
                  handleToggleBox={handleToggleBox}
                />
              );
            }}
          </HandlersContex.Consumer>
        );
      }}
    </ValueContex.Consumer>
  );
};

export default InputItemsContainer;
