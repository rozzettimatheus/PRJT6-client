import styled, { css } from 'styled-components';
import { ExclamationCircle } from '@styled-icons/heroicons-outline';

import Tooltip from '../Tooltip';

interface ContainerProps {
  isFocused: boolean;
  isFilled: boolean;
  isFailed: boolean;
}

export const Container = styled.div<ContainerProps>`
  background: var(--input-color);
  border-radius: var(--border-radius);
  padding: 1.4rem;
  width: 100%;

  border: 2px solid var(--input-color); 
  color: var(--text-darken);

  /* color order matters */
  ${props =>
    props.isFailed &&
    css`
      border-color: var(--error);
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
    margin-top: 0.8rem;
  }

  input {
    background: transparent;
    flex: 1;
    border: 0;
    color: var(--text-accent);

    &::placeholder {
      color: var(--close-icon);
    }
  }

  svg {
    margin-right: 1.4rem; 
  }
`;

export const ExclamationIcon = styled(ExclamationCircle)`
  color: var(--error);
  height: 2rem;
`;

export const Error = styled(Tooltip)`
  height: 20px;
  margin-left: 1.6rem;

  svg {
    margin: 0;
  }

  span {
    background: var(--error);
    color: var(--white);

    &::before {
      border-color: var(--error) transparent;
    }
  }
`;
