import styled from 'styled-components';
import { Link } from 'react-router-dom';
import { lighten } from 'polished';

export const Container = styled(Link)`
  display: flex;
  justify-content: center;
  align-items: center;
  max-width: calc(var(--max-width) - 200px);
  width: 70%;
  min-width: 400px;
  max-height: 90px;
  height: 15vh;
  background: var(--hover-color);
  border-radius: var(--border-radius);
  padding: 1.9rem 3.4rem;
  transition: all 0.2s ease;
  margin-bottom: 15px;

  &:hover {
    transform: translateX(8px);
    background-color: ${lighten(0.05, '#313131')};
  }
`;

export const Wrapper = styled.div`
  display: flex;
  width: 100%;

  .image-container {
    display: flex;
    align-items: center;
    justify-content: center;

    img {
      height: 55px;
      width: 55px;
      border-radius: 50%;
    }
  }

  .name-container {
    flex: 1;
    display: flex;
    align-items: center;

    strong {
      font-size: 1.6rem;
      color: var(--text);
      margin-left: 2rem;
      letter-spacing: 0.4px;
    }
  }
`;
