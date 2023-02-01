import canvasSketch from "canvas-sketch";
import math from "canvas-sketch-util/math";

const settings = {
  dimensions: [1080, 1080],
};

const sketch = () => {
  let x, y, w, h, angle, rx, ry;

  return ({ context, width, height }) => {
    context.fillStyle = "white";
    context.fillRect(0, 0, width, height);

    x = width * 0.5;
    y = height * 0.5;
    w = width * 0.6;
    h = height * 0.1;
    
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

    drawSkewedRect({context})

    context.restore();
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
