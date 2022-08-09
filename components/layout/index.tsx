import React from 'react';
import Footer from '../footer';
import Navbar from '../navbar';

const Layout: React.ElementType = ({ children }) => {
  return (
    <>
      <Navbar />
      <main>{children}</main>
      <Footer />
    </>
  );
};

export default Layout;
