import { Container, Typography } from '@mui/material';
import React from 'react';
import Navbar from '../navbar';

const Layout: React.ElementType = ({ children }) => {
  return (
    <>
      <Navbar />
      <main>{children}</main>
    </>
  );
};

export default Layout;
