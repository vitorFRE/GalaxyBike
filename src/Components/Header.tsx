import React, { useState } from 'react';
import styled from 'styled-components';
import Logo from '../assets/Logo.svg';
import Seta from '../assets/Seta.svg';
import { Button } from './Button';
import { device } from './Styles/BreakPoints';
import { motion } from 'framer-motion';
import { VscChromeClose, VscMenu } from 'react-icons/vsc';

export const Header = () => {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <ContainerBG>
      <Container>
        <a href="/">
          <img src={Logo} alt="Logo da empresa GalaxyBike" />
        </a>

        <HeaderNav>
          <button onClick={() => setIsOpen(!isOpen)}>
            {isOpen ? <VscChromeClose size={32} /> : <VscMenu size={32} />}
          </button>
          <motion.ul
            style={{ display: isOpen ? 'flex' : '' }}
            className={`b2`}
            layout
            animate={{ x: '0%' }}
            transition={{ duration: 0.3 }}
          >
            <li>
              <a href="/">Inicio</a>
            </li>
            <li>
              <a href="/">Planos</a>
            </li>
            <li>
              <a href="/">Contato</a>
            </li>
            <li>
              <a href="/">
                <Button text="Experimente" />
              </a>
            </li>
          </motion.ul>
        </HeaderNav>
      </Container>
    </ContainerBG>
  );
};

const ContainerBG = styled.header`
  background-color: ${({ theme }) => theme.colors.White};
  box-shadow: 0px 4px 4px rgba(0, 0, 0, 0.25);
`;

const Container = styled.div`
  ${({ theme }) => theme.container}

  display: flex;
  justify-content: space-between;
  align-items: center;

  padding-top: 20px;
  padding-bottom: 20px;

  > a {
    position: relative;
    z-index: 999;
  }
`;

const HeaderNav = styled.nav`
  > button {
    z-index: 999;
    position: relative;
    background-color: transparent;
    border: none;
    cursor: pointer;
    display: none;

    @media ${device.sm} {
      display: block;
    }
  }
  ul {
    display: flex;
    align-items: center;
    gap: 24px;
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
    @media ${device.sm} {
      margin-top: 0px;
      position: absolute;
      padding: 1rem;
      width: 100%;
      top: 0px;
      right: 0px;
      height: max-content;
      flex-direction: column;
      gap: 28px;
      display: none;
      z-index: 800;
      align-items: flex-start;
      background-color: ${({ theme }) => theme.colors.Grey};
      margin-top: 77px;
      li {
        padding-bottom: 6px;
        border-bottom: 2px solid ${({ theme }) => theme.colors.Secondary};
        display: flex;
        align-items: center;
        justify-content: space-between;
        width: 100%;

        ::after {
          content: '';
          height: 25px;
          width: 25px;
          background: url(${Seta}) no-repeat center center;
        }

        &:last-child {
          display: none;
        }
      }
    }
  }
`;
