import React from 'react';
import { Footer } from '../Components/Footer';
import { Header } from '../Components/Header';
import { EnterAnimation } from '../Components/Helper/EnterAnimation';
import { HeaderDescription } from '../Components/Helper/HeaderDescription';
import styled from 'styled-components';
import { Button } from '../Components/Helper/Button';
import { FaMapMarkedAlt, FaEnvelope, FaPhoneAlt } from 'react-icons/fa';
import { device } from '../Components/Styles/BreakPoints';

export const Contact = () => {
  return (
    <div>
      <Header />
      <HeaderDescription
        title="Entre em Contato Conosco"
        text="Entre em contato conosco pelo formulário abaixo ou pelas redes sociais. Também estamos disponíveis pelo número (00) 0000-0000."
      />
      <Container>
        <InfoContainer>
          <h1 className="t1">
            Precisa de
            <br />
            <span>ajuda ?</span>
          </h1>
          <FormContainer method="post" aria-label="Formulário de contato">
            <fieldset>
              <div>
                <input
                  className="p2"
                  type="text"
                  name="name"
                  id="name"
                  required
                  aria-required="true"
                  placeholder="Seu Nome"
                />
              </div>
              <div>
                <input
                  className="p2"
                  type="tel"
                  name="phone"
                  id="phone"
                  placeholder="(00) 00000-0000"
                  pattern="[0-9]{2}[0-9]{5}-[0-9]{4}"
                />
              </div>
              <div>
                <input
                  className="p2"
                  type="email"
                  id="email"
                  name="email"
                  required
                  aria-required="true"
                  placeholder="contato@email.com"
                ></input>
              </div>
              <div>
                <textarea
                  className="p2"
                  id="message"
                  name="message"
                  cols={30}
                  rows={5}
                  required
                  aria-required="true"
                  placeholder="Sua mensagem"
                ></textarea>
              </div>
            </fieldset>
            <Button text="ENVIAR MENSAGEM" />
          </FormContainer>
        </InfoContainer>
        <div className="Info p2">
          <ul>
            <li>
              <span>
                <FaPhoneAlt /> Telefone
              </span>
            </li>
            <li>
              <p>(00) 0000-0000</p>
            </li>
          </ul>
          <ul>
            <li>
              <span>
                <FaEnvelope />
                Email
              </span>
            </li>
            <li>
              <p>Galaxy@Galaxy.com</p>
            </li>
          </ul>
          <ul>
            <li>
              <span>
                <FaMapMarkedAlt /> Endereço
              </span>
            </li>
            <li>
              <p>Rua orbita do Sol, 03</p>
            </li>
          </ul>
        </div>
      </Container>
      <Footer />
      <EnterAnimation />
    </div>
  );
};

const Container = styled.main`
  ${({ theme }) => theme.container}
  margin-bottom: 80px;

  .Info {
    display: flex;
    flex-wrap: wrap;
    gap: 47px;

    ul {
      span {
        display: flex;
        align-items: center;
        gap: 5px;
        color: ${({ theme }) => theme.colors.TitleColor};
        font-weight: bold;
      }
      p {
        color: ${({ theme }) => theme.colors.TextColor};
      }
    }
  }
`;

const InfoContainer = styled.div`
  display: grid;
  grid-template-columns: 1fr 1fr;

  > h1 {
    span {
      color: ${({ theme }) => theme.colors.Primary};
    }
  }

  @media ${device.sm} {
    grid-template-columns: 1fr;

    > h1 {
      margin-bottom: 20px;
    }
  }
`;

const FormContainer = styled.form`
  margin-bottom: 15px;

  display: flex;
  flex-direction: column;
  align-items: flex-end;
  justify-content: flex-end;
  max-width: 580px;

  button {
    margin-top: 15px;
  }

  fieldset {
    div:nth-child(3),
    div:nth-child(4) {
      grid-column: span 2;
    }

    label {
      display: block;
      font-weight: 500;
      color: ${({ theme }) => theme.colors.TitleColor};
    }

    border: none;
    display: grid;
    grid-template-columns: 1fr 1fr;
    gap: 20px;
    padding: 0px;

    input[type='text'],
    input[type='email'],
    input[type='tel'],
    textarea {
      border: 1px solid ${({ theme }) => theme.colors.TitleColor};
      border-radius: 5px;
      padding: 12px;
      width: 100%;
      box-sizing: border-box;
      color: ${({ theme }) => theme.colors.TextColor};
      background: transparent;
      backdrop-filter: blur(4px);
      -webkit-backdrop-filter: blur(4px);
      &:focus {
        outline: none;
        border-color: ${({ theme }) => theme.colors.Primary};
        caret-color: ${({ theme }) => theme.colors.Primary};
        box-shadow: 0 0 0 2px ${({ theme }) => theme.colors.White};
      }
    }
  }
`;
