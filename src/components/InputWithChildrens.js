import React from "react";
import Tiles from "./Tiles";
import InputItemsContainer from "./InputItemsContainer";

// ** importing 2 contexts **
import { ValueContex, HandlersContex } from "./InputContext";

import "./styles/InputWithChildrens.css";

class InputWithChildrens extends React.Component {
  handleChangeText = e => {
    this.setState({ text: e.target.value });
  };

  handleToggleBox = boxId => {
    this.setState(state => (state[boxId] = !state[boxId]));
  };

  // state must be defined after handlers!
  state = {
    text: "",
    greenBoxEnabled: false,
    redBoxEnabled: false,
    orangeBoxEnabled: false,
    grayBoxEnabled: false,
    handleChangeText: this.handleChangeText,
    handleToggleBox: this.handleToggleBox
  };

  getValuesFromState = () => {
    const {
      text,
      greenBoxEnabled,
      redBoxEnabled,
      orangeBoxEnabled,
      grayBoxEnabled
    } = this.state;
    return {
      text,
      greenBoxEnabled,
      redBoxEnabled,
      orangeBoxEnabled,
      grayBoxEnabled
    };
  };

  getHandlersFromState = () => {
    return {
      handleChangeText: this.state.handleChangeText,
      handleToggleBox: this.state.handleToggleBox
    };
  };

  render() {
    // 2) second piece of the puzzle: the providers
    // different providers can be nested or used separetly when needed
    return (
      <div className="main-container">
        <HandlersContex.Provider value={this.getHandlersFromState()}>
          <ValueContex.Provider value={this.getValuesFromState()}>
            <InputItemsContainer />
          </ValueContex.Provider>
        </HandlersContex.Provider>
        <br />
        <ValueContex.Provider value={this.getValuesFromState()}>
          <Tiles />
        </ValueContex.Provider>
        <pre>{JSON.stringify(this.state, null, 2)}</pre>
      </div>
    );
  }
}

export default InputWithChildrens;
