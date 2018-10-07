import React from "react";
import ColoredBox from "./ColoredBox";

import "./styles/tiles.css";

const Tiles = props => {
  return (
    <div className="tiles">
      <ColoredBox color="green" />
      <ColoredBox color="red" />
      <ColoredBox color="orange" />
      <ColoredBox color="gray" />
    </div>
  );
};

export default Tiles;
