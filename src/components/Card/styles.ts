import styled from 'styled-components';
import { Link } from 'react-router-dom';

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
  }
`;
