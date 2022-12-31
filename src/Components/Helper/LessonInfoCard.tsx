import React from 'react';
import { Image } from './Image';
import styled from 'styled-components';
import { device } from '../Styles/BreakPoints';

interface LessonInfoCardProps {
  ImgSource: string;
  ImgTitle: string;
  ImgAlt: string;
  CardTitle: string;
  CardDesc: string;
}

export const LessonInfoCard = ({
  ImgSource,
  ImgTitle,
  ImgAlt,
  CardTitle,
  CardDesc,
}: LessonInfoCardProps) => {
  return (
    <Container>
      <li>
        <Image source={ImgSource} title={ImgTitle} alt={ImgAlt} />
      </li>
      <ul>
        <li>
          <h2 className="t3">{CardTitle}</h2>
        </li>
        <li>
          <p className="p2">{CardDesc}</p>
        </li>
      </ul>
    </Container>
  );
};

const Container = styled.ul`
  display: grid;
  grid-template-columns: 488px auto;

  align-items: center;
  text-align: center;
  gap: 15%;

  h2,
  p {
    max-width: 384px;
    margin-bottom: 1rem;
  }

  @media ${device.md} {
    grid-template-columns: 1fr;
    gap: 10px;
    place-items: center;

    li {
      order: +1;
    }

    h2 {
      max-width: none;
    }

    p {
      max-width: max-content;
    }
  }
`;
