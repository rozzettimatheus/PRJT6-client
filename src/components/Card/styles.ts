import styled from 'styled-components';
import { Link } from 'react-router-dom';
import { Trash } from '@styled-icons/heroicons-outline';

export const Card = styled(Link)`
  min-width: 168px;
  height: 225px;
  display: flex;
  justify-content: center;
  position: relative;
  border: 0;
  border-radius: var(--border-radius);
  background-position: center;
  background-repeat: no-repeat;
  background-size: cover;
  overflow: hidden;
  transition: transform 0.3s ease;

  &:hover {
    transform: translateY(-7px);

    button {
      opacity: 1;

      svg {
        opacity: 1;
      }
    }
  }

  button {
    position: absolute;
    height: 40px;
    width: 100%;
    display: flex;
    align-items: center;
    justify-content: center;
    bottom: 0;
    right: 0;
    left: 0;
    background: var(--error);
    color: var(--text);
    border: 0;
    opacity: 0;
    transition: all 0.2s;
  }
`;

export const XIcon = styled(Trash)`
  height: 24px;
  width: 24px;
  color: var(--text);
  opacity: 0;
  transition: all 0.2s;
`;
