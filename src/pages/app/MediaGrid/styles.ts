import styled from 'styled-components';

export const Header = styled.header`
  max-width: var(--max-width);
  width: 100%;
  border-bottom: 2px solid var(--border-color);
  padding: 1.4rem 0;
  text-align: end;
  margin: 2.4rem 0 3rem;

  h2 {
    font-size: 2rem;
    font-weight: bold;
    text-transform: uppercase;
    letter-spacing: 0.3px;
    color: var(--text);
  }
`;

export const Grid = styled.main`
  width: 100%;
  display: grid;
  grid-gap: 30px;
  justify-content: center;
  justify-items: center;
  grid-template-columns: repeat(auto-fit, minmax(168px, 1fr));
`;
