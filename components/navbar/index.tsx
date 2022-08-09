import { Box, Container } from '@mui/material';
import Image from 'next/image';
import { FC } from 'react';

import logo from '../../public/assets/logo-sw.svg';

const Navbar: FC = () => {
  return (
    <>
      <Container maxWidth="sm">
        <Box display="flex" alignItems="center" justifyContent="center" m={2}>
          <Image src={logo} alt="star wars logo" width={500} height={100} />
        </Box>
      </Container>
    </>
  );
};

export default Navbar;
