import styled from 'styled-components';
import { shade } from 'polished';

export const Container = styled.button`
  background: var(--purple);
  height: 48px;
  border-radius: var(--border-radius);
  border: 0;
  padding: 0 14px;
  width: 100%;

  color: var(--white);
  font-weight: 700;
  text-transform: uppercase;
  margin-top: 24px;
  transition: background-color 0.2s;

  &:hover {
    background: ${shade(0.2, '#bb86fc')};
  }
`;
