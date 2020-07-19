import styled from 'styled-components';

export const ListItem = styled.li`
  button {
    display: flex;
    align-items: center;
    justify-content: center;
    background: transparent;
    border: 0;
    height: 100%;
    width: 100%;
    transition: all 0.3s;
    border-radius: 50%;

    img {
      height: 24px;
      width: 24px;
      border-radius: 50%;
    }

    &.active {
      border: 2px solid var(--text);
      padding: 3px;
    }
  }
`;
