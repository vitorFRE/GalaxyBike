import React from 'react';
import styled from 'styled-components';

interface ButtonProps {
  text?: string;
  onClick?: () => void;
}

export const Button = ({ text, onClick }: ButtonProps) => {
  return <Container onClick={onClick}>{text}</Container>;
};

const Container = styled.button`
  cursor: pointer;
  background-color: ${({ theme }) => theme.colors.Primary};
  padding: 10px 20px;
  border-radius: 6px;
  border: none;

  color: ${({ theme }) => theme.colors.TitleColor};
  font-family: 'Inter';
  font-style: normal;
  font-weight: 600;
  font-size: 16px;
  line-height: 20px;

  :hover {
    background-color: ${({ theme }) => theme.colors.Secondary};
    color: ${({ theme }) => theme.colors.White};
  }
`;
