import styled, { css } from 'styled-components';
import { shade } from 'polished';

export const Container = styled.button`
  background: var(--purple);
  height: 4.8rem;
  border-radius: var(--border-radius);
  border: 0;
  padding: 0 1.4rem;
  width: 100%;

  color: var(--white);
  font-weight: 700;
  text-transform: uppercase;
  margin-top: 2.4rem;
  transition: background-color 0.2s;

  ${props =>
    props.disabled &&
    css`
      background: var(--bg);
      cursor: auto;
    `}

  &:hover {
    background: ${props => (!props.disabled ? shade(0.2, '#bb86fc') : '')};
  }
`;
