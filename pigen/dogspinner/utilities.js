/**
 * @param {[number, number]} point
 * @param {number} angle
 * @param {[number, number]} origin
 */
export function rotatePoint([x, y], angle, origin = [0, 0]) {
  const dx = x - origin[0];
  const dy = y - origin[1];
  const rotatedX = dx * Math.cos(angle) - dy * Math.sin(angle);
  const rotatedY = dx * Math.sin(angle) + dy * Math.cos(angle);
  return [rotatedX + origin[0], rotatedY + origin[1]];
}
