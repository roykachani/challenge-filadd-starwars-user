import { useMemo, useState } from 'react';
import {
  Accordion,
  AccordionDetails,
  AccordionSummary,
  Grid,
  Stack,
  Typography,
  Box,
  Container,
  Autocomplete,
  TextField,
  Card,
  CardContent,
  CardActions,
} from '@mui/material';
import ExpandMoreIcon from '@mui/icons-material/ExpandMore';

import { CharacterResponse } from '../../types/types';

interface Props {
  characters: CharacterResponse[];
}

const Characters = (props: Props) => {
  const [search, setSearch] = useState<string>('');

  const filterchar = useMemo(() => {
    if (search === '') {
      return props.characters;
    }
    return props.characters.filter((character) =>
      character.name.toLowerCase().includes(search.toLowerCase())
    );
  }, [search, props.characters]);

  return (
    <Stack
      direction="column"
      justifyContent="center"
      alignItems="center"
      mt={2}
      sx={{}}
    >
      <Typography
        my={3}
        variant="h2"
        sx={{ fontWeight: '500', fontSize: { xs: 28, sm: 32, md: 42, lg: 56 } }}
        color="secondary"
      >
        Movie Characters
      </Typography>
      <Box
        width={800}
        minHeight={900}
        sx={{ width: { xs: 380, sm: 480, md: 780, lg: 800 } }}
      >
        <Box my={4}>
          <Autocomplete
            size="small"
            freeSolo
            id="auto-complete"
            disableClearable
            options={props.characters.map((c) => c.name)}
            renderInput={(params) => (
              <TextField
                {...params}
                label="Search input"
                InputProps={{
                  ...params.InputProps,
                  type: 'search',
                }}
              />
            )}
            onInputChange={(event, value) => {
              setTimeout(() => setSearch(value), 1000);
            }}
          />
        </Box>
        <Box mb={4}>
          {' '}
          <Grid
            container
            direction="row"
            justifyContent="center"
            alignItems="flex-start"
            gap={4}
          >
            {filterchar.map((c, i) => (
              <Card
                key={i}
                sx={{
                  minWidth: 275,
                  width: 350,
                  background: '#121212',
                  '&:hover': {
                    background: '#181818',
                  },
                }}
              >
                <CardContent>
                  <Typography variant="h6" color="primary" mb={2}>
                    {c.name}
                  </Typography>

                  <Typography variant="body1" color="primary.dark" mb={1}>
                    Eye color: <b>{c.eye_color}</b>
                  </Typography>
                  <Typography variant="body1" color="primary.dark" mb={1}>
                    Height: <b>{c.height}cm</b>
                  </Typography>
                  <Typography variant="body1" color="primary.dark" mb={1}>
                    Hair color:{' '}
                    <b>
                      {c.hair_color === 'n/a'
                        ? '-'
                        : c.hair_color === 'none'
                        ? '-'
                        : c.hair_color}
                    </b>
                  </Typography>
                  <Typography variant="body1" color="primary.dark">
                    mass: <b>{c.mass}kg</b>
                  </Typography>
                </CardContent>
              </Card>
            ))}
          </Grid>
        </Box>
      </Box>
    </Stack>
  );
};

export default Characters;
