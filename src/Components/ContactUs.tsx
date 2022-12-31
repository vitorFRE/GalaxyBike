import React from 'react';
import styled from 'styled-components';
import { Button } from './Helper/Button';
import { HeaderDescription } from './Helper/HeaderDescription';

export const ContactUs = () => {
  return (
    <Container>
      <HeaderDescription
        title="Fale Conosco"
        text="Entre em contato conosco preenchendo o formulário abaixo."
      />

      <FormContainer method="post" aria-label="Formulário de contato">
        <fieldset>
          <div>
            <label className="t3" htmlFor="name">
              Nome
            </label>
            <input
              className="p2"
              type="text"
              name="name"
              id="name"
              required
              aria-required="true"
              placeholder="Nome Sobrenome"
            />
          </div>
          <div>
            <label className="t3" htmlFor="phone">
              Telefone
            </label>
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
            <label className="t3" htmlFor="email">
              Email
            </label>
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
            <label className="t3" htmlFor="message">
              Mensagem
            </label>
            <textarea
              className="p2"
              id="message"
              name="message"
              cols={30}
              rows={5}
              required
              aria-required="true"
              placeholder="Obrigado pelo interesse em nosso plano de teste gratuito! Assim que recebermos sua mensagem, entraremos em contato para confirmar a inclusão em nossa lista de testadores."
            ></textarea>
          </div>
        </fieldset>
        <Button text="ENVIAR MENSAGEM" />
      </FormContainer>
    </Container>
  );
};

const Container = styled.section`
  ${({ theme }) => theme.container}
`;

const FormContainer = styled.form`
  button {
    width: 90%;
  }
  margin: 0 auto;
  margin-bottom: 80px;

  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  max-width: 580px;

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
        border-color: ${({ theme }) => theme.colors.Secondary};
        caret-color: ${({ theme }) => theme.colors.Primary};
        box-shadow: 0 0 0 2px ${({ theme }) => theme.colors.Grey};
      }
    }
  }
`;
