export interface Location {
  id: number;
  name: string;
  dimension: string;
  residents: string[];
}

export interface Locations {
  info: {
    next: string;
    prev: string;
  },
  results: Location[]
}