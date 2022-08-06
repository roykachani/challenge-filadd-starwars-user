import { Box, Container, Typography } from '@mui/material';
import Image from 'next/image';
import { ElementType, FC } from 'react';

import logo from '../../public/assets/logo-sw.svg';

const Navbar: FC = () => {
  return (
    <>
      <Container maxWidth="sm">
        <Box display="flex" alignItems="center" justifyContent="center" m={2}>
          <Image
            src={logo}
            alt="star wars logo"
            width={500}
            height={100}
            style={{ fill: 'rgb(255, 232, 31)' }}
          />
        </Box>
      </Container>
    </>
  );
};

export default Navbar;
