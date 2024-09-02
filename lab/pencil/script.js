const maybeCanvas = document.querySelector("canvas");
if (!maybeCanvas) throw new Error("Canvas not found");
const canvas = maybeCanvas;
const maybeContext = canvas.getContext("2d");
if (!maybeContext) throw new Error("2d context not found");
const context = maybeContext;

let dpr = devicePixelRatio;

function handleResize() {
  dpr = devicePixelRatio;
  canvas.width = window.innerWidth * dpr;
  canvas.height = window.innerHeight * dpr;
}

handleResize();
addEventListener("resize", handleResize);

/**
 * @typedef {"pencil" | "eraser"} StrokeType

/**
 * @typedef {{
 *   type: StrokeType;
 *   points: [number, number][];
 * }} Stroke
 */

/** @type {Stroke[]} */
const strokes = [];
let PENCIL_BASE_SIZE = 1;
let ERASER_BASE_SIZE = 70;

function draw() {
  context.clearRect(0, 0, canvas.width, canvas.height);

  context.lineCap = "round";
  context.lineJoin = "round";
  for (const stroke of strokes) {
    switch (stroke.type) {
      case "pencil": {
        setContextStrokeStyle("white");
        setContextLineWidth(PENCIL_BASE_SIZE);
        setContextCompositeOperation("source-over");
        break;
      }
      case "eraser": {
        setContextStrokeStyle("white");
        setContextLineWidth(ERASER_BASE_SIZE);
        setContextCompositeOperation("destination-out");
        break;
      }
    }
    context.beginPath();
    const [x, y] = stroke.points[0];
    context.moveTo(x, y);
    for (let i = 1; i < stroke.points.length; i++) {
      const [x2, y2] = stroke.points[i];
      context.lineTo(x2, y2);
    }
    context.stroke();
  }
}

let currentStrokeStyle = "black";
function setContextStrokeStyle(strokeStyle) {
  if (currentStrokeStyle === strokeStyle) return;
  currentStrokeStyle = strokeStyle;
  context.strokeStyle = strokeStyle;
}

let currentLineWidth = 1;
function setContextLineWidth(lineWidth) {
  if (currentLineWidth === lineWidth) return;
  currentLineWidth = lineWidth;
  context.lineWidth = lineWidth;
}

let currentCompositeOperation = "source-over";
function setContextCompositeOperation(compositeOperation) {
  if (currentCompositeOperation === compositeOperation) return;
  currentCompositeOperation = compositeOperation;
  context.globalCompositeOperation = compositeOperation;
}

function tick() {
  draw();
  requestAnimationFrame(tick);
}

requestAnimationFrame(tick);

const pointer = {
  /** @type {[number, number]} */
  position: [0, 0],
  down: false,
};

function updatePointerPositionFromEvent(event) {
  pointer.position = [event.clientX * dpr, event.clientY * dpr];
}

addEventListener("pointerdown", (event) => {
  updatePointerPositionFromEvent(event);
  pointer.down = true;
  /** @type {[number, number][]} */
  const newStroke = [[...pointer.position]];
  strokes.push({ type: currentTool, points: newStroke });
});

addEventListener("pointermove", (event) => {
  updatePointerPositionFromEvent(event);
  if (pointer.down) {
    const currentStroke = strokes[strokes.length - 1];
    currentStroke.points.push([...pointer.position]);
  }
});

addEventListener("pointerup", (event) => {
  updatePointerPositionFromEvent(event);
  pointer.down = false;
});

/** @type {StrokeType} */
let currentTool = "pencil";
const PENCIL_SIZE_STEP = 1;
addEventListener("keydown", (event) => {
  switch (event.key) {
    case "[": {
      PENCIL_BASE_SIZE -= PENCIL_SIZE_STEP;
      break;
    }
    case "]": {
      PENCIL_BASE_SIZE += PENCIL_SIZE_STEP;
      break;
    }
    case "e": {
      currentTool = "eraser";
      break;
    }
  }
});

addEventListener("keyup", (event) => {
  switch (event.key) {
    case "e": {
      currentTool = "pencil";
      break;
    }
  }
});
