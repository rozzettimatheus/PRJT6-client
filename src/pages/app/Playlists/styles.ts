import styled from 'styled-components';

export const PlaylistContainer = styled.div`
  max-width: var(--max-width);
  width: 90%;
  margin: 0 auto;
  display: flex;
  flex-direction: column;
  align-items: center;
`;

export const PlaylistHeader = styled.div`
  max-width: var(--max-width);
  width: 100%;
  border-bottom: 2px solid var(--border-color);
  padding: 1.4rem 0;
  text-align: end;
  margin: 2.4rem 0;

  h1 {
    font-size: 2rem;
    font-weight: bold;
    text-transform: uppercase;
    letter-spacing: 0.3px;
    color: var(--text);
  }
`;
