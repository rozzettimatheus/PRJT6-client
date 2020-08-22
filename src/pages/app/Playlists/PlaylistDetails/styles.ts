import styled from 'styled-components';
import { lighten } from 'polished';

export const Header = styled.div`
  width: 100%;
  display: flex;
  flex-direction: column;
  align-items: center;
  padding: 1rem 0 2.2rem;
  margin: 2.8rem 0;

  img {
    height: 13vh;
    min-height: 60px;
    margin-bottom: 2rem;
  }

  h2 {
    color: var(--text-accent);
    font-size: 2.6rem;
    margin-bottom: 3.1rem;
    letter-spacing: 0.3px;
  }

  > div {
    width: 100%;
    display: flex;
    align-items: center;
    justify-content: space-around;

    span {
      font-size: 1.6rem;
      color: var(--text);

      strong {
        font-weight: 700;
        font-size: 1.8rem;
      }
    }
  }
`;

export const FollowersSection = styled.section`
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

export const FollowersList = styled.div`
  display: flex;
  border-top: 2px solid var(--border-color);
  padding-top: 2.5rem;
  height: 240px;

  overflow-x: auto;

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

export const AvatarUser = styled.button`
  height: 175px;
  min-width: 150px;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  background: transparent;
  border: 0;
  border-radius: var(--border-radius);
  transition: background-color 0.3s;
  padding: 1rem;
  overflow: hidden;

  & + button {
    margin-left: 25px;
  }

  &:hover {
    background-color: var(--hover-color);
  }

  > img {
    margin-top: 12px;
    border-radius: 50%;
    height: 80px;
  }

  > span {
    margin: 24px 0 auto;
    color: var(--text);
    font-weight: 500;
    white-space: nowrap;
    overflow: hidden;
    text-overflow: ellipsis;
    max-width: 160px;
    padding: 0 5px;
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
