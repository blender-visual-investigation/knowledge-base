export enum ModelingMode {
  POLYGONAL = 'POLYGONAL',
  NURBS = 'NURBS'
}

export interface Point {
  id: string;
  x: number;
  y: number;
}

export interface ChatMessage {
  role: 'user' | 'model';
  text: string;
}