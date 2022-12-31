import React from 'react';
import { Footer } from '../Components/Footer';
import { Header } from '../Components/Header';
import { EnterAnimation } from '../Components/Helper/EnterAnimation';
import { HeaderDescription } from '../Components/Helper/HeaderDescription';
import { Termos } from '../Components/Termos';

export const Terms = () => {
  return (
    <>
      <Header />
      <HeaderDescription
        title="Termos de uso para a trilha de ciclismo"
        text="Ao usar nossos serviços, você concorda em seguir as regras e políticas estabelecidas abaixo. Caso não concorde com essas regras, por favor, não use nossos serviços."
      />
      <Termos />
      <Footer />
      <EnterAnimation />
    </>
  );
};
