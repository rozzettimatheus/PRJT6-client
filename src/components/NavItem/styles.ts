import styled from 'styled-components';
import { Props } from './index';

export const ListItem = styled.li<Omit<Props, 'page'>>`
  display: flex;
  align-items: center;
  justify-content: center;

  a {
    display: flex;
    font-weight: 500;
    color: var(--text);
    transition: color 0.3s ease;

    &.active,
    &:hover {
      color: var(--purple);

      svg {
        color: var(--purple);
      }
    }

    svg {
      height: 22px;
      width: 22px;

      color: var(--text);
      transition: color 0.3s ease;
    }
  }
`;
