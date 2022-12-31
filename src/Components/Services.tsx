import React from 'react';
import styled from 'styled-components';
import { HeaderDescription } from './Helper/HeaderDescription';
import { Image } from './Helper/Image';
import { LessonInfoCard } from './Helper/LessonInfoCard';
import { device } from './Styles/BreakPoints';

export const Services = () => {
  return (
    <Container>
      <HeaderDescription
        title="O que oferecemos"
        text="Confira nossas aulas de ciclismo para iniciantes, ministradas por profissionais experientes e apaixonados pelo esporte."
      />

      <Cards>
        <LessonInfoCard
          ImgSource="https://images.unsplash.com/photo-1474962558142-9ca83af74bb7?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1470&q=80"
          ImgTitle="Fotografado por Jack Alexander"
          ImgAlt="Uma pessoa está pedalando uma bicicleta amarela em movimento"
          CardTitle="Aula básica de ciclismo"
          CardDesc="Nesta aula, os iniciantes aprenderão os fundamentos do ciclismo,
            incluindo como equilibrar-se na bike, usar os freios e mudar de
            marchas. Também serão abordadas questões de segurança, como usar o
            capacete e sinalizar as manobras. Esta aula é ideal para quem está
            começando a andar de bike ou precisa refrescar suas habilidades
            básicas."
        />
        <LessonInfoCard
          ImgSource="https://images.unsplash.com/photo-1615845521849-20aca146f7e9?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=2660&q=80"
          ImgTitle="Fotografado por Jack Delulio"
          ImgAlt="Duas Pessoas pedalando bicicleta em uma estrada"
          CardTitle="Aula de ciclismo de estrada"
          CardDesc="Nesta aula, os iniciantes aprenderão as técnicas de ciclismo de estrada, incluindo como andar em grupo, ultrapassar outros ciclistas e usar o drafting. Também serão discutidas as regras e etiqueta do ciclismo de estrada. Esta aula é ideal para quem quer começar a praticar ciclismo de estrada ou melhorar suas habilidades neste tipo de ciclismo."
        />
        <LessonInfoCard
          ImgSource="https://images.unsplash.com/photo-1535369643553-a33e0d1ac81d?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1518&q=80"
          ImgTitle="Fotografado por Tim Foster"
          ImgAlt="Pessoa descendo um morro de bicicleta hardtail"
          CardTitle="Aula de ciclismo de mountain bike"
          CardDesc="Nesta aula, os iniciantes aprenderão as técnicas de ciclismo de mountain bike, incluindo como superar obstáculos, controlar a bike em descidas e subidas e usar os freios de disco. Também serão discutidos os cuidados com a bike e a segurança na trilha. Esta aula é ideal para quem quer começar a praticar ciclismo de mountain bike ou melhorar suas habilidades neste tipo de ciclismo."
        />
      </Cards>
    </Container>
  );
};

const Container = styled.section`
  ${({ theme }) => theme.container}
`;

const Cards = styled.div`
  display: flex;
  flex-direction: column;
  gap: 80px;

  > ul:nth-child(2) {
    grid-template-columns: auto 488px;

    @media ${device.md} {
      grid-template-columns: 1fr;
    }
    > li {
      order: +1;
    }
  }
`;
