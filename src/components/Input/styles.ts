import styled, { css } from 'styled-components';

import Tooltip from '../Tooltip';

interface ContainerProps {
  isFocused: boolean;
  isFilled: boolean;
  isFailed: boolean;
}

export const Container = styled.div<ContainerProps>`
  background: var(--quaternary);
  border-radius: 7px;
  padding: 16px;
  width: 100%;

  border: 2px solid var(--quaternary); /** mostrar erro e focus */
  color: var(--tertiary);

  /* ordem aqui importa - focus */
  ${props =>
    props.isFailed &&
    css`
      border-color: #c53030;
    `}

  ${props =>
    props.isFocused &&
    css`
      border-color: var(--purple);
      color: var(--purple);
    `}

  ${props =>
    props.isFilled &&
    css`
      color: var(--purple);
    `}

  

  display: flex;
  align-items: center;

  & + div {
    margin-top: 8px;
  }

  input {
    background: transparent;
    flex: 1; /** ocupa toda a area disponivel */
    border: 0;
    color: #f4ede8;

    &::placeholder {
      color: #666360;
    }
  }

  svg {
    margin-right: 16px; /** margin vai aqui pq se nao houver icone, nao tem margem */
  }
`;

export const Error = styled(Tooltip)`
  height: 20px; /* pra nao aumentar o tamanho do input */
  margin-left: 16px; /** pra nao encostar no input */

  svg {
    margin: 0;
  }

  span {
    background: #c53030;
    color: #fff;

    &::before {
      border-color: #c53030 transparent;
    }
  }
`;
