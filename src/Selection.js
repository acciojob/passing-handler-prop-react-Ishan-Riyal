import React, { useState } from "react";
import "./styles/child.css"; // make sure the path is correct

const Selection = ({ applyColor }) => {
  const [style, setStyle] = useState({ background: "" });

  return (
    <div
      className="fix-box"
      style={style}
      onClick={() => applyColor(setStyle)}
    ></div>
  );
};

export default Selection;
