import React from 'react';
import styled from 'styled-components';
import { Button } from './Helper/Button';
import { HeaderDescription } from './Helper/HeaderDescription';
import { FaCheck } from 'react-icons/fa';
import { device } from './Styles/BreakPoints';

export const Planos = () => {
  return (
    <Container>
      <HeaderDescription
        title="Conheça Nossos Planos de Aulas de Ciclismo"
        text="Escolha o plano que melhor se encaixa em seu objetivo e nível de experiência"
      />
      <span className="p2">Preços e planos</span>
      <PlanosContainer>
        <div className="plano">
          <div>
            <p className="p1">Ciclista Iniciante</p>
            <span>Conheça um novo mundo</span>
            <h2>
              R$150<span> BRL/mes</span>
            </h2>
            <Button text="QUERO ESSE!" />
          </div>
          <div>
            <p className="p1">O que está incluído</p>
            <ul className="p2">
              <li>
                <p>
                  <FaCheck color="#FFFF00" /> Aulas semanais de 1,5 horas
                </p>
              </li>
              <li>
                <p>
                  <FaCheck color="#FFFF00" />
                  Acesso ao material didático online
                </p>
              </li>
              <li>
                <p>
                  <FaCheck color="#FFFF00" />
                  Suporte por e-mail e chat durante todo o curso
                </p>
              </li>
              <li>
                <p>
                  <FaCheck color="#FFFF00" />1 aula de grupo por mês
                </p>
              </li>
            </ul>
          </div>
        </div>

        <div className="plano">
          <div>
            <p className="p1">Ciclista Pro</p>
            <span>Explore um novo mundo</span>
            <h2>
              R$200<span> BRL/mes</span>
            </h2>
            <Button text="QUERO ESSE!" />
          </div>
          <div>
            <p className="p1">O que está incluído</p>
            <ul className="p2">
              <li>
                <p>
                  <FaCheck color="#FFFF00" /> Aulas semanais de 1,5 horas
                </p>
              </li>
              <li>
                <p>
                  <FaCheck color="#FFFF00" />
                  Acesso ao material didático online
                </p>
              </li>
              <li>
                <p>
                  <FaCheck color="#FFFF00" />
                  Suporte por e-mail e chat durante todo o curso
                </p>
              </li>
              <li>
                <p>
                  <FaCheck color="#FFFF00" />2 aula de grupo por mês
                </p>
              </li>
              <li>
                <p>
                  <FaCheck color="#FFFF00" />
                  Acesso a treinos extras com instrutor experiente
                </p>
              </li>
            </ul>
          </div>
        </div>
      </PlanosContainer>
    </Container>
  );
};

const Container = styled.div`
  ${({ theme }) => theme.container}

  > span {
    display: flex;
    justify-content: center;
    color: ${({ theme }) => theme.colors.Secondary};
    font-weight: 600;
    margin-bottom: 20px;
  }
`;

const PlanosContainer = styled.div`
  display: grid;
  grid-template-columns: 1fr 1fr;
  gap: 15px;
  margin-bottom: 80px;

  @media ${device.sm} {
    grid-template-columns: 1fr;
  }

  .plano {
    max-width: 590px;
    div:nth-child(1) {
      background-color: #939388;
      border-radius: 6px 6px 0 0;
      p {
        color: ${({ theme }) => theme.colors.TitleColor};
        font-weight: 600;
        padding: 48px 0 0 48px;
      }
      > span {
        font-family: 'Inter', sans-serif;
        color: ${({ theme }) => theme.colors.TextColor};
        padding: 0 10px 0 48px;
      }
      h2 {
        color: ${({ theme }) => theme.colors.Secondary};
        margin: 16px 0 24px 0;
        padding: 0 10px 0 48px;
      }
      button {
        margin-left: 48px;
        width: 80%;
        margin-bottom: 48px;
      }
    }
    div:nth-child(2) {
      background-color: #8c8a73;
      border-radius: 0 0 6px 6px;

      > p {
        font-weight: 500;
        padding: 48px 10px 20px 48px;
      }

      li {
        padding: 0 10px 4px 48px;

        &:last-child {
          padding-bottom: 48px;
        }

        p {
          display: flex;
          align-items: center;
          gap: 10px;
        }
      }
    }
  }
`;
