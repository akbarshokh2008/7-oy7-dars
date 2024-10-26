import React from 'react';
import Header from './assets/components/Header';
import { useTranslation } from 'react-i18next';
import { Route, Routes } from 'react-router-dom';
import Contact from './pages/Contact';

import MainLayout from './layout/MainLayout';
import Cart from './pages/Cart';
function App() {
  const { t, i18n } = useTranslation();
  return (
    <div>
      <Routes>
        <Route
          path='/'
          element={
            <MainLayout>
              <Contact />
            </MainLayout>
          }
        ></Route>
        <Route
          path='/cart'
          element={
            <MainLayout>
              <Cart />
            </MainLayout>
          }
        ></Route>
      </Routes>
    </div>
  );
}

export default App;
