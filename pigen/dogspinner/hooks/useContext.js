let cached = null;
export function useContext() {
  if (cached) return cached;

  const canvas = document.querySelector("canvas");

  if (!canvas) throw new Error("Canvas not found");
  const context = canvas.getContext("2d");

  handleResize(canvas);
  addEventListener("resize", () => handleResize(canvas));

  if (!context) throw new Error("2d context not found");
  cached = context;
  return context;
}

/**
 * @param {HTMLCanvasElement} canvas
 */
function handleResize(canvas) {
  canvas.width = innerWidth * devicePixelRatio;
  canvas.height = innerHeight * devicePixelRatio;
}
