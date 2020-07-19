import styled from 'styled-components';
import { lighten } from 'polished';

export const Container = styled.div`
  display: flex;
  height: calc(100vh - 60px);
  justify-content: center;
  overflow-y: scroll;

  ::-webkit-scrollbar {
    width: 15px;
  }

  ::-webkit-scrollbar-track {
    background: var(--bg);
  }

  ::-webkit-scrollbar-thumb {
    background-color: var(--border-color);
    border-radius: var(--border-radius);
    transition: background-color 0.2s;
  }

  ::-webkit-scrollbar-thumb:hover {
    background-color: ${lighten(0.06, '#3a3a3a')};
  }
`;

export const Content = styled.div`
  display: flex;
  height: 100%;
  max-width: 1110px;
  flex-direction: column;
  align-items: center;
`;
