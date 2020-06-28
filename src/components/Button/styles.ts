import styled from 'styled-components';
import { shade } from 'polished';

export const Container = styled.button`
  background: var(--purple);
  height: 56px;
  border-radius: 7px;
  border: 0;
  padding: 0 16px;
  width: 100%;

  color: var(--white);
  font-weight: 700;
  text-transform: uppercase;
  margin-top: 24px;
  transition: background-color 0.2s;

  &:hover {
    background: ${shade(0.2, '#7159c1')};
  }
`;
