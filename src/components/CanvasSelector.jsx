import React, { useState } from "react";

import RandomSquaresCanvas from "./RandomSquaresCanvas";
import RandomCircleCanvas from "./RandomCircleCanvas";

const canvas = [<RandomSquaresCanvas />, <RandomCircleCanvas />];

export default function CanvasSelector() {
  const [selectedCanvas, setSelectedCanvas] = useState(0);

  const goBack = () => {
    if (!(selectedCanvas <= 0)) {
      setSelectedCanvas(selectedCanvas - 1);
    }
  };
  const goForward = () => {
    if (!(selectedCanvas >= canvas.length - 1)) {
      setSelectedCanvas(selectedCanvas + 1);
    }
  };

  return (
    <div
      style={{
        width: "100vw",
        display: "flex",
        flexDirection: "row",
        justifyContent: "space-between",
      }}
    >
      <div onClick={goBack}>L</div>
      <div>{canvas[selectedCanvas]}</div>
      <div onClick={goForward}>R</div>
    </div>
  );
}
