import axios from 'axios';
import {
  CharacterResponse,
  FilmResponse,
  FilmsResponse,
  MovieDataType,
  MovieDetail,
} from '../types/types';

const API_URL = process.env.NEXT_PUBLIC_API_URL;

export const getMovies = async (): Promise<[MovieDataType]> => {
  const res = await axios.get(API_URL as string);
  console.log('geting movies');
  const { results } = res.data;

  const movies = results.map((movie: FilmResponse, i: number) => ({
    id: i + 1,
    title: movie.title,
    description: movie.opening_crawl,
    releaseDate: movie.release_date,
    characters: movie.characters,
    director: movie.director,
  }));

  return movies;
};
// axios.get(`${API_URL}`).then((res) => res.data);

export const getMovie = async (id: number): Promise<MovieDetail> => {
  const resMovie = await axios.get(`${API_URL}/${id}` as string);
  const result = resMovie.data;
  // console.log(resMovie.data, 'results');

  const resCharacters = result.characters.map(async (character: string) => {
    const res = await axios.get(character as string);
    const charactersData = res.data;
    // console.log(charactersData, 'characters');
    return charactersData;
  });

  const characters = await Promise.all(resCharacters);
  console.log(characters, 'characters');

  const movie: MovieDetail = {
    id: id,
    title: result.title,
    description: result.opening_crawl,
    producer: result.producer,
    releaseDate: result.release_date,
    characters,
    director: result.director,
  };

  return movie;
};
