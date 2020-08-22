import styled from 'styled-components';
import { shade } from 'polished';

export const Main = styled.main`
  display: flex;
  flex-direction: column;
  height: 100%;
  width: 100%;
  border-top: 1px solid var(--border-color);
`;

export const PlaylistHeader = styled.div`
  height: 75px;
  width: 100%;
`;

export const PlaylistHead = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;

  > div {
    display: flex;
    align-items: center;
    padding: 20px 10px;
    border-top: 1px solid var(--text);

    svg {
      margin-right: 5px;
      height: 18px;
      width: 18px;
      color: var(--text);
    }

    span {
      text-transform: uppercase;
      font-weight: 500;
      font-size: 14px;
      color: var(--text);
    }
  }
`;

export const PlaylistButtonContainer = styled.div`
  display: flex;
  justify-content: flex-end;

  button {
    display: flex;
    align-items: center;
    border: 0;
    background: #ffc857;
    color: black;
    font-size: 14px;
    font-weight: 500;
    border-radius: 5px;
    padding: 6px 8px;
    transition: all 0.2s;

    &:hover {
      background: ${shade(0.2, '#FFC857')};

      /* svg {
        color: var(--text-accent);
      } */
    }

    svg {
      height: 22px;
      width: 22px;
      color: black;
    }
  }
`;

export const PlaylistsContainer = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  height: 100%;
  margin-top: 30px;
  padding: 16px;
`;

export const NotFound = styled.div`
  position: absolute;
  top: 50%;
  left: 50%;
  margin-right: -50%;
  transform: translate(-50%, -50%);

  p {
    color: var(--text);
    font-size: 2rem;
  }
`;
