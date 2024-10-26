import React from 'react';
import Header from '../assets/components/Header';

function MainLayout({ children }) {
  return (
    <>
      <Header />
      {children}
    </>
  );
}

export default MainLayout;
