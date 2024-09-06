/** @type {HTMLCanvasElement | null} */
const maybeCanvas = document.querySelector("canvas#canvas");
if (!maybeCanvas) throw new Error("Canvas not found");
const canvas = maybeCanvas;
const maybeContext = canvas.getContext("2d");
if (!maybeContext) throw new Error("2d context not found");
const context = maybeContext;

const maybeFooter = document.querySelector("footer");
if (!maybeFooter) throw new Error("Footer not found");
const footer = maybeFooter;

/** @type {HTMLCanvasElement | null} */
const maybeOverlayCanvas = document.querySelector("canvas#overlay");
if (!maybeOverlayCanvas) throw new Error("Overlay canvas not found");
const overlayCanvas = maybeOverlayCanvas;
const maybeOverlayContext = overlayCanvas.getContext("2d");
if (!maybeOverlayContext) throw new Error("2d context not found");
const overlayContext = maybeOverlayContext;

let dpr = devicePixelRatio;

const maybeCanvasesSection = document.querySelector("section#canvases");
if (!maybeCanvasesSection) throw new Error("Canvases section not found");
const canvasesSection = maybeCanvasesSection;

function handleResize() {
  dpr = devicePixelRatio;
  canvas.width = canvasesSection.clientWidth * dpr;
  canvas.height = canvasesSection.clientHeight * dpr;
  overlayCanvas.width = canvas.width;
  overlayCanvas.height = canvas.height;
  try {
    currentCompositeOperation = "source-over";
    currentLineWidth = 1;
    currentStrokeStyle = "black";
  } catch (e) {}
}

handleResize();
addEventListener("resize", handleResize);

let currentCursor = "auto";
function setCursor(cursor) {
  if (currentCursor === cursor) return;
  currentCursor = cursor;
  overlayCanvas.style.cursor = cursor;
}

setCursor("crosshair");

/**
 * @typedef {"pencil" | "eraser"} StrokeType

/**
 * @typedef {{
 *   type: StrokeType;
 *   points: [number, number][];
 *   startTime: number;
 * }} Stroke
 */

/** @type {Stroke[][]} */
const frameStrokes = [[]];
let currentFrameNumber = 0;
let PENCIL_BASE_SIZE = 1;
let ERASER_BASE_SIZE = 70;

// let slowmoIteration = 0;
let slowmoStrokeIteration = 0;
function draw() {
  context.clearRect(0, 0, canvas.width, canvas.height);
  context.lineCap = "round";
  context.lineJoin = "round";

  for (const strokes of frameStrokes) {
    if (strokes.length === 0) return;

    let i = 0;
    while (i < strokes.length) {
      // const pointsToDraw = slowmoStrokeIteration;
      const pointsToDraw = Infinity;
      drawStroke(strokes[i], pointsToDraw);
      i++;
    }
  }

  // slowmoStrokeIteration++;
}

function drawFrame() {
  // get image data url from canvas
  const imageDataUrl = canvas.toDataURL();
  // get current frame button
  /** @type {HTMLButtonElement} */
  // @ts-expect-error
  const frameButton = footer.children[currentFrameNumber];
  // set image data url as background image
  frameButton.style.backgroundImage = `url(${imageDataUrl})`;
}

function drawStroke(stroke, maxPointIndex = Infinity) {
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
  for (let i = 1; i < stroke.points.length && i < maxPointIndex; i++) {
    const [x2, y2] = stroke.points[i];
    context.lineTo(x2, y2);
  }
  context.stroke();
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

function drawOverlay() {
  overlayContext.clearRect(0, 0, canvas.width, canvas.height);
  overlayContext.strokeStyle = "gray";
  overlayContext.lineWidth = 1;
  let radius;
  switch (currentTool) {
    case "pencil": {
      radius = PENCIL_BASE_SIZE;
      break;
    }
    case "eraser": {
      radius = ERASER_BASE_SIZE;
      break;
    }
  }
  radius /= 2;
  overlayContext.beginPath();
  overlayContext.arc(...pointer.position, radius, 0, 2 * Math.PI);
  overlayContext.stroke();
}

function tick() {
  // draw();
  drawOverlay();
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
  drawOverlay();
}

addEventListener("pointerdown", (event) => {
  updatePointerPositionFromEvent(event);
  pointer.down = true;
  const strokes = frameStrokes[currentFrameNumber];
  /** @type {[number, number][]} */
  const newStroke = [[...pointer.position]];
  strokes.push({
    type: currentTool,
    points: newStroke,
    startTime: slowmoStrokeIteration,
  });
  draw();
});

addEventListener("pointermove", (event) => {
  updatePointerPositionFromEvent(event);
  if (pointer.down) {
    const strokes = frameStrokes[currentFrameNumber];
    const currentStroke = strokes[strokes.length - 1];
    currentStroke.points.push([...pointer.position]);
    draw();
  }
});

addEventListener("pointerup", (event) => {
  updatePointerPositionFromEvent(event);
  pointer.down = false;
  slowmoStrokeIteration = 0;
  drawFrame();
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

function addNewFrame() {
  alert("not implemented yet");
}

function NewFrameButton() {
  const button = html(`<button class="frame new-frame">+</button>`);
  button.addEventListener("click", addNewFrame);
  return button;
}

function FrameButton({ active = false } = {}) {
  const button = html(`<button class="frame"></button>`);
  if (active) button["classList"].add("active");
  return button;
}

function html(source) {
  const template = document.createElement("template");
  template.innerHTML = source;
  const element = template.content.firstChild;
  if (!element) throw new Error("Element not found");
  return element;
}

const frameButton = FrameButton({ active: true });
footer.appendChild(frameButton);
const newFrameButton = NewFrameButton();
footer.appendChild(newFrameButton);
