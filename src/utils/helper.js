export function random(min, max) {
  return Math.floor(Math.random() * (max - min)) + min;
}

export function random2DCoordsWithSize(width, height, size) {
  return [
    Math.floor(random(0, width)),
    Math.floor(random(0, height)),
    Math.floor(random(0, size)),
  ];
}

export function randomRGBAColor(r = 255, g = 255, b = 255, a) {
  return `rgba(${Math.floor(random(0, r))}, ${Math.floor(
    random(0, g)
  )}, ${Math.floor(random(0, b))}, ${((a ? a : random(0, 100)) / 100).toFixed(
    2
  )})`;
}

export function createRandomColoredSquares(
  num,
  size,
  r = 255,
  g = 255,
  b = 255,
  a
) {
  const squares = [];

  for (let index = 0; index < num; index++) {
    let temp = {
      fill: randomRGBAColor(r, g, b, a),
      coords: random2DCoordsWithSize(800, 600, size),
    };
    squares.push(temp);
  }
  return squares;
}
