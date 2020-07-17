import styled from 'styled-components';
import { Link } from 'react-router-dom';

export const MenuLink = styled(Link)`
  height: 40px;
  width: 100%;
  display: flex;
  align-items: center;
  padding: 10px;
  transition: background-color 0.3s;
  padding: 13px 15px;
  font-size: 14px;
  font-weight: 400 !important;
  color: var(--text);
  transition: all 0.3s;

  svg {
    height: 20px;
    width: 20px;
    margin-right: 10px;
    color: var(--text);

    &:hover {
      color: var(--white);
    }
  }

  &:hover {
    background-color: var(--hover-color);
    color: var(--white);
  }
`;
