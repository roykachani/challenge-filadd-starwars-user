import axios from 'axios';
import { FilmResponse, MovieDataType, MovieDetail } from '../types/types';

const API_URL = process.env.NEXT_PUBLIC_API_URL;

export const getMovies = async (): Promise<[MovieDataType]> => {
  const res = await axios.get(API_URL as string);
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

export const getMovie = async (id: number): Promise<MovieDetail> => {
  const movieId = id.toString();

  const resMovie = await axios.get(`${API_URL}${movieId}`);
  const result = resMovie.data;

  const resCharacters = result.characters.map(async (character: string) => {
    const res = await axios.get(character as string);
    const charactersData = res.data;
    return charactersData;
  });

  const characters = await Promise.all(resCharacters);

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
