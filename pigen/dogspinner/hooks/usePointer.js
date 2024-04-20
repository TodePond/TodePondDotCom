let cached = null;

const pointer = {
  /** @type {[number, number] | null} */
  position: null,
  /** @type {boolean | null} */
  down: null,
};

export function usePointer() {
  if (cached) return cached;

  addEventListener("pointermove", (event) => {
    updatePointerPosition(event);
  });

  addEventListener("pointerdown", (event) => {
    pointer.down = true;
    updatePointerPosition(event);
  });

  addEventListener("pointerup", (event) => {
    pointer.down = false;
    updatePointerPosition(event);
  });

  cached = pointer;
  return cached;
}

/**
 * @param {PointerEvent} event
 */
function updatePointerPosition(event) {
  pointer.position = [
    event.clientX * devicePixelRatio,
    event.clientY * devicePixelRatio,
  ];
}
