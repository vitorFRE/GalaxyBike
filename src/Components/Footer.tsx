import React from 'react';
import styled from 'styled-components';
import Logo from '../assets/Logo.svg';
import { FaGithub, FaLinkedinIn } from 'react-icons/fa';
import { device } from './Styles/BreakPoints';

export const Footer = () => {
  return (
    <ContainerBg>
      <Container>
        <FooterItens>
          <img src={Logo} alt="Logo do site" />
          <nav>
            <ul className="p2">
              <li>
                <a href="/">Inicio</a>
              </li>
              <li>
                <a href="/">Produtos</a>
              </li>
              <li>
                <a href="/">Contato</a>
              </li>
            </ul>
          </nav>

          <div>
            <a href="/">
              <FaGithub size={24} />
            </a>
            <a href="/">
              <FaLinkedinIn size={24} />
            </a>
          </div>
        </FooterItens>
      </Container>
    </ContainerBg>
  );
};

const ContainerBg = styled.footer`
  background-color: ${({ theme }) => theme.colors.White};
`;

const Container = styled.div`
  ${({ theme }) => theme.container}

  padding-top:80px;
  padding-bottom: 80px;
`;

const FooterItens = styled.div`
  display: flex;
  justify-content: space-between;

  padding-top: 30px;
  border-top: 1px solid ${({ theme }) => theme.colors.Grey};

  ul {
    display: flex;
    align-items: center;
    gap: 28px;
    font-weight: 600;

    li {
      color: ${({ theme }) => theme.colors.TextColor};
      &:first-child {
        color: ${({ theme }) => theme.colors.TitleColor};
      }
      :hover {
        color: ${({ theme }) => theme.colors.Secondary};
      }
    }
  }

  div {
    display: flex;
    gap: 20px;
  }

  @media ${device.sm} {
    flex-direction: column;
    align-items: center;
    gap: 30px;
  }
`;
