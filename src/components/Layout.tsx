import React from 'react';
import Header from './Header';  // Assuming Header.tsx is in the same folder
import Footer from './Footer';  // Corrected Footer import path

type LayoutProps = {
  children: React.ReactNode;
};

const Layout: React.FC<LayoutProps> = ({ children }) => {
  return (
    <>
      <Header />
      <main>{children}</main>
      <Footer />
    </>
  );
};

export default Layout;
