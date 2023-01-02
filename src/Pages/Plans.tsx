import React from 'react';
import { Footer } from '../Components/Footer';
import { Header } from '../Components/Header';
import { EnterAnimation } from '../Components/Helper/EnterAnimation';
import { Planos } from '../Components/Planos';

export const Plans = () => {
  return (
    <div>
      <Header />
      <Planos />
      <Footer />
      <EnterAnimation />
    </div>
  );
};
