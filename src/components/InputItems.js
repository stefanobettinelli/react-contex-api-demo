import React from "react";

const InputItems = ({
  text,
  greenBoxEnabled,
  redBoxEnabled,
  orangeBoxEnabled,
  grayBoxEnabled,
  handleToggleBox,
  handleChangeText
}) => {
  return (
    <div>
      <input className="textInput" value={text} onChange={handleChangeText} />
      <br />
      <br />
      <label>
        <input
          type="checkbox"
          onChange={() => handleToggleBox("greenBoxEnabled")}
          value={greenBoxEnabled}
        />Green Box
      </label>
      <label>
        <input
          type="checkbox"
          onChange={() => handleToggleBox("redBoxEnabled")}
          value={redBoxEnabled}
        />Red Box
      </label>
      <label>
        <input
          type="checkbox"
          onChange={() => handleToggleBox("orangeBoxEnabled")}
          value={orangeBoxEnabled}
        />Orange Box
      </label>
      <label>
        <input
          type="checkbox"
          onChange={() => handleToggleBox("grayBoxEnabled")}
          value={grayBoxEnabled}
        />Grey Box
      </label>
    </div>
  );
};

export default InputItems;
