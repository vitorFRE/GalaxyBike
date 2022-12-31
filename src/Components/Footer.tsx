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
          <a href="/">
            <img src={Logo} alt="Logo do site" />
          </a>
          <nav>
            <ul className="p2">
              <li>
                <a href="/">Inicio</a>
              </li>
              <li>
                <a href="/planos">Produtos</a>
              </li>
              <li>
                <a href="/contato">Contato</a>
              </li>
            </ul>
          </nav>

          <div>
            <a href="https://github.com/vitorFRE">
              <FaGithub size={24} />
            </a>
            <a href="/">
              <FaLinkedinIn size={24} />
            </a>
          </div>
        </FooterItens>
        <a href="/termos">
          <span>Leia nossos termos.</span>
        </a>
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

  span {
    margin-top: 30px;
    display: flex;
    justify-content: center;
    text-decoration-line: underline;
    color: #6d7280;
  }
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
