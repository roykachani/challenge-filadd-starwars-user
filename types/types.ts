export type data = MovieDataType[];

export type MovieDataType = {
  id: number;
  title: string;
  description: string;
  characters: string[];
  director: string | null;
  releaseDate: string;
};

export type MovieDetail = {
  id: number;
  title: string;
  director: string | null;
  producer: string | null;
  description: string | null;
  releaseDate: string;
  img: string | null;
  characters: CharacterResponse[];
};

export type FilmsResponse = {
  count: number;
  next: number | null;
  previos: number | null;
  results: FilmResponse[];
};

export type FilmResponse = {
  title: string;
  episodeID: number;
  opening_crawl: string;
  director: string;
  producer: string;
  release_date: Date;
  characters: string[];
  planets: string[];
  starships: string[];
  vehicles: string[];
  species: string[];
  created: Date;
  edited: Date;
  url: string;
};

export type CharacterResponse = {
  name: string;
  height: string;
  mass: string;
  hair_color: string;
  skin_color: string;
  eye_color: string;
  birth_year: string;
  gender: string;
  homeworld: string;
  films: string[];
  species: string[];
  vehicles: string[];
  starships: string[];
  created: string;
  edited: string;
  url: string;
};
