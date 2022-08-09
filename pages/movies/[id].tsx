import type { GetStaticPaths, InferGetStaticPropsType } from 'next';
import Head from 'next/head';
import Image from 'next/image';
import { useQuery } from '@tanstack/react-query';
import { Box, Stack, Typography } from '@mui/material';
import KeyboardBackspaceIcon from '@mui/icons-material/KeyboardBackspace';
import { RadarSpinner } from 'react-epic-spinners';

import { CharacterResponse, MovieDetail } from '../../types/types';
import { getMovie, getMovies } from '../../servicies/movies';
import { PICT } from '../../utils/constants';
import Characters from '../../components/character';
import { useRouter } from 'next/router';

interface Props {
  movie: MovieDetail;
  characters: CharacterResponse[];
  character: CharacterResponse;
}

const MoviePage = (props: InferGetStaticPropsType<typeof getStaticProps>) => {
  const router = useRouter();

  const useMovie = useQuery<MovieDetail, Error>(
    ['movie'],
    () => getMovie(props.movie.id),
    {
      initialData: (): any => {
        setTimeout(() => {
          return props.movie as MovieDetail;
        }, 1500);
      },
      refetchOnMount: false,
    }
  );

  const { isLoading, data: movieData, error } = useMovie;

  if (isLoading) {
    return (
      <div>
        <section>
          <Stack
            sx={{ background: '#121212' }}
            pb={2}
            alignItems="center"
            justifyContent="center"
            minHeight={{ xs: '100vh', sm: '100vh', md: '650px' }}
          >
            <RadarSpinner color="#fff" size="123" />
          </Stack>
        </section>
      </div>
    );
  }

  if (error) {
    return router.push('/');
  }

  return (
    <div>
      <Head>
        <title>{movieData.title}</title>
        <meta name="description" content={movieData.title as string} />
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <section>
        <Stack
          sx={{ background: '#121212' }}
          pb={2}
          alignItems="center"
          justifyContent="center"
        >
          <Box
            m={2}
            width={{ md: 850, lg: 900 }}
            display={{ md: 'flex' }}
            alignItems="center"
            justifyContent="flex-start"
          >
            <Box
              onClick={() => router.push('/')}
              sx={{ cursor: 'pointer' }}
              display={{ xs: 'none', sm: 'none', md: 'flex' }}
              alignItems="center"
            >
              <KeyboardBackspaceIcon color="primary" fontSize="small" />
              <Typography
                variant="body2"
                fontSize={12}
                color="primary.dark"
                ml={1}
              >
                Back to movies
              </Typography>
            </Box>
            <Box ml={{ md: 22 }}>
              <Typography
                variant="h1"
                sx={{
                  fontWeight: '500',
                  fontSize: { xs: 28, sm: 32, md: 42, lg: 56 },
                }}
                color="primary"
                textAlign="center"
              >
                {movieData.title}
              </Typography>
            </Box>
          </Box>
          <Stack
            direction="row"
            justifyContent="center"
            sx={{
              flexDirection: { xs: 'column', sm: 'column', md: 'row' },
              alignItems: { xs: 'center', sm: 'center', md: 'flex-start' },
            }}
          >
            <Box alignItems="center" justifyContent="center" marginY={2}>
              {PICT.map(
                (p, i): any =>
                  p.name === movieData.title && (
                    <Image
                      key={i}
                      height={500}
                      width={350}
                      src={`/${p.img}`}
                      alt={p.name}
                      priority
                    />
                  )
              )}
            </Box>
            <Box
              width={{ xs: 350, sm: 300, lg: 500 }}
              height={{ xs: 'auto', sm: 'auto', md: 500, lg: 500 }}
              mx={3}
              my={2}
            >
              <Box>
                <Typography variant="subtitle1" color="primary.dark">
                  {movieData.description}
                </Typography>
              </Box>
              <Box mt={{ xs: 2, sm: 2, md: 4, lg: 10 }}>
                <Typography variant="body1" color="primary.dark" mt={2}>
                  Release: {movieData.releaseDate}
                </Typography>
                <Typography variant="body1" color="primary.dark" mt={2}>
                  Director: {movieData.director}
                </Typography>
                <Typography variant="body1" color="primary.dark" mt={2}>
                  Producer: {movieData.producer}
                </Typography>
              </Box>
            </Box>
          </Stack>
        </Stack>

        <Characters characters={movieData.characters} />
      </section>
    </div>
  );
};
export default MoviePage;

export const getStaticProps = async (context: any): Promise<any> => {
  const id = context.params.id;
  const parsedId = parseInt(id);
  const movie: MovieDetail = await getMovie(parsedId as number);

  return {
    props: {
      movie,
    },
  };
};

export const getStaticPaths: GetStaticPaths = async () => {
  const movies = await getMovies();
  const paths = movies.map((movies) => ({
    params: { id: `${movies.id}` },
  }));

  return {
    paths,
    fallback: false, // fallback to 404 page if no match
  };
};
