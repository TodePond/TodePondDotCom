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

const strokes = [];
let PENCIL_BASE_SIZE = 1;
function draw() {
  context.clearRect(0, 0, canvas.width, canvas.height);
  context.strokeStyle = "white";
  context.lineWidth = PENCIL_BASE_SIZE;
  context.lineCap = "round";
  context.lineJoin = "round";
  for (const stroke of strokes) {
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

function tick() {
  draw();
  requestAnimationFrame(tick);
}

requestAnimationFrame(tick);

const pointer = {
  position: [0, 0],
  down: false,
};

function updatePointerPositionFromEvent(event) {
  pointer.position = [event.clientX * dpr, event.clientY * dpr];
}

addEventListener("pointerdown", (event) => {
  updatePointerPositionFromEvent(event);
  pointer.down = true;
  const newStroke = [[...pointer.position]];
  strokes.push({ type: "pencil", points: newStroke });
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
  }
});
