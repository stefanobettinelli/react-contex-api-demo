import React from "react";

// if for some reason the provider is not in place this value is what consumers are going to read
const defaultValue = {};

// 1) first piece of the puzzle: react provides a function for creating a context
// the context objs have to important properties the provider and the consumer components
const ValueContex = React.createContext(defaultValue);
const HandlersContex = React.createContext(defaultValue);

export { ValueContex, HandlersContex };
