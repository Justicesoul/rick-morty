export interface Character {
  id: number;
  name: string;
  gender: string;
  species: string;
  image: string;
  episode: string[];
}

export interface Characters {
  info: {
    next: string;
    prev: string;
  },
  results: Character[]
}