import canvasSketch from "canvas-sketch";
import math from "canvas-sketch-util/math";
import random from "canvas-sketch-util/random";

const settings = {
  dimensions: [1080, 1080],
  // animate: true,
};

const sketch = () => {
  let x, y, w, h, angle, rx, ry;

  const num = 20;
  const degrees = -30;

  const rects = [];

  for (let i = 0; i < num; i++) {
    x = random.range(0, width);
    y = random.range(0, height);
    w = random.range(200, 600);
    h = random.range(40, 200);

    rects.push({
      x,
      y,
      w,
      h,
    });
  }
  return ({ context, width, height }) => {
    context.fillStyle = "white";
    context.fillRect(0, 0, width, height);

    for (let i = 0; i < num; i++) {
      x = random.range(0, width);
      y = random.range(0, height);
      w = random.range(200, 600);
      h = random.range(40, 200);

      context.save();
      context.translate(x, y);
      context.strokeStyle = "blue";

      // ! Triangle
      // context.beginPath();
      // context.moveTo(w * -0.5, h * -0.5);
      // context.lineTo(w * 0.5, h * -0.5);
      // context.lineTo(w * 0.5, h * 0.5);
      // context.lineTo(w * -0.5, h * 0.5);
      // context.closePath();

      drawSkewedRect({ context, w, h, degrees });
      context.stroke();

      context.restore();
    }
  };
};

// ! Skewed Triangle
const drawSkewedRect = ({ context, w = 600, h = 200, degrees = -45 }) => {
  const angle = math.degToRad(25);

  const rx = Math.cos(angle) * w;
  const ry = Math.sin(angle) * w;

  context.translate(rx * -0.5, (ry + h) * -0.5);

  context.beginPath();
  context.moveTo(0, 0);
  context.lineTo(rx, ry);
  context.lineTo(rx, ry + h);
  context.lineTo(0, h);
  context.closePath();
  context.stroke();
};

canvasSketch(sketch, settings);
