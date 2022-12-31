import React from 'react';
import styled from 'styled-components';
import Infos from '../Components/Helper/Infos.json';

export const Termos = () => {
  return (
    <Container>
      {Infos.termos.map((termo) => (
        <p className="p2" key={termo.id}>
          <span>{termo.id}.</span> {termo.termo}
        </p>
      ))}
    </Container>
  );
};

const Container = styled.section`
  ${({ theme }) => theme.container}
  display:flex;
  flex-direction: column;
  gap: 22px;
  align-items: center;

  margin-bottom: 80px;

  span {
    color: ${({ theme }) => theme.colors.Primary};
    font-weight: 800;
    margin-right: 5px;
  }
`;
