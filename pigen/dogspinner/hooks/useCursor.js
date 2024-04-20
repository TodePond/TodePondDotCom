import { useContext } from "./useContext.js";

const state = {
  cursor: null,
};

let cached = null;

export function useCursor() {
  if (cached) return cached;

  const canvas = useContext().canvas;

  function getCursor() {
    return state.cursor;
  }

  function setCursor(cursor) {
    if (state.cursor === cursor) return;
    state.cursor = cursor;
    canvas.style.cursor = cursor;
  }

  cached = [getCursor, setCursor];
  return cached;
}
