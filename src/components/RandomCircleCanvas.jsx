import React, { useState } from "react";
import { ReactP5Wrapper } from "@p5-wrapper/react";
import { createRandomColored3Pos } from "../utils/helper";

function sketch(p5, amount, size, outline) {
  const circles = createRandomColored3Pos(amount, size);
  p5.setup = () => {
    p5.createCanvas(800, 600);
  };
  p5.draw = () => {
    p5.background(360);
    !outline && p5.noStroke();
    p5.rectMode("center");
    for (let index = 0; index < circles.length; index++) {
      createCircle(p5, circles[index].fill, circles[index].coords);
    }
  };
}

function createCircle(p5, fill, coords) {
  p5.fill(fill);
  p5.circle(coords[0], coords[1], coords[2]);
}

function RandomCircleCanvas() {
  const [amount, setAmount] = useState(5000);
  const [size, setSize] = useState(50);
  const [outline, setOutline] = useState(false);

  const setSketch = (p5) => {
    sketch(p5, amount, size, outline);
  };

  return (
    <>
      <div
        style={{
          display: "flex",
          flexDirection: "row",
          justifyContent: "center",
          alignContent: "center",
        }}
      >
        <div
          style={{ marginRight: 50, display: "flex", flexDirection: "column" }}
        >
          <label>
            amount:
            <input value={amount} onChange={(e) => setAmount(e.target.value)} />
          </label>
          <label>
            size:
            <input value={size} onChange={(e) => setSize(e.target.value)} />
          </label>
          <label>
            outline:
            <input
              type="checkbox"
              value={outline}
              onChange={(e) => setOutline(!outline)}
            />
          </label>
        </div>
        <ReactP5Wrapper sketch={setSketch} />
      </div>
    </>
  );
}

export default RandomCircleCanvas;
