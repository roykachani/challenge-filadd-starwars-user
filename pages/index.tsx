import { useState } from 'react';
import type { GetStaticProps, NextPage } from 'next';
import Head from 'next/head';
import { useQuery, DefinedUseQueryResult } from '@tanstack/react-query';
import { Container } from '@mui/material';

import { MovieDataType } from '../types/types';
import { getMovies } from '../servicies/movies';
import ListMovies from '../components/Movies/ListMovies';
import SortForm from '../components/sortForm';
import { SORT } from '../utils/constants';

interface Props {
  movies: MovieDataType[];
}

const Home: NextPage<Props> = (props: Props) => {
  const [movieId, setMovieId] = useState<number | null>(null);
  const [sortBy, setSortBy] = useState<string>('default');

  const useMovies: DefinedUseQueryResult<MovieDataType[], Error> = useQuery<
    MovieDataType[],
    Error
  >(['movies', movieId], getMovies, {
    initialData: props.movies as MovieDataType[],
    refetchOnMount: false,
    //select permite ejecutar una función para retornar los datos ej: con algún filtro o ordenamiento
    select: (data): MovieDataType[] =>
      data.sort((a, b): any => {
        //no se puede retornar un tipo de dato de tipo number
        if (sortBy === SORT.DESC) {
          return a.title.localeCompare(b.title);
        } else if (sortBy === SORT.ASC) {
          return b.title.localeCompare(a.title);
        } else if (sortBy === SORT.OLD) {
          return a.releaseDate.localeCompare(b.releaseDate, 'en', {
            numeric: true,
          });
        } else if (sortBy === SORT.NEW) {
          return b.releaseDate.localeCompare(a.releaseDate, 'en', {
            numeric: true,
          });
        } else data;
      }),
  });

  const { isLoading, data: movies, error } = useMovies;

  const handleClick = (id: number) => {
    setMovieId(id);
  };

  const handleSortBy = (value: string) => {
    setSortBy(value);
  };

  return (
    <div>
      <Head>
        <title>Star Wars StartUp</title>
        <meta
          name="description"
          content="Search al movies, characters about Star Wars!"
        />
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <section>
        <Container>
          <SortForm sortBy={sortBy} handleSortBy={handleSortBy} />
        </Container>
        <ListMovies movies={movies} handleClick={handleClick} />
      </section>
    </div>
  );
};

export default Home;

export const getStaticProps: GetStaticProps = async (): Promise<{
  props: { movies: MovieDataType[] };
}> => {
  const movies = await getMovies();

  return {
    props: {
      movies,
    },
  };
};
