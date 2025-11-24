import { Point } from '../types';

// Chaikin's Algorithm for curve smoothing (Subdivision)
// cuts corners to smooth a polygon
export const chaikinSubdivide = (points: Point[], iterations: number): Point[] => {
  if (iterations === 0) return points;

  let currentPoints = [...points];

  for (let i = 0; i < iterations; i++) {
    const newPoints: Point[] = [];
    
    // If we don't have enough points to form a line, return
    if (currentPoints.length < 2) return currentPoints;

    // Keep the first point (open curve)
    newPoints.push({ ...currentPoints[0], id: `sub-${i}-start` });

    for (let j = 0; j < currentPoints.length - 1; j++) {
      const p0 = currentPoints[j];
      const p1 = currentPoints[j + 1];

      // Q point (75% p0, 25% p1)
      const Qx = 0.75 * p0.x + 0.25 * p1.x;
      const Qy = 0.75 * p0.y + 0.25 * p1.y;

      // R point (25% p0, 75% p1)
      const Rx = 0.25 * p0.x + 0.75 * p1.x;
      const Ry = 0.25 * p0.y + 0.75 * p1.y;

      newPoints.push({ x: Qx, y: Qy, id: `sub-${i}-${j}-Q` });
      newPoints.push({ x: Rx, y: Ry, id: `sub-${i}-${j}-R` });
    }

    // Keep the last point
    newPoints.push({ ...currentPoints[currentPoints.length - 1], id: `sub-${i}-end` });

    currentPoints = newPoints;
  }

  return currentPoints;
};
