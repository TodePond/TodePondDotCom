const spinnerState = {
  rotation: 0,
  speed: 0.001,
};

const HANDLE_LENGTH = 500;

let previousTime = 0;

/**
 * @param {TickContext} context
 */
export function drawSpinner({ context, time }) {
  const delta = time - previousTime;
  previousTime = time;
  const { canvas } = context;
  const { width, height } = canvas;
  const center = { x: width / 2, y: height / 2 };
  context.fillStyle = "black";
  context.beginPath();
  context.arc(center.x, center.y, 50, 0, Math.PI * 2);
  context.closePath();
  context.fill();

  context.beginPath();
  context.moveTo(center.x, center.y);
  context.lineTo(
    center.x + Math.cos(spinnerState.rotation) * HANDLE_LENGTH,
    center.y + Math.sin(spinnerState.rotation) * HANDLE_LENGTH
  );
  context.lineWidth = 30;
  context.closePath();
  context.stroke();

  context.fillStyle = "lightgrey";
  context.beginPath();
  context.arc(
    center.x + Math.cos(spinnerState.rotation) * HANDLE_LENGTH,
    center.y + Math.sin(spinnerState.rotation) * HANDLE_LENGTH,
    100,
    0,
    Math.PI * 2
  );
  context.closePath();
  context.fill();
  context.strokeStyle = "black";
  context.stroke();

  spinnerState.rotation += spinnerState.speed * delta;
}
