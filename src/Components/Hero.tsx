import React from 'react';
import styled from 'styled-components';
import { Button } from './Helper/Button';
import { HeaderDescription } from './Helper/HeaderDescription';
import { Image } from './Helper/Image';
import { device } from './Styles/BreakPoints';

export const Hero = () => {
  return (
    <Container>
      <HeaderDescription
        title="Aprenda a andar de bike com a gente"
        text="Não perca nossas aulas de ciclismo. Temos anos de experiência no esporte
        e estamos prontos para compartilhar nossos conhecimentos com você.
        Nossas aulas são divertidas e eficazes, para que você possa aprender
        tudo o que precisa para se tornar um ciclista competente e seguro."
      />
      <a href="#teste">
        <Button text="Faça o teste grátis" />
      </a>
      <Image
        source="https://images.unsplash.com/photo-1528629297340-d1d466945dc5?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1522&q=80"
        alt="Um homem está pedalando uma bicicleta em uma estrada."
        title="Fotografado por Jonny Kennaugh"
      />
    </Container>
  );
};

const Container = styled.main`
  ${({ theme }) => theme.container}

  display:flex;
  flex-direction: column;
  align-items: center;

  img {
    margin: 80px 0 80px 0;
    width: 100%;
    max-width: 800px;
  }

  @media ${device.sm} {
    img {
      margin: 48px 0 48px 0;
      width: 100%;
      max-width: 800px;
    }
  }
`;
