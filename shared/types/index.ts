export interface ILayoutNavigationItem {
  icon: string;
  name: string;
  route: string;
}

export enum EDirections {
  left,
  right,
  top,
  bottom,
}

export interface IProgressItem {
  title: string;
  level: string;
  value: number;
  icon: string;
  bgColor: string;
  color: string;
}