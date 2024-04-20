import { rotatePoint } from "../utilities.js";
import { useCursor } from "./useCursor.js";
import { hand } from "./useHand.js";
import { usePointer } from "./usePointer.js";

export const spinnerState = {
  rotation: 0,
  speed: 0.001,
  handleLength: 500,
};

const historyRotations = [];

function getWrappedDifference(a, b, min, max) {
  const wrappedA = wrap(a, min, max);
  const wrappedB = wrap(b, min, max);
  const diff = wrappedB - wrappedA;
  const range = max - min;
  if (diff > range / 2) return diff - range;
  if (diff < -range / 2) return diff + range;
  return diff;
}

function wrap(value, min, max) {
  const range = max - min;
  return ((((value - min) % range) + range) % range) + min;
}

function getApproximateSpeedFromHistory() {
  if (historyRotations.length < 2) return 0;

  const diffs = [];
  for (let i = 1; i < historyRotations.length - 1; i++) {
    const current = historyRotations[i];
    const next = historyRotations[i + 1];
    const diff = getWrappedDifference(current, next, -Math.PI, Math.PI);
    diffs.push(diff);
  }

  const averageDiff = diffs.reduce((a, b) => a + b, 0) / diffs.length;
  return averageDiff;
}

const HANDLE_WIDTH = 50;
const SPIN_FRICTION = 0.99;
const END_SIZE = 80;

let previousTime = 0;

let cached = null;

export function useSpinnerTick() {
  if (cached) return cached;

  const pointer = usePointer();
  const [getCursor, setCursor] = useCursor();

  cached = ({ context, time }) => {
    const delta = time - previousTime;
    previousTime = time;

    spinnerState.rotation += spinnerState.speed;
    historyRotations.push(spinnerState.rotation);
    if (historyRotations.length > 10) historyRotations.shift();
    spinnerState.speed *= SPIN_FRICTION;
    // spinnerState.handleLength = 100 + getApproximateSpeedFromHistory() * 1000;

    const { canvas } = context;
    const { width, height } = canvas;
    /** @type {[number, number]} */
    const center = [width / 2, height / 2];

    // HANDLE
    /** @type {[number, number][]} */
    const handleRectPoints = [
      [center[0] - HANDLE_WIDTH / 2, center[1] - spinnerState.handleLength],
      [center[0] + HANDLE_WIDTH / 2, center[1] - spinnerState.handleLength],
      [center[0] + HANDLE_WIDTH / 2, center[1]],
      [center[0] - HANDLE_WIDTH / 2, center[1]],
    ];

    context.lineWidth = 1;
    context.strokeStyle = "black";
    context.fillStyle = "white";
    context.beginPath();
    for (let i = 0; i < handleRectPoints.length; i++) {
      const point = handleRectPoints[i];
      const rotatedPoint = rotatePoint(
        point,
        spinnerState.rotation + Math.PI / 2,
        center
      );
      context.lineTo(rotatedPoint[0], rotatedPoint[1]);
    }
    context.closePath();
    context.stroke();

    // CENTER
    context.strokeStyle = "black";
    context.fillStyle = "white";
    context.beginPath();
    context.arc(center[0], center[1], 50, 0, Math.PI * 2);
    context.closePath();
    context.fill();
    context.stroke();

    // END
    const endPosition = [
      center[0] + Math.cos(spinnerState.rotation) * spinnerState.handleLength,
      center[1] + Math.sin(spinnerState.rotation) * spinnerState.handleLength,
    ];
    context.fillStyle = "rgb(240, 240, 255, 1.0)";
    context.beginPath();
    context.arc(endPosition[0], endPosition[1], END_SIZE, 0, Math.PI * 2);
    context.closePath();
    context.fill();
    const cursor = getCursor();
    context.lineWidth = cursor === "grab" ? 3 : 1;
    context.strokeStyle = "blue";
    context.stroke();

    if (!pointer.position) return;

    const distanceFromEnd = Math.hypot(
      endPosition[0] - pointer.position[0],
      endPosition[1] - pointer.position[1]
    );

    if (distanceFromEnd < END_SIZE) {
      if (pointer.down && hand.state === "idle") {
        hand.state = "grabbing";
        const pointerRotation = Math.atan2(
          pointer.position[1] - center[1],
          pointer.position[0] - center[0]
        );
        hand.offsetRotation = pointerRotation - spinnerState.rotation;
        setCursor("grabbing");
        spinnerState.speed = 0;
      } else if (pointer.down && hand.state === "grabbing") {
        const pointerRotation = Math.atan2(
          pointer.position[1] - center[1],
          pointer.position[0] - center[0]
        );
        spinnerState.rotation = pointerRotation - hand.offsetRotation;
      } else if (!pointer.down) {
        hand.state = "idle";
        setCursor("grab");
        spinnerState.speed = getApproximateSpeedFromHistory();
      }
    } else {
      if (hand.state === "grabbing") {
        if (!pointer.down) {
          hand.state = "idle";
          setCursor("default");
          spinnerState.speed = getApproximateSpeedFromHistory();
        } else {
          const pointerRotation = Math.atan2(
            pointer.position[1] - center[1],
            pointer.position[0] - center[0]
          );
          spinnerState.rotation = pointerRotation - hand.offsetRotation;
        }
      } else {
        setCursor("default");
      }
    }
  };

  return cached;
}
