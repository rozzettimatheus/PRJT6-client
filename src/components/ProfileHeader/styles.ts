import styled from 'styled-components';
import { shade } from 'polished';

export const Container = styled.header`
  display: flex;
  align-items: center;
  justify-content: space-between;
  width: 935px;
  margin: 22px 0 32px;
`;

export const AvatarContainer = styled.div`
  display: flex;
  flex: 1;
  justify-content: center;
  height: 100%;

  > div {
    display: flex;

    div {
      padding-top: 5px;
      img {
        height: 150px;
        width: 150px;
        border-radius: 50%;
      }
    }
  }
`;

export const UserSection = styled.section`
  display: flex;
  flex-direction: column;
  flex: 2;
  height: 100%;
  padding: 12px 36px 12px 8px;
`;

export const UsernameContainer = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
  margin-bottom: 14px;

  h2 {
    font-size: 28px;
    font-weight: 400;
    letter-spacing: 0.5px;
  }

  button {
    background: var(--purple);
    border: 2px solid var(--purple);
    color: var(--white);
    border-radius: var(--border-radius);
    height: 29px;
    padding: 7px 16px;
    display: flex;
    align-items: center;
    transition: all 0.2s;

    &:hover {
      background: ${shade(0.2, '#bb86fc')};
      border-color: ${shade(0.2, '#bb86fc')};
    }

    &.active {
      background-color: transparent;
      color: var(--purple);
    }
  }
`;

export const UserList = styled.ul`
  display: flex;
  list-style: none;
  padding: 12px 0;

  li {
    color: var(--text);
    margin-right: 26px;
    font-size: 18px;
    font-weight: 400;

    strong {
      font-weight: 700;
    }

    button {
      background: transparent;
      border: 0;
      color: var(--text);
      font-size: 18px;
      font-weight: 400;
    }
  }
`;

export const UserInfo = styled.div`
  display: block;
  padding: 14px 0;

  h1 {
    font-size: 20px;
    font-weight: bold;
    color: var(--text);
  }

  p {
    font-size: 15px;
    font-weight: 400;
    margin-top: 14px;
    line-height: 20px;
    color: var(--text);
  }
`;
