import { useContext } from "./useContext.js";
import { drawSpinner } from "./useSpinner.js";

let cached = null;

export function useTick() {
  if (cached) return cached;

  const context = useContext();
  cached = () => {
    requestAnimationFrame((time) => {
      handleTick({ context, time });
    });
  };

  return cached;
}

/**
 * @type {((tickInfo: TickContext) => void)[]}
 */
const tickCallbacks = [];

/**
 * @param {((tickInfo: TickContext) => void)} callback
 */
export function registerTickCallback(callback) {
  tickCallbacks.push(callback);
}

/**
 * @param {TickContext} context
 */
function handleTick({ context, time }) {
  context.clearRect(0, 0, context.canvas.width, context.canvas.height);
  drawSpinner({ context, time });

  requestAnimationFrame((time) => {
    handleTick({ context, time });
  });
}
