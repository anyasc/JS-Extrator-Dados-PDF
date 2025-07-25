// Objeto de seleção de área retangular
export interface SelectionArea {
  x: number;
  y: number;
  width: number;
  height: number;
}

export interface Area {
  id: string;
  name: string;
  order: number;
  color: string;
  coordinates: SelectionArea | null;
  isSelected?: boolean;
  isMandatory: boolean;
}

export interface AreaPreset {
  name: string;
  areas: Area[];
}

export interface PageTextData {
  page: number;
  [areaName: string]: string[] | number;
}

export interface HorizontalLine {
  x1: number;
  x2: number;
  y: number;
}
