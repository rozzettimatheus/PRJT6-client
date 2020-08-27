import styled from 'styled-components';
import { shade } from 'polished';

export const Wrapper = styled.main`
  height: 90vh;
  width: 100%;
  display: flex;
  align-items: center;
`;

export const Navigation = styled.nav`
  display: flex;
  flex-direction: column;
  justify-content: center;
  width: 30%;
  height: 60%;
  border-right: 2px solid var(--border-color);

  a {
    padding: 1rem;
    color: var(--text);
    text-align: center;
    font-size: 1.8rem;
    transition: background-color 0.3s;

    &.active {
      border-left: 2px solid var(--purple);
    }

    &:hover {
      background-color: var(--hover-color);
    }
  }
`;

export const Content = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  width: 100%;
  height: 100%;
  margin: auto 0;

  form {
    width: 340px;
    text-align: center;
    display: flex;
    flex-direction: column;
  }
`;

export const AvatarInput = styled.div`
  margin-bottom: 3rem;
  position: relative;
  align-self: center;

  img {
    width: 130px;
    height: 130px;
    border-radius: 50%;
  }

  label {
    position: absolute;
    width: 48px;
    height: 48px;
    background: var(--purple);
    border-radius: 50%;
    border: 0;
    right: 0;
    bottom: 0;
    cursor: pointer;
    transition: background-color 0.3s;

    display: flex;
    justify-content: center;
    align-items: center;

    input {
      display: none;
    }

    svg {
      width: 20px;
      height: 20px;
      color: var(--bg);
    }

    &:hover {
      background: ${shade(0.2, '#bb86fc')};
    }
  }
`;
