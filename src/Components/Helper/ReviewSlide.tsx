import React from 'react';
import styled from 'styled-components';
import Stars from '../../assets/Stars.svg';

interface ReviewSlideProps {
  ReviewText: string;
  Person: string;
}

export const ReviewSlide = ({ ReviewText, Person }: ReviewSlideProps) => {
  return (
    <Container>
      <img src={Stars} alt="Estrelas para avaliação" />
      <p className="t4">"{ReviewText}"</p>
      <h4 className="p2">{Person}</h4>
    </Container>
  );
};

const Container = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;

  margin: 0 auto;
  max-width: 469px;
  background-color: ${({ theme }) => theme.colors.GreyBG};
  border-radius: 6px;

  min-height: 500px;

  img {
    margin: 32px 0 32px 0;
  }

  p {
    max-width: 333px;
    padding: 0 10px 0 10px;
    text-align: center;
    color: ${({ theme }) => theme.colors.TextColor};
  }

  h4 {
    margin: 32px 0 60px 0;
    font-weight: 600;
    color: ${({ theme }) => theme.colors.TitleColor};
  }
`;
