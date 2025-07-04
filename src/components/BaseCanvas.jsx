import * as React from "react";
import { ReactP5Wrapper } from "@p5-wrapper/react";

function random(min, max) {
  return Math.floor(Math.random() * (max - min)) + min;
}

function sketch(p5) {
  const squares = [];

  for (let index = 0; index < 5000; index++) {
    let temp = { fill: randomFill(), coords: randomCoords() };
    squares.push(temp);
  }
  p5.setup = () => {
    p5.createCanvas(600, 400);
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

function randomFill() {
  return `rgba(${Math.floor(random(0, 255))}, ${Math.floor(
    random(0, 255)
  )}, ${Math.floor(random(0, 255))}, ${(random(0, 100) / 100).toFixed(2)})`;
}

function randomCoords() {
  return [
    Math.floor(random(0, 600)),
    Math.floor(random(0, 400)),
    Math.floor(random(0, 60)),
  ];
}

function createSquare(p5, fill, coords) {
  p5.fill(fill);
  p5.square(coords[0], coords[1], coords[2]);
}

function BaseCanvas() {
  return <ReactP5Wrapper sketch={sketch} />;
}

export default BaseCanvas;
