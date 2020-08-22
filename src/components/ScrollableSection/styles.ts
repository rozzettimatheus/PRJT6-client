import styled from 'styled-components';
import { lighten } from 'polished';

export const Section = styled.section`
  width: 100%;
  display: flex;
  flex-direction: column;
  margin-bottom: 25px;
`;

export const Title = styled.div`
  width: 100%;
  text-align: end;
  display: block;

  h3 {
    font-size: 1.8rem;
    font-weight: 500;
    margin-bottom: 14px;

    color: var(--title);
  }
`;

export const List = styled.div`
  display: flex;
  border-top: 2px solid var(--border-color);
  padding-top: 2.5rem;
  height: 300px;

  overflow-x: auto;

  a + a {
    margin-left: 42px;
  }

  ::-webkit-scrollbar {
    height: 10px;
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
`;

export const Empty = styled.div`
  width: 100%;
  display: flex;
  align-items: center;
  justify-content: center;

  p {
    color: var(--text-darken);
  }
`;
