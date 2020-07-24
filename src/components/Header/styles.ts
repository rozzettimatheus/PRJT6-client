import styled, { keyframes } from 'styled-components';

export const Container = styled.header`
  display: flex;
  height: 60px;
  border-bottom: 2px solid var(--border-color);
  justify-content: center;
  align-items: center;
  background-color: var(--bg-nav);
`;

export const Content = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  width: 1120px;
  height: 100%;

  img {
    height: 35px;
  }
`;

export const NavContainer = styled.ul`
  display: flex;

  li {
    padding: 8px 20px;
  }
`;

export const NavIcons = styled.ul`
  display: flex;
  width: 110px;
  height: 100%;
  align-items: center;
  justify-content: space-between;

  li {
    padding: 8px;
  }
`;

const appearFromLeft = keyframes`
  from {
    opacity: 0;
    transform: translateX(-80%);
  } 

  to {
    opacity: 1;
    transform: translateX(-90%);
  }
`;

export const DropdownMenu = styled.div`
  position: absolute;
  top: 54px;
  width: 202px;
  transform: translateX(-90%);
  background: var(--bg-nav);
  border: 1px solid var(--border-color);
  border-radius: var(--border-radius);
  overflow: hidden;
  transition: all 0.3s;
  z-index: 100;

  animation: ${appearFromLeft} 0.4s;
`;
