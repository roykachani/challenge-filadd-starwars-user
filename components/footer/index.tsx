import React from 'react';
import { Link, Typography, Box } from '@mui/material';

type Props = {};

const Footer: React.FC = (props: Props) => {
  return (
    <footer>
      <Box
        sx={{ textAlign: 'center', background: '#121212', height: 45 }}
        display="flex"
        alignItems="center"
        justifyContent="center"
      >
        <Typography variant="body2" color="primary.dark" component="p">
          Made by{' '}
          <Link
            href="https://github.com/roykachani/challenge-filadd-starwars-user"
            variant="body2"
            sx={{ textDecoration: 'none' }}
            target="_blank"
          >
            Roy Kachani
          </Link>
        </Typography>
      </Box>
    </footer>
  );
};

export default Footer;
