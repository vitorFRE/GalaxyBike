import React from 'react';
import styled from 'styled-components';
import { device } from '../Styles/BreakPoints';

interface HeaderDescriptionProps {
  title: string;
  text: string;
}

export const HeaderDescription = ({ title, text }: HeaderDescriptionProps) => {
  return (
    <Container>
      <h1 className="t2">{title}</h1>
      <p className="p1">{text}</p>
    </Container>
  );
};

const Container = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;

  > h1 {
    text-align: center;
    margin: 80px 0 16px 0;
    max-width: 600px;
  }
  > p {
    margin-bottom: 48px;
    text-align: center;
    max-width: 600px;
  }

  @media ${device.sm} {
    > h1 {
      margin: 28px 0 16px 0;
    }
    > p {
      margin-bottom: 48px;
    }
  }
`;
