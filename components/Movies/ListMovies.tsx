import { Box, Container, Grid } from '@mui/material';
import React from 'react';
import { MovieDataType } from '../../types/types';
import CardMovie from './cardMovie';

type Props = {
  movies: MovieDataType[];
  handleClick: (id: number) => void;
};

const ListMovies: React.FC<Props> = ({ movies, handleClick }: Props) => {
  const hasMovies = movies.length > 0;

  return (
    <Container maxWidth="lg">
      <Box alignItems="center" justifyContent="center" marginY={4}>
        <Grid
          container
          direction="row"
          justifyContent="center"
          alignItems="center"
          spacing={2}
          gap={6}
        >
          {hasMovies &&
            movies.map((movie) => (
              <Grid key={movie.id}>
                <CardMovie movie={movie} handleClick={handleClick} />
              </Grid>
            ))}
        </Grid>
      </Box>
    </Container>
  );
};
export default ListMovies;
