import React, { useState } from "react";
import { ReactP5Wrapper } from "@p5-wrapper/react";
import { createRandomColored3Pos } from "../utils/helper";
import { Input, Checkbox } from "@heroui/react";

function sketch(p5, amount, size, outline) {
  const squares = createRandomColored3Pos(amount, size);
  p5.setup = () => {
    p5.createCanvas(800, 600);
  };
  p5.draw = () => {
    p5.background(360);
    !outline && p5.noStroke();
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
          className=" gap-4"
        >
          <Input
            label="Amount"
            placeholder="Enter the number of squares"
            type="number"
            value={amount}
            onChange={(e) => setAmount(e.target.value)}
          />

          <Input
            label="Size"
            placeholder="Enter the size of squares"
            type="number"
            value={size}
            onChange={(e) => setSize(e.target.value)}
          />

          <Checkbox
            label="Outline"
            value={outline}
            onChange={(e) => setOutline(!outline)}
          >
            Outline
          </Checkbox>
        </div>
        <ReactP5Wrapper sketch={setSketch} />
      </div>
    </>
  );
}

export default RandomSquaresCanvas;
