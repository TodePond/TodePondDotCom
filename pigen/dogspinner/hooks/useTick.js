import { useContext } from "./useContext.js";
import { useSpinnerTick } from "./useSpinner.js";

let cached = null;

export function useTick() {
  if (cached) return cached;

  const spinnerTick = useSpinnerTick();

  const context = useContext();
  cached = () => {
    requestAnimationFrame((time) => {
      context.clearRect(0, 0, context.canvas.width, context.canvas.height);
      spinnerTick({ context, time });
      requestAnimationFrame((time) => cached({ context, time }));
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
