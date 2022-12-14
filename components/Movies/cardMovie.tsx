import {
  Button,
  Card,
  CardActions,
  CardContent,
  CardMedia,
  Typography,
} from '@mui/material';
import Link from 'next/link';
import React from 'react';
import { MovieDataType } from '../../types/types';
import { PICT } from '../../utils/constants';

type Props = {
  movie: MovieDataType;
  handleClick: (id: number) => void;
};

const CardMovie: React.FC<Props> = ({ movie, handleClick }: Props) => {
  return (
    <Link href={`/movies/${movie.id}`}>
      <Card
        sx={{
          width: 350,
          height: 360,
          maxWidth: 345,
          background: '#121212',
          '&:hover': {
            background: '#181818',
          },
          cursor: 'pointer',
        }}
        onClick={() => {
          handleClick(movie.id);
        }}
      >
        {PICT.map(
          (p, i): any =>
            p.name === movie.title && (
              <CardMedia
                key={i}
                component="img"
                height="140"
                image={p.img}
                alt={p.name}
              />
            )
        )}

        <CardContent>
          <Typography
            gutterBottom
            variant="h5"
            component="div"
            color="rgb(255, 255, 255)"
          >
            {movie.title}
          </Typography>
          <Typography variant="body2" color="rgba(255, 255, 255, 0.7)">
            {movie.description.substring(0, 130).concat('...')}
          </Typography>
          <Typography variant="body2" color="rgba(255, 255, 255, 0.7)" mt={1}>
            Realese date: {movie.releaseDate}
          </Typography>
        </CardContent>
        <Link href={`/movies/${movie.id}`}>
          <CardActions>
            <Button size="small" sx={{ color: '#edec51' }}>
              + INFO
            </Button>
          </CardActions>
        </Link>
      </Card>
    </Link>
  );
};
export default CardMovie;
