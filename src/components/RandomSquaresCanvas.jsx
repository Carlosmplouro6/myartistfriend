import React, { useState } from "react";
import { ReactP5Wrapper } from "@p5-wrapper/react";
import { createRandomColoredSquares } from "../utils/helper";

function sketch(p5, amount, size) {
  const squares = createRandomColoredSquares(amount, size);
  p5.setup = () => {
    p5.createCanvas(800, 600);
  };
  p5.draw = () => {
    p5.background(360);
    p5.noStroke();
    p5.rectMode("center");
    for (let index = 0; index < squares.length; index++) {
      createSquare(p5, squares[index].fill, squares[index].coords);
    }
  };
}

function createSquare(p5, fill, coords) {
  p5.fill(fill);
  p5.square(coords[0], coords[1], coords[2]);
}

function RandomSquaresCanvas() {
  const [amount, setAmount] = useState(10000);
  const [size, setSize] = useState(50);

  const setSketch = (p5) => {
    sketch(p5, amount, size);
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
        </div>
        <ReactP5Wrapper sketch={setSketch} />
      </div>
    </>
  );
}

export default RandomSquaresCanvas;
