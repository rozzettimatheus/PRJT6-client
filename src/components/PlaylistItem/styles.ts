import styled from 'styled-components';
import { lighten } from 'polished';
import { Link } from 'react-router-dom';
import { X } from '@styled-icons/heroicons-outline';
import { LockClosed, Play } from '@styled-icons/ionicons-outline';

export const Container = styled(Link)`
  display: flex;
  justify-content: center;
  align-items: center;
  max-width: calc(var(--max-width) - 150px);
  width: 70%;
  min-width: 400px;
  max-height: 90px;
  height: 15vh;
  background: var(--hover-color);
  border-radius: var(--border-radius);
  padding: 1.9rem 3.4rem;
  transition: all 0.2s ease;

  &:hover {
    transform: translateX(8px);
    background-color: ${lighten(0.05, '#313131')};

    button {
      opacity: 1;
    }
  }

  & + a {
    margin-top: 1.6rem;
  }

  > div {
    display: flex;
    align-items: center;
    justify-content: space-between;
    width: 100%;
  }
`;

export const PlaylistInfoContainer = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
`;

export const AvatarWrapper = styled.div`
  display: flex;
  margin-right: 2.4rem;

  img {
    height: 4.8rem;
  }
`;

export const AvatarIcon = styled(Play)`
  height: 3.5rem;
  color: var(--text);
`;

export const PlaylistInfo = styled.div``;

export const Info = styled.div`
  display: flex;
  height: 100%;
  flex-direction: column;
  justify-content: space-between;

  & > div:first-of-type {
    display: flex;
    align-items: center;
    margin-bottom: 1.2rem;
    white-space: nowrap;

    strong {
      font-size: 1.6rem;
      color: var(--text);
      margin-right: 2.4rem;
      letter-spacing: 0.4px;
    }
  }
`;

export const UserNumbers = styled.div`
  span {
    color: var(--text-darken);
    font-size: 1.6rem;

    strong {
      font-weight: bold;
    }
  }
`;

export const LockIcon = styled(LockClosed)`
  height: 2.2rem;
  color: var(--text);
`;

export const Delete = styled.div`
  display: flex;
  height: 100%;
  padding: 0.8rem;

  button {
    display: flex;
    align-items: center;
    justify-content: center;
    width: 28px;
    height: 28px;
    border: 0;
    border-radius: 50%;
    background: var(--error);
    padding: 0.3rem;
    opacity: 0;
  }
`;

export const DeleteIcon = styled(X)`
  height: 2rem;
  width: 2rem;
  color: var(--text-accent);
`;
