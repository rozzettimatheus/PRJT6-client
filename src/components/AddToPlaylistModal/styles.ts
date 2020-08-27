import styled from 'styled-components';
import { lighten } from 'polished';

export const Content = styled.div`
  width: 100%;
  height: 280px;
  padding: 1rem 0.5rem;
  overflow-y: auto;

  ::-webkit-scrollbar {
    width: 10px;
  }

  ::-webkit-scrollbar-track {
    background: var(--bg);
  }

  ::-webkit-scrollbar-thumb {
    background-color: var(--border-color);
    border-radius: 2px;
    transition: background-color 0.2s;
  }

  ::-webkit-scrollbar-thumb:hover {
    background-color: ${lighten(0.06, '#3a3a3a')};
  }

  .card {
    display: flex;
    align-items: center;
    justify-content: space-between;
    height: 50px;
    padding: 1rem;
    width: 100%;
    border-radius: var(--border-radius);
    transition: background-color 0.2s;

    &:hover {
      background-color: ${lighten(0.06, '#292929')};
    }
  }

  button {
    margin-right: 10px;
    border: 2px solid var(--purple);
    background: var(--purple);
    color: var(--white);
    padding: 4px 1rem;
    border-radius: var(--border-radius);
    font-size: 14px;
    transition: opacity 0.2s;

    &:hover {
      opacity: 0.8;
    }

    &.active {
      background: transparent;
      color: var(--purple);

      &:hover {
        opacity: 0.8;
      }
    }
  }
`;
