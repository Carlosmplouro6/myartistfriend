import React, { useState } from "react";

import RandomSquaresCanvas from "./RandomSquaresCanvas";
import RandomCircleCanvas from "./RandomCircleCanvas";
import { IconArrowLeft, IconArrowRight } from "@tabler/icons-react";

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
        alignItems: "center",
        padding: 20,
      }}
    >
      <div onClick={goBack}>
        <IconArrowLeft size={48} />
      </div>
      <div>{canvas[selectedCanvas]}</div>
      <div onClick={goForward}>
        <IconArrowRight size={48} />
      </div>
    </div>
  );
}
