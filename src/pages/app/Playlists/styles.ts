import styled from 'styled-components';

export const PlaylistContainer = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  padding: 28px 0;
`;

export const PlaylistHeader = styled.div`
  width: 1110px;
  border-bottom: 2px solid var(--border-color);
  padding: 14px 0;
  text-align: end;
  margin-bottom: 48px;

  h1 {
    font-size: 18px;
    font-weight: bold;
    text-transform: uppercase;
    letter-spacing: 0.3px;
    color: var(--text);
  }
`;
