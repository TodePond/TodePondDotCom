let done = false;

const history = [];

export function usePointerVelocity() {
  if (done) return getPointerVelocity;

  addEventListener("pointermove", recordPointerPosition);
  //   addEventListener("pointerup", recordPointerPosition);
  //   addEventListener("pointerdown", recordPointerPosition);

  return getPointerVelocity;
}

function getPointerVelocity() {
  while (history.length > 0 && performance.now() - history[0].time > 30) {
    history.shift();
  }

  if (history.length < 2) {
    return [0, 0];
  }

  const diffs = [];
  for (let i = 1; i < history.length; i++) {
    const current = history[i];
    const previous = history[i - 1];
    const displacement = [
      current.position[0] - previous.position[0],
      current.position[1] - previous.position[1],
    ];
    const time = Math.max(current.time - previous.time, 1);
    // console.log(time);
    diffs.push([displacement[0] / time, displacement[1] / time]);
  }

  const total = diffs.reduce((acc, [x, y]) => [acc[0] + x, acc[1] + y], [0, 0]);

  return [total[0] / diffs.length, total[1] / diffs.length];
}

/**
 * @param {PointerEvent} event
 */
function recordPointerPosition(event) {
  history.push({
    position: [event.clientX, event.clientY],
    time: performance.now(),
  });

  //   if (history.length > 10) {
  //     history.shift();
  //   }

  // remove entries that are too old
  while (history.length > 0 && performance.now() - history[0].time > 30) {
    history.shift();
  }
}
